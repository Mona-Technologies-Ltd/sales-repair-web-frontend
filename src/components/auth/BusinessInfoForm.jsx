import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Upload, Space, Row, Col } from "antd";
import { useFormik } from "formik";
import {
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  BankOutlined,
  GlobalOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { nigerianStates } from "../../utils/nigerianStates";

import { businessInfoSchema } from "../../utils/validationSchemas";
import IconInput from "../common/IconInput";

const { Option } = Select;

const BusinessInfoForm = ({
  onSubmit,
  onBack,
  initialValues = {},
  isLoading,
}) => {
  const [fileList, setFileList] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      businessName: initialValues.businessName || "",
      businessType: initialValues.businessType || "",
      state: initialValues.state || "",
      city: initialValues.city || "",
      address: initialValues.address || "",
      email: initialValues.email || "",
      phoneNumber: initialValues.phoneNumber || "",
      website: initialValues.website || "",
      businessRegistrationNumber:
        initialValues.businessRegistrationNumber || "",
      logoImage: initialValues.logoImage || null,
    },
    validationSchema: businessInfoSchema,
    onSubmit: (values) => {
      const formData = {
        ...values,
        logoImage: fileList.length > 0 ? fileList[0] : values.logoImage,
      };
      onSubmit(formData);
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

  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const dummyBusinessTypes = [
    { value: "retail", label: "Retail" },
    { value: "service", label: "Service" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "it", label: "Information Technology" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance" },
  ];

  const dummyStates = [
    { value: "lagos", label: "Lagos" },
    { value: "abuja", label: "Abuja" },
    { value: "rivers", label: "Rivers" },
    { value: "oyo", label: "Oyo" },
    { value: "kano", label: "Kano" },
  ];

  return (
    <Form onFinish={formik.handleSubmit} layout="vertical">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            validateStatus={
              formik.touched.businessName && formik.errors.businessName
                ? "error"
                : ""
            }
            help={formik.touched.businessName && formik.errors.businessName}
          >
            <IconInput
              name="businessName"
              placeholder="Business Name"
              value={formik.values.businessName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              prefixIconName="mdi:office-building"
              showCircle={true}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            validateStatus={
              formik.touched.businessEmail && formik.errors.businessEmail
                ? "error"
                : ""
            }
            help={formik.touched.businessEmail && formik.errors.businessEmail}
          >
            <IconInput
              name="businessEmail"
              placeholder="Business Email"
              value={formik.values.businessEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              prefixIconName="mdi:email"
              showCircle={true}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            validateStatus={
              formik.touched.businessPhone && formik.errors.businessPhone
                ? "error"
                : ""
            }
            help={formik.touched.businessPhone && formik.errors.businessPhone}
          >
            <IconInput
              name="businessPhone"
              placeholder="Business Phone"
              value={formik.values.businessPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              prefixIconName="mdi:phone"
              showCircle={true}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            validateStatus={
              formik.touched.businessType && formik.errors.businessType
                ? "error"
                : ""
            }
            help={formik.touched.businessType && formik.errors.businessType}
          >
            <IconInput
              name="businessType"
              placeholder="Business Type"
              value={formik.values.businessType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              prefixIconName="mdi:domain"
              showCircle={true}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        validateStatus={
          formik.touched.businessAddress && formik.errors.businessAddress
            ? "error"
            : ""
        }
        help={formik.touched.businessAddress && formik.errors.businessAddress}
      >
        <IconInput
          name="businessAddress"
          placeholder="Business Address"
          value={formik.values.businessAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          prefixIconName="mdi:map-marker"
          showCircle={true}
        />
      </Form.Item>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
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
        <Col span={8}>
          <Form.Item
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
        <Col span={8}>
          <Form.Item
            validateStatus={
              formik.touched.zipCode && formik.errors.zipCode ? "error" : ""
            }
            help={formik.touched.zipCode && formik.errors.zipCode}
          >
            <IconInput
              name="zipCode"
              placeholder="ZIP Code"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              prefixIconName="mdi:mailbox"
              showCircle={true}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="BUSINESS WEBSITE (OPTIONAL)"
        validateStatus={
          formik.touched.website && formik.errors.website ? "error" : ""
        }
        help={formik.touched.website && formik.errors.website}
      >
        <Input
          name="website"
          prefix={<GlobalOutlined className="site-form-item-icon" />}
          placeholder="Enter your business website"
          value={formik.values.website}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="BUSINESS REGISTRATION NUMBER/RC"
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
        <Input
          name="businessRegistrationNumber"
          placeholder="Enter your business registration number"
          value={formik.values.businessRegistrationNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item label="BUSINESS LOGO (OPTIONAL)">
        <Upload
          fileList={fileList}
          onChange={handleUploadChange}
          beforeUpload={() => false} // Prevent auto upload
          maxCount={1}
          accept=".png,.jpg,.jpeg"
        >
          <Button icon={<UploadOutlined />}>Upload Business Logo</Button>
        </Upload>
        <div className="text-muted mt-10">PNG or JPEG up to 10MB</div>
      </Form.Item>

      <Form.Item>
        <Space>
          <Button onClick={onBack}>Back</Button>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default BusinessInfoForm;
