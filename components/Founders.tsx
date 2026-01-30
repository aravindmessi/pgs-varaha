import React from 'react';
import ContentBlock from './ContentBlock';

const founders = [
  {
    name: 'Arjun Reddy',
    role: 'Co-founder & CEO',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Sanjay Kumar',
    role: 'Co-founder & CTO',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328b3d35?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Rahul Mehta',
    role: 'Co-founder & COO',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-founder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Ananya Iyer',
    role: 'Founding Team',
    image: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=800&auto=format&fit=crop',
  },
];

const Founders: React.FC = () => {
  return (
    <section
      id="founders"
      className="pt-14 md:pt-20 pb-16 md:pb-24 bg-white text-gray-900"
    >
      {/* STANDARDIZED TEXT */}
      <ContentBlock
        label="Leadership"
        title="Founders"
        description="Building climate solutions with science, integrity, and long-term impact."
      />

      {/* FOUNDERS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
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
