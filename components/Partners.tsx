import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-12">
          Trusted by global leaders in sustainability
        </p>
        
        {/* Using simple text representations or placeholder SVGs for logos to maintain style without external assets */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Logo Placeholders - mimicking corporate logos */}
           {[1, 2, 3, 4, 5].map((i) => (
             <div key={i} className="flex justify-center">
               <div className="h-8 md:h-10 w-32 bg-gray-200 flex items-center justify-center text-gray-400 text-xs font-bold uppercase">
                  Partner {i}
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;