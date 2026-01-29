import React from 'react';
import { Scan, BarChart3, ShieldCheck } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-forest-800 font-semibold tracking-wider text-sm uppercase mb-3 block">
            Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Scientific precision at scale.
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Our proprietary MRV (Monitoring, Reporting, and Verification) platform leverages remote sensing and machine learning to ensure every carbon credit is high-quality, transparent, and traceable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          <div className="flex flex-col items-start p-6 border-l border-gray-100 hover:border-forest-900 transition-colors duration-300">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm mb-6 text-forest-900">
              <Scan size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Remote Sensing</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Satellite imagery and drone data provide real-time monitoring of biomass growth and soil moisture levels across millions of hectares.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 border-l border-gray-100 hover:border-forest-900 transition-colors duration-300">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm mb-6 text-forest-900">
              <BarChart3 size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Data Modeling</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Advanced AI models correlate ground-truth samples with spectral data to calculate carbon sequestration with high confidence intervals.
            </p>
          </div>

          <div className="flex flex-col items-start p-6 border-l border-gray-100 hover:border-forest-900 transition-colors duration-300">
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm mb-6 text-forest-900">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Auditable Registry</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Immutable records of every project ensure complete transparency for buyers and fair compensation for farming partners.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technology;