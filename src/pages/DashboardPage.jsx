import React from "react";
import DashboardSummary from "../components/dashboard/DashboardSummary";
import DashboardDetails from "../components/dashboard/DashboardDetails";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import { Col } from "antd";

const DashboardPage = () => {
  // Mock data - replace with actual API data
  const dashboardData = {
    // Protection plans widget data
    totalPlans: 60,
    plansGrowth: 28.5,
    pendingSales: 32,
    pendingSalesAmount: 25000,
    receivedSalesAmount: 25000,

    // Repairs details widget data
    totalRepairsDone: 23,
    repairsGrowth: -18.5,
    pendingRepairs: 12,
    pendingRepairsAmount: 225000,
    receivedRepairsAmount: 105000,

    // Repair status data
    awaitingApproval: 2,
    approvedForRepairs: 12,
    completedRepairs: 132,
    rejectedRepairs: 32,

    // Team members data
    teamMembers: [
      {
        id: 1,
        name: "John Doe",
        location: "Guzape 24231, Abuja F.C.T",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        plansSold: 32,
        plansAmount: 25000,
        repairsCompleted: 24,
        repairsAmount: 125000,
      },
      {
        id: 2,
        name: "Jane Smith",
        location: "Guzape 24231, Abuja F.C.T",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        plansSold: 28,
        plansAmount: 22000,
        repairsCompleted: 18,
        repairsAmount: 95000,
      },
      {
        id: 3,
        name: "John Doe",
        location: "Guzape 24231, Abuja F.C.T",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        plansSold: 32,
        plansAmount: 25000,
        repairsCompleted: 24,
        repairsAmount: 125000,
      },
    ],

    // Chart data (mock)
    deviceClaims: {
      iphone: 35,
      samsung: 25,
      google: 15,
      huawei: 10,
      others: 15,
    },

    devicePlans: {
      iphone14: 45,
      samsungS22: 30,
      pixel7: 12,
      iphone13: 28,
      others: 20,
    },
  };

  return (
    <Col className="mb-3 px-3">
      <DashboardSummary data={dashboardData} />
      <DashboardDetails data={dashboardData} />
      <DashboardCharts data={dashboardData} />
    </Col>
  );
};

export default DashboardPage;
