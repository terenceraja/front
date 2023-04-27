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
      <Button type="primary" onClick={showModal}>
        Sign up
      </Button>
      <Modal
        centered
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className={styles.mod}
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
            type="primary"
            loading={loading}
            onClick={handleOk}
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
