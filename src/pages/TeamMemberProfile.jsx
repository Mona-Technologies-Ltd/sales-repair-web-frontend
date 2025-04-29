import React from "react";
import { useParams } from "react-router-dom";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import "../styles/TeamMemberProfile.css";

const TeamMemberProfile = () => {
  const { id } = useParams();
  // Mock data - replace with actual data fetching
  const teamMember = {
    id: id,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    joinDate: "2023-01-15",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg", // Using a real placeholder image
    status: {
      totalSales: 150,
      totalRepairs: 45,
      dateJoined: "2023-01-15",
    },
  };

  // Update the document title with the member's name
  React.useEffect(() => {
    document.title = `${teamMember.name} - Team Member Profile`;
  }, [teamMember.name]);

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
    e.target.alt = "Default avatar";
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-info-card">
          <div className="profile-header">
            <img
              src={teamMember.avatar}
              alt={teamMember.name}
              className="profile-avatar"
              onError={handleImageError}
            />
            <div className="profile-details">
              <h2>{teamMember.name}</h2>
              <div className="info-item">
                <MailOutlined />
                <span>{teamMember.email}</span>
              </div>
              <div className="info-item">
                <PhoneOutlined />
                <span>{teamMember.phone}</span>
              </div>
              <div className="info-item">
                <CalendarOutlined />
                <span>Joined: {teamMember.joinDate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="status-card">
          <h2>Performance Overview</h2>
          <div className="status-grid">
            <div className="status-item">
              <div className="status-label">Total Sales</div>
              <div className="status-value">{teamMember.status.totalSales}</div>
            </div>
            <div className="status-item">
              <div className="status-label">Total Repairs</div>
              <div className="status-value">
                {teamMember.status.totalRepairs}
              </div>
            </div>
            <div className="status-item date-joined">
              <div className="status-label">Date Joined</div>
              <div className="status-value highlight">
                {teamMember.status.dateJoined}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberProfile;
