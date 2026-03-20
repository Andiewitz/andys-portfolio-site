"use client";

import { motion, type MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface NavbarProps {
  navColor: MotionValue<string>;
}

export function Navbar({ navColor }: NavbarProps) {
  return (
    <motion.nav 
      style={{ color: navColor }}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 sm:px-10 lg:px-16 py-8 pointer-events-none"
    >
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-auto flex items-center gap-4"
      >
        <motion.div 
          style={{ borderColor: navColor }}
          className="w-10 h-10 border-2 flex items-center justify-center relative group"
        >
          <motion.div 
            style={{ backgroundColor: navColor }}
            className="w-6 h-6 transition-all group-hover:scale-75" 
          />
        </motion.div>
        <span className="text-sm font-semibold tracking-widest uppercase hidden sm:block">
          PORTFOLIO
        </span>
      </motion.div>

      {/* Links */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="pointer-events-auto hidden lg:flex items-center gap-10"
      >
        {["About", "Projects", "Contact"].map((item) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`} 
            style={{ color: navColor }}
            className="text-xs font-medium tracking-wider transition-all uppercase relative group py-2 opacity-70 hover:opacity-100"
          >
            {item}
            <motion.span 
              style={{ backgroundColor: navColor }}
              className="absolute bottom-0 left-0 w-0 h-[1.5px] transition-all group-hover:w-full" 
            />
          </motion.a>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="pointer-events-auto"
      >
        <motion.button 
          style={{ color: navColor }}
          className="text-xs font-semibold tracking-wider px-4 py-2 transition-all uppercase flex items-center gap-2 group"
        >
          Connect
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.nav>
  );
}
