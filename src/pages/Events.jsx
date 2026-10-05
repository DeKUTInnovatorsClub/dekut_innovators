import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

import trainingImg from "../assets/images/training.png";
import hackathonImg from "../assets/images/hackathon_team.jpg";
import aiBootcampImg from "../assets/images/ai_bootcamp.jpg";
import hikeImg from "../assets/images/hike.png";
import eventCrowdImg from "../assets/images/events.png";

export default function Events() {
  const upcoming = [
    {
      id: "robotics-workshop",
      title: "Robotics & Microcontroller Workshop",
      date: "24 OCT 2026",
      time: "10:00 AM - 2:00 PM",
      location: "DeKUT Engineering Lab 04",
      description: "Hands-on robotics workshop covering motor controllers, sensor interfacing, and building your first two-wheeled autonomous mobile rover.",
      image: trainingImg,
      badge: "Upcoming Workshop"
    },
    {
      id: "innovators-hackathon",
      title: "DeKUT Annual Innovators Hackathon",
      date: "12 NOV 2026",
      time: "9:00 AM - 5:00 PM (48 Hours)",
      location: "DeKUT Main Auditorium & Tech Hub",
      description: "Collaborative 48-hour hardware and software sprint addressing regional challenges in clean energy, agriculture, and smart university services.",
      image: hackathonImg,
      badge: "Flagship Hackathon"
    },
    {
      id: "ai-bootcamp",
      title: "AI & Machine Learning Bootcamp",
      date: "05 DEC 2026",
      time: "9:00 AM - 1:00 PM",
      location: "Computer Lab 3 & Online Stream",
      description: "Deep dive into machine learning models, computer vision for edge IoT microcontrollers, and deploying neural nets on embedded devices.",
      image: aiBootcampImg,
      badge: "Intensive Bootcamp"
    }
  ];

  const past = [
    {
      id: "nyeri-hill-hike",
      title: "Tech Hike & Team Bonding - Nyeri Hill",
      date: "10 SEP 2024",
      location: "Nyeri Hill Trail",
      description: "Annual outdoor retreat for innovators to connect, recharge, discuss upcoming semester engineering roadmaps, and build camaraderie.",
      image: hikeImg
    },
    {
      id: "women-in-tech-symposium",
      title: "STEM & Women in Innovation Summit",
      date: "15 JUL 2024",
      location: "DeKUT Resource Center",
      description: "Interactive session celebrating women pioneers in engineering, coding, and technological entrepreneurship.",
      image: eventCrowdImg
    }
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-600 uppercase">
            COMMUNITY HAPPENINGS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-2 uppercase tracking-tight">
            CLUB EVENTS & WORKSHOPS
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Sharpen your technical skills, collaborate in high-energy hackathons, and connect with fellow builders and industry engineers.
          </p>
        </div>

        {/* Section: Upcoming */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200">
            <span className="w-3 h-3 rounded-full bg-brand-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide">
              Upcoming Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcoming.map((evt) => (
              <div
                key={evt.id}
                className="rounded-2xl bg-white border border-slate-200 hover:border-brand-500 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-brand-600 border border-slate-200 shadow-xs">
                      {evt.badge}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {evt.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  <div className="space-y-1.5 text-xs text-slate-600 font-medium border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-2 text-slate-800">
                      <FaCalendarAlt className="text-brand-500" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-brand-500" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-brand-500" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfjPTJdWIZxH-Z1xffmUZpAnmU9-DUestbpB1bd_GA0xPLM0w/viewform?usp=header"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-brand-500/25 transition-all"
                  >
                    <span>Register to Attend</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Section: Past Events */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 uppercase tracking-wide">
              Past Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {past.map((evt) => (
              <div
                key={evt.id}
                className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden flex flex-col sm:flex-row items-center gap-4 p-5 hover:border-brand-200 transition-all shadow-xs"
              >
                <div className="w-full sm:w-44 h-40 rounded-xl overflow-hidden flex-shrink-0 bg-slate-200">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <span className="text-xs font-mono text-brand-600 font-bold">
                    {evt.date} • {evt.location}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {evt.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}