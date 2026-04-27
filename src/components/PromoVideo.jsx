import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ShieldCheck, Activity, Smartphone, Monitor, ChevronRight, Play, Apple, X } from 'lucide-react';

const scenes = [
  {
    id: 'intro',
    title: 'Introducing TPMS',
    subtitle: 'The ultimate solution for the telecom sector. Real-time status updates, security and efficiency.',
    image: '/images/mobile-splash.jpeg',
    bgColor: 'bg-slate-900',
  },
  {
    id: 'benefits',
    title: 'Complete Site Control',
    subtitle: 'Real-time site status updates, theft alarms, and energy consumption analysis.',
    image: '/images/mobile-dash.jpeg',
    bgColor: 'bg-[#005580]',
  },
  {
    id: 'dashboard',
    title: 'Web & Mobile Dashboard',
    subtitle: 'Comprehensive analytics and live site monitoring in one place.',
    image: '/images/web-dashboard.png', // Using web dashboard for better visibility as requested
    bgColor: 'bg-[#004466]',
  },
  {
    id: 'features',
    title: 'Stay Updated. Stay Secure.',
    subtitle: 'All your telecom data in one place.',
    image: '/images/tpms-app.jpg',
    bgColor: 'bg-slate-900',
  },
  {
    id: 'download',
    title: 'Download Now',
    subtitle: 'Available on Play Store & App Store',
    image: '/images/mobile-dash.jpeg',
    bgColor: 'bg-blue-600',
  }
];

const PromoVideo = ({ onClose }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1);
      } else {
        // Loop or stop
        // setCurrentScene(0); 
      }
    }, 4000); // 4 seconds per scene

    return () => clearTimeout(timer);
  }, [currentScene, isPaused]);

  const scene = scenes[currentScene];

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      {/* Floating Logo (Top Left) */}
      <div className="absolute top-8 left-8 z-[110]">
        <img 
          src="/images/logo_new.png" 
          alt="Company Logo" 
          className="h-20 w-auto object-contain" 
        />
      </div>

      {/* Background Gradient */}
      <motion.div 
        key={scene.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`absolute inset-0 transition-colors duration-1000 ${scene.bgColor}`}
      />

      {/* Floating Particles/Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={scene.id + 'text'}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 font-bold text-sm tracking-widest uppercase mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                STPL TPMS App
              </motion.div>
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1] drop-shadow-2xl">
                {scene.title}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100/80 font-light max-w-xl mx-auto lg:mx-0">
                {scene.subtitle}
              </p>

              {/* Specific CTA for Download Scene */}
              {scene.id === 'download' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4"
                >
                  <a href="https://play.google.com/store/apps/details?id=com.shroti.tpmsapp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl border border-white/20 hover:bg-white hover:text-black transition-all">
                    <Play size={24} fill="currentColor" />
                    <div className="text-left leading-none">
                      <div className="text-[10px] uppercase font-bold opacity-60">Get it on</div>
                      <div className="text-xl font-bold">Google Play</div>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition-all">
                    <Apple size={24} fill="currentColor" />
                    <div className="text-left leading-none">
                      <div className="text-[10px] uppercase font-bold opacity-60">Download on the</div>
                      <div className="text-xl font-bold">App Store</div>
                    </div>
                  </a>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Section (Anti-Gravity Floating Phone) */}
        <div className="flex-1 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={scene.id + 'image'}
              initial={{ opacity: 0, scale: 0.8, rotateY: 30, y: 100 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotateY: 0, 
                y: 0,
                rotateX: [0, 5, 0, -5, 0],
                rotateZ: [0, 2, 0, -2, 0],
              }}
              exit={{ opacity: 0, scale: 1.2, y: -100 }}
              transition={{ 
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                rotateY: { duration: 0.8 },
                y: { duration: 0.8 },
                rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative w-64 lg:w-80"
            >
              {/* Phone Frame Glass Effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-white/20 to-transparent rounded-[3rem] blur-xl" />
              <div className="relative bg-slate-900 p-3 rounded-[3rem] shadow-2xl border-4 border-white/10 ring-1 ring-white/20">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20" />
                <img 
                  src={scene.image} 
                  alt="App Screen" 
                  className="w-full h-auto rounded-[2.5rem] aspect-[9/19] object-cover"
                />
              </div>

              {/* Floating Badges around phone */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute -top-10 -right-10 bg-blue-500 text-white p-4 rounded-2xl shadow-xl border border-white/20"
              >
                <ShieldCheck size={32} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 -left-16 bg-teal-500 text-white p-4 rounded-2xl shadow-xl border border-white/20"
              >
                <Activity size={32} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Close/Controls */}
      <div className="absolute top-8 right-8 flex gap-4 z-50">
        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md border border-white/20 transition-all"
        >
          {isPaused ? <Play size={24} /> : <div className="flex gap-1"><div className="w-1.5 h-6 bg-white" /><div className="w-1.5 h-6 bg-white" /></div>}
        </button>
        <button 
          onClick={onClose}
          className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md border border-white/20 transition-all"
        >
          <X size={24} />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {scenes.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentScene ? 'w-12 bg-white' : 'w-3 bg-white/30'}`}
          />
        ))}
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-50 opacity-50">
        <div className="text-white">
          <p className="text-xs font-bold uppercase tracking-widest">Shroti Telecom Pvt. Ltd.</p>
          <p className="text-[10px] opacity-60">Smart Monitoring. Better Control.</p>
        </div>
        <div className="text-white text-right hidden sm:block">
          <p className="text-xs font-bold">STPL TPMS APP</p>
          <p className="text-[10px] opacity-60">Available Worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default PromoVideo;
