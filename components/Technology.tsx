import React from 'react';
import { Scan, BarChart3, ShieldCheck } from 'lucide-react';
import ContentBlock from './ContentBlock';

const Technology: React.FC = () => {
  return (
    <section
      id="technology"
      className="pt-16 md:pt-24 pb-20 md:pb-28 bg-white"
    >
      {/* STANDARDIZED TEXT */}
      <ContentBlock
        label="Technology"
        title="Scientific precision at scale."
        description="Our proprietary MRV (Monitoring, Reporting, and Verification) platform leverages remote sensing and machine learning to ensure every carbon credit is high-quality, transparent, and traceable."
      />

      {/* FEATURES GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Feature 1 */}
          <div className="flex flex-col items-start p-6 border-l border-gray-100 hover:border-forest-900 transition-colors duration-300">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm mb-6 text-forest-900">
              <Scan size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Remote Sensing
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Satellite imagery and drone data provide real-time monitoring of
              biomass growth and soil moisture levels across millions of hectares.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start p-6 border-l border-gray-100 hover:border-forest-900 transition-colors duration-300">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm mb-6 text-forest-900">
              <BarChart3 size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Data Modeling
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Advanced AI models correlate ground-truth samples with spectral data
              to calculate carbon sequestration with high confidence intervals.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start p-6 border-l border-gray-100 hover:border-forest-900 transition-colors duration-300">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm mb-6 text-forest-900">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Auditable Registry
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Immutable records of every project ensure complete transparency
              for buyers and fair compensation for farming partners.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technology;
