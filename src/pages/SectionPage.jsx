import React from 'react';
import { tpmsData } from '../data/tpmsData';
import { 
  Shield, Zap, BarChart, Bell, Radio, Cpu, 
  Layers, Cloud, Headphones, Wifi, Battery, Sun, Factory
} from 'lucide-react';

const icons = {
  Shield: <Shield />, Zap: <Zap />, BarChart: <BarChart />, 
  Bell: <Bell />, Radio: <Radio />, Cpu: <Cpu />,
  Layers: <Layers />, Cloud: <Cloud />, Headphones: <Headphones />,
  Wifi: <Wifi />, Battery: <Battery />, Sun: <Sun />, Factory: <Factory />
};

const SectionPage = ({ section }) => {
  const renderContent = () => {
    switch (section) {
      case 'about':
        return (
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Product Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
                  {tpmsData.overview}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">The Challenge: Remote Site Vulnerabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tpmsData.problems.map((prob, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-primary/30 transition-all group">
                    <div className="w-12 h-12 bg-gray-50 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary rounded-lg flex items-center justify-center mb-4 transition-colors">
                      {/* Using fallback icon for simplicity in mapping */}
                      <Shield size={24} />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{prob.title}</h4>
                    <p className="text-gray-500 text-sm">{prob.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tpmsData.features.map((feat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                    {icons[feat.icon] || <Shield size={28} />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{feat.category}</h3>
                </div>
                <ul className="space-y-4">
                  {feat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-600 group-hover:text-gray-800 transition-colors">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case 'hardware':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Technical Specifications</h3>
              <div className="space-y-0">
                {tpmsData.specs.map((spec, i) => (
                  <div key={i} className={`flex justify-between py-4 ${i !== tpmsData.specs.length - 1 ? 'border-b border-gray-50' : ''}`}>
                    <span className="text-gray-500 font-medium text-sm">{spec.label}</span>
                    <span className="text-gray-800 font-bold text-sm text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-primary-darker p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                <h3 className="text-xl font-bold mb-4 relative z-10">Industrial Reliability</h3>
                <p className="text-primary-light text-sm mb-6 relative z-10">Built for the harshest conditions, the TPMS unit handles extreme temperatures and provides consistent monitoring even during total power loss.</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="text-center">
                    <p className="text-2xl font-bold">24h</p>
                    <p className="text-[10px] uppercase tracking-tighter text-white/60">Backup</p>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div className="text-center">
                    <p className="text-2xl font-bold">125dB</p>
                    <p className="text-[10px] uppercase tracking-tighter text-white/60">Alert</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Unique USP</h3>
                <div className="space-y-4">
                  {tpmsData.usp.slice(0, 3).map((u, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <p className="text-sm font-bold text-gray-800">{u.title}</p>
                        <p className="text-xs text-gray-500">{u.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">Intelligent 5-Layer System</h2>
                <p className="text-gray-600">A complete end-to-end security pipeline that ensures no alert goes unnoticed.</p>
              </div>
              <div className="flex-1 bg-white p-4 rounded-3xl border border-gray-100 shadow-xl">
                 <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-4">
                   <img src="/src/assets/images/architecture.png" alt="Architecture Visualization" className="w-full h-auto object-contain rounded-xl" />
                 </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {tpmsData.architecture.map((layer, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center relative group hover:bg-primary transition-all">
                  <div className="text-primary group-hover:text-white font-black text-4xl opacity-10 absolute top-2 right-4 leading-none">{layer.layer}</div>
                  <div className="w-12 h-12 bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {icons[layer.icon] || <Layers />}
                  </div>
                  <h4 className="font-bold text-gray-800 group-hover:text-white mb-1">{layer.name}</h4>
                  <p className="text-[10px] text-gray-500 group-hover:text-white/80 uppercase font-bold tracking-wider">{layer.sub}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'applications':
        return (
          <div className="space-y-8">
            <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg relative mb-8">
              <img src="/src/assets/images/telecom-tower.jpg" alt="Telecom Tower" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h3 className="text-3xl font-bold text-white">Protecting Critical Infrastructure Worldwide</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tpmsData.applications.map((app, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-6 items-center hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 bg-gray-50 text-primary rounded-2xl flex items-center justify-center text-3xl shrink-0">
                    {icons[app.icon] || <Shield size={40} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{app.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{app.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'soc':
        return (
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">24x7x365 Monitoring</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our dedicated Security Operations Center (SOC) monitors over 15,000 live sites continuously. Any critical alarm is instantly escalated and addressed.
                </p>
                <div className="flex gap-4 items-center">
                  <div className="p-4 bg-primary-light text-primary rounded-xl">
                    <Headphones size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Immediate Escalation</h4>
                    <p className="text-sm text-gray-500">Multilevel Matrix Configured</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <img src="/src/assets/images/soc.png" alt="SOC Monitoring Room" className="w-full h-auto rounded-2xl shadow-xl border border-gray-100" />
              </div>
            </div>
          </div>
        );

      case 'system':
        return (
          <div className="space-y-12">
             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Unified Dashboard System</h2>
                <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto mb-10">
                  Address all major telecom site challenges—Battery Theft, Diesel Pilferage, Power Failures, and Inaccurate Billing—from a single pane of glass.
                </p>
                <img src="/src/assets/images/single_solution.png" alt="Unified Solution" className="w-full max-w-3xl mx-auto h-auto object-contain rounded-xl shadow-lg border border-gray-100" />
             </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-300 mb-6">
              <Zap size={40} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Coming Soon</h2>
            <p className="text-gray-500 mt-2">We're finalizing the content for this section.</p>
          </div>
        );
    }
  };

  const getTitle = () => {
    const titles = {
      about: 'About TPMS',
      features: 'System Capabilities',
      architecture: 'System Architecture',
      hardware: 'Hardware Specs',
      system: 'Dashboard System',
      energy: 'Energy Management',
      alarms: 'Alarm Management',
      soc: 'SOC Monitoring',
      applications: 'Industry Applications',
      achievements: 'Our Achievements'
    };
    return titles[section] || 'Section';
  };

  const backgrounds = {
    about: 'bg-blue-50/30',
    features: 'bg-green-50/20',
    architecture: 'bg-purple-50/20',
    hardware: 'bg-orange-50/20',
    applications: 'bg-indigo-50/20',
    soc: 'bg-slate-50',
    system: 'bg-blue-50/10'
  };

  return (
    <div className={`-m-4 md:-m-8 p-4 md:p-8 min-h-screen ${backgrounds[section] || ''}`}>
      <div className="mb-10">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">{getTitle()}</h1>
        <div className="h-1.5 w-20 bg-primary mt-4 rounded-full" />
      </div>
      {renderContent()}
    </div>
  );
};

export default SectionPage;
