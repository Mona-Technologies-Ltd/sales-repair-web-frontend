import React from "react";
import { Modal } from "antd";
import { Icon } from "@iconify/react";
import "./RepairDetailsModal.css";

const RepairDetailsModal = ({ isOpen, onClose, deviceData }) => {
  if (!deviceData) return null;

  const issues = ["Accidental Damage", "Hardware Damage"];

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={800}
      style={{ maxWidth: "90vw" }}
      centered
      closeIcon={<Icon icon="mdi:close" width="24" height="24" />}
      className="device-details-modal repair-details-modal"
    >
      <div className="modal-content" style={{ marginTop: "50px" }}>
        <div className="device-header">
          <div className="device-info">
            <h2 className="device-brand">Iphone</h2>
            <div className="device-id-tag">
              Device id: {deviceData?.deviceId}
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
              <p className="subtitle">{deviceData?.company}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Icon icon="ic:outline-account-box" width="24" height="24" />
            </div>
            <div className="info-content">
              <h4>Customer Info</h4>
              <p>{deviceData?.customerName}</p>
              <p className="subtitle">{deviceData?.customerPhone}</p>
            </div>
          </div>
        </div>

        <div className="date-section">
          <div className="date-item">
            <span className="label">Onboarding date</span>
            <span className="value">Jan. 22TH 2024</span>
          </div>
          <div className="date-timeline">
            <div className="timeline-line" />
          </div>
          <div className="date-item">
            <span className="label">ExpiryDate</span>
            <span className="value">Dec. 22TH 2024</span>
          </div>
        </div>

        <div className="issues-section">
          <h3>Issue(s)</h3>
          <div className="issues-list">
            {issues.map((issue, index) => (
              <div key={index} className="issue-tag">
                {issue}
              </div>
            ))}
          </div>
        </div>

        <div className="claims-section">
          <h3>Claims Information</h3>
          <table className="claims-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Screen Damage</td>
                <td>₦50,000</td>
              </tr>
              <tr>
                <td>Battery Issue</td>
                <td>₦60,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>Total: ₦110,000</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="description-section">
          <h3>General Description</h3>
          <div className="description-item">
            <h4>When</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="description-item">
            <h4>Where</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="description-item">
            <h4>How</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>

        <div className="repair-history">
          <h3>Repair History</h3>
          <div className="history-item">
            <div className="history-row">
              <div className="history-label">Issue(s)</div>
              <div className="history-issues">
                <div>Accidental Damage</div>
                <div>Hardware Damage</div>
              </div>
              <div className="history-label">Issue(s)</div>
            </div>
            <div className="history-row">
              <div className="history-label">Date</div>
              <div className="history-date">Dec 6, 2024</div>
              <div className="history-label">Date</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RepairDetailsModal;
