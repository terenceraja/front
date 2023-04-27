import styles from "../styles/TweetMain.module.css";
import { Button, Modal } from "antd";

function TweetMain() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDiv}>
        <div className={styles.logoContent}>
          <img className={styles.logoImageRight} src="/logo1.png" alt="logo" />
        </div>

        <div className={styles.userContent}>
          <div>USER</div>
          <Button type="tweetBtn">Tweet</Button>
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
