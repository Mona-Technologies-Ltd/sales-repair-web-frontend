import React from "react";
import AuthLayout from "../../components/common/AuthLayout";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";
// Import your icon library - for example with Iconify or another icon library
import { Icon } from "@iconify/react"; // Import the Icon component

const ForgotPasswordPage = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Kindly enter your email to reset your password"
      backIcon={<Icon icon="famicons:arrow-back" height={20} width={30} />}
      onChange={handleBackClick}
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
