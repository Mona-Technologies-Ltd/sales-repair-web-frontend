import React, { useEffect, useState } from "react";
import { Form, Button } from "antd";
import { useFormik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IconInput from "../common/IconInput";

import { loginSchema } from "../../utils/validationSchemas";
import { login, resetAuthState } from "../../redux/slices/authSlice";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoading, isSuccess, isError, message, isAuthenticated } =
    useSelector((state) => state.auth);

  const from = location.state?.from?.pathname || "/dashboard";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  useEffect(() => {
    if (isAuthenticated && isSuccess) {
      navigate(from, { replace: true });
    }
    return () => {
      dispatch(resetAuthState());
    };
  }, [isAuthenticated, isSuccess, navigate, dispatch, from]);

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

        <Form.Item
          label="PASSWORD"
          validateStatus={
            formik.touched.password && formik.errors.password ? "error" : ""
          }
          help={
            <div>
              {formik.touched.password && formik.errors.password}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <span
                  className="text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password?
                </span>
              </div>
            </div>
          }
        >
          <IconInput
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            prefixIconName="basil:lock-outline"
            suffixIconName="lets-icons:eye-light"
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
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
