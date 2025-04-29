import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Select, DatePicker } from "antd";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import IconInput from "../common/IconInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { nigerianStates } from "../../utils/nigerianStates";

import { teamMemberRegistrationSchema } from "../../utils/validationSchemas";
import { register, resetAuthState } from "../../redux/slices/authSlice";
import { Icon } from "@iconify/react/dist/iconify.js";

const { Option } = Select;

const TeamMemberRegistrationForm = () => {
  const [availableCities, setAvailableCities] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "male",
      DOB: "",
      email: "",
      state: "",
      city: "",
      businessAddress: "",
      BusinessEmail: "",
      NIN: "",
      role: "team_member",
      businessPhoneNumber: "",
      password: "",
    },
    validationSchema: teamMemberRegistrationSchema,
    onSubmit: (values) => {
      // Format the date to ISO string before sending
      const formattedValues = {
        ...values,
        DOB: moment(values.DOB).toISOString(),
      };
      dispatch(register(formattedValues));
    },
  });

  // Update available cities when state changes
  useEffect(() => {
    const selectedState = nigerianStates.find(
      (state) => state.name === formik.values.state
    );
    if (selectedState) {
      setAvailableCities(selectedState.cities);
      // Reset city when state changes
      formik.setFieldValue("city", "");
    } else {
      setAvailableCities([]);
    }
  }, [formik.values.state]);

  React.useEffect(() => {
    if (isSuccess) {
      navigate("/dashboard");
    }
    return () => {
      dispatch(resetAuthState());
    };
  }, [isSuccess, navigate, dispatch]);

  // Handle NIN input to only allow numbers and limit to 11 digits
  const handleNINChange = (e) => {
    const value = e.target.value;
    // Only allow digits and limit to 11 characters
    if (/^\d*$/.test(value) && value.length <= 11) {
      formik.setFieldValue("NIN", value);
    }
  };

  return (
    <div className="auth-form">
      <Form onFinish={formik.handleSubmit} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="FIRST NAME"
              validateStatus={
                formik.touched.firstName && formik.errors.firstName
                  ? "error"
                  : ""
              }
              help={formik.touched.firstName && formik.errors.firstName}
            >
              <IconInput
                name="firstName"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                prefixIconName="mdi:account-outline"
                showCircle={true}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="LAST NAME"
              validateStatus={
                formik.touched.lastName && formik.errors.lastName ? "error" : ""
              }
              help={formik.touched.lastName && formik.errors.lastName}
            >
              <IconInput
                name="lastName"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                prefixIconName="mdi:account-outline"
                showCircle={true}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="GENDER"
          validateStatus={
            formik.touched.gender && formik.errors.gender ? "error" : ""
          }
          help={formik.touched.gender && formik.errors.gender}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="input-icon-wrapper">
              <i
                className="iconify"
                data-icon="mdi:gender-male-female"
                style={{ fontSize: "20px" }}
              ></i>
            </span>
            <Select
              name="gender"
              placeholder="Select gender"
              value={formik.values.gender}
              onChange={(value) => formik.setFieldValue("gender", value)}
              onBlur={formik.handleBlur}
              style={{ width: "100%" }}
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </div>
        </Form.Item>

        <Form.Item
          label="DOB"
          validateStatus={
            formik.touched.DOB && formik.errors.DOB ? "error" : ""
          }
          help={formik.touched.DOB && formik.errors.DOB}
        >
          <DatePicker
            name="DOB"
            style={{ width: "100%" }}
            value={formik.values.DOB ? moment(formik.values.DOB) : null}
            onChange={(date) => formik.setFieldValue("DOB", date)}
            onBlur={formik.handleBlur}
            format="YYYY-MM-DD"
            placeholder="Select date of birth"
          />
        </Form.Item>

        <Form.Item
          label="EMAIL ADDRESS"
          validateStatus={
            formik.touched.email && formik.errors.email ? "error" : ""
          }
          help={formik.touched.email && formik.errors.email}
        >
          <IconInput
            name="email"
            placeholder="Johndoe@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            prefixIconName="fluent:mail-20-regular"
            showCircle={true}
          />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="STATE"
              validateStatus={
                formik.touched.state && formik.errors.state ? "error" : ""
              }
              help={formik.touched.state && formik.errors.state}
            >
              <Select
                name="state"
                placeholder="Select state"
                value={formik.values.state}
                onChange={(value) => formik.setFieldValue("state", value)}
                onBlur={formik.handleBlur}
                style={{ width: "100%" }}
              >
                <Select.Option value="" disabled>
                  Select state
                </Select.Option>
                {nigerianStates.map((state) => (
                  <Select.Option key={state.name} value={state.name}>
                    {state.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="CITY"
              validateStatus={
                formik.touched.city && formik.errors.city ? "error" : ""
              }
              help={formik.touched.city && formik.errors.city}
            >
              <Select
                name="city"
                placeholder="Select city"
                value={formik.values.city}
                onChange={(value) => formik.setFieldValue("city", value)}
                onBlur={formik.handleBlur}
                style={{ width: "100%" }}
                disabled={!formik.values.state}
              >
                <Select.Option value="" disabled>
                  Select city
                </Select.Option>
                {availableCities.map((city) => (
                  <Select.Option key={city} value={city}>
                    {city}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="BUSINESS ADDRESS"
          validateStatus={
            formik.touched.businessAddress && formik.errors.businessAddress
              ? "error"
              : ""
          }
          help={formik.touched.businessAddress && formik.errors.businessAddress}
        >
          <IconInput
            name="businessAddress"
            placeholder="Enter your address"
            value={formik.values.businessAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            prefixIconName="proicons:location"
            showCircle={true}
          />
        </Form.Item>

        <Form.Item
          label="BUSINESS EMAIL ADDRESS"
          validateStatus={
            formik.touched.BusinessEmail && formik.errors.BusinessEmail
              ? "error"
              : ""
          }
          help={formik.touched.BusinessEmail && formik.errors.BusinessEmail}
        >
          <IconInput
            name="BusinessEmail"
            placeholder="Enter your email"
            value={formik.values.BusinessEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            prefixIconName="fluent:mail-20-regular"
            showCircle={true}
          />
        </Form.Item>

        <Form.Item
          label="NIN"
          validateStatus={
            formik.touched.NIN && formik.errors.NIN ? "error" : ""
          }
          help={formik.touched.NIN && formik.errors.NIN}
        >
          <IconInput
            name="NIN"
            placeholder="Enter your 11-digit NIN"
            value={formik.values.NIN}
            onChange={handleNINChange}
            onBlur={formik.handleBlur}
            prefixIconName="mdi:card-account-details-outline"
            showCircle={true}
            maxLength={11}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </Form.Item>

        <Form.Item
          label="ROLE"
          validateStatus={
            formik.touched.role && formik.errors.role ? "error" : ""
          }
          help={formik.touched.role && formik.errors.role}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Select
              name="role"
              value={formik.values.role}
              onChange={(value) => formik.setFieldValue("role", value)}
              onBlur={formik.handleBlur}
              style={{ width: "100%" }}
              disabled={true}
            >
              <Option value="team_member">Team Member</Option>
            </Select>
          </div>
        </Form.Item>

        <Form.Item
          label="BUSINESS PHONE NUMBER"
          validateStatus={
            formik.touched.businessPhoneNumber &&
            formik.errors.businessPhoneNumber
              ? "error"
              : ""
          }
          help={
            formik.touched.businessPhoneNumber &&
            formik.errors.businessPhoneNumber
          }
        >
          <PhoneInput
            country="ng"
            value={formik.values.businessPhoneNumber}
            onChange={(phone) =>
              formik.setFieldValue("businessPhoneNumber", phone)
            }
            onBlur={formik.handleBlur}
            inputProps={{
              name: "businessPhoneNumber",
              required: true,
              autoFocus: false,
            }}
            containerStyle={{
              width: "100%",
            }}
            inputStyle={{
              width: "100%",
              height: "40px",
              fontSize: "14px",
              paddingLeft: "48px",
              borderRadius: "4px",
              border: "1px solid #d9d9d9",
            }}
            buttonStyle={{
              border: "1px solid #d9d9d9",
              borderRight: "none",
              borderRadius: "4px 0 0 4px",
              backgroundColor: "white",
            }}
          />
        </Form.Item>

        <Form.Item
          label="PASSWORD"
          validateStatus={
            formik.touched.password && formik.errors.password ? "error" : ""
          }
          help={formik.touched.password && formik.errors.password}
        >
          <IconInput
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
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
            Register Team Member
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TeamMemberRegistrationForm;
