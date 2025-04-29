import React, { useState, useEffect, useRef } from "react";
import { Card, Select } from "antd";
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

const { Option } = Select;

const PlansByDeviceWidget = ({ data }) => {
  const [timeFilter, setTimeFilter] = useState("thisMonth");
  const chartRef = useRef(null);

  // Define device sales data with specified colors
  const deviceSales = [
    { label: "Google Pixel", value: 28, color: "#5679A8" },
    { label: "iPhone", value: 42, color: "#658E6F" },
    { label: "Samsung", value: 35, color: "#004AAD" },
  ];

  // Prepare chart data and options
  const chartData = {
    labels: deviceSales.map((item) => item.label),
    datasets: [
      {
        label: "Plans Sold",
        data: deviceSales.map((item) => item.value),
        backgroundColor: deviceSales.map((item) => item.color),
        borderColor: deviceSales.map((item) => item.color),
        borderWidth: 1,
        maxBarThickness: 25,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Plans Sold: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          font: {
            size: 13,
            weight: "bold",
          },
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: true,
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 12,
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
        timeFilter === "thisMonth" ? 1 : timeFilter === "lastMonth" ? 0.8 : 1.5;

      chart.data.datasets[0].data = deviceSales.map((item) =>
        Math.floor(item.value * (multiplier + Math.random() * 0.3))
      );
      chart.update();
    }
  }, [timeFilter]);

  return (
    <Card
      className="dashboard-section chart-widget plans-widget"
      size="small"
      style={{ marginBottom: "20px" }}
    >
      <div className="section-header">
        <div className="section-title">Plans Sold by Devices</div>
        <Select
          defaultValue="thisMonth"
          style={{
            width: 130,
            fontSize: "14px",
          }}
          size="middle"
          bordered={true}
          onChange={setTimeFilter}
          dropdownMatchSelectWidth={false}
          popupClassName="time-filter-dropdown"
        >
          <Option value="thisMonth">This Month</Option>
          <Option value="lastMonth">Last Month</Option>
          <Option value="thisYear">This Year</Option>
        </Select>
      </div>

      <div className="chart-container plans-chart">
        <Bar ref={chartRef} data={chartData} options={chartOptions} />
      </div>
    </Card>
  );
};

export default PlansByDeviceWidget;
