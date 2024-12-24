import React from 'react';
import creativeThinkingIcon from '../assets/images/creative-thinking.svg';
import collaborationIcon from '../assets/images/collaboration.svg';
import projectIcon from '../assets/images/engineering.svg';
import innovationIcon from '../assets/images/innovation.svg';
import leadershipIcon from '../assets/images/leadership.svg';
import skillsIcon from '../assets/images/skills.svg';

const items = [
  {
    title: 'Cultivate Creative Thinking',
    description:
      'We provide an environment that encourages out-of-the-box thinking. From brainstorming sessions to innovation workshops, we offer the tools and support to help you explore and develop your ideas.',
    icon: creativeThinkingIcon, 
  },
  {
    title: 'Collaboration',
    description:
      'We provide an environment that encourages out-of-the-box thinking. From brainstorming sessions to innovation workshops, we offer the tools and support to help you explore and develop your ideas.',
    icon: collaborationIcon,
  },
  {
    title: 'Hands-On Projects',
    description:
      'We provide an environment that encourages out-of-the-box thinking. From brainstorming sessions to innovation workshops, we offer the tools and support to help you explore and develop your ideas.',
    icon: projectIcon,
  },
  {
    title: 'Build Your Skill Set',
    description:
      'We provide an environment that encourages out-of-the-box thinking. From brainstorming sessions to innovation workshops, we offer the tools and support to help you explore and develop your ideas.',
    icon: skillsIcon,
  },
  {
    title: 'Innovation',
    description:
      'We provide an environment that encourages out-of-the-box thinking. From brainstorming sessions to innovation workshops, we offer the tools and support to help you explore and develop your ideas.',
    icon: innovationIcon,
  },
  {
    title: 'Leadership and Growth',
    description:
      'We provide an environment that encourages out-of-the-box thinking. From brainstorming sessions to innovation workshops, we offer the tools and support to help you explore and develop your ideas.',
    icon: leadershipIcon,
  },
];

const WhyJoinUs = () => {
  return (
    <div className="bg-white py-12 px-6 why-join-us">
      <h1 className="font-bold text-center  mb-8">Why Join Us?</h1>
      <h2 className=" font-bold text-center text-black mb-8">Discover, Learn, Innovate</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={item.icon} alt={`${item.title} icon`} className="w-16 h-16 mb-4" />
            <h3 className="text-xl  mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJoinUs;
