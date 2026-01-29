import React from 'react';
import { ProjectCard } from '../types';
import { ArrowRight } from 'lucide-react';

const projects: ProjectCard[] = [
  {
    title: "Agroforestry Systems",
    category: "Carbon Removal",
    description: "Integrating trees into crop and animal farming systems to enhance productivity and sequester carbon.",
    imageUrl: "https://picsum.photos/seed/forest003/600/400"
  },
  {
    title: "Biochar Production",
    category: "Soil Enhancement",
    description: "Converting agricultural waste into stable carbon that enriches soil and remains locked for centuries.",
    imageUrl: "https://picsum.photos/seed/soil004/600/400"
  },
  {
    title: "Wetland Restoration",
    category: "Biodiversity",
    description: "Revitalizing critical wetland ecosystems to filter water, support wildlife, and store massive amounts of carbon.",
    imageUrl: "https://picsum.photos/seed/water005/600/400"
  }
];

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-forest-800 font-semibold tracking-wider text-sm uppercase mb-3 block">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Comprehensive nature-based interventions.
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center text-forest-900 font-medium hover:text-forest-800 transition-colors">
            View all projects <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white border border-gray-100 hover:border-forest-100 hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300">
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