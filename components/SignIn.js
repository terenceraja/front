import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "../styles/SignIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addUserToStore } from "../reducers/users";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.value);

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
        if (data.result) {
          dispatch(addUserToStore(data.user));
          console.log(user)
          location.href = "/tweet";
        } else {
          setUsername("")
          setPassword("")
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
