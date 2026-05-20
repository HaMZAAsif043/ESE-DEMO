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

import { MouseEvent } from "react";

export function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(1, 99, 210, 0.08)",
  borderColor = "rgba(1, 99, 210, 0.35)",
  radius = 350
}: {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  borderColor?: string;
  radius?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--mouse-x", `${x}px`);
    ref.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        // @ts-ignore
        "--glow-color": glowColor,
        // @ts-ignore
        "--border-color": borderColor,
        // @ts-ignore
        "--glow-radius": `${radius}px`,
      }}
    >
      {/* Background Spotlight Glow */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(var(--glow-radius) circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--glow-color), transparent 80%)`
        }}
      />
      
      {/* Border Spotlight Glow (Vercel-style) */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          padding: "1px",
          background: `radial-gradient(var(--glow-radius) circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--border-color), transparent 80%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const num = parseInt(value.replace(/[^0-9]/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");
    if (isNaN(num)) {
      setDisplayValue(value);
      return;
    }

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          started = true;
          let start = 0;
          const duration = 1600; // 1.6s duration
          const startTime = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const currentNum = Math.floor(easeProgress * num);
            setDisplayValue(`${currentNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayValue}</span>;
}
