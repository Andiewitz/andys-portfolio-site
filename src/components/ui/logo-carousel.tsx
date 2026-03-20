"use client";

import React, { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Logo {
  name: string;
  id: number;
  img: React.ReactNode;
}

interface LogoCarouselProps {
  columnCount?: number;
}

const LOGOS = [
  { name: "Next.js", id: 1, img: <span className="font-bold tracking-tighter">NEXT.JS</span> },
  { name: "React", id: 2, img: <span className="font-bold text-blue-500 font-serif">REACT</span> },
  { name: "Tailwind", id: 3, img: <span className="font-bold text-sky-500">TAILWIND</span> },
  { name: "Framer Motion", id: 4, img: <span className="font-bold italic text-purple-600">MOTION</span> },
  { name: "Radix UI", id: 5, img: <span className="font-bold tracking-widest text-zinc-900">RADIX</span> },
  { name: "Nginx", id: 6, img: <span className="font-bold text-emerald-600">NGINX</span> },
  { name: "Docker", id: 7, img: <span className="font-bold text-blue-600">DOCKER</span> },
  { name: "FastAPI", id: 8, img: <span className="font-bold text-emerald-500">FASTAPI</span> },
  { name: "Python", id: 9, img: <span className="font-bold text-amber-500">PYTHON</span> },
  { name: "Django", id: 10, img: <span className="font-bold text-emerald-950">DJANGO</span> },
  { name: "MongoDB", id: 11, img: <span className="font-bold text-green-600">MONGODB</span> },
  { name: "PostgreSQL", id: 12, img: <span className="font-bold text-blue-900">POSTGRES</span> },
];

export default function LogoCarousel() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-24 w-full max-w-6xl px-10 py-16">
      {LOGOS.map((logo) => (
        <div 
          key={logo.id}
          className="relative flex items-center justify-center transition-all duration-300 transform hover:scale-110"
        >
          <div className="text-lg md:text-xl font-black tracking-tighter text-black/90">
            {logo.img}
          </div>
        </div>
      ))}
    </div>
  );
}
