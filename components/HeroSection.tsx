import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:py-32 py-24 md:py-0">
      {/* Left Ambient Spotlight */}
      <Spotlight
        className="-top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] opacity-25"
        fill="white"
      />

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 tracking-tight leading-tight">
          Master the Art of Music
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-300 font-medium leading-relaxed">
          Unlock your full musical potential with expertly crafted courses.
          Whether you&#39;re just starting out or refining your skills, our path
          will elevate your sound.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-x-8">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-16 text-sm text-neutral-400 flex flex-wrap items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          <span>10,000+ Students</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <span>Industry Expert Instructors</span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
