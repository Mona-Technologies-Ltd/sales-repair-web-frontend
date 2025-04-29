import React from "react";
import { Table, Button } from "antd";
import PropTypes from "prop-types";
import "./CustomGrid.css";

const CustomGrid = ({
  columns: originalColumns,
  data,
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
  columns,
}) => {
  const handleViewDetails = (record) => {
    // Implement your view details logic here
  };

  return (
    <div className="custom-grid">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: totalItems,
          onChange: onPageChange,
          showSizeChanger: false,
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} results`,
        }}
        rowKey="id"
        className="sales-table"
      />
    </div>
  );
};

CustomGrid.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default CustomGrid;
