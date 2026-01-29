import React from 'react';

const Mission: React.FC = () => {
  return (
    <section
      id="mission"
      className="
        pt-14 sm:pt-16 md:pt-24
        pb-20 sm:pb-24 md:pb-32
        text-gray-100
      "
      style={{
        background: `
          linear-gradient(
            to bottom,
            rgba(15, 23, 20, 0.92) 0%,
            rgba(20, 28, 24, 0.96) 60%,
            rgba(24, 32, 28, 1) 100%
          )
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">

          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <span className="text-emerald-300/80 font-semibold tracking-wider text-sm uppercase mb-4 block">
              Our Mission
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Reversing climate change, one acre at a time.
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
              <p>
                TerraForm operates at the intersection of climate science,
                agronomy, and technology. We believe the most effective
                technology for carbon removal has existed for millions of
                years — nature itself.
              </p>
              <p>
                By partnering with local communities, we implement regenerative
                agricultural practices that restore soil health, increase
                biodiversity, and permanently sequester atmospheric carbon.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Global Reach
                  </h4>
                  <p className="text-sm text-gray-400">
                    Operating across 3 continents
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Scientific Rigor
                  </h4>
                  <p className="text-sm text-gray-400">
                    Verified by global standards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] overflow-hidden bg-black/20">
              <img
                src="https://picsum.photos/seed/farmer002/800/600"
                alt="Farmer inspecting soil health"
                className="w-full h-full object-cover opacity-85 transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-black/70 text-white p-6 md:p-8 max-w-xs hidden md:block backdrop-blur-sm shadow-xl">
              <p className="text-xl font-light italic">
                “Healthy soil is the foundation of a healthy planet.”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;
