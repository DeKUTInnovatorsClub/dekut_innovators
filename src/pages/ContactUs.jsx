import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white text-slate-800 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-600 uppercase">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-2 uppercase tracking-tight">
            CONTACT THE CLUB
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Have questions about joining, partnering on a student project, or sponsoring our hackathons? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
                Lab & Makerspace Info
              </h2>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-500 flex-shrink-0 mt-0.5">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Campus Location</p>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Dedan Kimathi University of Technology<br />
                      Resource Center - Physics / Hardware Lab 04<br />
                      Nyeri, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-500 flex-shrink-0 mt-0.5">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Email Inquiries</p>
                    <p className="text-slate-600 text-xs mt-0.5">
                      innovators@dkut.ac.ke
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-500 flex-shrink-0 mt-0.5">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Direct Line</p>
                    <p className="text-slate-600 text-xs mt-0.5">
                      +254 (0) 700 000 002
                    </p>
                  </div>
                </div>
              </div>

              {/* Lab Hours */}
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                <p className="font-bold text-slate-900 uppercase tracking-wider">Open Lab Hours</p>
                <p>Monday – Friday: 9:00 AM – 7:00 PM</p>
                <p>Saturday (Hardware Sprint): 10:00 AM – 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wide mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <p className="text-base font-bold text-emerald-700">
                    Thank You! Your message has been sent.
                  </p>
                  <p className="text-xs text-slate-600">
                    A club team lead will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-brand-600 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g. Alex Ndiritu"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm shadow-xs"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="e.g. alex@students.dkut.ac.ke"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      placeholder="e.g. Project Collaboration or Sponsorship"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm shadow-xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell us about your project, idea, or questions..."
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm resize-none shadow-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-brand-500/25 transition-all"
                  >
                    <span>SEND MESSAGE</span>
                    <FaPaperPlane className="text-xs" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}