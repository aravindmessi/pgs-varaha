import React from 'react';
import ContentBlock from './ContentBlock';

const Mission: React.FC = () => {
  return (
    <section
      id="mission"
      className="pt-16 md:pt-24 pb-20 md:pb-28"
      style={{
        background: `
          linear-gradient(
            to bottom,
            rgba(15, 23, 20, 0.92) 0%,
            rgba(20, 28, 24, 0.96) 60%,
            rgba(24, 32, 28, 1) 100%
          )
        `,
      }}
    >
      {/* 🔥 COLOR OVERRIDE WRAPPER */}
      <div
        className="
          [&_p]:text-gray-200
          [&_h2]:text-white
          [&_p.uppercase]:text-emerald-300/80
        "
      >
        <ContentBlock
          label="Our Mission"
          title="Reversing climate change, one acre at a time."
          description="pgs-varaha operates at the intersection of climate science, agronomy, and technology to scale nature-based carbon removal."
        >
          <p>
            We believe the most effective technology for carbon removal has existed
            for millions of years — nature itself.
          </p>

          <p>
            By partnering with local communities, we implement regenerative
            agricultural practices that restore soil health, increase biodiversity,
            and permanently sequester atmospheric carbon.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/15">
            <div>
              <h4 className="text-white font-semibold mb-1">
                Global Reach
              </h4>
              <p className="text-sm text-gray-300">
                Operating across 3 continents
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-1">
                Scientific Rigor
              </h4>
              <p className="text-sm text-gray-300">
                Verified by global standards
              </p>
            </div>
          </div>
        </ContentBlock>
      </div>

      {/* IMAGE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 md:mt-20">
        <div className="relative max-w-3xl">
          <div className="aspect-[4/3] overflow-hidden bg-black/20">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt="Regenerative agriculture field"
              className="w-full h-full object-cover opacity-95"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-black/70 text-white p-6 max-w-xs hidden md:block backdrop-blur-sm shadow-xl">
            <p className="text-lg font-light italic">
              “Healthy soil is the foundation of a healthy planet.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
