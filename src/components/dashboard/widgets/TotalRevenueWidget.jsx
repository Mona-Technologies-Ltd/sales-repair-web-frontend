import React from "react";
import { Card, Statistic } from "antd";
import { Icon } from "@iconify/react";

const TotalRevenueWidget = ({ data }) => {
  return (
    <Card className="dashboard-card">
      <div className="card-content">
        <div className="icon-wrapper">
          <Icon icon="mdi:currency-usd" width="24" height="24" />
        </div>
        <div className="stat-content">
          <Statistic
            title="Total Revenue"
            value={data?.totalRevenue || 0}
            prefix="₦"
            valueStyle={{ color: "#722ed1" }}
          />
          <div className="stat-footer">
            <span className="trend positive">
              <Icon icon="mdi:trending-up" width="16" height="16" />
              {data?.revenueGrowth || 0}%
            </span>
            <span className="period">vs last month</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TotalRevenueWidget;
