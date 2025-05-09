import { HiOutlineLocationMarker } from "react-icons/hi"; 
import React from "react";
import { Card, Row, Col, Avatar, Button } from "antd";
import { Icon } from "@iconify/react";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="team-member-card">
      <div className="member-info">
        <Avatar size={50} src={member.avatar} className="member-avatar" />
        <div>
          <div className="member-name">{member.name}</div>
          <div className="member-location">
            {/* <Icon
              icon="mdi:map-marker"
              width={16}
              height={16}
              color="#1890ff"
            /> */}
            <HiOutlineLocationMarker
                icon="mdi:map-marker"
                width={16}
                height={16}
            />
            {member.location}
          </div>
        </div>
      </div>

      <div className="member-stats">
        <div className="stat-group stat-group-1">
          <div className="stat-label">Plans Sold</div>
          <div className="stats-value">{member.plansSold}</div>
          <div className="stat-amount sales">
          <div>Amount</div> <span>₦{member.plansAmount?.toLocaleString() || 0}</span>

          </div>
        </div>
        <div className="stat-group stat-group-2">
          <div className="stat-label">Repairs Completed</div>
          <div className="stats-value">{member.repairsCompleted}</div>
          <div className="stat-amount repairs">
            <div>Amount</div> <span>₦{member.repairsAmount?.toLocaleString() || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMembersWidget = ({ data, onPrev, onNext }) => {
  const teamCount = data?.teamMembers?.length || 0;
  const displayedMembers = data?.displayedMembers || [];

  return (
    <Card className="dashboard-section">
      <div className="section-header">
        <div className="section-title">Team Members({teamCount})</div>
        <div className="pagination-controls">
          <Button
            type="text"
            icon={
              <Icon
                icon="famicons:chevron-back-circle"
                width={25}
                height={30}
                color="#004AAD"
              />
            }
            onClick={onPrev}
            className="pagination-button"
          />
          <Button
            type="text"
            icon={
              <Icon
                icon="famicons:chevron-forward-circle"
                width={25}
                height={30}
                color="#004AAD"
              />
            }
            onClick={onNext}
            className="pagination-button"
          />
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {displayedMembers.map((member, index) => (
          <Col xs={24} sm={12} key={index}>
            <TeamMemberCard member={member} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default TeamMembersWidget;
