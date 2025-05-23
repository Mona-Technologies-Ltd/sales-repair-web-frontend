import React, { useState } from "react";
import { Form, Button, message } from "antd";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import IconInput from "../common/IconInput";
import { loginSchema } from "../../utils/validationSchemas";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Form submitted successfully:", values);
      message.success("Login successful!");
      // navigate("/dashboard");

      setTimeout(() => navigate("/dashboard"), 1000); // Redirect after 1 second
    }
    
    // onSubmit: (values) => {
    //   console.log("Skipping backend. Values:", values);
    //   navigate("/");
    // },
  });

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
          <Button type="primary" className="btn-color" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
