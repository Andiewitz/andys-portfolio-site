"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@heroui/button";
import { HeroLiquidMetalRoot, HeroLiquidMetalVisual } from "@/components/ui/hero-liquid-metal";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
export function Hero({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Aggressive Fading for Hero elements to prevent ghost artifacts
  const headlineY = useTransform(scrollYProgress, [0, 0.25], [0, -300]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  const primaryVisualY = useTransform(scrollYProgress, [0, 0.25], [0, -400]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  
  const secondaryVisualY = useTransform(scrollYProgress, [0, 0.25], [0, -500]);
  
  const footerY = useTransform(scrollYProgress, [0, 0.1], [0, 200]);
  const footerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Total Hero occlusion logic - guaranteed 0 opacity early
  const heroContainerOpacity = useTransform(scrollYProgress, [0.18, 0.22], [1, 0]);

  return (
    <section className="min-h-screen bg-transparent text-white flex flex-col relative">
      {/* Spacer for fixed navbar */}
      <div className="h-32 pointer-events-none" />

      {/* Main Hero Content */}
      <motion.div 
        style={{ opacity: visualOpacity }}
        className="flex-1 flex flex-col"
      >
        <HeroLiquidMetalRoot 
          className="flex-1 flex flex-col"
          colorTint="#ffffff"
          speed={0.8}
          scale={0.7}
          distortion={0.3}
        >
          <div className="flex-1 grid lg:grid-cols-2 items-center px-6 sm:px-8 lg:px-16 xl:px-24 py-6 overflow-hidden gap-12 relative border-0">
            {/* Main Headline */}
            <motion.div 
              style={{ y: headlineY, opacity: headlineOpacity }}
              className="z-10 w-full flex justify-center lg:justify-start"
            >
              <h1 className="text-[14vw] sm:text-[12vw] lg:text-[8vw] xl:text-[7.5vw] font-medium leading-[0.82] tracking-[-0.03em] select-none text-center lg:text-left">
                {["ENGINEER.", "DESIGNER.", "BUILDER."].map((text, index) => (
                  <motion.span
                    key={text}
                    initial={{ opacity: 0, x: -100, filter: "blur(20px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block relative"
                  >
                    {text}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* Visuals on the right */}
            <motion.div 
              style={{ opacity: visualOpacity }}
              className="relative h-full w-full flex items-center justify-center lg:justify-center lg:-ml-24 xl:-ml-32"
            >
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                {/* Primary floating component */}
                <motion.div
                  style={{ y: primaryVisualY }}
                  initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="w-full h-full relative z-10"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 3, 0]
                    }}
                    transition={{ 
                      y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-full h-full"
                  >
                    <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px] scale-150" />
                    <HeroLiquidMetalVisual 
                      className="!block h-full w-full opacity-100 transition-all duration-700 active:scale-95 cursor-grab active:cursor-grabbing"
                      desktopClassName="rounded-full"
                      desktopShaderProps={{ scale: 0.75, speed: 0.9, distortion: 0.4 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Secondary floating component (Orbiter) */}
                <motion.div
                  style={{ y: secondaryVisualY }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 0.7, 
                    scale: 1,
                  }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute -top-10 lg:-top-20 right-0 w-32 h-32 lg:w-48 lg:h-48 z-20 pointer-events-none"
                >
                  <motion.div
                    animate={{ 
                      y: [20, -20, 20],
                      x: [10, -10, 10]
                    }}
                    transition={{ 
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                      x: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-full h-full"
                  >
                    <HeroLiquidMetalVisual 
                      className="!block h-full w-full"
                      desktopShaderProps={{ scale: 0.4, speed: 1.4, distortion: 0.6, colorTint: "#a0a0a0" }}
                      desktopClassName="rounded-full"
                    />
                  </motion.div>
                </motion.div>

                {/* Third floating component (Depth) */}
                <motion.div
                  style={{ opacity: useTransform(scrollYProgress, [0, 0.25], [0.3, 0]) }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 0.3,
                    y: [0, 40, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    opacity: { duration: 2, delay: 1.5 },
                    y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -bottom-12 -left-12 w-40 h-40 lg:w-64 lg:h-64 z-0 pointer-events-none blur-sm"
                >
                  <HeroLiquidMetalVisual 
                    className="!block h-full w-full"
                    desktopShaderProps={{ scale: 0.5, speed: 0.5, distortion: 0.2, colorTint: "#444" }}
                    desktopClassName="rounded-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </HeroLiquidMetalRoot>
      </motion.div>

      {/* Bottom Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1.5,
          ease: [0.16, 1, 0.3, 1] 
        }}
        style={{ y: footerY, opacity: footerOpacity }}
        className="px-6 sm:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row md:items-end justify-between gap-12 pb-12 z-10"
      >
        {/* Left - Social Proof */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex items-center gap-6"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white/10 border-2 border-black backdrop-blur-md"
              />
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-white fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-white/50 mt-1 uppercase tracking-widest">Trusted by 150+ global teams</span>
          </div>
        </motion.div>

        {/* Right - Description & CTA */}
        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-8 lg:gap-16">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="text-sm lg:text-base text-white/50 max-w-[320px] leading-relaxed text-right md:text-left"
          >
            Crafting immersive digital experiences through cutting-edge design and full-stack engineering excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <Button 
              className="group rounded-none border-2 border-white bg-transparent text-white font-bold h-14 px-8 text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all"
              size="lg"
              endContent={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            >
              EXPLORE WORK
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
