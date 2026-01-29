import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Tech', href: '#ourtech' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Navbar bg on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/70 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-700 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-white font-bold text-xl">
                TerraForm
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-200 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button (RIGHT, LIGHT COLOR) */}
            <button
              className="md:hidden text-slate-100"
              onClick={() => setOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU (LIGHT BG) */}
      <div
        className={`
          fixed inset-0 z-[60]
          bg-[#f3f6f2]
          transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
          ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'}
        `}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-gray-800"
          onClick={() => setOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Centered Menu Items */}
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`
                text-2xl font-semibold text-gray-900 tracking-wide
                transition-all duration-500
                ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
