import React from 'react';

interface ContentBlockProps {
  label?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  label,
  title,
  description,
  children,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">

        {/* Section label */}
        {label && (
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
            {label}
          </p>
        )}

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {description}
          </p>
        )}

        {/* Body content */}
        {children && (
          <div className="space-y-6 text-gray-700 leading-relaxed">
            {children}
          </div>
        )}

      </div>
    </div>
  );
};

export default ContentBlock;
