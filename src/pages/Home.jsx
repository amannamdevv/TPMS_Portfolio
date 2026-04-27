import React, { useState } from 'react';
import { tpmsData } from '../data/tpmsData';
import {
  ShieldAlert, Activity, Zap, Settings, MessageCircle, Mic, HeartPulse,
  Radio, Cpu, Wifi, Cloud, Monitor, Server, WifiOff, AlertTriangle, Battery, ShieldCheck,
  Phone, Mail, MapPin, ExternalLink, ChevronRight, CheckCircle2, Download, Play
} from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from '../components/CountUp';

const icons = {
  ShieldAlert: <ShieldAlert size={32} />, Activity: <Activity size={32} />, Zap: <Zap size={32} />,
  Settings: <Settings size={32} />, MessageCircle: <MessageCircle size={32} />, Mic: <Mic size={32} />,
  HeartPulse: <HeartPulse size={32} />, Radio: <Radio size={32} />, Cpu: <Cpu size={32} />,
  Wifi: <Wifi size={32} />, Cloud: <Cloud size={32} />, Monitor: <Monitor size={32} />,
  Server: <Server size={40} />, WifiOff: <WifiOff size={40} />
};

const featureDescriptions = {
  "Theft Detection": "Battery, solar panel & equipment theft detection with instant hooter activation.",
  "Real-Time Monitoring": "Live status of all connected sites with second-by-second data refresh.",
  "WhatsApp Alerts": "Instant alarm notifications on WhatsApp with site details & images.",
  "Voice Alerts": "Automated robo-call alerts to escalation contacts for critical alarms.",
  "Self Health Monitoring": "TPMS device continuously monitors its own health & reports anomalies."
};

