import React from "react";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import AreasOfInnovation from "../components/AreasOfInnovation";
import FeaturedInnovation from "../components/FeaturedInnovation";
import Innovations from "../components/Innovations";
import UpcomingEvents from "../components/UpcomingEvents";
import CommunityImpact from "../components/CommunityImpact";
import BecomeMember from "../components/BecomeMember";

export default function Home() {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. What We Do Section */}
      <WhatWeDo />

      {/* 3. Areas of Innovation Section */}
      <AreasOfInnovation />

      {/* 4. Featured Innovation Spotlight (Umeme Sense) */}
      <FeaturedInnovation />

      {/* 5. Our Projects Grid with Category Filters */}
      <Innovations />

      {/* 6. Upcoming Events */}
      <UpcomingEvents />

      {/* 7. People Behind the Innovation & Our Impact */}
      <CommunityImpact />

      {/* 8. Become A Member CTA */}
      <BecomeMember />
    </div>
  );
}