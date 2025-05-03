import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
  return (
    <section className="w-full py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-sm font-semibold text-teal-400 tracking-wider uppercase">
          Featured Webinars
        </h2>
        <p className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight">
            Enhance Your Musical Journey
          </span>
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Our curated programs are designed to inspire, engage, and elevate your
          creative path through meaningful learning experiences.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export default UpcomingWebinars;

export const projects = [
  {
    title: "Melody Masters",
    description:
      "Learn songwriting from industry professionals with hands-on guidance and live Q&A sessions.",
    link: "https://melodymasters.com",
  },
  {
    title: "Rhythm Lab",
    description:
      "A percussion-focused series that dives into drumming techniques, timing, and groove essentials.",
    link: "https://rhythmlab.com",
  },
  {
    title: "Vocal Voyage",
    description:
      "Master vocal techniques and stage presence with live coaching from award-winning vocalists.",
    link: "https://vocalvoyage.com",
  },
  {
    title: "Soundscape Studio",
    description:
      "Explore the world of music production, mixing, and mastering using modern DAWs like Ableton and Logic Pro.",
    link: "https://soundscapestudio.com",
  },
  {
    title: "Harmony Hub",
    description:
      "An interactive series focused on music theory, chord progressions, and harmonizing for all levels.",
    link: "https://harmonyhub.com",
  },
  {
    title: "Live Loopers",
    description:
      "Discover the art of live looping and create mesmerizing performances with loop pedals and software.",
    link: "https://liveloopers.com",
  },
];
