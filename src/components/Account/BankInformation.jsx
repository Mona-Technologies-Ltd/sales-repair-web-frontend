import React, { useState, useMemo, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Form } from "antd";

const BankInformation = () => {
  const [banks] = useState([
    {
      id: 1,
      accountNumber: "2288534567",
      accountName: "Anna Adeyemi",
      bankName: "Wema Bank",
    },
    {
      id: 2,
      accountNumber: "2288534567",
      accountName: "Anna Adeyemi",
      bankName: "Access Bank",
    },
    {
      id: 3,
      accountNumber: "2288534567",
      accountName: "Anna Adeyemi",
      bankName: "Stanbic IBTC",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showBankList, setShowBankList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBank, setSelectedBank] = useState(null);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const [newBank, setNewBank] = useState({
    bankName: "",
    accountNumber: "",
  });

  const banksList = [
    { value: "access", name: "Access Bank" },
    { value: "wema", name: "Wema Bank" },
    { value: "stanbic", name: "Stanbic IBTC" },
    { value: "uba", name: "UBA" },
    { value: "gtb", name: "GTBank" },
    { value: "first", name: "First Bank" },
    { value: "zenith", name: "Zenith Bank" },
  ];

  const groupedBanks = useMemo(() => {
    const filtered = banksList.filter((bank) =>
      bank.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.reduce((groups, bank) => {
      const firstLetter = bank.name[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(bank);
      return groups;
    }, {});
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !searchInputRef.current.contains(event.target)
      ) {
        setShowBankList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopy = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber);
  };

  const handleDelete = (bankId) => {
    console.log("Delete bank", bankId);
  };

  const handleAddBank = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setNewBank({ bankName: "", accountNumber: "" });
    setSearchQuery("");
    setShowBankList(false);
  };

  const handleSearchFocus = () => {
    setShowBankList(true);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowBankList(true);
    if (selectedBank && !value.includes(selectedBank.name)) {
      setSelectedBank(null);
    }
  };

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
    setSearchQuery(bank.name);
    setNewBank({ ...newBank, bankName: bank.name });
    setShowBankList(false);
  };

  const handleSubmitBank = () => {
    console.log("Submit new bank", newBank);
    handleCloseModal();
  };

  return (
    <div className="bank-information">
      <div className="bank-header">
        <div>
          <h2>Bank Information</h2>
          <p className="subtitle">You can add up to 3 accounts</p>
        </div>
        <button className="add-bank-button" onClick={handleAddBank}>
          Add New Bank
        </button>
      </div>

      <div className="bank-cards">
        {banks.map((bank) => (
          <div
            key={bank.id}
            className="bank-card"
            style={{ border: "1px solid #e6e8eb" }}
          >
            <div className="bank-details">
              <div className="account-number">{bank.accountNumber}</div>
              <div className="account-name">{bank.accountName}</div>
              <div className="">{bank.bankName}</div>
              {/* <div className="bank-name">{bank.bankName}</div> */}
            </div>
            <div className="bank-actions">
              {/* <button
                className="action-button copy"
                onClick={() => handleCopy(bank.accountNumber)}
                style={{
                  borderRadius: "50%",
                  border: "1px solid #38B6FF",
                  color: "#38B6FF",
                }}
              >
                <Icon
                  icon="solar:pen-linear"
                  width="20"
                  height="20"
                  color="#38B6FF"
                />
              </button> */}
              <button
                className="action-button delete"
                onClick={() => handleDelete(bank.id)}
                style={{
                  
                  color: "#ff4d4f",
                  border: "1px solid #ff4d4f",
                  borderRadius: "100%",
                  padding: "4px",
                }}
              >
                <Icon
                  icon="solar:trash-bin-trash-linear"
                  width="20"
                  height="20"
                  color="#ff4d4f"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add Bank</h2>
              <button className="modal-close" onClick={handleCloseModal}>
                <Icon icon="mdi:close" width="24" height="24" />
              </button>
            </div>
            <p className="modal-description">File claim to fix your device</p>
            <div className="modal-body">
              <Form layout="vertical">
                <Form.Item
                  label="Bank Name"
                  validateStatus={selectedBank ? "success" : ""}
                >
                  <div className="bank-select-container">
                    <div className="bank-search-input" ref={searchInputRef}>
                      <Icon
                        icon="solar:magnifier-linear"
                        className="search-icon"
                      />
                      <input
                        type="text"
                        placeholder="Search Bank"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onFocus={handleSearchFocus}
                      />
                    </div>

                    {showBankList && (
                      <div className="bank-list-dropdown" ref={dropdownRef}>
                        {Object.entries(groupedBanks).map(([letter, banks]) => (
                          <div key={letter} className="bank-group">
                            <div className="group-letter">{letter}</div>
                            {banks.map((bank) => (
                              <div
                                key={bank.value}
                                className={`bank-option ${
                                  selectedBank?.value === bank.value
                                    ? "selected"
                                    : ""
                                }`}
                                onClick={() => handleBankSelect(bank)}
                              >
                                <span>{bank.name}</span>
                                <Icon
                                  icon="mdi:chevron-right"
                                  className="chevron-icon"
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Form.Item>

                <Form.Item label="Account Number">
                  <input
                    type="text"
                    className="modal-input"
                    placeholder="Enter account number"
                    value={newBank.accountNumber}
                    onChange={(e) =>
                      setNewBank({ ...newBank, accountNumber: e.target.value })
                    }
                  />
                </Form.Item>

                <button
                  className="add-bank-button"
                  onClick={handleSubmitBank}
                  style={{ width: "100%", marginTop: "1rem" }}
                  disabled={!selectedBank || !newBank.accountNumber}
                >
                  Add Bank
                </button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankInformation;
