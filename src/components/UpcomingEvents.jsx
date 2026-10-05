import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import trainingImg from '../assets/images/training.png';
import hackathonImg from '../assets/images/hackathon_team.jpg';
import aiBootcampImg from '../assets/images/ai_bootcamp.jpg';

export default function UpcomingEvents() {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      day: "24",
      month: "OCT",
      year: "2026",
      title: "Robotics Workshop",
      description: "Hands-on robotics workshop for beginners and enthusiasts.",
      location: "DeKUT Main Campus",
      time: "10:00 AM - 2:00 PM",
      image: trainingImg
    },
    {
      id: 2,
      day: "12",
      month: "NOV",
      year: "2026",
      title: "Innovators Hackathon",
      description: "Build solutions to real-world problems in 48 hours.",
      location: "DeKUT Main Campus",
      time: "9:00 AM - 5:00 PM",
      image: hackathonImg
    },
    {
      id: 3,
      day: "05",
      month: "DEC",
      year: "2026",
      title: "AI & ML Bootcamp",
      description: "Learn the fundamentals of AI and Machine Learning.",
      location: "DeKUT Main Campus",
      time: "9:00 AM - 1:00 PM",
      image: aiBootcampImg
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
              UPCOMING EVENTS
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Workshops, competitions, hackathons and more.
            </p>
          </div>

          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 tracking-wider uppercase group"
          >
            <span>VIEW ALL EVENTS</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((evt) => (
            <div
              key={evt.id}
              onClick={() => navigate('/events')}
              className="rounded-xl bg-white border border-slate-200 hover:border-brand-500 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Event Image & Date Badge */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Date Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-slate-200 px-2.5 py-1.5 rounded-lg text-center shadow-md">
                  <span className="block text-lg font-black text-brand-500 leading-tight">
                    {evt.day}
                  </span>
                  <span className="block text-[10px] font-bold text-slate-900 tracking-wider uppercase leading-none">
                    {evt.month}
                  </span>
                  <span className="block text-[9px] font-semibold text-slate-500 leading-tight">
                    {evt.year}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                {/* Location & Time info */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-2 text-slate-700">
                    <FaMapMarkerAlt className="text-brand-500 text-xs flex-shrink-0" />
                    <span>{evt.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <FaClock className="text-brand-500 text-xs flex-shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}