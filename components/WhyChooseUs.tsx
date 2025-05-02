"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
    
const musicSchoolContent = [
    {
      title: "Discover Your Unique Sound",
      description:
        "Embark on a musical journey tailored just for you. With personalized instruction, our school helps unlock your creative potential—your aspirations guide our approach to your growth.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-600 to-emerald-500 text-white text-xl font-semibold px-6 text-center rounded-xl shadow-lg">
          Personalized Music Journey
        </div>
      ),
    },
    {
      title: "Live Feedback & Real-Time Engagement",
      description:
        "Immerse yourself in dynamic sessions where immediate feedback fosters clarity and confidence. Learn, perform, and refine with real-time collaboration.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-xl font-semibold px-6 text-center rounded-xl shadow-lg">
          Real-Time Collaboration
        </div>
      ),
    },
    {
      title: "Modern Curriculum, Timeless Value",
      description:
        "Stay ahead with our constantly evolving curriculum—designed to reflect the latest in music education, technology, and performance practices.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-500 to-pink-600 text-white text-xl font-semibold px-6 text-center rounded-xl shadow-lg">
          Evolving Learning Path
        </div>
      ),
    },
    {
      title: "Unlimited Learning Resources",
      description:
        "Gain access to an expansive library of lessons, tools, and guided practices. Our resources are designed to empower continuous self-improvement at every level.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-xl font-semibold px-6 text-center rounded-xl shadow-lg">
          Learn Anytime, Anywhere
        </div>
      ),
    },
    {
      title: "Cutting-Edge Curriculum",
      description:
        "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-500 to-sky-500 text-white text-xl font-semibold px-6 text-center rounded-xl shadow-lg">
          Future-Ready Education
        </div>
      ),
    },
    {
      title: "Limitless Learning Opportunities",
      description:
        "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-lime-500 to-green-500 text-white text-xl font-semibold px-6 text-center rounded-xl shadow-lg">
          Explore Without Limits
        </div>
      ),
    },
  ];
  
  return (
    <section className="w-full py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-sm font-semibold text-teal-500 tracking-widest uppercase">
          Why Choose Us
        </h2>
        <p className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Experience Music Education Differently
        </p>
        <p className="mt-4 text-base md:text-lg text-neutral-400 max-w-2xl mx-auto">
          Our programs are crafted to inspire, engage, and elevate. Here’s what sets us apart.
        </p>
      </div>

      <StickyScroll content={musicSchoolContent} />
    </section>
  );
};

export default WhyChooseUs;
