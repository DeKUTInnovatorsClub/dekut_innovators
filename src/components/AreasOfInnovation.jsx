import React from 'react';
import { FaRobot, FaBrain, FaWifi, FaMicrochip, FaCode, FaCube } from 'react-icons/fa';

export default function AreasOfInnovation() {
  const areas = [
    {
      title: "ROBOTICS",
      icon: <FaRobot className="text-3xl text-brand-500 group-hover:scale-110 transition-transform" />,
      description: "Autonomous systems, robot arms, mobile robots, automation."
    },
    {
      title: "AI & MACHINE LEARNING",
      icon: <FaBrain className="text-3xl text-brand-500 group-hover:scale-110 transition-transform" />,
      description: "Computer vision, intelligent systems, data & predictive models."
    },
    {
      title: "IOT",
      icon: <FaWifi className="text-3xl text-brand-500 group-hover:scale-110 transition-transform" />,
      description: "Connected devices, sensors, monitoring & smart systems."
    },
    {
      title: "EMBEDDED SYSTEMS",
      icon: <FaMicrochip className="text-3xl text-brand-500 group-hover:scale-110 transition-transform" />,
      description: "Microcontrollers, firmware, electronics & real-time systems."
    },
    {
      title: "SOFTWARE & APPLICATIONS",
      icon: <FaCode className="text-3xl text-brand-500 group-hover:scale-110 transition-transform" />,
      description: "Web, mobile, platforms, APIs & digital solutions."
    },
    {
      title: "3D PRINTING & PROTOTYPING",
      icon: <FaCube className="text-3xl text-brand-500 group-hover:scale-110 transition-transform" />,
      description: "3D printing, CAD, prototyping, PCB design & fabrication."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-wider uppercase">
            AREAS OF INNOVATION
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Fostering hands-on technical skills across core engineering and computing domains.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-slate-200 hover:border-brand-500 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-all">
                  {area.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-wide uppercase mb-2">
                  {area.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Subtle bottom accent line on hover */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-mono tracking-wider font-semibold">LAB DISCIPLINE</span>
                <span className="font-bold">EXPLORE →</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
