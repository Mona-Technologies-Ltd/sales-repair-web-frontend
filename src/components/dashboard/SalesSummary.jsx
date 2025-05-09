import React from 'react';
import { Row, Col } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import './SalesSummary.css';
import { HiOutlineTrendingUp } from 'react-icons/hi';

const SalesSummary = () => {
  return (
    <div className="sales-summary">
      <div className="summary-header">
        <div>
          <p className="summary-title">Total Protection Plans Sold</p>
          <p className="summary-value">60</p>
        </div>
        <div className="growth">
          <span className="growth-percentage">
            {/* <ArrowUpOutlined style={{ marginRight: 4, fontSize: 10 }} /> */}
                  <HiOutlineTrendingUp color='#008000' />
            
            28.5%
          </span>
          <p className="growth-text">This Month</p>
        </div>
      </div>

      <Row gutter={12}>
        <Col xs={24} sm={12}>
          <div className="payout-card payout-pending">
            <div className="payout-left">
              <p className="payout-title">Pending Sales Payout</p>
              <p className="payout-values">32</p>
            </div>
            <div className="payout-right">
              <p className="payout-amount-title">Amount</p>
              <p className="payout-amount-value">₦25,000</p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div className="payout-card payout-received">
            <p className="payout-title">Received Sales payout</p>
            <p className="received-amount">₦25,000</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SalesSummary;
