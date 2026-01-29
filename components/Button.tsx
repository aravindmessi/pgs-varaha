import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white' | 'accent' | 'outline-white';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-colors duration-200 ease-in-out rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-forest-900 text-white hover:bg-forest-800 focus:ring-forest-900",
    secondary: "bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-50 focus:ring-gray-900",
    white: "bg-white text-gray-900 hover:bg-gray-100 focus:ring-white border border-white",
    accent: "bg-[#D4A056] text-white hover:bg-[#c39045] border border-[#D4A056] focus:ring-[#D4A056]",
    "outline-white": "bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;