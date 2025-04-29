import React from "react";
import { Card, Statistic } from "antd";
import { Icon } from "@iconify/react";

const TotalCustomersWidget = ({ data }) => {
  return (
    <Card className="dashboard-card">
      <div className="card-content">
        <div className="icon-wrapper">
          <Icon icon="mdi:account-group-outline" width="24" height="24" />
        </div>
        <div className="stat-content">
          <Statistic
            title="Total Customers"
            value={data?.totalCustomers || 0}
            valueStyle={{ color: "#1890ff" }}
          />
          <div className="stat-footer">
            <span className="trend positive">
              <Icon icon="mdi:trending-up" width="16" height="16" />
              {data?.customersGrowth || 0}%
            </span>
            <span className="period">vs last month</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TotalCustomersWidget;
