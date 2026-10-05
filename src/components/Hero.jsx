import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaUsers } from 'react-icons/fa';
import heroStudentImg from '../assets/images/hero_student.jpg';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white tech-grid-bg pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            {/* Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-500"></span>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-600 uppercase font-sans">
                DEKUT INNOVATORS CLUB
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] uppercase">
              WHERE IDEAS <br />
              BECOME <br />
              <span className="text-brand-500">
                TECHNOLOGY.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              A community of students exploring technology, engineering and innovation — turning ideas into real solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigate('/projects')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md shadow-brand-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>EXPLORE PROJECTS</span>
                <FaArrowRight className="text-xs" />
              </button>

              <a
                href="#join"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm tracking-wider uppercase hover:border-brand-500 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xs"
              >
                <span>JOIN THE CLUB</span>
                <FaUsers className="text-sm text-brand-500" />
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 max-w-md">
              <div>
                <p className="text-2xl font-black text-slate-900">20+</p>
                <p className="text-xs font-semibold text-slate-500">Working Projects</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">15+</p>
                <p className="text-xs font-semibold text-slate-500">Workshops & Events</p>
              </div>
              <div>
                <p className="text-2xl font-black text-brand-500">3D Lab</p>
                <p className="text-xs font-semibold text-slate-500">Rapid Prototyping</p>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-xl lg:max-w-none rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
              <img
                src={heroStudentImg}
                alt="DeKUT student assembling autonomous rover prototype in laboratory"
                className="w-full h-full object-cover object-center max-h-[480px] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Status pill badge on image */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200 shadow-md">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-800 tracking-wide">
                    Autonomous Robotics Lab • Active Prototyping
                  </span>
                </div>
                <span className="text-[11px] font-mono text-brand-600 font-bold uppercase tracking-widest hidden sm:inline">
                  DeKUT
                </span>
              </div>
            </div>

            {/* Decorative subtle corner marks */}
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-brand-500 pointer-events-none" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-brand-500 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}