import React from "react";
import { Form, Button } from "antd";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IconInput from "../common/IconInput";

import { forgotPasswordSchema } from "../../utils/validationSchemas";
import { forgotPassword, resetAuthState } from "../../redux/slices/authSlice";

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
    },
  });

  React.useEffect(() => {
    if (isSuccess) {
      navigate("/reset-password");
    }

    return () => {
      dispatch(resetAuthState());
    };
  }, [isSuccess, navigate, dispatch]);

  return (
    <div className="auth-form">
      <Form onFinish={formik.handleSubmit} layout="vertical">
        <Form.Item
          label="EMAIL ADDRESS"
          validateStatus={
            formik.touched.email && formik.errors.email ? "error" : ""
          }
          help={formik.touched.email && formik.errors.email}
        >
          <IconInput
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            prefixIconName="fluent:mail-20-regular"
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
            Send Reset Link
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
