import React from "react";
import AuthLayout from "../../components/common/AuthLayout";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <AuthLayout
      title="Create Password"
      subtitle="Kindly create password you will be using to access your dashboard"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
