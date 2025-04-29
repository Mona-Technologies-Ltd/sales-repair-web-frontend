import React, { useState } from "react";
import { Input, DatePicker } from "antd";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "../styles/TeamMembers.css";

const TeamMembers = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [searchQuery, setSearchQuery] = useState("");

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      address: "Guzape 24231, Abuja F.C.T",
      plansSold: 32,
      claimsProcessed: 24,
      amount: "32,000",
      commissionEarned: "500",
      phone: "+234 814343465",
      email: "Johndoe@gmail.com",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "Maitama 23401, Abuja F.C.T",
      plansSold: 28,
      claimsProcessed: 18,
      amount: "28,500",
      commissionEarned: "450",
      phone: "+234 812345678",
      email: "janesmith@gmail.com",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      address: "Wuse 22101, Abuja F.C.T",
      plansSold: 45,
      claimsProcessed: 30,
      amount: "45,200",
      commissionEarned: "680",
      phone: "+234 809876543",
      email: "michaelj@gmail.com",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 4,
      name: "Sarah Williams",
      address: "Garki 21345, Abuja F.C.T",
      plansSold: 36,
      claimsProcessed: 22,
      amount: "36,800",
      commissionEarned: "550",
      phone: "+234 807654321",
      email: "sarahw@gmail.com",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 5,
      name: "David Brown",
      address: "Asokoro 23567, Abuja F.C.T",
      plansSold: 52,
      claimsProcessed: 38,
      amount: "52,400",
      commissionEarned: "780",
      phone: "+234 813456789",
      email: "davidb@gmail.com",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      id: 6,
      name: "Emily Davis",
      address: "Jabi 24567, Abuja F.C.T",
      plansSold: 29,
      claimsProcessed: 19,
      amount: "29,300",
      commissionEarned: "440",
      phone: "+234 805432167",
      email: "emilyd@gmail.com",
      avatar: "https://randomuser.me/api/portraits/women/34.jpg",
    },
    {
      id: 7,
      name: "Robert Wilson",
      address: "Utako 23789, Abuja F.C.T",
      plansSold: 41,
      claimsProcessed: 27,
      amount: "41,500",
      commissionEarned: "620",
      phone: "+234 816789012",
      email: "robertw@gmail.com",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
      id: 8,
      name: "Jennifer Taylor",
      address: "Lugbe 25678, Abuja F.C.T",
      plansSold: 33,
      claimsProcessed: 21,
      amount: "33,200",
      commissionEarned: "495",
      phone: "+234 808901234",
      email: "jennifert@gmail.com",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    },
    {
      id: 9,
      name: "Thomas Anderson",
      address: "Kubwa 26789, Abuja F.C.T",
      plansSold: 38,
      claimsProcessed: 25,
      amount: "38,600",
      commissionEarned: "580",
      phone: "+234 814567890",
      email: "thomasa@gmail.com",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      id: 10,
      name: "Lisa Martinez",
      address: "Karu 27890, Abuja F.C.T",
      plansSold: 31,
      claimsProcessed: 20,
      amount: "31,400",
      commissionEarned: "470",
      phone: "+234 809012345",
      email: "lisam@gmail.com",
      avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
      id: 11,
      name: "Daniel Thompson",
      address: "Nyanya 28901, Abuja F.C.T",
      plansSold: 47,
      claimsProcessed: 32,
      amount: "47,800",
      commissionEarned: "715",
      phone: "+234 815678901",
      email: "danielt@gmail.com",
      avatar: "https://randomuser.me/api/portraits/men/37.jpg",
    },
    {
      id: 11,
      name: "Daniel Thompson",
      address: "Nyanya 28901, Abuja F.C.T",
      plansSold: 47,
      claimsProcessed: 32,
      amount: "47,800",
      commissionEarned: "715",
      phone: "+234 815678901",
      email: "danielt@gmail.com",
      avatar: "https://randomuser.me/api/portraits/men/37.jpg",
    },
  ];

  return (
    <div className="team-members-container">
      <div className="team-header">
        <div className="search-filter-section">
          <div>
            <Input
              placeholder="Search here"
              prefix={
                <Icon icon="material-symbols:search" width="20" height="20" />
              }
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="date-range-container">
            <div className="date-label-container">
              <span>Date Range:</span>
              <DatePicker.RangePicker
                onChange={(dates) => setDateRange(dates)}
                format="MM/DD/YYYY"
                className="date-picker"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="team-members-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="member-card">
            <div className="member-header">
              <div className="member-info">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="member-avatar"
                />
                <div className="member-details">
                  <h3 className="member-name">{member.name}</h3>
                  <div className="member-location">
                    <Icon icon="proicons:location" width="16" height="16" />
                    <span>{member.address}</span>
                  </div>
                  <Link
                    to={`/team-members/${member.id}`}
                    state={{ memberName: member.name }}
                    className="view-profile"
                  >
                    View profile{" "}
                    <Icon icon="mdi:arrow-right" width="14" height="14" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="member-stats">
              <div className="stats-row">
                <div className="stat-item stat-item-blue">
                  <span className="stat-label">
                    Plans Sold : {member.plansSold}
                  </span>
                  <span className="stat-amount sales">
                    Amount ₦{member.amount}
                  </span>
                </div>
                <div className="stat-item stat-item-light-blue">
                  <span className="stat-label">
                    Claims Processed : {member.claimsProcessed}
                  </span>
                  <span className="stat-amount commission">
                    Commission ₦{member.commissionEarned}
                  </span>
                </div>
              </div>
            </div>

            <div className="member-contact">
              <div className="contact-item">
                <Icon
                  icon="material-symbols:phone-enabled-outline"
                  width="16"
                  height="16"
                  color="#1890ff"
                />
                <span>{member.phone}</span>
              </div>
              <div className="contact-item">
                <Icon
                  icon="material-symbols:mail-outline"
                  width="16"
                  height="16"
                  color="#1890ff"
                />
                <span>{member.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
