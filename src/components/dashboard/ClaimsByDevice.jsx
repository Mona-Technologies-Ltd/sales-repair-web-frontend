import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import './ClaimsByDevice.css';

const data = [
  { name: 'Broken Inner Screen Only', value: 17, color: '#9494F9' },
  { name: 'Broken Outer Screen Only', value: 9, color: '#E3B2F7' },
  { name: 'Not Charging', value: 30, color: '#84F4EC' },
  { name: 'Back Housing/ Cover', value: 17, color: '#7A7AFB' },
  { name: 'Back Camera not Working', value: 20, color: '#C9E3A0' },
  { name: 'Front Camera not Working', value: 4, color: '#A3CDF4' },
  { name: 'Sim-card slot not Working', value: 16, color: '#D98888' },
  { name: 'Water Damage', value: 31, color: '#6E8B6C' },
  { name: 'Smashed Device', value: 22, color: '#94CAF6' },
  { name: 'Audio Issues (Mic/Speaker)', value: 14, color: '#5B6D8D' },
  { name: 'Others', value: 6, color: '#707070' },
  { name: 'Mother Board Issues', value: 24, color: '#7DDB84' },
  { name: 'Broken Screen Complete', value: 22, color: '#F5B77E' },
];

const timeRanges = ['Today', 'Last 7 Days', 'Last 30 Days', 'Last 1 Year'];

const ClaimsByDevice = () => {
  const [activeRange, setActiveRange] = useState('Today');

  return (
    <div className="claims-container">
      <Row justify="space-between" align="middle" className="claims-header">
        <Col>
          <h3 className="claims-title">Claims by Device</h3>
        </Col>
        <Col className="claims-filters">
          {timeRanges.map((range) => (
            <Button
              key={range}
              type={activeRange === range ? 'primary' : 'default'}
              className={activeRange === range ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setActiveRange(range)}
            >
              {range}
            </Button>
          ))}
        </Col>
      </Row>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 50 }}
          barCategoryGap="40%"
        >
          {/* Removed CartesianGrid */}
          <XAxis
            dataKey="name"
            interval={0}
            angle={-90}
            textAnchor="end"
            tick={{ fontSize: 11, fill: '#888', }}
            height={120}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#888' }}
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ClaimsByDevice;
