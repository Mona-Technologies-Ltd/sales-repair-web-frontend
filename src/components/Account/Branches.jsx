import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Form, Select } from "antd";
import { nigerianStates } from "../../utils/nigerianStates";

const { Option } = Select;

const Branches = () => {
  const [branches] = useState([
    {
      id: 1,
      city: "Lagos",
      area: "Lekki",
      address: "19c, ademola street lekki",
    },
    {
      id: 2,
      city: "Lagos",
      area: "Lekki",
      address: "19c, ademola street lekki",
    },
    {
      id: 3,
      city: "Lagos",
      area: "Lekki",
      address: "19c, ademola street lekki",
    },
    {
      id: 4,
      city: "Lagos",
      area: "Lekki",
      address: "19c, ademola street lekki",
    },
    {
      id: 5,
      city: "Lagos",
      area: "Lekki",
      address: "19c, ademola street lekki",
    },
    {
      id: 6,
      city: "Lagos",
      area: "Lekki",
      address: "19c, ademola street lekki",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [availableCities, setAvailableCities] = useState([]);
  const [newBranch, setNewBranch] = useState({
    state: "",
    city: "",
    address: "",
  });

  // Update available cities when state changes
  useEffect(() => {
    const selectedState = nigerianStates.find(
      (state) => state.name === newBranch.state
    );
    if (selectedState) {
      setAvailableCities(selectedState.cities);
      // Reset city when state changes
      setNewBranch((prev) => ({ ...prev, city: "" }));
    } else {
      setAvailableCities([]);
    }
  }, [newBranch.state]);

  const handleAddBranch = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setNewBranch({
      state: "",
      city: "",
      address: "",
    });
  };

  const handleSubmitBranch = () => {
    console.log("Submit new branch", newBranch);
    handleCloseModal();
  };

  const handleDelete = (branchId) => {
    console.log("Delete branch", branchId);
  };

  return (
    <div className="bank-information">
      <div className="bank-header">
        <div>
          <h2>Branches</h2>
        </div>
        <button className="add-bank-button" onClick={handleAddBranch}>
          Add New Branch
        </button>
      </div>

      <div className="branches-grid">
        {branches.map((branch) => (
          <div key={branch.id} className="branch-card">
            <div className="branch-content">
              <div className="branch-details">
                <div className="branch-city">{branch.city}</div>
                <div className="branch-area">{branch.area}</div>
                <div className="branch-address">{branch.address}</div>
              </div>
            </div>
            <div className="branch-actions">
              <button className="branch-action-button edit">
                <Icon icon="solar:pen-linear" width="16" height="16" />
              </button>
              <button
                className="branch-action-button delete"
                onClick={() => handleDelete(branch.id)}
              >
                <Icon
                  icon="solar:trash-bin-trash-linear"
                  width="16"
                  height="16"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Branch Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add Branch</h2>
              <button className="modal-close" onClick={handleCloseModal}>
                <Icon icon="mdi:close" width="24" height="24" />
              </button>
            </div>
            <p className="modal-description">Add a new business branch</p>
            <div className="modal-body">
              <Form layout="vertical">
                <Form.Item label="STATE">
                  <Select
                    placeholder="Select state"
                    value={newBranch.state}
                    onChange={(value) =>
                      setNewBranch({ ...newBranch, state: value })
                    }
                    style={{ width: "100%" }}
                  >
                    <Select.Option value="" disabled>
                      Select state
                    </Select.Option>
                    {nigerianStates.map((state) => (
                      <Select.Option key={state.name} value={state.name}>
                        {state.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item label="CITY">
                  <Select
                    placeholder="Select city"
                    value={newBranch.city}
                    onChange={(value) =>
                      setNewBranch({ ...newBranch, city: value })
                    }
                    style={{ width: "100%" }}
                    disabled={!newBranch.state}
                  >
                    <Select.Option value="" disabled>
                      Select city
                    </Select.Option>
                    {availableCities.map((city) => (
                      <Select.Option key={city} value={city}>
                        {city}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item label="ADDRESS">
                  <input
                    type="text"
                    className="modal-input"
                    placeholder="Enter address"
                    value={newBranch.address}
                    onChange={(e) =>
                      setNewBranch({ ...newBranch, address: e.target.value })
                    }
                  />
                </Form.Item>

                <button
                  className="add-bank-button"
                  onClick={handleSubmitBranch}
                  style={{ width: "100%", marginTop: "1rem" }}
                  disabled={
                    !newBranch.state || !newBranch.city || !newBranch.address
                  }
                >
                  Add Branch
                </button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Branches;
