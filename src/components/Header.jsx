import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shadow-xs group-hover:border-brand-500 transition-all overflow-hidden">
            <img 
              src={logo} 
              alt="DeKUT Innovators Club Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base tracking-wider text-slate-900 uppercase leading-tight font-sans">
              DEKUT
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wide text-brand-500 uppercase leading-none">
              INNOVATORS CLUB
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `text-xs lg:text-sm font-bold tracking-wider uppercase transition-colors hover:text-brand-500 ${
                isActive ? "text-brand-500" : "text-slate-600"
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-xs lg:text-sm font-bold tracking-wider uppercase transition-colors hover:text-brand-500 ${
                isActive ? "text-brand-500" : "text-slate-600"
              }`
            }
          >
            ABOUT
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `text-xs lg:text-sm font-bold tracking-wider uppercase transition-colors hover:text-brand-500 ${
                isActive ? "text-brand-500" : "text-slate-600"
              }`
            }
          >
            PROJECTS
          </NavLink>
          <NavLink 
            to="/events" 
            className={({ isActive }) => 
              `text-xs lg:text-sm font-bold tracking-wider uppercase transition-colors hover:text-brand-500 ${
                isActive ? "text-brand-500" : "text-slate-600"
              }`
            }
          >
            EVENTS
          </NavLink>
          <a 
            href="/#community" 
            className="text-xs lg:text-sm font-bold tracking-wider uppercase transition-colors text-slate-600 hover:text-brand-500"
          >
            COMMUNITY
          </a>
          <a 
            href="/#join" 
            className="text-xs lg:text-sm font-bold tracking-wider uppercase transition-colors text-slate-600 hover:text-brand-500"
          >
            JOIN US
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={() => navigate('/contact-us')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-brand-500/20 active:scale-95 transition-all"
          >
            <span>CONTACT US</span>
            <FaArrowRight className="text-xs" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg text-slate-700 hover:text-brand-500 hover:bg-slate-100 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-lg">
          <NavLink 
            to="/" 
            end
            onClick={closeMenu}
            className={({ isActive }) => 
              `block py-2 text-sm font-bold tracking-wider uppercase ${
                isActive ? "text-brand-500" : "text-slate-700 hover:text-brand-500"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `block py-2 text-sm font-bold tracking-wider uppercase ${
                isActive ? "text-brand-500" : "text-slate-700 hover:text-brand-500"
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `block py-2 text-sm font-bold tracking-wider uppercase ${
                isActive ? "text-brand-500" : "text-slate-700 hover:text-brand-500"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/events" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `block py-2 text-sm font-bold tracking-wider uppercase ${
                isActive ? "text-brand-500" : "text-slate-700 hover:text-brand-500"
              }`
            }
          >
            Events
          </NavLink>
          <a 
            href="/#community" 
            onClick={closeMenu}
            className="block py-2 text-sm font-bold tracking-wider uppercase text-slate-700 hover:text-brand-500"
          >
            Community
          </a>
          <a 
            href="/#join" 
            onClick={closeMenu}
            className="block py-2 text-sm font-bold tracking-wider uppercase text-slate-700 hover:text-brand-500"
          >
            Join Us
          </a>
          <div className="pt-2">
            <button 
              onClick={() => { closeMenu(); navigate('/contact-us'); }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-brand-500/20"
            >
              <span>CONTACT US</span>
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}