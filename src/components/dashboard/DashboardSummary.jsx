import React from "react";
import { Row, Col } from "antd";
import { ProtectionPlansWidget, RepairsDetailsWidget } from "./widgets";
import RepairStatsCard from "./RepairStatsCard";
import SalesSummary from "./SalesSummary";

const DashboardSummary = ({ data }) => {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom:'3rem',gap:10 }}>
      <Col xs={24} lg={11} style={{ height: '13rem', background:"#fff"}}>
        {/* <ProtectionPlansWidget data={data} /> */}
        <SalesSummary />
      </Col>
      <Col xs={24} lg={12} style={{ height: '13rem', background:"#fff"}}>
        {/* <RepairsDetailsWidget data={data} /> */}
        <RepairStatsCard />
      </Col>
    </Row>
  );
};

export default DashboardSummary;
