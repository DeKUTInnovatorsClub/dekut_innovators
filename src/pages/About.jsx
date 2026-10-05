import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTools, 
  FaUsers, 
  FaFlask, 
  FaBullseye, 
  FaCode, 
  FaCube, 
  FaTrophy, 
  FaGlobe, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaGithub, 
  FaInstagram, 
  FaArrowRight,
  FaCalendarAlt,
  FaProjectDiagram,
  FaUserFriends
} from 'react-icons/fa';

import aboutHeroImg from '../assets/images/about_hero_team.jpg';
import trainingImg from '../assets/images/training.png';
import prostheticImg from '../assets/images/prosthetic_hand.jpg';
import eventsImg from '../assets/images/events.png';
import hackathonImg from '../assets/images/hackathon_team.jpg';
import irrigationImg from '../assets/images/smart_irrigation.jpg';

import brianImg from '../assets/images/avatar_brian.jpg';
import dianaImg from '../assets/images/avatar_diana.jpg';
import kevinImg from '../assets/images/avatar_kevin.jpg';
import angelaImg from '../assets/images/avatar_angela.jpg';
import calebImg from '../assets/images/avatar_caleb.jpg';
import faithImg from '../assets/images/avatar_faith.jpg';

export default function About() {
  const stats = [
    {
      icon: <FaProjectDiagram className="text-xl text-brand-500" />,
      number: "20+",
      label: "Active Projects"
    },
    {
      icon: <FaCalendarAlt className="text-xl text-brand-500" />,
      number: "15+",
      label: "Events Every Year"
    },
    {
      icon: <FaUserFriends className="text-xl text-brand-500" />,
      number: "300+",
      label: "Active Members"
    },
    {
      icon: <FaTrophy className="text-xl text-brand-500" />,
      number: "10+",
      label: "Competitions Joined"
    }
  ];

  const beliefs = [
    {
      icon: <FaTools className="text-lg text-brand-400" />,
      title: "BUILD OVER THEORY",
      desc: "We learn best when we build, test and iterate."
    },
    {
      icon: <FaUsers className="text-lg text-brand-400" />,
      title: "COLLABORATION OVER SILOS",
      desc: "Great things happen when we work together across disciplines."
    },
    {
      icon: <FaFlask className="text-lg text-brand-400" />,
      title: "EXPERIMENTATION OVER PERFECTION",
      desc: "We value curiosity, creativity and continuous learning."
    },
    {
      icon: <FaBullseye className="text-lg text-brand-400" />,
      title: "IMPACT OVER HYPE",
      desc: "Technology should solve real problems and create real impact."
    }
  ];

  const focusAreas = [
    {
      title: "Learn",
      icon: <FaCode className="text-xs text-brand-600" />,
      desc: "Hands-on workshops, trainings and knowledge sharing sessions.",
      image: trainingImg
    },
    {
      title: "Build",
      icon: <FaCube className="text-xs text-brand-600" />,
      desc: "Develop prototypes, hardware and software solutions to real-world problems.",
      image: prostheticImg
    },
    {
      title: "Compete",
      icon: <FaTrophy className="text-xs text-brand-600" />,
      desc: "Take part in hackathons, competitions and innovation challenges.",
      image: eventsImg
    },
    {
      title: "Collaborate",
      icon: <FaUsers className="text-xs text-brand-600" />,
      desc: "Work with peers, mentors, industry and community partners.",
      image: hackathonImg
    },
    {
      title: "Impact",
      icon: <FaGlobe className="text-xs text-brand-600" />,
      desc: "Deploy solutions that improve lives and contribute to our community.",
      image: irrigationImg
    }
  ];

  const leaders = [
    {
      name: "Brian Kamau",
      role: "Chairperson",
      image: brianImg,
      socials: [
        { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <FaEnvelope />, href: "mailto:innovators@dkut.ac.ke", label: "Email" }
      ]
    },
    {
      name: "Diana Wanjiku",
      role: "Vice Chairperson",
      image: dianaImg,
      socials: [
        { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <FaEnvelope />, href: "mailto:innovators@dkut.ac.ke", label: "Email" }
      ]
    },
    {
      name: "Kevin Muthomi",
      role: "Projects Lead",
      image: kevinImg,
      socials: [
        { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
        { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <FaEnvelope />, href: "mailto:innovators@dkut.ac.ke", label: "Email" }
      ]
    },
    {
      name: "Angela Moraa",
      role: "Programs Lead",
      image: angelaImg,
      socials: [
        { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <FaEnvelope />, href: "mailto:innovators@dkut.ac.ke", label: "Email" },
        { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" }
      ]
    },
    {
      name: "Caleb Njoroge",
      role: "Technical Lead",
      image: calebImg,
      socials: [
        { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
        { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <FaEnvelope />, href: "mailto:innovators@dkut.ac.ke", label: "Email" }
      ]
    },
    {
      name: "Faith Mwangi",
      role: "Community Lead",
      image: faithImg,
      socials: [
        { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <FaEnvelope />, href: "mailto:innovators@dkut.ac.ke", label: "Email" }
      ]
    }
  ];

  const partners = [
    { name: "DeKUT", desc: "Dedan Kimathi University of Technology" },
    { name: "Konza", desc: "Technopolis" },
    { name: "IEEE", desc: "DeKUT Student Branch" },
    { name: "MathWorks", desc: "Accelerating MATLAB" },
    { name: "ALX", desc: "Africa" },
    { name: "Siemens", desc: "Engineering & Automation" },
    { name: "Arduino", desc: "Open Hardware Platform" },
    { name: "Google", desc: "Developer Groups" }
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white tech-grid-bg pt-10 pb-14 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left text */}
            <div className="lg:col-span-6 space-y-5 text-left">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                <Link to="/" className="hover:text-brand-600 transition-colors">HOME</Link>
                <span>/</span>
                <span className="text-brand-600">ABOUT US</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase leading-[1.08]">
                ABOUT <br />
                <span className="text-brand-500">
                  DEKUT INNOVATORS
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                We are a community of curious minds, builders and dreamers exploring technology and engineering to solve real problems and create impact.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="/#join"
                  className="px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-brand-500/25 transition-all"
                >
                  Join The Club →
                </a>
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-all"
                >
                  Explore Projects
                </Link>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
                <img
                  src={aboutHeroImg}
                  alt="DeKUT Innovators Club members collaborating on robotics rover and laptops"
                  className="w-full h-full object-cover max-h-[460px] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. "Our Story" & "What We Believe" */}
      <section className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left: Our Story & Stats */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-brand-600 uppercase">
                  OUR STORY
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  How It All Started
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  DeKUT Innovators Club was founded by a group of passionate students who saw the need for a space where technology, creativity and collaboration could thrive beyond the classroom.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  From small meetups and late-night brainstorming to building prototypes and winning competitions, we have grown into a vibrant community driven by one goal — turning ideas into technology that makes a difference.
                </p>
              </div>

              {/* 4 Stat Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-xs flex flex-col items-center justify-center hover:border-brand-500 hover:shadow-md transition-all"
                  >
                    <div className="mb-2 p-2 rounded-lg bg-brand-50 border border-brand-100">
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-black text-slate-900 leading-tight">
                      {stat.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 mt-1 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: What We Believe (High Contrast Technical Card) */}
            <div className="lg:col-span-5 rounded-2xl bg-[#0B1020] border border-slate-800 p-7 sm:p-8 flex flex-col justify-between text-white shadow-xl">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-brand-400 uppercase block mb-6">
                  WHAT WE BELIEVE
                </span>

                <div className="space-y-6">
                  {beliefs.map((belief, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {belief.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                          {belief.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {belief.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                INNOVATING WITH PURPOSE • DEKUT CHAPTER
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. "What We Do" / "Our Focus Areas" (5 Cards) */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-600 uppercase">
              WHAT WE DO
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 uppercase tracking-tight">
              Our Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white border border-slate-200 hover:border-brand-500 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 w-6 h-6 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-center shadow-xs">
                      {area.icon}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. "Our Leadership" / "Meet The Team" (6 Cards) */}
      <section className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-brand-600 uppercase">
                OUR LEADERSHIP
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 uppercase tracking-tight">
                Meet The Team
              </h2>
            </div>

            <Link
              to="/contact-us"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 tracking-wider uppercase group"
            >
              <span>VIEW ALL TEAM MEMBERS</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {leaders.map((lead, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white border border-slate-200 p-4 flex flex-col items-center text-center justify-between shadow-xs hover:border-brand-500 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 border-2 border-slate-200 group-hover:border-brand-500 transition-colors shadow-xs bg-slate-100 mx-auto">
                    <img
                      src={lead.image}
                      alt={lead.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    {lead.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 mt-0.5">
                    {lead.role}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 pt-3 mt-3 border-t border-slate-100 w-full text-slate-500">
                  {lead.socials.map((soc, sIdx) => (
                    <a
                      key={sIdx}
                      href={soc.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${lead.name} ${soc.label}`}
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-brand-500 hover:text-white flex items-center justify-center text-[10px] transition-colors"
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. "Our Partners & Collaborators" */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-600 uppercase">
              OUR PARTNERS & COLLABORATORS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {partners.map((partner, pIdx) => (
              <div
                key={pIdx}
                className="h-20 rounded-xl bg-slate-50 border border-slate-200 p-2 flex flex-col items-center justify-center text-center hover:border-brand-300 hover:bg-white transition-all shadow-2xs group"
              >
                <span className="font-extrabold text-sm sm:text-base text-slate-800 tracking-tight group-hover:text-brand-600 transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium leading-none mt-1">
                  {partner.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Join CTA Callout */}
          <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-slate-50 border border-blue-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-1">
                MEMBERSHIP
              </p>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Ready to be part of something great?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Join our workshops, makerspace sprints, and national hackathons today.
              </p>
            </div>

            <a
              href="/#join"
              className="px-7 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-brand-500/25 whitespace-nowrap transition-all"
            >
              JOIN THE CLUB →
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}