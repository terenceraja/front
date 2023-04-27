import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "../styles/SignUp.module.css";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    console.log("link");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="signUp" onClick={showModal}>
        Sign up
      </Button>
      <Modal
        centered
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={styles.modalContent}>
          <img className={styles.logoModal} src="/logo1.png" alt="logo" />
          <h1 className={styles.modalTxt}>Create you hackatweet account</h1>
          <input
            className={styles.inputs}
            type="text"
            placeholder="Firstname"
          />
          <input className={styles.inputs} type="text" placeholder="Username" />
          <input className={styles.inputs} type="text" placeholder="Password" />
          <Button
            key="submit"
            type="signUpModal"
            loading={loading}
            onClick={handleOk}
            href="/tweet"
          >
            Sign up
          </Button>
        </div>
        ,
      </Modal>
    </>
  );
}

export default SignUp;
