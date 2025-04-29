import React from "react";
import { Card, Row, Col } from "antd";
import { Icon } from "@iconify/react";

const RepairsDetailsWidget = ({ data }) => {
  const isPositive = (data?.repairsGrowth || 0) >= 0;

  return (
    <Card className="dashboard-stats-card protection-plans-card">
      <div className="stat-header">
        <div className="stat-title">
          Total Repairs Done
          <div className="stat-value">
            <small>{data?.totalRepairsDone || 0}</small>
          </div>
        </div>
        <div className="stat-metrics">
          <div
            className={`growth-badge ${isPositive ? "positive" : "negative"}`}
          >
            <Icon
              icon={isPositive ? "mdi:trending-up" : "mdi:trending-down"}
              width="18"
              height="18"
            />
            <span>{Math.abs(data?.repairsGrowth || 0)}%</span>
          </div>
          <div className="stat-period">This Month</div>
        </div>
      </div>

      <div className="payout-section">
        <Row>
          <Col span={8} className="payout-left">
            <div className="payout-title">Pending Repairs Payout</div>
            <div className="payout-value">{data?.pendingRepairs || 0}</div>
          </Col>
          <Col span={4} className="payout-amount-box">
            <div className="amount-label">Amount</div>
            <div className="amount-value">
              ₦{data?.pendingRepairsAmount?.toLocaleString() || 0}
            </div>
          </Col>
          <Col span={12} className="payout-right">
            <div className="payout-title">Received Repairs Payout</div>
            <div className="payout-received-amount">
              ₦{data?.receivedRepairsAmount?.toLocaleString() || 0}
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default RepairsDetailsWidget;
