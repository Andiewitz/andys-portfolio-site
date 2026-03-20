"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Navbar } from "./components/navbar";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 1. Raw Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 2. Smoothed Progress - Buffers chunky mouse wheel input for fluid animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 3. Expanding Mask Transition - High-performance VMAX radius
  const clipPath = useTransform(
    smoothProgress,
    [0.12, 0.5],
    ["circle(0% at 50% 50%)", "circle(150vmax at 50% 50%)"]
  );

  // 4. Global Navbar Color Flip - Tied to smoothed progress
  const navColor = useTransform(smoothProgress, [0.2, 0.45], ["#ffffff", "#000000"]);

  return (
    <motion.main 
      ref={containerRef}
      className="relative w-full overflow-x-hidden min-h-screen bg-black"
    >
      {/* Topmost Navbar - Transitions color at the meeting point */}
      <Navbar navColor={navColor} />

      {/* Hero Section - Static at z-0 */}
      <section className="relative z-0">
        <Hero scrollYProgress={scrollYProgress} />
      </section>

      {/* Expanding About Section Reveal - Reverting to the 'Perfect' overlap (Negative Margin) */}
      <motion.div 
        style={{ 
          clipPath,
          backgroundColor: "#ffffff",
          willChange: "clip-path"
        }}
        className="relative z-10 -mt-[40vh] lg:-mt-[15vh]"
      >
        <About />
      </motion.div>
    </motion.main>
  );
}
