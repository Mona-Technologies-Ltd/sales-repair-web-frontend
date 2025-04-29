import React from "react";
import { Row, Col } from "antd";
import {
  TotalSalesWidget,
  TotalRepairsWidget,
  TotalCustomersWidget,
  TotalRevenueWidget,
} from "./widgets";

const DashboardStats = ({ data }) => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} lg={6}>
        <TotalSalesWidget data={data} />
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <TotalRepairsWidget data={data} />
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <TotalCustomersWidget data={data} />
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <TotalRevenueWidget data={data} />
      </Col>
    </Row>
  );
};

export default DashboardStats;
