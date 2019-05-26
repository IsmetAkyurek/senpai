import React, { Component } from 'react';
import { BarChart, YAxis, XAxis, Bar, LabelList } from 'recharts';
import { laneIcons } from 'helpers';

class HeroChart extends Component {
  renderIcons = ({ x, y, payload }) => {
    return (
      <svg x={x - 16} y={y - 8} width={15} height={15} viewBox="0 0 15 15">
        {laneIcons[payload.value]}
      </svg>
    )
  };

  renderLabels = ({ x, y, width, value }) => {
    return (
      <g>
        <circle cx={x + width} cy={y + 9} r={20} fill="#971FAD" />
        <text x={x + width} y={y + 9} fill="#fff" textAnchor="middle" dominantBaseline="middle">
          {value}
        </text>
      </g>
    );
  };

  render() {
    const { data } = this.props;

    return (
      <div className="hero-chart">
        <BarChart layout="vertical" width={730} height={250} data={data}>
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" tick={this.renderIcons} />
          <Bar dataKey="value" barSize={20} fill="#9B80FA" radius={[10, 10, 10, 10]}>
            <LabelList dataKey="value" position="right" content={this.renderLabels} />
          </Bar>
        </BarChart>
      </div>
    );
  };
};

export default HeroChart;