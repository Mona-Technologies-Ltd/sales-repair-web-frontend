import React from "react";
import { Result, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 500,
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Result
          status="success"
          title="Your business has been registered successfully!"
          subTitle="Our team will reach out to you soon with next steps."
          extra={[
            <Button
              type="primary"
              className="btn-color w-100"
              key="login"
              onClick={() => navigate("/login")}
            >
              Continue
            </Button>,
          ]}
        />
      </Card>
    </div>
  );
};

export default RegistrationSuccess;