const Home = ({ onWatchVideo }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#1e3a8a 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}></div>



      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section id="home" className="relative pt-20 pb-20 lg:pt-32 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <video autoPlay loop muted playsInline poster="/images/telecom-tower.jpg" className="w-full h-full object-cover opacity-60">
            <source src="./videos/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
          {/* Logo overlay on Hero Video */}
          <div className="absolute top-8 left-8 z-20">
            <img 
              src="/images/logo_new.png" 
              alt="STPL Logo" 
              className="h-20 w-auto object-contain opacity-100"
            />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-green-200">21,976+ Sites Monitored Live</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
              TPMS – Theft Prevention Management System
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 mb-10 font-light leading-relaxed max-w-2xl">
              Smart IoT-based Security & Monitoring Platform for Telecom Infrastructure
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button 
                onClick={onWatchVideo}
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-xl group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Play size={20} fill="currentColor" />
                </div>
                Watch Promo Video
              </button>
              <a href="/TPMS_Datasheet.pdf" download="TPMS_Datasheet_ShrotiTelecom.pdf" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl transition-all border border-white/20 shadow-xl">
                <Download size={20} /> Download Datasheet
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-bold py-4 px-8 rounded-xl transition-all">
                Explore Solution <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS SECTION ═══════════════════ */}
      <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tpmsData.stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {icons[stat.icon] || <Activity size={32} />}
                </div>
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-2">
                <CountUp endString={stat.value} />
              </h3>
              <p className="text-gray-500 font-semibold uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ SECTION 1: THEFT PREVENTION MANAGEMENT SYSTEM ═══════════════════ */}
      <section className="py-20 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-blue-900 leading-tight">
                Theft Prevention Management System
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                {tpmsData.aboutShroti}
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/images/tpms_img.png" 
                alt="TPMS Official Product Label" 
                className="w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 2: ADVANCED SECURITY SOLUTION ═══════════════════ */}
      <section className="py-20 bg-gradient-to-b from-white/80 to-blue-50/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <img 
                src="/images/tpms_securty_details.png" 
                alt="TPMS Security Details" 
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
            <div className="flex-1 order-1 lg:order-2 space-y-6">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                {tpmsData.detailedIntro}
              </p>
            </div>
          </div>
        </div>
      </section>






      {/* ═══════════════════ ALARM SYSTEM ═══════════════════ */}
      <section id="alarms" className="py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-bold text-sm tracking-wider uppercase mb-4">Security</div>
            <h2 className="text-4xl font-black text-gray-900 mb-6">Comprehensive Alarm System</h2>
            <p className="text-lg text-gray-600">Proactive detection across theft, power, and system vulnerabilities — covering every risk scenario.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-red-100 text-red-600 p-3 rounded-xl"><ShieldAlert size={28} /></div>
                <h3 className="text-2xl font-bold text-red-900">Theft Alarms</h3>
              </div>
              <ul className="space-y-3">
                {tpmsData.alarms.theft.map((alarm, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-red-50/50 p-4 rounded-xl border border-red-50 hover:border-red-200 transition-colors">
                    <AlertTriangle size={18} className="text-red-500 shrink-0" />
                    <span className="font-semibold text-gray-800">{alarm}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-orange-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-xl"><Battery size={28} /></div>
                <h3 className="text-2xl font-bold text-orange-900">System & Power Alarms</h3>
              </div>
              <ul className="space-y-3">
                {tpmsData.alarms.system.map((alarm, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-orange-50/50 p-4 rounded-xl border border-orange-50 hover:border-orange-200 transition-colors">
                    <Zap size={18} className="text-orange-500 shrink-0" />
                    <span className="font-semibold text-gray-800">{alarm}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Alerting Features */}
          <div className="mt-12 bg-slate-900 p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">Intelligent Alerting Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {tpmsData.alarms.features.map((feature, idx) => (
                <div key={idx} className="bg-white/10 hover:bg-white/15 p-5 rounded-xl text-center border border-white/10 transition-colors">
                  <span className="font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calling System Image */}
          <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Level Escalation System</h3>
              <p className="text-gray-600 leading-relaxed">When an alarm is triggered, TPMS instantly activates the hooter, sends WhatsApp alerts, makes automated robo-calls, and escalates through L1 to L5 contacts until the issue is resolved.</p>
            </div>
            <div className="flex-1">
              <img src="/images/calling-system.png" alt="Calling System" className="w-full max-w-sm mx-auto rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ARCHITECTURE SECTION ═══════════════════ */}
      <section id="architecture" className="py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-bold text-sm tracking-wider uppercase mb-4">System Design</div>
            <h2 className="text-4xl font-black mb-6">5-Layer Architecture</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">A robust, scalable framework ensuring end-to-end security and real-time data transmission from field to cloud.</p>
          </div>

          {/* Architecture Diagram - User's new image */}
          <div className="bg-white rounded-3xl p-3 shadow-2xl mb-16 max-w-5xl mx-auto">
            <img src="/images/5_layer_architecture.png" alt="TPMS Architecture Diagram" className="w-full rounded-2xl" />
          </div>

          {/* Layer Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tpmsData.architecture.map((layer, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group">
                <div className="text-3xl font-black text-blue-400/40 mb-3">{layer.layer}</div>
                <div className="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {icons[layer.icon] || <Cloud size={24} />}
                </div>
                <h4 className="font-bold text-lg mb-1">{layer.name}</h4>
                <p className="text-sm text-blue-200/70">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SOC MONITORING ═══════════════════ */}
      <section id="soc" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 font-bold text-sm tracking-wider uppercase mb-4">Security</div>
          <h2 className="text-4xl font-black text-gray-900 mb-6">SOC Monitoring</h2>
          <p className="text-lg text-gray-600">24x7 security operations center for uninterrupted site management and rapid response.</p>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"><Monitor size={24} /></div>
            <h3 className="text-2xl font-black text-gray-900">SOC Monitoring</h3>
          </div>
          <img src="/images/soc.png" alt="SOC Monitoring" className="w-full rounded-xl mb-8 border border-gray-100 object-cover h-[400px]" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tpmsData.soc.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/50 border border-blue-50 group hover:bg-blue-600 hover:text-white transition-all duration-300">
                <CheckCircle2 size={18} className="text-blue-600 group-hover:text-white shrink-0" />
                <span className="font-semibold text-gray-700 group-hover:text-white">{item}</span>
              </li>
            ))}
            <li className="flex items-center gap-3 p-4 rounded-xl bg-green-50/50 border border-green-50 md:col-span-2">
              <MessageCircle size={18} className="text-green-600 shrink-0" />
              <span className="font-bold text-green-800">Dedicated WhatsApp Alert Group for SOC Team</span>
            </li>
          </ul>
        </div>
      </section>
 
       {/* ═══════════════════ REAL-TIME WHATSAPP ALERTS ═══════════════════ */}
       <section className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur opacity-20"></div>
               <img 
                 src="/images/tpms_whatsapp_notification.png" 
                 alt="WhatsApp Alarm Notification" 
                 className="relative w-full rounded-2xl shadow-2xl border border-gray-100" 
               />
               <div className="absolute bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-2xl animate-bounce">
                 <MessageCircle size={20} /> Live Notification
               </div>
             </div>
             <div className="order-1 lg:order-2 space-y-8">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-bold text-sm tracking-wider uppercase">
                 Instant Communication
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                 WhatsApp & Voice Alert System
               </h2>
               <p className="text-xl text-gray-600 leading-relaxed">
                 When a critical alarm is triggered, TPMS doesn't just record it—it ensures the right person is notified instantly. We deliver detailed **WhatsApp alerts** directly to your SOC team and field technicians.
               </p>
               <div className="grid grid-cols-1 gap-6">
                 <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                   <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                     <CheckCircle2 size={24} />
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900">Comprehensive Alarm Details</h4>
                     <p className="text-gray-600">Site ID (e.g., PANIHAR), alarm type, and technician contact info are all included in one message.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                   <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                     <Phone size={24} />
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900">Auto-Escalation Calls</h4>
                     <p className="text-gray-600">Automated robo-calls to L1-L5 escalation contacts ensure no critical alarm goes unaddressed.</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* ═══════════════════ DIGITAL ECOSYSTEM (WEB & MOBILE) ═══════════════════ */}
      <section id="digital-platforms" className="py-28 bg-slate-900 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-bold text-sm tracking-wider uppercase mb-4">Software Interfaces</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Cross-Platform Control</h2>
            <p className="text-xl text-blue-200/80">Monitor your entire telecom infrastructure from our comprehensive Web Dashboard or manage alerts on-the-go with our Mobile App.</p>
          </div>

          <div className="flex flex-col gap-24 items-center">

            {/* Web Dashboard Side */}
            <div className="w-full group">
              <div className="relative transform transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
                  <img
                    src="/images/web-dashboard.png"
                    alt="Web Dashboard"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Mobile App Side */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 relative mt-10">
              {/* Phone 1 (Splash) */}
              <div className="relative w-64 md:w-80 transform -rotate-3 hover:rotate-0 hover:-translate-y-4 transition-all duration-500 z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-[3rem] blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl border-2 border-slate-700">
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-2xl z-20"></div>
                  <img
                    src="/images/mobile-splash.jpeg"
                    alt="Mobile App Splash"
                    className="w-full rounded-[2.2rem] aspect-[9/19] object-cover bg-slate-900"
                  />
                </div>
              </div>

              {/* Phone 2 (Dashboard) */}
              <div className="relative w-64 md:w-80 transform rotate-3 hover:rotate-0 hover:-translate-y-4 transition-all duration-500 z-0 group">
                <div className="absolute -inset-1 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-[3rem] blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl border-2 border-slate-700">
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-2xl z-20"></div>
                  <img
                    src="/images/mobile-dash.jpeg"
                    alt="Mobile App Dashboard"
                    className="w-full rounded-[2.2rem] aspect-[9/19] object-cover bg-slate-900"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 3: FEATURES AND BENEFITS (Interactive) ═══════════════════ */}
      <section className="py-20 bg-white/90 backdrop-blur-md border-y border-blue-100/50 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => toggleSection('features')}
            className="w-full flex items-center justify-between group py-4 border-b-2 border-transparent hover:border-blue-600 transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-blue-900">
              Features and Benefits
            </h2>
            <div className={`transform transition-transform duration-300 ${expandedSection === 'features' ? 'rotate-180' : ''}`}>
              <ChevronRight size={32} className="text-blue-600" />
            </div>
          </button>
          
          <motion.div 
            initial={false}
            animate={{ height: expandedSection === 'features' ? 'auto' : 0, opacity: expandedSection === 'features' ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="pt-12 space-y-12">
              {tpmsData.detailedFeatures.map((feat, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-800 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-blue-600" />
                    {feat.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-7">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {expandedSection !== 'features' && (
            <p className="mt-4 text-sm text-blue-600 font-bold animate-pulse cursor-pointer" onClick={() => toggleSection('features')}>
              Click to view all features & benefits...
            </p>
          )}
        </div>
      </section>

      {/* ═══════════════════ SECTION 4: WHY CHOOSE TPMS? (Interactive) ═══════════════════ */}
      <section className="py-20 bg-gradient-to-b from-white/90 to-blue-50/30 backdrop-blur-md border-b border-blue-100/50 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => toggleSection('why-choose')}
            className="w-full flex items-center justify-between group py-4 border-b-2 border-transparent hover:border-blue-600 transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-blue-900">
              Why Choose TPMS?
            </h2>
            <div className={`transform transition-transform duration-300 ${expandedSection === 'why-choose' ? 'rotate-180' : ''}`}>
              <ChevronRight size={32} className="text-blue-600" />
            </div>
          </button>

          <motion.div 
            initial={false}
            animate={{ height: expandedSection === 'why-choose' ? 'auto' : 0, opacity: expandedSection === 'why-choose' ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="pt-12 space-y-12">
              {tpmsData.whyChooseTPMS.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-800 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-blue-600" />
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {expandedSection !== 'why-choose' && (
            <p className="mt-4 text-sm text-blue-600 font-bold animate-pulse cursor-pointer" onClick={() => toggleSection('why-choose')}>
              Click to learn more about why TPMS is the best choice...
            </p>
          )}
        </div>
      </section>

      {/* ═══════════════════ SECTION 5: GET STARTED WITH TPMS TODAY ═══════════════════ */}
      <section className="py-24 bg-white/90 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
            Get Started with TPMS Today
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-blue-600 pl-8 text-left py-4 bg-gray-50 rounded-r-xl">
            {tpmsData.getStartedQuote}
          </p>
          <div className="mt-12">
            <button 
              onClick={onWatchVideo}
              className="bg-blue-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
            >
              Watch Video Presentation
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CLIENTS ═══════════════════ */}
      <section id="clients" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary font-bold text-sm tracking-wider uppercase mb-4">Partners</div>
          <h2 className="text-4xl font-black text-gray-900 mb-16">Trusted by Industry Leaders</h2>

          <div className="relative overflow-hidden py-10">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="animate-marquee flex gap-6 items-center">
              {[...tpmsData.clients, ...tpmsData.clients].map((client, idx) => {
                const clientLogos = {
                  "Airtel": "/logos/airtel.png",
                  "Vodafone": "/logos/vodafone.png",
                  "Tata Communication": "/logos/tata.png",
                  "Indus Towers": "/logos/indus.png",
                  "Husk Power": "/logos/husk_power.png",
                  "Tower Vision": "/logos/tower_vision.png",
                  "Unity Digital": "/logos/unity_digital.png",
                  "Cloud Extel": "/logos/cloud_extel.png",
                  "Crest Digitel": "/logos/crest_digitel.png",
                  "Genius Tele Infra": "/logos/genius_tele.png",
                };

                return (
                  <div key={idx} className="w-72 h-40 bg-white border-2 border-gray-100 rounded-3xl flex items-center justify-center p-6 hover:border-blue-400 hover:shadow-[0_8px_40px_rgba(59,130,246,0.25)] hover:scale-105 transition-all duration-400 cursor-default shrink-0 shadow-md">
                    <img
                      src={clientLogos[client]}
                      alt={client}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.closest('div').style.display = 'none';
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-10">Our Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {tpmsData.achievements.map((ach, idx) => (
                <div key={idx} className="p-4">
                  <h4 className="text-4xl md:text-5xl font-black mb-2">
                    <CountUp endString={ach.title} />
                  </h4>
                  <p className="text-blue-100 font-bold uppercase tracking-wider text-sm">{ach.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT & FOOTER SECTION (Datasheet Style) ═══════════════════ */}
      <section id="contact" className="bg-[#0b1320] pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

            {/* Column 1 */}
            <div>
              <h4 className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-6">Website & Email</h4>
              <ul className="space-y-2 text-blue-200/70 text-sm">
                <li><a href="https://www.shroti.in" className="text-orange-500 hover:text-orange-400 transition-colors">www.shroti.in</a></li>
                <li><a href="mailto:shroti@shroti.in" className="hover:text-blue-200 transition-colors">shroti@shroti.in</a></li>
                <li><a href="mailto:sanjay.mishra@shroti.in" className="hover:text-blue-200 transition-colors">sanjay.mishra@shroti.in</a></li>
                <li><a href="mailto:subodh@shroti.in" className="hover:text-blue-200 transition-colors">subodh@shroti.in</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-6">Phone & WhatsApp</h4>
              <ul className="space-y-2 text-blue-200/70 text-sm">
                <li>Sanjay Mishra: +91 70218 85300</li>
                <li>Manish Shroti: +91 97555 04201</li>
                <li>Subodh Kumar: +91 96911 10617</li>
                <li>Support: 07556 576005 / 576002</li>
                <li>WhatsApp: +91 97555 22181</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-6">Registered Office</h4>
              <a
                href="https://maps.google.com/?q=S-17,+Thaddaram+Complex,+M.P.+Nagar+Zone-I,+Bhopal,+Madhya+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 text-blue-200/70 text-sm leading-relaxed hover:text-blue-200 transition-colors"
              >
                <MapPin size={18} className="shrink-0 mt-0.5 text-orange-500 group-hover:scale-110 transition-transform" />
                <span>
                  S-17, Thaddaram Complex,<br />
                  M.P. Nagar Zone-I,<br />
                  Bhopal, Madhya Pradesh
                </span>
              </a>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-6">Corporate Office</h4>
              <a
                href="https://maps.google.com/?q=113,+Sundar+Nagar,+Ayodhya+Bypass,+Raisen+Road,+Bhopal+-+462022,+(M.P.)"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 text-blue-200/70 text-sm leading-relaxed hover:text-blue-200 transition-colors"
              >
                <MapPin size={18} className="shrink-0 mt-0.5 text-orange-500 group-hover:scale-110 transition-transform" />
                <span>
                  113, Sundar Nagar,<br />
                  Ayodhya Bypass, Raisen Road,<br />
                  Bhopal - 462022, (M.P.)
                </span>
              </a>
            </div>

          </div>
        </div>

        {/* Footer Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-6 border-t border-[#1a2538] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-blue-200/50 tracking-wider">
            <div>
              © {new Date().getFullYear()} Shroti Telecom Pvt. Ltd. All Rights Reserved
              <a href="https://www.shroti.in" className="ml-4 hover:text-blue-200 transition-colors">www.shroti.in</a>
            </div>
            <div>
              TPMS-DS-V7.0-{new Date().getFullYear()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
