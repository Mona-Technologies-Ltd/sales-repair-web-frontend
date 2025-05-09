// import { HiOutlineArrowTrendingDown } from "react-icons/hi"; 
import { HiOutlineTrendingDown } from 'react-icons/hi';
import React from "react";
import { Row, Col } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import "./RepairStatsCard.css";

const RepairStatsCard = () => {
  return (
    <div className="repair-stats-container">
      <Row justify="space-between" align="middle" className="top-row">
        <Col>
          <div className="stats-title">Total Repairs Done</div>
          <div className="stats-value">23</div>
        </Col>
        <Col className="stats-percentage">
          <div className="percentage-container">
            {/* <ArrowDownOutlined className="down-icon" /> */}
            <HiOutlineTrendingDown color='#FF0000' />
            <span className="percent-value">18.5%</span>
          </div>
          <div className="month-label">This Month</div>
        </Col>
      </Row>

      <Row className="bottom-row">
        {/* <Col className="payout-box left-box">
          <div className="payout-title">Pending Repairs Payout</div>
          <div className="payout-content">
            <div className="payout-number">12</div>
            <div className="amount-box">
              <div className="amount-label">Amount</div>
              <div className="amount-value">₦225,000</div>
            </div>
          </div>
        </Col> */}
       <Col className="payout-box left-box">
  
  <div className="payout-content">
  <div className="p-c-l">
  <div className=".payout-title-repair" id="payout-title-repair">Pending Repairs Payout</div>
  <div className="payout-number">12</div>
  </div>
    <div className="amount-box">
      <div className="amount-label">Amount</div>
      <div className="amount-value">₦225,000</div>
    </div>
  </div>
</Col>



        <Col className="payout-box right-box">
          <div className="payout-title">Received Repairs Payout</div>
          <div className="payout-number">₦105,000</div>
        </Col>
      </Row>
    </div>
  );
};

export default RepairStatsCard;
