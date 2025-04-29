import React from "react";
import { Form, Button } from "antd";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IconInput from "../common/IconInput";

import { resetPasswordSchema } from "../../utils/validationSchemas";
import { resetPassword, resetAuthState } from "../../redux/slices/authSlice";

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ ...values, token }));
    },
  });

  React.useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
    return () => {
      dispatch(resetAuthState());
    };
  }, [isSuccess, navigate, dispatch]);

  return (
    <div className="auth-form">
      <Form onFinish={formik.handleSubmit} layout="vertical">
        <Form.Item
          label="NEW PASSWORD"
          validateStatus={
            formik.touched.password && formik.errors.password ? "error" : ""
          }
          help={formik.touched.password && formik.errors.password}
        >
          <IconInput
            name="password"
            type="password"
            placeholder="New Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            prefixIconName="basil:lock-outline"
            showCircle={true}
          />
        </Form.Item>

        <Form.Item
          label="CONFIRM PASSWORD"
          validateStatus={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? "error"
              : ""
          }
          help={formik.touched.confirmPassword && formik.errors.confirmPassword}
        >
          <IconInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            prefixIconName="basil:lock-outline"
            showCircle={true}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            className="btn-color"
            htmlType="submit"
            loading={isLoading}
          >
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
