import React, { useState } from "react";
import { Form, Button } from "antd";
import IconInput from "../common/IconInput";

const PasswordManagement = () => {
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !passwordData.oldPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // Add API call to change password
    setSuccess("Password updated successfully");
    setPasswordData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <div className="password-header">
        <h2>Password</h2>
        <p className="subtitle">Manage your password</p>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}

      <Form onFinish={handleSubmit} layout="vertical">
        <Form.Item label="OLD PASSWORD">
          <IconInput
            name="oldPassword"
            type="password"
            placeholder="Enter your old password"
            value={passwordData.oldPassword}
            onChange={handleChange}
            prefixIconName="basil:lock-outline"
            showCircle={true}
            style={{ backgroundColor: "#E8F2FF", borderColor: "#0768E9" }}
          />
        </Form.Item>

        <Form.Item label="NEW PASSWORD">
          <IconInput
            name="newPassword"
            type="password"
            placeholder="Enter your new password"
            value={passwordData.newPassword}
            onChange={handleChange}
            prefixIconName="basil:lock-outline"
            showCircle={true}
            style={{ backgroundColor: "#E8F2FF", borderColor: "#0768E9" }}
          />
        </Form.Item>

        <Form.Item label="CONFIRM NEW PASSWORD">
          <IconInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm your new password"
            value={passwordData.confirmPassword}
            onChange={handleChange}
            prefixIconName="basil:lock-outline"
            showCircle={true}
            style={{ backgroundColor: "#E8F2FF", borderColor: "#0768E9" }}
          />
        </Form.Item>

        <Form.Item>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="primary"
              className="btn-color"
              htmlType="submit"
              style={{
                width: "200px",
                height: "45px",
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              Change
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PasswordManagement;
