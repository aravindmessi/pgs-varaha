import React, { useState } from 'react';
import video from '../assets/hero.mp4';

const Hero: React.FC = () => {
  const [openPartner, setOpenPartner] = useState(false);
  const [openCareers, setOpenCareers] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover scale-105"
          poster="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/50 to-stone-950/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center pt-20 max-w-5xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-10">
          Empowering smallholder farmers to remove carbon from the atmosphere
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          {/* Partner Button – Light Golden */}
          <button
            onClick={() => setOpenPartner(true)}
            className="
              px-6 py-3
              bg-amber-200 text-amber-900
              text-sm font-medium
              rounded-md
              hover:bg-amber-300
              transition
            "
          >
            Partner with us
          </button>

          {/* Careers Button */}
          <button
            onClick={() => setOpenCareers(true)}
            className="
              px-6 py-3
              border border-white
              text-white
              text-sm font-medium
              rounded-md
              hover:bg-white hover:text-gray-900
              transition
            "
          >
            Work at pgs-varaha
          </button>
        </div>
      </div>

      {/* ================= PARTNER POPUP ================= */}
      {openPartner && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpenPartner(false)}
          ></div>

          <div className="relative bg-white w-full max-w-md mx-4 p-6 rounded-lg shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Partner with pgs-varaha
              </h2>
              <button
                onClick={() => setOpenPartner(false)}
                className="text-gray-500 hover:text-black text-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-700 text-sm">
              We collaborate with organizations and enterprises to scale
              nature-based carbon removal solutions.
            </p>
          </div>
        </div>
      )}

      {/* ================= CAREERS POPUP ================= */}
      {openCareers && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpenCareers(false)}
          ></div>

          <div className="relative bg-white w-full max-w-md mx-4 p-6 rounded-lg shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Careers at pgs-varaha
              </h2>
              <button
                onClick={() => setOpenCareers(false)}
                className="text-gray-500 hover:text-black text-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-700 text-sm">
              Join us in building real climate solutions with global impact.
            </p>
          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;
