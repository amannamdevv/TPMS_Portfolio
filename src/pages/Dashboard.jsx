import React from 'react';
import { 
  Users, Activity, AlertTriangle, Battery, Zap, 
  TrendingUp, Clock, MapPin
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar 
} from 'recharts';
import { tpmsData } from '../data/tpmsData';

const Dashboard = () => {
  const { stats } = tpmsData;

  const graphData = [
    { name: '00:00', eb: 220, dg: 0, battery: 48 },
    { name: '04:00', eb: 215, dg: 0, battery: 48 },
    { name: '08:00', eb: 0, dg: 230, battery: 47 },
    { name: '12:00', eb: 225, dg: 0, battery: 52 },
    { name: '16:00', eb: 220, dg: 0, battery: 54 },
    { name: '20:00', eb: 0, dg: 0, battery: 46 },
    { name: '23:59', eb: 218, dg: 0, battery: 48 },
  ];

  const recentAlerts = [
    { id: 1, site: 'SITE-001', alarm: 'Battery Low', time: '2 mins ago', status: 'Critical' },
    { id: 2, site: 'SITE-042', alarm: 'Door Open', time: '15 mins ago', status: 'Warning' },
    { id: 3, site: 'SITE-156', alarm: 'DG Fail to Start', time: '1 hr ago', status: 'Critical' },
    { id: 4, site: 'SITE-089', alarm: 'EB Failure', time: '2 hrs ago', status: 'Info' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">System Overview</h1>
          <p className="text-gray-500 text-sm">Real-time status of all deployed TPMS units</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="flex items-center gap-1 text-success font-semibold bg-success-light px-3 py-1 rounded-full">
            <Activity size={16} /> Live
          </span>
          <span className="text-gray-400">Last updated: Just now</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: 'Total Sites', value: '30,000+', icon: <Users />, color: 'bg-primary' },
          { label: 'Active Sites', value: '28,500', icon: <Activity />, color: 'bg-success' },
          { label: 'Non Active', value: '1,500', icon: <Clock />, color: 'bg-gray-400' },
          { label: 'Alerts Today', value: '124', icon: <AlertTriangle />, color: 'bg-danger' },
          { label: 'Battery Saved', value: '452+', icon: <Battery />, color: 'bg-accent' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-10 h-10 ${stat.color} text-white rounded-xl flex items-center justify-center mb-4`}>
              {stat.icon}
            </div>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Graph Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800">Site Power Analytics (EB / DG / Battery)</h3>
            <select className="bg-gray-50 border-none text-xs font-semibold text-gray-600 rounded-lg px-2 py-1 outline-none">
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={graphData}>
                <defs>
                  <linearGradient id="colorEb" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
                <Tooltip />
                <Area type="monotone" dataKey="eb" stroke="#2563eb" fillOpacity={1} fill="url(#colorEb)" strokeWidth={2} />
                <Area type="monotone" dataKey="dg" stroke="#f59e0b" fillOpacity={0} strokeWidth={2} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts Table Section */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-6">Recent Critical Alerts</h3>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="flex gap-3">
                  <div className={`mt-1 w-2 h-2 rounded-full ${
                    alert.status === 'Critical' ? 'bg-danger animate-pulse' : 
                    alert.status === 'Warning' ? 'bg-accent' : 'bg-primary'
                  }`} />
                  <div>
                    <p className="text-sm font-bold text-gray-800">{alert.alarm}</p>
                    <p className="text-xs text-gray-500">{alert.site}</p>
                  </div>
                </div>
                <p className="text-[10px] font-medium text-gray-400">{alert.time}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm font-semibold text-primary bg-primary-light rounded-xl hover:bg-primary hover:text-white transition-all">
            View All Alarms
          </button>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-primary to-primary-dark p-6 rounded-2xl text-white shadow-lg">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            <Zap size={18} /> Energy Savings
          </h4>
          <p className="text-white/80 text-sm mb-4">Total battery bank lifespan extended by 25% across all monitored sites.</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold">452</span>
            <span className="text-sm text-white/70 mb-1 font-medium">Units Restored</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-primary" /> States Coverage
          </h4>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[78%]" />
            </div>
            <span className="text-lg font-bold text-gray-800">22/28</span>
          </div>
          <p className="text-xs text-gray-500 mt-2 font-medium uppercase tracking-wider">Pan-India Presence</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-success" /> Uptime Target
          </h4>
          <h3 className="text-3xl font-bold text-gray-800">99.9%</h3>
          <p className="text-xs text-success font-bold mt-1 tracking-wider uppercase">Achieved this month</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
