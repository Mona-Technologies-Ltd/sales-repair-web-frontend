import React from "react";
import { Modal } from "antd";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import "./DeviceDetailsModal.css";

const DeviceDetailsModal = ({ isOpen, onClose, deviceData }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={800}
      style={{ maxWidth: "90vw" }}
      centered
      closeIcon={<Icon icon="mdi:close" width="24" height="24" />}
      className="device-details-modal"
    >
      <div className="modal-content" style={{ marginTop: "50px" }}>
        <div className="device-header">
          <div className="device-info">
            <h2 className="device-brand">{deviceData?.brand}</h2>
            <div className="device-id-tag">
              Device id:{deviceData?.deviceId}
            </div>
          </div>
          <div className="brand-logo">
            <Icon icon="mdi:apple" width="48" height="48" />
          </div>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">
              <Icon icon="mdi:account-outline" width="24" height="24" />
            </div>
            <div className="info-content">
              <h4>Team member</h4>
              <p>{deviceData?.teamMember}</p>
              <p className="subtitle">{deviceData?.company || "Mona Tech"}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Icon icon="ic:outline-account-box" width="24" height="24" />
            </div>
            <div className="info-content">
              <h4>Customer Info</h4>
              <p>{deviceData?.customerName || "John Doe"}</p>
              <p className="subtitle">
                {deviceData?.customerPhone || "08143789883"}
              </p>
            </div>
          </div>
        </div>

        <div className="date-section">
          <div className="date-item">
            <span className="label">Date</span>
            <span className="value">{deviceData?.date}</span>
          </div>
          <div className="date-timeline">
            <div className="timeline-line" />
          </div>
          <div className="date-item">
            <span className="label">Expiry Date</span>
            <span className="value">
              {deviceData?.expiryDate || "Dec. 22TH 2024"}
            </span>
          </div>
        </div>

        <div className="payment-section">
          <h3>Payment Summary</h3>
          <div className="payment-row">
            <span>Amount paid</span>
            <span className="amount">
              ₦{deviceData?.amountPaid || "382,809"}
            </span>
          </div>
          <div className="payment-row">
            <span>Commission</span>
            <span className="commission" style={{ fontSize: "20px", color:"#004AAD" }}>
              ₦{deviceData?.commission || "382,809"}
            </span>
          </div>
          <div className="payment-row">
            <span>Status</span>
            <span
              className={`status-badge ${(
                deviceData?.status || ""
              ).toLowerCase()}`}
            >
              {deviceData?.status}
             
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

DeviceDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  deviceData: PropTypes.object,
};

export default DeviceDetailsModal;
