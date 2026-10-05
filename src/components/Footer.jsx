import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube, FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 pt-12 pb-8 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200">
          
          {/* Left Column: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center shadow-xs">
                <img 
                  src={logo} 
                  alt="DeKUT Innovators Club Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm tracking-wider text-slate-900 uppercase leading-tight">
                  DEKUT
                </span>
                <span className="text-xs font-bold tracking-wide text-brand-500 uppercase leading-none">
                  INNOVATORS CLUB
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
              Exploring technology, engineering and innovation for a better tomorrow. Dedan Kimathi University of Technology student chapter.
            </p>
          </div>

          {/* Middle Column: Explore Navigation */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-slate-900 tracking-widest uppercase">
              EXPLORE
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-brand-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-brand-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-brand-500 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <a href="/#community" className="hover:text-brand-500 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="/#join" className="hover:text-brand-500 transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Social Links & CTA */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-bold text-slate-900 tracking-widest uppercase">
              CONNECT
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-brand-500 hover:text-brand-500 flex items-center justify-center transition-all text-slate-600 shadow-xs"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-brand-500 hover:text-brand-500 flex items-center justify-center transition-all text-slate-600 shadow-xs"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-brand-500 hover:text-brand-500 flex items-center justify-center transition-all text-slate-600 shadow-xs"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-brand-500 hover:text-brand-500 flex items-center justify-center transition-all text-slate-600 shadow-xs"
              >
                <FaYoutube className="text-sm" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-brand-500 hover:text-brand-500 flex items-center justify-center transition-all text-slate-600 shadow-xs"
              >
                <FaWhatsapp className="text-sm" />
              </a>
            </div>

            {/* Join CTA Button */}
            <div className="pt-2">
              <a
                href="#join"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-brand-500/25 transition-all"
              >
                <span>JOIN THE CLUB</span>
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} DeKUT Innovators Club — Dedan Kimathi University of Technology
          </p>
          <p className="text-[11px] font-mono text-slate-400 font-semibold">
            BUILD • INNOVATE • IMPACT
          </p>
        </div>

      </div>
    </footer>
  );
}