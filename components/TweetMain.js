import styles from "../styles/TweetMain.module.css";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { addUserToStore, removeUserFromStore } from "../reducers/users";

function TweetMain() {
  const user = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  console.log(user);


  const logoutBtn = () =>{
    console.log('click')
    dispatch(removeUserFromStore());
  
    location.href = "/";
   }

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
          <Button onClick={() => logoutBtn()} type="logoutBtn">Logout</Button>
        </div>
      </div>

      <div className={styles.CenterDiv}>
        <div className={styles.CenterTopDiv}>
          <h1 className={styles.homeTxt}>HOME</h1>

          <input
            className={styles.tweetInput}
            type="text"
            placeholder="What's up?"
          />

          <div className={styles.tweetContent}>
            <span>counter</span>
            <Button type="tweetBtn">Tweet</Button>
          </div>
        </div>
      </div>
      <div className={styles.rightDiv}></div>
    </div>
  );
}

export default TweetMain;
