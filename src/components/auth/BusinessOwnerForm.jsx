import React from "react";
import { Form, Input, Button } from "antd";
import { useFormik } from "formik";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

import { businessOwnerSchema } from "../../utils/validationSchemas";

const BusinessOwnerForm = ({ onSubmit, initialValues = {} }) => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      firstName: initialValues.firstName || "",
      lastName: initialValues.lastName || "",
      email: initialValues.email || "",
      phoneNumber: initialValues.phoneNumber || "",
    },
    validationSchema: businessOwnerSchema,
    onSubmit,
  });

  return (
    <Form onFinish={formik.handleSubmit} layout="vertical">
      <Form.Item
        label="FIRST NAME"
        validateStatus={
          formik.touched.firstName && formik.errors.firstName ? "error" : ""
        }
        help={formik.touched.firstName && formik.errors.firstName}
      >
        <Input
          name="firstName"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="LAST NAME"
        validateStatus={
          formik.touched.lastName && formik.errors.lastName ? "error" : ""
        }
        help={formik.touched.lastName && formik.errors.lastName}
      >
        <Input
          name="lastName"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="EMAIL ADDRESS"
        validateStatus={
          formik.touched.email && formik.errors.email ? "error" : ""
        }
        help={formik.touched.email && formik.errors.email}
      >
        <Input
          name="email"
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="PHONE NUMBER"
        validateStatus={
          formik.touched.phoneNumber && formik.errors.phoneNumber ? "error" : ""
        }
        help={formik.touched.phoneNumber && formik.errors.phoneNumber}
      >
        <div className="phone-input">
          <Input
            addonBefore="+234"
            name="phoneNumber"
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Phone Number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Proceed
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BusinessOwnerForm;
