import React from "react";
import AuthLayout from "../../components/common/AuthLayout";
import BusinessRegistrationForm from "../../components/auth/BusinessRegistrationForm";

const RegisterBusinessPage = () => {
  return (
    <AuthLayout
      title="Register my business"
      subtitle="Let's get you onboard. It's easy"
    >
      <BusinessRegistrationForm />
    </AuthLayout>
  );
};

export default RegisterBusinessPage;
