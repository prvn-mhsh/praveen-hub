import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 🌀 Tilt logic
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15; // tilt intensity
    const rotateY = (centerX - x) / 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  // 🌈 Gradient animation setup
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0 50%", "100% 50%", "0 50%"] },
  };

  return (
    <div
      className={cn(
        "relative p-[3px] rounded-3xl overflow-hidden transition-transform duration-300",
        containerClassName
      )}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🌈 Animated gradient border layer */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 6, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-0 blur-sm",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />

      {/* ⚪ White content area */}
      <div
        className={cn(
          "relative z-10 bg-white rounded-[calc(1.5rem-3px)] p-6 text-black shadow-xl",
          "transition-all duration-300 ease-out",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default BackgroundGradient;
