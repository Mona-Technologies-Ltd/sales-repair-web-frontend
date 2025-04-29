import React, { useState, useEffect, useRef } from "react";
import { Card, Button } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ClaimsByDeviceWidget = ({ data }) => {
  const [timeFilter, setTimeFilter] = useState("today");
  const chartRef = useRef(null);

  // Define claim categories with their colors
  const claimCategories = [
    { label: "Broken Inner Screen Only", color: "#9090FF", value: 32 },
    { label: "Broken Outer Screen Only", color: "#E6ABFF", value: 28 },
    { label: "Not Charging", color: "#83EBDB", value: 24 },
    { label: "Back Housing/Cover", color: "#6B63EB", value: 21 },
    { label: "Back Camera not Working", color: "#C6E296", value: 19 },
    { label: "Front Camera not Working", color: "#96B7E2", value: 17 },
    { label: "Sim-card slot not working", color: "#C47D7D", value: 15 },
    { label: "Water Damage", color: "#658E6F", value: 25 },
    { label: "Smashed Device", color: "#8AC0F2", value: 30 },
    { label: "Audio Issues (Microphone/Speaker)", color: "#5679A8", value: 18 },
    { label: "Mother Board Issues", color: "#8CD27E", value: 22 },
    { label: "Broken Screen Complete", color: "#FFBD8E", value: 35 },
    { label: "Others", color: "#6D6D6A", value: 12 },
  ];

  // Prepare chart data and options
  const chartData = {
    labels: claimCategories.map((item) => item.label),
    datasets: [
      {
        label: "Claims by Device Issue",
        data: claimCategories.map((item) => item.value),
        backgroundColor: claimCategories.map((item) => item.color),
        borderColor: claimCategories.map((item) => item.color),
        borderWidth: 1,
        maxBarThickness: 30,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Claims: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
        title: {
          display: true,
          text: "Number of Claims",
          font: {
            size: 12,
            weight: "normal",
          },
          padding: { top: 0, bottom: 10 },
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          font: {
            size: 10,
          },
        },
      },
    },
  };

  // Update chart data when time filter changes
  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const multiplier =
        timeFilter === "today"
          ? 1
          : timeFilter === "7days"
          ? 3
          : timeFilter === "30days"
          ? 5
          : 7;

      chart.data.datasets[0].data = claimCategories.map((item) =>
        Math.floor(item.value * (multiplier + Math.random() * 0.5))
      );
      chart.update();
    }
  }, [timeFilter]);

  return (
    <Card className="dashboard-section chart-widget">
      <div className="section-title">Claims by Device</div>
      <div className="filter-buttons">
        <Button
          type={timeFilter === "today" ? "primary" : "default"}
          onClick={() => setTimeFilter("today")}
        >
          Today
        </Button>
        <Button
          type={timeFilter === "7days" ? "primary" : "default"}
          onClick={() => setTimeFilter("7days")}
        >
          Last 7 Days
        </Button>
        <Button
          type={timeFilter === "30days" ? "primary" : "default"}
          onClick={() => setTimeFilter("30days")}
        >
          Last 30 Days
        </Button>
        <Button
          type={timeFilter === "1year" ? "primary" : "default"}
          onClick={() => setTimeFilter("1year")}
        >
          Last 1 Year
        </Button>
      </div>
      <div className="chart-container claims-chart">
        <Bar ref={chartRef} data={chartData} options={chartOptions} />
      </div>
    </Card>
  );
};

export default ClaimsByDeviceWidget;
