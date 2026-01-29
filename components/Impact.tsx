import React from 'react';
import { Metric } from '../types';

const metrics: Metric[] = [
  { value: "4.2M", label: "Tonnes CO2e", subtext: "Sequestered to date" },
  { value: "85k+", label: "Farmers", subtext: "Empowered globally" },
  { value: "320k", label: "Hectares", subtext: "Land under regeneration" },
  { value: "$12M", label: "Income", subtext: "Generated for communities" },
];

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-forest-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col border-b border-forest-800 md:border-b-0 md:border-r last:border-0 pb-8 md:pb-0 px-4">
              <span className="text-5xl lg:text-6xl font-bold mb-4 tracking-tighter text-white">
                {metric.value}
              </span>
              <span className="text-lg font-medium text-forest-100 mb-1">
                {metric.label}
              </span>
              <span className="text-sm text-forest-100/60 font-light">
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;