import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import irrigationImg from '../assets/images/smart_irrigation.jpg';
import roverImg from '../assets/images/projects.png';
import gestureArmImg from '../assets/images/gesture_arm.jpg';
import campusNavImg from '../assets/images/campus_navigator.jpg';
import prostheticImg from '../assets/images/prosthetic_hand.jpg';
import umemeImg from '../assets/images/umeme.png';

export default function Innovations() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'ROBOTICS', 'AI', 'IOT', 'EMBEDDED', 'SOFTWARE', '3D PRINTING'];

  const projects = [
    {
      id: 1,
      title: "Smart Irrigation System",
      description: "IoT based irrigation system for efficient water use and soil telemetry.",
      image: irrigationImg,
      tags: ["IoT", "Embedded"],
      categories: ["IOT", "EMBEDDED"]
    },
    {
      id: 2,
      title: "Autonomous Rover",
      description: "A self-navigating rover for terrain exploration and sensor data collection.",
      image: roverImg,
      tags: ["Robotics", "AI", "Embedded"],
      categories: ["ROBOTICS", "AI", "EMBEDDED"]
    },
    {
      id: 3,
      title: "Gesture Controlled Arm",
      description: "Robotic arm controlled using real-time sensory telemetry hand gestures.",
      image: gestureArmImg,
      tags: ["Robotics", "Embedded"],
      categories: ["ROBOTICS", "EMBEDDED"]
    },
    {
      id: 4,
      title: "Campus Navigator App",
      description: "Mobile app to navigate DeKUT campus buildings, labs, and pathways with ease.",
      image: campusNavImg,
      tags: ["Software", "Mobile"],
      categories: ["SOFTWARE"]
    },
    {
      id: 5,
      title: "3D Printed Prosthetic Hand",
      description: "Low-cost 3D printed functional mechanical prosthetic hand prototype.",
      image: prostheticImg,
      tags: ["3D Printing", "Prototyping"],
      categories: ["3D PRINTING"]
    },
    {
      id: 6,
      title: "Umeme Sense",
      description: "Smart energy monitoring and remote metering platform using LoRa.",
      image: umemeImg,
      tags: ["IoT", "LoRa"],
      categories: ["IOT", "EMBEDDED"]
    }
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
              OUR PROJECTS
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              From early prototypes to working solutions.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 tracking-wider uppercase group"
          >
            <span>VIEW ALL PROJECTS</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/25 ring-1 ring-brand-400"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate('/projects')}
              className="rounded-xl bg-white border border-slate-200 hover:border-brand-500 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 tracking-wide group-hover:text-brand-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="p-5 pt-0 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-brand-50 text-brand-600 border border-brand-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}