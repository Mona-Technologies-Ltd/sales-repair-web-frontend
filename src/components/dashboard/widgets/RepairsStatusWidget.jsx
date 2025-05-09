import React from "react";
import { Card } from "antd";

const RepairsStatusWidget = ({ data }) => {
  const statusItems = [
    {
      label: "Pending Approval",
      count: data?.awaitingApproval || 0,
      color: "#EEA10D",
    },
    {
      label: "Approved for Repairs",
      count: data?.approvedForRepairs || 0,
      color: "#004AAD",
    },
    {
      label: "Completed Repairs",
      count: data?.completedRepairs || 0,
      color: "#00752F",
    },
    {
      label: "Rejected Repairs",
      count: data?.rejectedRepairs || 0,
      color: "#FF4602",
    },
  ];

  return (
    <Card className="dashboard-section">
      <div className="section-title">Repairs</div>
      <div className="section-subtitle">
        Here are your recent repair activities
      </div>

      <div className="repair-status-list">
        {statusItems.map((item, index) => (
          <div className="repair-status-item" key={index}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: item.color,
                  marginRight: "8px",
                }}
              />
              <span>{item.label}</span>
            </div>
            <div className="repair-status-count">{item.count}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RepairsStatusWidget;
