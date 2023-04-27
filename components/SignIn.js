import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "../styles/SignIn.module.css";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    const data = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          location.href = "/tweet";
        }
      });

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
      centered open={open} 
      onOk={handleOk} 
      footer={null} 
      onCancel={handleCancel}>
        <div className={styles.modalContent}>
          <img className={styles.logoModal} src="/logo1.png" alt="logo" />
          <h1>Connect to Hackatweet</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className={styles.inputs}
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={styles.inputs}
            type="password"
            placeholder="Password"
          />
          <Button
            key="submit"
            type="signInModal"
            loading={loading}
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
