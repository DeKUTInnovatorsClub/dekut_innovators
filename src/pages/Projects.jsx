import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaMicrochip, FaCube, FaRobot, FaWifi } from "react-icons/fa";

import irrigationImg from '../assets/images/smart_irrigation.jpg';
import roverImg from '../assets/images/projects.png';
import gestureArmImg from '../assets/images/gesture_arm.jpg';
import campusNavImg from '../assets/images/campus_navigator.jpg';
import prostheticImg from '../assets/images/prosthetic_hand.jpg';
import umemeImg from '../assets/images/umeme.png';
import solarImg from '../assets/images/ngamwa.png';
import agroImg from '../assets/images/malaika.png';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", "ROBOTICS", "AI & ML", "IOT", "EMBEDDED", "3D PRINTING", "SOFTWARE"];

  const projectList = [
    {
      id: "umeme-sense",
      title: "Umeme Sense",
      subtitle: "Smart Energy Monitoring & Remote Metering System",
      description: "An advanced real-time and remote smart energy meter that utilizes LoRa technology, ESP32 microcontrollers, and data analytics to provide insights into power consumption and phase balance.",
      image: umemeImg,
      tags: ["IoT", "LoRa", "Embedded Systems"],
      categories: ["IOT", "EMBEDDED"],
      status: "Active Prototype",
      lead: "Angela Moraa"
    },
    {
      id: "autonomous-rover",
      title: "Autonomous Terrain Rover",
      subtitle: "Off-Road Robotics & Telemetry Platform",
      description: "A rugged robotic rover built with custom 3D printed mechanical chassis, ultrasonic collision detection, and Raspberry Pi onboard computing for remote environmental inspection.",
      image: roverImg,
      tags: ["Robotics", "3D Printing", "Embedded"],
      categories: ["ROBOTICS", "3D PRINTING", "EMBEDDED"],
      status: "In Testing",
      lead: "Kevin Muthomi"
    },
    {
      id: "3d-prosthetic-hand",
      title: "3D Printed Bionic Prosthetic Hand",
      subtitle: "Affordable Assistive Biomechanical Technology",
      description: "Functional articulated mechanical prosthetic hand manufactured using additive 3D printing in the campus makerspace lab, driven by servo motors and electromyographic sensors.",
      image: prostheticImg,
      tags: ["3D Printing", "Prototyping", "Biomedical"],
      categories: ["3D PRINTING", "EMBEDDED"],
      status: "Prototype v2",
      lead: "Caleb Njoroge"
    },
    {
      id: "gesture-arm",
      title: "Gesture Controlled Robotic Arm",
      subtitle: "Telemetry Glove & Articulated Actuators",
      description: "Multi-axis articulated robotic arm mimicking human hand movements in real-time through flex sensors and inertial measurement units embedded in an operator glove.",
      image: gestureArmImg,
      tags: ["Robotics", "Embedded", "Sensors"],
      categories: ["ROBOTICS", "EMBEDDED"],
      status: "Active Demo",
      lead: "Brian Kamau"
    },
    {
      id: "smart-irrigation",
      title: "Precision Smart Irrigation System",
      subtitle: "Telemetry-Driven Automated Farming",
      description: "Automated precision irrigation unit designed to monitor capacitive soil moisture and solar radiation to trigger drip solenoids, preserving up to 40% water in farming.",
      image: irrigationImg,
      tags: ["IoT", "AgriTech", "Embedded"],
      categories: ["IOT", "EMBEDDED"],
      status: "Pilot",
      lead: "Club Hardware Cohort"
    },
    {
      id: "campus-navigator",
      title: "Campus Navigator Mobile App",
      subtitle: "Spatial Mapping & Department Directory",
      description: "Cross-platform mobile application assisting new students and campus visitors in navigating university halls, makerspaces, engineering workshops, and lecture theatres.",
      image: campusNavImg,
      tags: ["Software", "Mobile", "GIS"],
      categories: ["SOFTWARE"],
      status: "Beta Release",
      lead: "Software Team"
    },
    {
      id: "ngamwa-solar",
      title: "Ngamwa Solar Analytics",
      subtitle: "Photovoltaic Efficiency Telemetry",
      description: "Solar monitoring installation logging real-time kilowatt yields and panel temperature to detect degradation and dust obstruction across campus solar installations.",
      image: solarImg,
      tags: ["IoT", "CleanTech", "Embedded"],
      categories: ["IOT", "EMBEDDED"],
      status: "Deployed",
      lead: "Energy Team"
    },
    {
      id: "malaika-livestock",
      title: "Project Malaika Livestock Telemetry",
      subtitle: "Cattle Health & Geofencing Prototype",
      description: "Low-power GPS and vital signs tracking collar for pastoral livestock herd management, warning farmers of fence boundary crosses and health abnormalities.",
      image: agroImg,
      tags: ["IoT", "GPS", "Embedded"],
      categories: ["IOT", "EMBEDDED"],
      status: "Research Phase",
      lead: "Agri-IoT Team"
    }
  ];

  const filtered = selectedCategory === "ALL"
    ? projectList
    : projectList.filter(p => p.categories.includes(selectedCategory));

  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-600 uppercase">
            DEKUT INNOVATION PORTFOLIO
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-2 uppercase tracking-tight">
            PROJECTS & PROTOTYPES
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Discover real solutions engineered by students across robotics, embedded microcontrollers, 3D printing, artificial intelligence, and software.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all ${
                selectedCategory === cat
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/25"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-brand-500 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-semibold text-brand-600 border border-slate-200 shadow-xs">
                    {proj.status}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-bold text-brand-600 mt-1">
                    {proj.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {proj.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-[11px] font-medium bg-brand-50 text-brand-600 border border-brand-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Lead: {proj.lead}</span>
                  <span className="text-brand-600 font-bold group-hover:translate-x-1 transition-transform">
                    Learn more →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Have an idea banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/40 to-slate-50 border border-blue-100 p-8 sm:p-12 text-center shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            HAVE AN INNOVATIVE PROJECT IDEA?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Bring your blueprint, schematic, or concept to our makerspace. We provide component kits, 3D printing access, microcontroller boards, and team mentorship.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/#join"
              className="px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-brand-500/25"
            >
              Submit an Idea / Join
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}