import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Info, Shield, Layers, Cpu, Server, 
  Battery, Bell, Eye, Briefcase, Award, Mail, Menu, X, 
  Zap, BarChart3, Sun, Factory
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'About TPMS', path: '/about', icon: <Info size={20} /> },
    { name: 'Features', path: '/features', icon: <Shield size={20} /> },
    { name: 'Architecture', path: '/architecture', icon: <Layers size={20} /> },
    { name: 'Hardware', path: '/hardware', icon: <Cpu size={20} /> },
    { name: 'Dashboard System', path: '/system', icon: <Server size={20} /> },
    { name: 'Energy Management', path: '/energy', icon: <Zap size={20} /> },
    { name: 'Alarm System', path: '/alarms', icon: <Bell size={20} /> },
    { name: 'SOC Monitoring', path: '/soc', icon: <Eye size={20} /> },
    { name: 'Applications', path: '/applications', icon: <Briefcase size={20} /> },
    { name: 'Achievements', path: '/achievements', icon: <Award size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-primary text-white rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-primary-darker to-primary shadow-inner">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white p-2 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src="/src/assets/images/logo.png" alt="Shroti Telecom Logo" className="w-12 object-contain" />
              </div>
              <div>
                <h1 className="font-bold text-xl leading-none tracking-wide text-white drop-shadow-md">TPMS</h1>
                <p className="text-[10px] text-accent-light mt-1 font-semibold uppercase tracking-widest drop-shadow-sm">Shroti Telecom</p>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                      flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                      ${isActive 
                        ? 'bg-primary-light text-primary border-r-4 border-primary' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}
                    `}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                ST
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800">Shroti Telecom</p>
                <p className="text-[10px] text-gray-500">ISO 9001:2015</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
