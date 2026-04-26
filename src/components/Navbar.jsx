import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'TPMS Solution', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Alarm System', href: '#alarms' },
    { name: 'Energy Monitoring', href: '#energy' },
    { name: 'SOC Monitoring', href: '#soc' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section - Using Exact Uploaded Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-white p-1 rounded-full shadow-sm border border-blue-50">
              <img
                src="./images/logo.png"
                alt="Shroti Telecom Logo"
                className="h-12 w-12 object-contain rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-black text-2xl bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent tracking-tight block leading-none">TPMS</span>
              <span className="text-[11px] text-gray-500 font-bold uppercase tracking-widest block mt-1">Shroti Telecom</span>
            </div>
          </div>

          {/* Desktop Menu — big gap from logo */}
          <div className="hidden lg:flex items-center gap-6 ml-60">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
