import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  icon,
  align = 'center',
}) => {
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} w-full mb-10`}>
      {icon && <div className="mb-3">{icon}</div>}
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">{title}</h2>
      
      {/* Decorative line */}
      <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 to-transparent my-4 mx-auto" />
      
      {subtitle && (
        <p className="text-base md:text-lg text-gray-300 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading; 