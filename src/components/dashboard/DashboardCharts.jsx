import React from "react";
import { Row, Col } from "antd";
import { ClaimsByDeviceWidget, PlansByDeviceWidget } from "./widgets";
import ClaimsByDevice from "./ClaimsByDevice";

const DashboardCharts = ({ data }) => {
  return (
    <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
      <Col xs={24}>
        {/* <ClaimsByDeviceWidget data={data} /> */}
        <ClaimsByDevice />
      </Col>
      <Col xs={24}>
        <PlansByDeviceWidget data={data} />
      </Col>
    </Row>
  );
};

export default DashboardCharts;
