import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: 'https://shroti.in' },
    { 
      name: 'Company', 
      href: '#',
      dropdown: [
        { name: 'About Us', href: 'https://shroti.in/about-us' },
        { name: 'Leadership', href: 'https://shroti.in/leadership' },
        { name: 'Presence', href: 'https://shroti.in/presence' },
        { name: 'Awards & Recognitions', href: 'https://shroti.in/awards' },
        { name: 'Journey', href: 'https://shroti.in/journey' },
        { name: 'Career', href: 'https://shroti.in/career' },
      ]
    },
    { 
      name: 'Services', 
      href: '#',
      dropdown: [
        { name: 'Project Management', href: 'https://shroti.in/services/pm' },
        { name: 'Operation & Maintenance', href: 'https://shroti.in/services/om' },
        { name: 'Security Operations Center', href: '#soc' },
      ]
    },
    { 
      name: 'Products', 
      href: '#',
      dropdown: [
        { name: 'TPMS', href: '#home' },
        { name: 'TPIAMS', href: 'https://shroti.in/products/tpiams' },
        { name: 'IAMS', href: 'https://shroti.in/products/iams' },
        { name: 'RMS', href: 'https://shroti.in/products/rms' },
        { name: '4G LTE GSM Modem', href: 'https://shroti.in/products/modem' },
        { name: 'DC To DC Converters', href: 'https://shroti.in/products/converters' },
      ]
    },
    { name: 'Industries', href: 'https://shroti.in/industries' },
    { name: 'Customers', href: 'https://shroti.in/customers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src="./images/new_logo.jpg"
              alt="Shroti Telecom Logo"
              className="h-14 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-[#1e3a5f] leading-none tracking-tight">Shroti Telecom</span>
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-[0.2em] mt-1">Innovating Security</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                </a>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 py-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block px-6 py-2.5 text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <a 
              href="#contact" 
              className="ml-6 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get A Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold">Demo</a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={item.dropdown ? (e) => { e.preventDefault(); setActiveDropdown(activeDropdown === item.name ? null : item.name) } : () => setIsOpen(false)}
                  className="flex justify-between items-center px-4 py-3 rounded-xl text-base font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={20} className={activeDropdown === item.name ? 'rotate-180' : ''} />}
                </a>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="ml-4 mt-2 space-y-1 bg-gray-50 rounded-xl p-2">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-2.5 text-sm font-semibold text-gray-500 hover:text-blue-600"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
