import React from 'react';
import { Metric } from '../types';
import ContentBlock from './ContentBlock';

const metrics: Metric[] = [
  { value: '4.2M', label: 'Tonnes CO2e', subtext: 'Sequestered to date' },
  { value: '85k+', label: 'Farmers', subtext: 'Empowered globally' },
  { value: '320k', label: 'Hectares', subtext: 'Land under regeneration' },
  { value: '$12M', label: 'Income', subtext: 'Generated for communities' },
];

const Impact: React.FC = () => {
  return (
    <section
      id="impact"
      className="pt-16 md:pt-24 pb-20 md:pb-28 bg-forest-950 text-white"
    >
      {/* STANDARDIZED TEXT CONTEXT */}
      <ContentBlock
        label="Impact"
        title="Measurable outcomes at scale."
        description="Our projects deliver verified carbon removal while improving livelihoods and restoring ecosystems."
      />

      {/* METRICS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 md:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col border-l border-forest-800 pl-6"
            >
              <span className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white">
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
