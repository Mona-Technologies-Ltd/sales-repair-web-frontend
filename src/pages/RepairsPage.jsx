import React, { useState } from "react";
import { Card, Input, Select, DatePicker, Button } from "antd";
import { Icon } from "@iconify/react";
import CustomGrid from "../components/CustomGrid/CustomGrid";
import RepairDetailsModal from "../components/RepairDetailsModal/RepairDetailsModal";
import { printRepairsReport } from "../utils/printUtils";
import "./RepairsPage.css";

const RepairsPage = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const pageSize = 10;

  // Generate sample data
  const allData = Array(45)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      claimId: `PLU${3766 + index}`,
      deviceId: `IP${12567 + index}`,
      deviceModel: "iPhone 13 Pro MAX",
      issue: "Damaged screen",
      amount: "25000.00",
      status:
        index % 5 === 0
          ? "Awaiting"
          : index % 5 === 1
          ? "Approved"
          : index % 5 === 2
          ? "Completed"
          : index % 5 === 3
          ? "Paid"
          : "Rejected",
      teamMember: "John Doe",
      company: "Mona Tech",
      customerName: "John Doe",
      customerPhone: "08143789883",
      date: "Dec 6, 2024",
    }));

  // Calculate total items from the actual data
  const totalItems = allData.length;

  // Calculate the current page's data
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageData = allData.slice(startIndex, endIndex);

  const handleViewDetails = (record) => {
    setSelectedDevice(record);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Claim id",
      dataIndex: "claimId",
      key: "claimId",
    },
    {
      title: "Device id",
      dataIndex: "deviceId",
      key: "deviceId",
    },
    {
      title: "Device model",
      dataIndex: "deviceModel",
      key: "deviceModel",
    },
    {
      title: "Issue",
      dataIndex: "issue",
      key: "issue",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (value) => <span className="date">{value}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (value) => <span className="commission">₦{value}</span>,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (value) => (
        <span className={`status-badge ${value.toLowerCase()}`}>{value}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          ghost
          className="view-details-btn"
          onClick={() => handleViewDetails(record)}
          style={{
            backgroundColor: "#D7F0FF",
            borderColor: "#004AAD",
            color: "#004AAD",
            borderRadius: "0",
          }}
        >
          View Details
        </Button>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const generateReportData = () => {
    return {
      reportId: "RPT" + Date.now(),
      generatedBy: "Admin 1/Michael James", // Replace with actual user data
      generatedOn: new Date().toLocaleString(),
      version: "1.0",
      totalDevices: summaryCards
        .reduce((sum, card) => sum + card.count, 0)
        .toString(),
      totalCostOfRepairs: summaryCards[0].amount,
      totalCostOfRepairsPaid: summaryCards[3].amount,
      totalCostOfRepairsAwaiting: summaryCards[1].amount,
      highlights: [
        { issue: "Damaged screen", count: 5 },
        { issue: "Not Charging", count: 3 },
      ],
      dateRange: {
        from: dateRange?.[0]?.format("MMM. DD YYYY") || "Jan. 22TH 2024",
        to: dateRange?.[1]?.format("MMM. DD YYYY") || "Dec. 22TH 2024",
      },
      repairsInfo: currentPageData.map((item) => ({
        claimId: item.claimId,
        brand: "Apple",
        model: item.deviceModel,
        amount: item.amount,
        status: item.status,
        approvedBy: item.teamMember,
        date: item.date,
      })),
    };
  };

  const handlePrintReport = () => {
    printRepairsReport(generateReportData());
  };

  const summaryCards = [
    {
      title: "Repairs Awaiting Approval",
      count: 2,
      amount: "105,000",
      icon: "qlementine-icons:tool-24",
      iconBg: "#FFF1CE",
      iconColor: "#E3A405",
    },
    {
      title: "Approved for Repair",
      count: 12,
      amount: "105,000",
      icon: "qlementine-icons:tool-24",
      iconBg: "#DBEBFF",
      iconColor: "#004AAD",
    },
    {
      title: "Completed Repairs",
      count: 120,
      amount: "105,000",
      icon: "qlementine-icons:tool-24",
      iconBg: "#DBEBFF",
      iconColor: "#38B6FF",
    },
    {
      title: "Paid Repairs",
      count: 115,
      amount: "105,000",
      icon: "qlementine-icons:tool-24",
      iconBg: "#E3FFE3",
      iconColor: "#439F6E",
    },
    {
      title: "Rejected Repairs",
      count: 30,
      amount: "105,000",
      icon: "qlementine-icons:tool-24",
      iconBg: "#FFE3E6",
      iconColor: "#E52626",
    },
  ];

  return (
    <div className="repairs-page">
      {/* Summary Cards */}
      <div className="summary-cards-grid">
        {summaryCards.map((card, index) => (
          <Card key={index} className="summary-card">
            <div className="summary-card-content">
              <div
                className="summary-card-icon"
                style={{ background: card.iconBg }}
              >
                <Icon
                  icon={card.icon}
                  color={card.iconColor}
                  width="15"
                  height="15"
                />
              </div>
              <div className="summary-card-title">{card.title}</div>
              <h3 className="summary-card-count">{card.count}</h3>
              <div className="summary-card-amount-container">
                <div className="summary-card-amount-label">Amount</div>
                <span className="summary-card-amount">₦{card.amount}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-filters">
          <Input
            placeholder="Search here"
            prefix={
              <Icon icon="material-symbols:search" width="20" height="20" />
            }
            className="search-input"
          />
          <Select
            placeholder="Status"
            className="status-select"
            style={{ height: "50px !important" }}
            onChange={(value) => setSelectedStatus(value)}
            options={[
              { value: "awaiting", label: "Awaiting" },
              { value: "approved", label: "Approved" },
              { value: "completed", label: "Completed" },
              { value: "paid", label: "Paid" },
              { value: "rejected", label: "Rejected" },
            ]}
          />
        </div>
        <div className="date-print-section">
          <div className="date-range">
            <span>Date Range:</span>
            <DatePicker.RangePicker
              onChange={(dates) => setDateRange(dates)}
              format="MM/DD/YYYY"
            />
          </div>
          <Button
            type="primary"
            icon={<Icon icon="mdi:printer" />}
            onClick={handlePrintReport}
            className="print-button"
          >
            Print
          </Button>
        </div>
      </div>

      {/* Grid */}
      <CustomGrid
        columns={columns}
        data={currentPageData}
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={totalItems}
        onPageChange={handlePageChange}
      />

      {/* Modal */}
      <RepairDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        deviceData={selectedDevice}
      />
    </div>
  );
};

export default RepairsPage;
