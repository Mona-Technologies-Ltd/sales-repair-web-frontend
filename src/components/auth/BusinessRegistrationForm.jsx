import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Steps, Upload, Select } from "antd";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IconInput from "../common/IconInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { showToast } from "../../utils/toast";
import { nigerianStates } from "../../utils/nigerianStates";

import { businessRegistrationSchema } from "../../utils/validationSchemas";
import { registerBusiness, resetAuthState } from "../../redux/slices/authSlice";
import { Icon } from "@iconify/react/dist/iconify.js";

const { Step } = Steps;
const { Option } = Select;

const BusinessRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [logoFile, setLogoFile] = useState(null);
  const [availableCities, setAvailableCities] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      // Business Owner Info
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      // Business Info
      businessName: "",
      businessType: "Sales",
      state: "",
      city: "",
      address: "",
      businessEmail: "",
      businessPhoneNumber: "",
      businessRegistrationNumber: "",
      website: "",
    },
    validationSchema: businessRegistrationSchema,
    onSubmit: async (values) => {
      // Convert logo file to base64 if exists
      let logoBase64 = null;
      if (logoFile) {
        const reader = new FileReader();
        logoBase64 = await new Promise((resolve) => {
          reader.onload = (e) => resolve(e.target.result);
          reader.readAsDataURL(logoFile);
        });
      }

      const businessData = {
        businessOwnerInfo: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
        },
        businessInfo: {
          businessName: values.businessName,
          businessType: values.businessType,
          state: values.state,
          city: values.city,
          address: values.address,
          email: values.businessEmail,
          phoneNumber: values.businessPhoneNumber,
          website: values.website || null,
          businessRegistrationNumber: values.businessRegistrationNumber,
          logoImage: logoBase64,
        },
      };

      dispatch(registerBusiness(businessData));
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

  const nextStep = () => {
    // Validate current step fields before proceeding
    const businessOwnerFields = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
    ];
    const isBusinessOwnerValid = businessOwnerFields.every(
      (field) => !formik.errors[field] && formik.touched[field]
    );

    if (currentStep === 0 && isBusinessOwnerValid) {
      setCurrentStep(1);
    }
  };

  const prevStep = () => {
    setCurrentStep(0);
  };

  React.useEffect(() => {
    if (isSuccess) {
      navigate("/registration-success");
    }
    return () => {
      dispatch(resetAuthState());
    };
  }, [isSuccess, navigate, dispatch]);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (2MB = 2 * 1024 * 1024 bytes)
      if (file.size <= 2 * 1024 * 1024) {
        setLogoFile(file);
      } else {
        showToast.error("Logo file must be less than 2MB");
        // Reset the input
        e.target.value = null;
      }
    }
  };

  const handleRemoveLogo = (e) => {
    e.stopPropagation(); // Prevent triggering the parent div's click event
    setLogoFile(null);
    // Reset the file input
    const fileInput = document.getElementById("logo-upload");
    if (fileInput) {
      fileInput.value = null;
    }
  };

  const renderBusinessOwnerInfo = () => (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="FIRST NAME"
            validateStatus={
              formik.touched.firstName && formik.errors.firstName ? "error" : ""
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

      <Form.Item
        label="PHONE NUMBER"
        validateStatus={
          formik.touched.phoneNumber && formik.errors.phoneNumber ? "error" : ""
        }
        help={formik.touched.phoneNumber && formik.errors.phoneNumber}
      >
        <PhoneInput
          country="ng"
          value={formik.values.phoneNumber}
          onChange={(phone) => formik.setFieldValue("phoneNumber", phone)}
          onBlur={formik.handleBlur}
          inputProps={{
            name: "phoneNumber",
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

      <Form.Item>
        <Button
          type="primary"
          className="btn-color"
          onClick={nextStep}
          style={{ width: "100%" }}
        >
          Next
        </Button>
      </Form.Item>
    </>
  );

  const renderBusinessInfo = () => (
    <>
      <Form.Item
        label="BUSINESS NAME"
        validateStatus={
          formik.touched.businessName && formik.errors.businessName
            ? "error"
            : ""
        }
        help={formik.touched.businessName && formik.errors.businessName}
      >
        <IconInput
          name="businessName"
          placeholder="Enter business name"
          value={formik.values.businessName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          prefixIconName="material-symbols-light:business-center-outline"
          showCircle={true}
        />
      </Form.Item>

      <Form.Item
        label="BUSINESS TYPE"
        validateStatus={
          formik.touched.businessType && formik.errors.businessType
            ? "error"
            : ""
        }
        help={formik.touched.businessType && formik.errors.businessType}
      >
        <Select
          name="businessType"
          placeholder="Select business type"
          value={formik.values.businessType}
          onChange={(value) => formik.setFieldValue("businessType", value)}
          onBlur={formik.handleBlur}
          style={{ width: "100%" }}
          dropdownRender={(menu) => (
            <div>
              <div
                style={{
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>Select business type</span>
              </div>
              {menu}
            </div>
          )}
        >
          <Option value="Sales">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon="mdi:cart-outline"
                width="20"
                height="20"
                style={{ marginRight: "8px" }}
              />
              Sales
            </div>
          </Option>
          <Option value="Repairs">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon="mdi:tools"
                width="20"
                height="20"
                style={{ marginRight: "8px" }}
              />
              Repairs
            </div>
          </Option>
          <Option value="Both">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon="mdi:store"
                width="20"
                height="20"
                style={{ marginRight: "8px" }}
              />
              Both
            </div>
          </Option>
        </Select>
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
        label="ADDRESS"
        validateStatus={
          formik.touched.address && formik.errors.address ? "error" : ""
        }
        help={formik.touched.address && formik.errors.address}
      >
        <IconInput
          name="address"
          placeholder="Enter business address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          prefixIconName="proicons:location"
          showCircle={true}
        />
      </Form.Item>

      <Form.Item
        label="BUSINESS EMAIL"
        validateStatus={
          formik.touched.businessEmail && formik.errors.businessEmail
            ? "error"
            : ""
        }
        help={formik.touched.businessEmail && formik.errors.businessEmail}
      >
        <IconInput
          name="businessEmail"
          placeholder="Enter business email"
          value={formik.values.businessEmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          prefixIconName="fluent:mail-20-regular"
          showCircle={true}
        />
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
        label="BUSINESS REGISTRATION NUMBER"
        validateStatus={
          formik.touched.businessRegistrationNumber &&
          formik.errors.businessRegistrationNumber
            ? "error"
            : ""
        }
        help={
          formik.touched.businessRegistrationNumber &&
          formik.errors.businessRegistrationNumber
        }
      >
        <IconInput
          name="businessRegistrationNumber"
          placeholder="Enter registration number"
          value={formik.values.businessRegistrationNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          prefixIconName="mdi:file-document-outline"
          showCircle={true}
        />
      </Form.Item>

      <Form.Item
        label="WEBSITE (OPTIONAL)"
        validateStatus={
          formik.touched.website && formik.errors.website ? "error" : ""
        }
        help={formik.touched.website && formik.errors.website}
      >
        <IconInput
          name="website"
          placeholder="Enter website URL"
          value={formik.values.website}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          prefixIconName="tabler:world"
          showCircle={true}
        />
      </Form.Item>

      <Form.Item>
        <div
          style={{
            border: "1px dashed #d9d9d9",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "#fafafa",
            position: "relative",
          }}
          onClick={() => document.getElementById("logo-upload").click()}
        >
          <input
            id="logo-upload"
            type="file"
            accept="image/png,image/jpeg"
            style={{ display: "none" }}
            onChange={handleLogoUpload}
          />
          <div style={{ marginBottom: "8px" }}>
            <Icon
              icon="material-symbols-light:upload-file-outline"
              height={30}
              width={40}
            />
          </div>
          <div style={{ color: "#1890ff" }}>
            Upload Business Logo or drag and drop
          </div>
          <div style={{ color: "#8c8c8c", fontSize: "12px" }}>
            PNG, or JPEG up to 2MB
          </div>
          {logoFile && (
            <div
              style={{
                marginTop: "8px",
                color: "#52c41a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>Selected: {logoFile.name}</span>
              <Button
                type="text"
                danger
                icon={<Icon icon="mdi:close-circle" />}
                size="small"
                onClick={handleRemoveLogo}
                style={{ marginLeft: "8px" }}
              />
            </div>
          )}
        </div>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          className="btn-color"
          htmlType="submit"
          loading={isLoading}
          style={{ width: "100%" }}
        >
          Register Business
        </Button>
      </Form.Item>
    </>
  );

  return (
    <div className="auth-form">
      <Row justify="center">
        <Col span={16}>
          <Steps
            current={currentStep}
            style={{ marginBottom: "2rem" }}
            labelPlacement="vertical"
            size="small"
          >
            <Step title="Business Owner Information" onClick={prevStep} />
            <Step title="Business Information" />
          </Steps>
        </Col>
      </Row>

      <Form onFinish={formik.handleSubmit} layout="vertical">
        {currentStep === 0 ? renderBusinessOwnerInfo() : renderBusinessInfo()}
      </Form>
    </div>
  );
};

export default BusinessRegistrationForm;
