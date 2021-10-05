import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';

const Charts = () => {
  return (
    <div className="flex flex-initial p-4">
      <div className="grid grid-cols-6 gap-3">
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
};

export default Charts;
