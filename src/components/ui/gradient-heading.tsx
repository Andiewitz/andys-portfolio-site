"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientHeadingProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
}

export function GradientHeading({ 
  children, 
  variant = "primary", 
  size = "xl",
  className 
}: GradientHeadingProps) {
  const variants = {
    primary: "from-black via-black/80 to-black/40",
    secondary: "from-zinc-500 via-zinc-400 to-zinc-300",
    tertiary: "from-blue-600 via-purple-600 to-pink-600",
  };
  
  const sizes = {
    sm: "text-sm font-semibold tracking-wider",
    md: "text-base font-semibold tracking-wider",
    lg: "text-xl font-bold tracking-tight",
    xl: "text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl",
    xxl: "text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl",
  };

  return (
    <h2 className={cn(
      "bg-gradient-to-br bg-clip-text text-transparent animate-gradient-xy py-2",
      variants[variant],
      sizes[size],
      className
    )}>
      {children}
    </h2>
  );
}
