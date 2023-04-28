import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCounterToStore } from "../reducers/counter";

function Tweet(props) {
  let likeStyle;
  let styleTrash;
  const user = useSelector((state) => state.users.value);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  if (user.token !== props.token) {
    styleTrash = { display: "none" };
  }

  const deleteClick = () => {
    let data = {
      token: user.token,
      id_tweet: props.id,
    };
    fetch("http://localhost:3000/tweet/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        props.fetch();
        console.log(data);
      });
  };

  if (counter > 0) {
    likeStyle = { color: "red" };
  }

  const likeClick = () => {
    dispatch(addCounterToStore());
  };

  return (
    <div className={styles.tweetContent}>
      <div className={styles.topTweet}>
        <img className={styles.logoUser} src="/logoUser.png" alt="logo" />
        <p>
          {props.firstname} @{props.username}
        </p>
      </div>
      <div>{props.tweet}</div>
      <div className={styles.icons}>
        <span>
          <FontAwesomeIcon
            className={styles.likeIcon}
            onClick={() => likeClick()}
            icon={faHeart}
            style={likeStyle}
          />
          ({props.counterNumber})
        </span>
        <div className={styles.trashIcon} style={styleTrash}>
          <FontAwesomeIcon onClick={() => deleteClick()} icon={faTrash} />
        </div>
      </div>
    </div>
  );
}
export default Tweet;
