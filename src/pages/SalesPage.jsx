import React, { useState } from "react";
import { Input, Select, DatePicker, Button } from "antd";
import { Icon } from "@iconify/react";
import CustomGrid from "../components/CustomGrid/CustomGrid";
import DeviceDetailsModal from "../components/DeviceDetailsModal/DeviceDetailsModal";
import { printSalesReport } from "../utils/printUtils";
import "./SalesPage.css"; // Import the CSS file

const SalesPage = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const pageSize = 10;

  // Generate 50 items of sample data
  const allData = Array(45)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      deviceId: `IP${12567 + index}`,
      deviceModel: "iPhone 13 Pro MAX",
      brand: "Iphone",
      commission: "382,809",
      status: index % 3 === 0 ? "Awaiting" : "Paid",
      teamMember: "John Doe",
      company: "Mona Tech",
      customerName: "John Doe",
      customerPhone: "08143789883",
      date: "Jan. 22TH 2024",
      expiryDate: "Dec. 22TH 2024",
      amountPaid: "382,809",
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

  const generateReportData = () => {
    return {
      reportId: "RPT" + Date.now(),
      generatedBy: "Admin 1/Michael James", // Replace with actual user data
      generatedOn: new Date().toLocaleString(),
      version: "1.0",
      totalDevices: "10", // Replace with actual data
      totalCommissionEarned: "100,000", // Replace with actual data
      totalCommissionReceived: "50,000", // Replace with actual data
      totalCommissionAwaiting: "50,000", // Replace with actual data
      highlights: [
        { device: "Galaxy S20", count: 5 },
        { device: "iPhone 12", count: 5 },
      ],
      dateRange: {
        from: dateRange?.[0]?.format("MMM. DD YYYY") || "Jan. 22TH 2024",
        to: dateRange?.[1]?.format("MMM. DD YYYY") || "Dec. 22TH 2024",
      },
      salesInfo: currentPageData.map((item) => ({
        deviceModel: item.deviceModel,
        brand: item.brand,
        commission: item.commission,
        status: item.status,
        teamMember: item.teamMember,
        date: item.date,
      })),
    };
  };

  const handlePrintReport = () => {
    printSalesReport(generateReportData());
  };

  const columns = [
    { title: "Device id", key: "deviceId", dataIndex: "deviceId" },
    { title: "Device model", key: "deviceModel", dataIndex: "deviceModel" },
    { title: "Brand", key: "brand", dataIndex: "brand" },
    {
      title: "Commission",
      key: "commission",
      dataIndex: "commission",
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
    { title: "Team member", key: "teamMember", dataIndex: "teamMember" },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
      render: (value) => <span className="date">{value}</span>,
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
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

  return (
    <div className="sales-page">
      <div className="sales-page-header">
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
            onChange={(value) => setSelectedStatus(value)}
            options={[
              { value: "awaiting", label: "Awaiting" },
              { value: "paid", label: "Paid" },
            ]}
          />
        </div>
        <div className="date-print-section">
          <div className="date-range">
            <span>Date Range:</span>
            <DatePicker.RangePicker
              onChange={(dates) => setDateRange(dates)}
              format="MM/DD/YYYY"
              className="date-picker"
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

      <CustomGrid
        columns={columns}
        data={currentPageData}
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={totalItems}
        onPageChange={handlePageChange}
      />

      <DeviceDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        deviceData={selectedDevice}
      />
    </div>
  );
};

export default SalesPage;
