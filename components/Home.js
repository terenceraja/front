import styles from "../styles/Home.module.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Home() {
  return (
    <div className={styles.mainBody}>
      <div className={styles.leftDiv}>
        <div className={styles.logoContent}>
          <img className={styles.logoImageLeft} src="/logo1.png" alt="logo" />
        </div>
      </div>

      <div className={styles.rightDiv}>
        <img className={styles.logoImageRight} src="/logo1.png" alt="logo" />
        <div className={styles.txtContent}>
          <h1 className={styles.txt1}>See what's happening</h1>
          <h2 className={styles.txt2}>Join Hackatweet today.</h2>
          <SignUp />
          <h3 className={styles.txt3}>Already have an account?</h3>
          <SignIn />
        </div>
      </div>
    </div>
  );
}

export default Home;
