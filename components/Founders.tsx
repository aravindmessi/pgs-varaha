import React from 'react';

const founders = [
  {
    name: 'Founder One',
    role: 'Co-founder & CEO',
    image: 'https://picsum.photos/seed/f1/600/700',
  },
  {
    name: 'Founder Two',
    role: 'Co-founder & CTO',
    image: 'https://picsum.photos/seed/f2/600/700',
  },
  {
    name: 'Founder Three',
    role: 'Co-founder & COO',
    image: 'https://picsum.photos/seed/f3/600/700',
  },
  {
    name: 'Founder Four',
    role: 'Co-founder',
    image: 'https://picsum.photos/seed/f4/600/700',
  },
  {
    name: 'Founder Five',
    role: 'Founding Team',
    image: 'https://picsum.photos/seed/f5/600/700',
  },
];

const Founders: React.FC = () => {
  return (
    <section
      id="founders"
      className="
        pt-6          /* ✅ SMALL SPACE (MOBILE) */
        sm:pt-10
        md:pt-16

        pb-16 md:pb-24
        bg-white
        text-gray-900
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 md:mb-16">
          <span className="text-forest-800 font-semibold tracking-wider text-sm uppercase">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Founders
          </h2>
          <div className="w-16 h-1 bg-amber-400 mt-3 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-md"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-[380px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-lg font-semibold">
                  {founder.name}
                </h3>
                <p className="text-sm text-gray-200">
                  {founder.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Founders;
