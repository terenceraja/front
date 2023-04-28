import styles from "../styles/TweetMain.module.css";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addUserToStore, removeUserFromStore } from "../reducers/users";
import { useState } from "react";
import Tweet from "./Tweet";

function TweetMain() {
  const [tweetMessage, setTweetMessage] = useState("");

  const user = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  console.log(user);

  const logoutBtn = () => {
    console.log("click");
    dispatch(removeUserFromStore());

    location.href = "/";
  };

  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      );
    }
  };

  const tweetClick = () => {
    console.log("tweeted");
    const data = {
      tweet: tweetMessage,
      token: user.token,
    };

    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setTweetMessage("");
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDiv}>
        <div className={styles.logoContent}>
          <img className={styles.logoImageRight} src="/logo1.png" alt="logo" />
        </div>

        <div className={styles.userContent}>
          <div className={styles.userNames}>
            <img className={styles.logoUser} src="/logoUser.png" alt="logo" />
            <div className={styles.userNameTxt}>
              <h2 className={styles.firstname}>{user.firstname}</h2>
              <h3 className={styles.username}>@{user.username}</h3>
            </div>
          </div>
          <Button onClick={() => logoutBtn()} type="logoutBtn">
            Logout
          </Button>
        </div>
      </div>

      {/*CENTER*/}

      <div className={styles.CenterDiv}>
        {/*TOP*/}
        <div className={styles.CenterTopDiv}>
          <h1 className={styles.homeTxt}>HOME</h1>
          <input
            maxLength="280"
            onInput={maxLengthCheck}
            onChange={(e) => {
              setTweetMessage(e.target.value);
            }}
            value={tweetMessage}
            className={styles.tweetInput}
            type="text"
            placeholder="What's up?"
          />
          <div className={styles.tweetContent}>
            <span>{tweetMessage.length}/280</span>
            <Button onClick={() => tweetClick()} type="tweetBtn">
              Tweet
            </Button>
          </div>
        </div>

        {/*BOT*/}
        <div className={styles.CenterBotDiv}>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>

      {/*RIGHT*/}

      <div className={styles.rightDiv}></div>
    </div>
  );
}

export default TweetMain;
