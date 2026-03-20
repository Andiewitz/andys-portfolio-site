"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import LogoCarousel from "@/components/ui/logo-carousel";

export function About() {
  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-transparent text-black py-32 px-6 sm:px-10 lg:px-24"
    >
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_2fr] gap-20">
        {/* Sticky Label */}
        <div className="relative">
          <div className="sticky top-40 text-[10vw] font-bold leading-none tracking-tighter mix-blend-difference">
            ABOUT.
          </div>
        </div>

        {/* Content - Removed the secondary opacity and Y transformations */}
        <div className="flex flex-col gap-16 md:gap-32 pt-20">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight max-w-[800px]">
              I help builders transform complex ideas into intuitive digital products that stand the test of time.
            </h2>
            <p className="text-xl md:text-2xl text-black/60 max-w-[650px] leading-relaxed">
              With a foundation in both design and engineering, I bridge the gap between aesthetic vision and functional excellence. I don&apos;t just build interfaces; I engineer experiences that resonate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Core Expertise</span>
              <ul className="space-y-3">
                {["Digital Product Design", "Full-Stack Development", "Brand Identity Systems", "Interface Engineering"].map((skill) => (
                  <li key={skill} className="text-xl font-medium border-b border-black/10 pb-3 hover:pl-4 transition-all duration-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Recent History</span>
              <p className="text-lg text-black/60 leading-relaxed font-medium">
                Previously leading design teams at innovative startups and collaborating with global brands to push the boundaries of what&apos;s possible on the web.
              </p>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="w-full space-y-12 py-12 flex flex-col items-center border-t border-black/5">
            <div className="flex flex-col items-center gap-2">
              <GradientHeading variant="secondary" size="sm">
                TECHNOLOGY STACK
              </GradientHeading>
              <GradientHeading size="xxl" className="text-center">
                Built with precision.
              </GradientHeading>
            </div>

            <div className="w-full flex justify-center">
              <LogoCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
