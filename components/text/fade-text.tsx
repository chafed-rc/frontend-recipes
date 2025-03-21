import { cn } from "@/lib/cn";
import React from "react";
import { motion } from "framer-motion";

interface FadeInTextProps {
  className?: string;
  children: React.ReactNode;
}

const FadeInText: React.FC<FadeInTextProps> = ({ className, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "linear" }}
      className={cn(
        "text-4xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-stone-500",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default FadeInText;