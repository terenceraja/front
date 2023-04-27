import React, { useState } from "react";
import { Button, Modal } from "antd";

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
      <Button type="primary" onClick={showModal}>
        Sign in
      </Button>
      <Modal
        centered
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Sign in
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default SignIn;
