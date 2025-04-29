import React from "react";
import { Row, Col } from "antd";
import { ProtectionPlansWidget, RepairsDetailsWidget } from "./widgets";

const DashboardSummary = ({ data }) => {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
      <Col xs={24} lg={12}>
        <ProtectionPlansWidget data={data} />
      </Col>
      <Col xs={24} lg={12}>
        <RepairsDetailsWidget data={data} />
      </Col>
    </Row>
  );
};

export default DashboardSummary;
