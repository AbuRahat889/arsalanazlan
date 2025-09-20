"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import { useState, ReactNode } from "react";

type HoverEffectProps<T> = {
  items: T[];
  renderItem: (item: T, idx: number) => ReactNode; // ✅ makes it reusable
  className?: string;
};

export function HoverEffect<T>({
  items,
  renderItem,
  className,
}: HoverEffectProps<T>) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Hover background */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-xl bg-[#f1a63db4] shadow-custom-shadow"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Render your custom content */}
          <div className="relative z-10">{renderItem(item, idx)}</div>
        </div>
      ))}
    </div>
  );
}
