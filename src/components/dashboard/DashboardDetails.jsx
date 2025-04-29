import React, { useState } from "react";
import { Row, Col } from "antd";
import { RepairsStatusWidget, TeamMembersWidget } from "./widgets";

const DashboardDetails = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const teamMembers = data?.teamMembers || [];
  const itemsPerPage = 2;
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Get current subset of team members to display
  const startIndex = currentPage * itemsPerPage;
  const displayedMembers = teamMembers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Create modified data with displayed members
  const teamData = {
    ...data,
    displayedMembers,
  };

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} lg={7}>
        <RepairsStatusWidget data={data} />
      </Col>
      <Col xs={24} lg={17}>
        <TeamMembersWidget
          data={teamData}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
        />
      </Col>
    </Row>
  );
};

export default DashboardDetails;
