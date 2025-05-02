"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { Button } from "./ui/moving-border";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-teal-500 tracking-widest uppercase">
          Featured Courses
        </h2>
        <p className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Learn With the Best
        </p>
        <p className="mt-4 text-base md:text-lg text-neutral-400 max-w-2xl mx-auto">
          Discover our handpicked courses curated by industry professionals.
          Start mastering your craft today.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featuredCourses.map((course: Course) => (
          <Link
            key={course.id}
            href={`/courses/${course.slug}`}
            className="group"
          >
            <div className="rounded-3xl bg-white dark:bg-zinc-900 overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.02] transform-gpu">
              <div className="p-6 h-full flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 line-clamp-3">
                  {course.description}
                </p>
                <span className="mt-auto inline-block text-sm font-medium text-teal-600 dark:text-teal-400 transition-colors group-hover:underline">
                  Learn More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
        >
          All courses
        </Button>
      </div>
    </section>
  );
}

export default FeaturedCourses;
