import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 font-poppins">
      <Sidebar />
      <main className="flex-1 lg:ml-64 transition-all duration-300">
        <div className="p-4 md:p-8 max-w-7xl mx-auto min-h-screen animate-fade-up">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
