import React from "react";
import { Card, Statistic } from "antd";
import { Icon } from "@iconify/react";

const TotalRepairsWidget = ({ data }) => {
  return (
    <Card className="dashboard-card">
      <div className="card-content">
        <div className="icon-wrapper">
          <Icon icon="mdi:tools" width="24" height="24" />
        </div>
        <div className="stat-content">
          <Statistic
            title="Total Repairs"
            value={data?.totalRepairs || 0}
            valueStyle={{ color: "#cf1322" }}
          />
          <div className="stat-footer">
            <span className="trend positive">
              <Icon icon="mdi:trending-up" width="16" height="16" />
              {data?.repairsGrowth || 0}%
            </span>
            <span className="period">vs last month</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TotalRepairsWidget;
