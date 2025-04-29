import React from "react";
import AuthLayout from "../../components/common/AuthLayout";
import TeamMemberRegistrationForm from "../../components/auth/TeamMemberRegistrationForm";

const RegisterTeamMemberPage = () => {
  return (
    <AuthLayout
      title="Register Team member"
      subtitle="Let's get you onboard. It's easy"
    >
      <TeamMemberRegistrationForm />
    </AuthLayout>
  );
};

export default RegisterTeamMemberPage;
