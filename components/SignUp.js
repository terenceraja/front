import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import styles from "../styles/SignUp.module.css";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    console.log("link");
    const data = {
      firstname: firstname,
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
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
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            className={styles.inputs}
            type="text"
            placeholder="Firstname"
          />
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
            type="signUpModal"
            loading={loading}
            onClick={handleOk}
            // href="/tweet"
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
