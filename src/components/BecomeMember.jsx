import React from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function BecomeMember() {
  const membershipPerks = [
    "Access to 3D printer & digital fabrication lab",
    "Hands-on robotics & embedded hardware workshops",
    "Team participation in national hackathons & challenges",
    "Mentorship from experienced senior student developers",
    "Collaborative workspace & makerspace equipment access"
  ];

  return (
    <section id="join" className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-slate-50 border border-blue-100/90 p-8 sm:p-12 shadow-lg relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left text */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-500"></span>
                <span className="text-xs font-bold tracking-widest text-brand-600 uppercase">
                  MEMBERSHIP INVITATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
                READY TO BUILD THE FUTURE?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you are an absolute beginner curious about technology or an experienced tinkerer with an active project, DeKUT Innovators Club is where your journey accelerates.
              </p>

              <div className="pt-2 space-y-2">
                {membershipPerks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <FaCheckCircle className="text-brand-500 text-xs flex-shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card with dues & button */}
            <div className="md:col-span-5 rounded-xl bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-5 shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-brand-600 uppercase tracking-widest block mb-1">
                  OFFICIAL MEMBERSHIP
                </span>
                <h3 className="text-xl font-bold text-slate-900">Join the Community</h3>
                
                <div className="mt-4 space-y-2 text-xs text-slate-700 border-t border-b border-slate-100 py-3">
                  <div className="flex justify-between">
                    <span className="text-slate-500">One-time Registration:</span>
                    <span className="font-bold text-slate-900">Ksh. 200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Semester Subscription:</span>
                    <span className="font-bold text-slate-900">Ksh. 100</span>
                  </div>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfjPTJdWIZxH-Z1xffmUZpAnmU9-DUestbpB1bd_GA0xPLM0w/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 active:scale-98 transition-all"
              >
                <span>JOIN THE CLUB NOW</span>
                <FaArrowRight className="text-xs" />
              </a>

              <p className="text-[11px] text-slate-500 text-center">
                Registration opens direct access to all upcoming club workshops and lab facilities.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}