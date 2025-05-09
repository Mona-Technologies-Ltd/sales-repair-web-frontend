import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
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

// 1) Create a custom tick component
const WrappedVerticalTick = ({ x, y, payload }) => {
  // split the name into words (you could also split on '\n' if you pre-insert those)
  const words = payload.value.split(' ');
  return (
    <g transform={`translate(${x},${y})`}>
      {words.map((word, i) => (
        <text
          key={i}
          x={0}
          y={0}
          dy={i * 12}          // 12px line-height
          textAnchor="end"
          fill="#888"
          fontSize={11}
        >
          {word}
        </text>
      ))}
    </g>
  );
};

export default function ClaimsByDevice() {
  const [activeRange, setActiveRange] = useState('Today');

  return (
    <div className="claims-container">
      <Row justify="space-between" align="middle" className="claims-header">
        <Col>
          <h3 className="claims-title">Claims by Device</h3>
        </Col>
        <Col className="claims-filters">
          {timeRanges.map(r => (
            <Button
              key={r}
              type={activeRange === r ? 'primary' : 'default'}
              className={activeRange === r ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setActiveRange(r)}
            >
              {r}
            </Button>
          ))}
        </Col>
      </Row>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 80 }}
          barCategoryGap="40%"
        >
          <XAxis
            dataKey="name"
            interval={0}
            tick={<WrappedVerticalTick />}   // ← use the custom tick
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#888' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
