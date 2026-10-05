import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import umemeImg from '../assets/images/umeme.png';
import roverImg from '../assets/images/projects.png';
import irrigationImg from '../assets/images/smart_irrigation.jpg';

export default function FeaturedInnovation() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredProjects = [
    {
      id: "umeme-sense",
      tag: "FEATURED INNOVATION",
      title: "UMEME SENSE",
      subtitle: "Smart Energy Monitoring System",
      description: "A real-time energy monitoring and analytics platform using IoT, LoRa and data analytics for efficient energy use and remote electrical monitoring.",
      tags: ["IoT", "LoRa", "Embedded Systems", "Data Analytics"],
      status: "Working Prototype",
      image: umemeImg,
      alt: "Umeme Sense IoT energy monitoring hardware prototype"
    },
    {
      id: "autonomous-rover",
      tag: "FEATURED INNOVATION",
      title: "AUTONOMOUS ROVER",
      subtitle: "Terrain Exploration & Environmental Sensing",
      description: "A multi-terrain autonomous robotic vehicle equipped with obstacle detection, telemetry streaming, and environmental sensors built with custom 3D printed mechanical chassis.",
      tags: ["Robotics", "AI", "Embedded", "3D Printing"],
      status: "Field Testing",
      image: roverImg,
      alt: "Autonomous Rover prototype with Raspberry Pi and 3D printed chassis"
    },
    {
      id: "smart-irrigation",
      tag: "FEATURED INNOVATION",
      title: "AGRI-SENSE IRRIGATION",
      subtitle: "Precision Agricultural IoT System",
      description: "Automated micro-irrigation controller reading soil moisture and ambient humidity via ESP32 microcontrollers to optimize water efficiency in arid zones.",
      tags: ["IoT", "Sensors", "Embedded Systems", "Sustainability"],
      status: "Pilot Deployment",
      image: irrigationImg,
      alt: "Smart irrigation IoT prototype setup with soil moisture sensors"
    }
  ];

  const current = featuredProjects[activeIndex];

  return (
    <section className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Spotlight Card */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-lg transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Image Side */}
            <div className="lg:col-span-6 relative bg-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden min-h-[320px] lg:min-h-[420px]">
              <div className="relative w-full h-full max-h-[380px] rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
                <img
                  src={current.image}
                  alt={current.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Information Side */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Overline Tag */}
                <div className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-500"></span>
                  <span className="text-xs font-bold tracking-widest text-brand-600 uppercase">
                    {current.tag}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
                    {current.title}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-slate-700 mt-1">
                    {current.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {current.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {current.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer row: Status + CTA + Carousel Dots */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                {/* Status indicator */}
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-700">
                    {current.status}
                  </span>
                </div>

                {/* Action button & dots */}
                <div className="flex items-center gap-5">
                  <button
                    onClick={() => navigate('/projects')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-brand-500/25 transition-all"
                  >
                    <span>EXPLORE PROJECT</span>
                    <FaArrowRight className="text-xs" />
                  </button>

                  {/* Indicator Dots */}
                  <div className="flex items-center gap-2">
                    {featuredProjects.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setActiveIndex(dotIdx)}
                        aria-label={`Show featured project ${dotIdx + 1}`}
                        className={`h-2.5 rounded-full transition-all ${
                          activeIndex === dotIdx 
                            ? "w-7 bg-brand-500" 
                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
