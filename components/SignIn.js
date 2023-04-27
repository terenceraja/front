import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "../styles/SignIn.module.css";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
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
      <Button type="signInPass" onClick={showModal}>
        Sign in
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
          <h1>Connect to Hackatweet</h1>
          <input className={styles.inputs} type="text" placeholder="Username" />
          <input className={styles.inputs} type="text" placeholder="Password" />
          <Button
            key="submit"
            type="signInModal"
            loading={loading}
            href="/tweet"
            onClick={handleOk}
          >
            Sign In
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default SignIn;
