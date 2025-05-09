import React from "react";
import { Card, Row, Col } from "antd";
import { Icon } from "@iconify/react";
// import SalesPayoutCard from "./SalesPayoutCard";

const ProtectionPlansWidget = ({ data }) => {
  const isPositive = (data?.plansGrowth || 0) >= 0;

  return (
    <Card className="dashboard-stats-card protection-plans-card" >
      <div className="stat-header">
        <div className="stat-title">
          Total Protection Plans Sold
          <div className="stat-value">
            <small>{data?.totalPlans || 0}</small>
          </div>
        </div>
        <div className="stat-metrics">
          <div className="growth-badge">
            <Icon icon="mdi:trending-up" width="18" height="18" />
            <span>{data?.plansGrowth || 0}%</span>
          </div>
          <div className="stat-period">This Month</div>
        </div>
      </div>

      <div className="payout-section" id="pay-sec">
        {/* <Row>
          <Col span={8} className="payout-left">
            <div className="payout-title">Pending Sales Payout</div>
            <div className="payout-value">{data?.pendingSales || 0}</div>
          </Col>
          <Col span={3} className="payout-amount-box">
            <div className="amount-label">Amount</div>
            <div className="amount-value">
              ₦{data?.pendingSalesAmount?.toLocaleString() || 0}
            </div>
          </Col>
          <Col span={10} className="payout-right">
            <div className="payout-title">Received Sales payout</div>
            <div className="payout-received-amount">
              ₦{data?.receivedSalesAmount?.toLocaleString() || 0}
            </div>
          </Col>
        </Row> */}
         <SalesPayoutCard />
      </div>


    </Card>
  );
};

export default ProtectionPlansWidget;
