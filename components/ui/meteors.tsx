"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden", // full-screen overlay
        className
      )}
    >
      {meteors.map((_, idx) => {
        const positionPercent = Math.random() * 100; // random horizontal spread
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 5;
        const size = Math.random() * 0.5 + 0.75; // scale effect

        return (
          <span
            key={`meteor-${idx}`}
            className={cn(
              "absolute h-0.5 w-0.5 rotate-45 rounded-full bg-slate-400 shadow-[0_0_6px_1px_rgba(255,255,255,0.1)]",
              "after:absolute after:top-1/2 after:left-0 after:h-[1px] after:w-[60px] after:-translate-y-1/2 after:transform after:bg-gradient-to-r after:from-white after:to-transparent after:blur-sm"
            )}
            // style={{
            //   top: "-60px",
            //   left: `${positionPercent}%`,
            //   transform: `scale(${size})`,
            //   animation: `meteor-fall linear ${duration}s ${delay}s infinite`,
            // }}

            style={{
              top: "-40px", // Start above the container
              left: `${positionPercent}%`,
              transform: `scale(${size})`,
              animationDelay: Math.random() * 5 + "s", // Random delay between 0-5s
              animation: `meteor-fall linear ${duration}s ${delay}s infinite`, // Keep some randomness in duration
            }}
          />
        );
      })}

      {/* Meteor fall animation keyframes */}
      <style jsx>{`
        @keyframes meteor-fall {
          0% {
            transform: translateY(0) translateX(0) rotate(45deg);
            opacity: 0.7;
          }
          100% {
            transform: translateY(120vh) translateX(10vw) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );
};
