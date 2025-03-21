import { cn } from "@/lib/cn";
import React from "react";

interface GlowTextProps {
  className?: string;
  children: React.ReactNode;
}

const GlowText: React.FC<GlowTextProps> = ({ className, children }) => {
  return (
    <div className="relative inline-block">
      {/* Glow Layer */}
      <span
        className={cn(
          "absolute left-0 top-0 text-4xl font-black text-cyan-400 pointer-events-none",
          className
        )}
        style={{
          textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff",
          transform: "scale(1.01)",
          zIndex: 0,
        }}
      >
        {children}
      </span>

      {/* Main Text Layer */}
      <span className="relative text-4xl font-black text-white z-10">
        {children}
      </span>
    </div>
  );
};

export default GlowText;