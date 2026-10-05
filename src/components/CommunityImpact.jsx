import React from 'react';
import brianImg from '../assets/images/avatar_brian.jpg';
import dianaImg from '../assets/images/avatar_diana.jpg';
import kevinImg from '../assets/images/avatar_kevin.jpg';
import angelaImg from '../assets/images/avatar_angela.jpg';
import calebImg from '../assets/images/avatar_caleb.jpg';

export default function CommunityImpact() {
  const teamLeads = [
    {
      name: "Diana Wanjiku",
      role: "AI Enthusiast",
      image: dianaImg
    },
    {
      name: "Kevin Muthomi",
      role: "Robotics Lead",
      image: kevinImg
    },
    {
      name: "Angela Moraa",
      role: "Embedded Systems",
      image: angelaImg
    },
    {
      name: "Caleb Njoroge",
      role: "3D Printing Lead",
      image: calebImg
    }
  ];

  return (
    <section id="community" className="py-16 lg:py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Testimonial & Quote */}
          <div className="lg:col-span-4 rounded-xl bg-slate-50 border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              <h2 className="text-xs sm:text-sm font-bold tracking-widest text-brand-600 uppercase mb-4">
                THE PEOPLE BEHIND THE INNOVATION
              </h2>
              <blockquote className="text-base sm:text-lg font-medium text-slate-800 leading-snug">
                &ldquo;The club gave me the opportunity to turn an idea into something I could actually build.&rdquo;
              </blockquote>
            </div>

            {/* Brian Kamau Profile */}
            <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-200">
              <img
                src={brianImg}
                alt="Brian Kamau - Mechatronics Engineering"
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-500 shadow-xs"
              />
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">
                  Brian Kamau
                </p>
                <p className="text-xs text-brand-600 font-semibold">
                  Mechatronics Engineering
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column: 4 Team Leads */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 items-stretch">
            {teamLeads.map((member, index) => (
              <div
                key={index}
                className="rounded-xl bg-white border border-slate-200 p-3 flex flex-col items-center text-center justify-between hover:border-brand-500 hover:shadow-md transition-all group shadow-xs"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden mb-3 border-2 border-slate-200 group-hover:border-brand-500 transition-colors shadow-xs bg-slate-50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xs font-bold text-slate-900 truncate">
                    {member.name}
                  </p>
                  <p className="text-[11px] text-brand-600 font-semibold truncate mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Our Impact Stats */}
          <div className="lg:col-span-3 rounded-xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
            <div>
              <h2 className="text-xs sm:text-sm font-bold tracking-widest text-brand-600 uppercase mb-4">
                OUR IMPACT
              </h2>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
                  <span className="text-3xl font-black text-slate-900">20+</span>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">PROJECTS</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
                  <span className="text-3xl font-black text-slate-900">15+</span>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">EVENTS</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
                  <span className="text-3xl font-black text-brand-500">10+</span>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">COMPETITIONS</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 font-normal mt-4 leading-relaxed">
              Students building, learning and creating impact together.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
