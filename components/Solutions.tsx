import React from 'react';
import { ProjectCard } from '../types';
import { ArrowRight } from 'lucide-react';
import ContentBlock from './ContentBlock';

const projects: ProjectCard[] = [
  {
    title: 'Agroforestry Systems',
    category: 'Carbon Removal',
    description:
      'Integrating trees into crop and animal farming systems to enhance productivity and sequester carbon.',
    imageUrl:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Biochar Production',
    category: 'Soil Enhancement',
    description:
      'Converting agricultural waste into stable carbon that enriches soil and remains locked for centuries.',
    imageUrl:
      'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Wetland Restoration',
    category: 'Biodiversity',
    description:
      'Revitalizing critical wetland ecosystems to filter water, support wildlife, and store massive amounts of carbon.',
    imageUrl:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
  },
];

const Solutions: React.FC = () => {
  return (
    <section
      id="solutions"
      className="pt-16 md:pt-24 pb-20 md:pb-28 bg-gray-50"
    >
      {/* STANDARDIZED TEXT */}
      <ContentBlock
        label="Our Solutions"
        title="Comprehensive nature-based interventions."
        description="We design and implement scalable, science-backed solutions that deliver durable carbon removal and ecosystem benefits."
      />

      {/* CTA + GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="flex justify-end mb-8">
          <a
            href="#"
            className="group inline-flex items-center text-forest-900 font-medium hover:text-forest-800 transition-colors"
          >
            View all projects
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 hover:border-forest-100 hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <span className="text-xs font-semibold text-forest-800 uppercase tracking-wide mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-forest-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="w-8 h-px bg-gray-200 group-hover:w-full group-hover:bg-forest-900 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
