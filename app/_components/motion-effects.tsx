"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-[var(--ese-blue)]"
      style={{ scaleX }}
    />
  );
}

export function Reveal({ children, className = "", delay = 0, y = 28 }: MotionWrapperProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y, filter: "blur(8px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = Omit<MotionWrapperProps, "delay" | "y"> & {
  tag?: "div" | "ul" | "ol";
};

export function Stagger({ children, className = "", tag = "div" }: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const Component = (motion as any)[tag] || motion.div;

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.16 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.08,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({ children, className = "" }: Omit<MotionWrapperProps, "delay" | "y">) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.64, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerListItem({
  children,
  className = "",
}: Omit<MotionWrapperProps, "delay" | "y">) {
  return (
    <motion.li
      className={className}
      variants={{
        hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.64, ease },
        },
      }}
    >
      {children}
    </motion.li>
  );
}

type ParallaxFrameProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
};

export function ParallaxFrame({ children, className = "", amount = 32 }: ParallaxFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div className="absolute inset-[-10%]" style={reduceMotion ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}

export function HoverLift({ children, className = "" }: Omit<MotionWrapperProps, "delay" | "y">) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.28, ease }}
    >
      {children}
    </motion.div>
  );
}
