import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./BusinessInformation.css";

const BusinessInformation = () => {
  const [businessInfo] = useState({
    name: "John Doe",
    businessName: "Royal Tech Company",
    address: "Guzape 24231, Abuja F.C.T",
    phoneNumber: "0814 224 4432",
    teamMembers: "24",
    businessType: "Sales/Repairs",
    registrationNumber: "2386362429372",
    openingHours: "9:00AM - 7:00PM",
    openingDays: "Mon- Sat",
  });

  const [showCloseModal, setShowCloseModal] = useState(false);
  const [closeAccountInput, setCloseAccountInput] = useState("");

  const handleCloseAccount = () => {
    setShowCloseModal(true);
  };

  const handleConfirmClose = () => {
    if (closeAccountInput === businessInfo.businessName) {
      // Add API call to close account
      console.log("Account closed");
      setShowCloseModal(false);
    }
  };

  return (
    <div className="form-section">
      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-image-container">
            <div
              className="profile-image"
              style={{
                background: "linear-gradient(135deg, #38B6FF 0%, #004AAD 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "2.5rem",
                fontWeight: "500",
              }}
            >
              {businessInfo.name[0]}
            </div>
          </div>
          <div className="profile-details">
            <h2>{businessInfo.name}</h2>
            <span className="role-badge">Sale Partner</span>
          </div>
        </div>
      </div>

      {/* Business Information Card */}
      <div className="business-card">
        <div className="business-info-grid">
          <div className="info-group" data-field="businessName">
            <label className="info-label">Business Name</label>
            <div className="info-value">
              <div className="static-text">{businessInfo.businessName}</div>
            </div>
          </div>

          {/* <div className="info-group" data-field="teamMembers">
            <label className="info-label">Team members</label>
            <div className="info-value">
              <div className="static-text">{businessInfo.teamMembers}</div>
            </div>
          </div> */}
          <div className="info-group" data-field="teamMembers">
            <label className="info-label">Phone Number</label>
            <div className="info-value">
              <div className="static-text">{businessInfo.phoneNumber}</div>
            </div>
          </div> 

          <div className="info-group" data-field="phoneNumber">
            <label className="info-label">Team members</label>
            <div className="info-value">
              <div className="static-text">{businessInfo.teamMembers}</div>
            </div>
          </div>

          {/* Right-aligned fields */}
          <div className="info-group" id="info-right" data-field="address">
            <label className="info-label">Address</label>
            <div className="info-value">
              <div className="static-text">{businessInfo.address}</div>
            </div>
          </div>

          <div className="info-group info-right" data-field="businessType">
            <label className="info-label">Business Type</label>
            <div className="info-value">
              <div className="business-type-tag">
                {businessInfo.businessType}
              </div>
            </div>
          </div>

          <div className="info-group info-right" data-field="registrationNumber">
            <label className="info-label">Business Registration Number</label>
            <div className="info-value">
              <div className="static-text">
                {businessInfo.registrationNumber}
              </div>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button type="button" className="edit-button">
            Edit
          </button>
          <button
            type="button"
            className="close-account-button"
            onClick={handleCloseAccount}
          >
            Close Account
          </button>
        </div>
      </div>

      {/* Close Account Modal */}
      {showCloseModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Close Account</h2>
              <button
                className="modal-close"
                onClick={() => setShowCloseModal(false)}
              >
                <Icon icon="mdi:close" width="24" height="24" />
              </button>
            </div>
            <p className="modal-description">
              Enter your business name to close your account
            </p>
            <div className="modal-body">
              <label>Business name</label>
              <input
                type="text"
                className="modal-input"
                placeholder="Enter your business name"
                value={closeAccountInput}
                onChange={(e) => setCloseAccountInput(e.target.value)}
              />
              <button
                className="confirm-delete-button"
                onClick={handleConfirmClose}
                disabled={closeAccountInput !== businessInfo.businessName}
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessInformation;
