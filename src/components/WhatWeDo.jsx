import React from 'react';
import { FaGraduationCap, FaCogs, FaTrophy, FaUsers } from 'react-icons/fa';

export default function WhatWeDo() {
  const pillars = [
    {
      title: "LEARN",
      icon: <FaGraduationCap className="text-2xl text-brand-500" />,
      items: ["Workshops", "Training", "Knowledge Sharing"]
    },
    {
      title: "BUILD",
      icon: <FaCogs className="text-2xl text-brand-500" />,
      items: ["Projects", "Prototypes", "Research & Development"]
    },
    {
      title: "COMPETE",
      icon: <FaTrophy className="text-2xl text-brand-500" />,
      items: ["Hackathons", "Challenges", "Competitions"]
    },
    {
      title: "COLLABORATE",
      icon: <FaUsers className="text-2xl text-brand-500" />,
      items: ["Teamwork", "Industry Partnerships", "Community Impact"]
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-500"></span>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-600 uppercase font-sans">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-wide uppercase">
            LEARN <span className="text-brand-500">•</span> BUILD <span className="text-brand-500">•</span> COMPETE <span className="text-brand-500">•</span> COLLABORATE
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-14">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-slate-200 hover:border-brand-500 hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-100 transition-all shadow-xs">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 tracking-wider mb-4 uppercase">
                {pillar.title}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sub-banner: Connect • Collaborate • Create */}
        <div className="rounded-xl bg-white border border-slate-200 p-6 text-center shadow-xs">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-brand-600 uppercase mb-1">
            CONNECT • COLLABORATE • CREATE
          </p>
          <p className="text-slate-700 text-sm sm:text-base font-medium">
            Students <span className="text-brand-500 font-bold mx-1">×</span> Industry <span className="text-brand-500 font-bold mx-1">×</span> Academia <span className="text-brand-500 font-bold mx-1">×</span> Community
          </p>
        </div>

      </div>
    </section>
  );
}
