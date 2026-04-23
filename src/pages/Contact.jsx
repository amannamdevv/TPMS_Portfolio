import React from 'react';
import { Mail, Phone, MapPin, Headphones, MessageSquare } from 'lucide-react';
import { tpmsData } from '../data/tpmsData';

const Contact = () => {
  const { company } = tpmsData;

  return (
    <div className="space-y-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Get In Touch</h1>
        <div className="h-1.5 w-20 bg-primary mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call / WhatsApp</p>
                <p className="text-lg font-bold text-gray-800">{company.contact.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Us</p>
                <p className="text-lg font-bold text-gray-800">{company.contact.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <Headphones size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Helpline</p>
                <p className="text-lg font-bold text-gray-800">{company.contact.helpline}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Office</p>
                <p className="text-lg font-bold text-gray-800">{company.address}</p>
              </div>
            </div>
          </div>

          <a 
            href={`https://wa.me/${company.contact.whatsapp}`} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-lg shadow-green-200"
          >
            <MessageSquare size={24} />
            Chat on WhatsApp
          </a>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Subject</label>
              <input type="text" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm" placeholder="Inquiry about TPMS" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Message</label>
              <textarea rows="5" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-xl shadow-blue-100">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
