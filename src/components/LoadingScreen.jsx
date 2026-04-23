import React from 'react';
import { Shield } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-primary/10 border-t-primary rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-primary">
          <Shield size={32} />
        </div>
      </div>
      <h2 className="mt-6 text-xl font-bold text-gray-800 animate-pulse">TPMS Dashboard</h2>
      <p className="text-gray-400 text-sm mt-2">Initializing secure connection...</p>
    </div>
  );
};

export default LoadingScreen;
