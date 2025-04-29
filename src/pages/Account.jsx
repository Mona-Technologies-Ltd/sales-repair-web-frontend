import React, { useState } from "react";
import BusinessInformation from "../components/Account/BusinessInformation";
import BankInformation from "../components/Account/BankInformation";
import PasswordManagement from "../components/Account/PasswordManagement";
import Branches from "../components/Account/Branches";
import "../styles/Account.css";

const Account = () => {
  const [activeTab, setActiveTab] = useState("business");

  const tabs = [
    { id: "business", label: "Business Information" },
    { id: "bank", label: "Bank Information" },
    { id: "branches", label: "Branches" },
    { id: "password", label: "Password Management" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "business":
        return <BusinessInformation />;
      case "bank":
        return <BankInformation />;
      case "branches":
        return <Branches />;
      case "password":
        return <PasswordManagement />;
      default:
        return <BusinessInformation />;
    }
  };

  return (
    <div className="account-container">
      <div className="account-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Account;
