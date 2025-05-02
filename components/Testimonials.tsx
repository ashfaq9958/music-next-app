"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times — an age of wisdom and of foolishness, belief and doubt, light and darkness. A mirror to our most complex moments.",
    name: "Charles Dickens",
    title: "Author, *A Tale of Two Cities*",
  },
  {
    quote:
      "To be, or not to be — the timeless question of our inner battles. Shakespeare's words remind us of the courage it takes to choose.",
    name: "William Shakespeare",
    title: "Playwright, *Hamlet*",
  },
  {
    quote:
      "All that we see or seem is but a dream within a dream. A haunting reflection of life’s fleeting reality.",
    name: "Edgar Allan Poe",
    title: "Poet, *A Dream Within a Dream*",
  },
  {
    quote:
      "It is a truth universally acknowledged — Austen’s brilliance lies in how she said so much with such elegance and wit.",
    name: "Jane Austen",
    title: "Novelist, *Pride and Prejudice*",
  },
  {
    quote:
      "Call me Ishmael. With those words, Melville set sail into the vast unknown — and invited us all to reflect on our own journeys.",
    name: "Herman Melville",
    title: "Author, *Moby-Dick*",
  },
];

function Testimonials() {
  return (
    <section className="relative w-full h-[42rem] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-white dark:bg-neutral-950 antialiased px-4">
      {/* Subtle Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)]"
        )}
      />

      {/* Radial Focus Mask */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Heading */}
      <h2 className="z-20 text-4xl sm:text-5xl font-extrabold text-center text-neutral-900 dark:text-white mb-10 tracking-tight">
        Hear Our Harmony
        <span className="block text-lg font-medium text-neutral-500 dark:text-neutral-400 mt-2">
          Voices of Success from Timeless Creators
        </span>
      </h2>

      {/* Moving Cards */}
      <div className="z-20 w-full max-w-7xl">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}

export default Testimonials;
