"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface MovingBorderProps {
  children: ReactNode;
  duration?: number;
  rx?: string;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
  offset?: number;
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "30%",
  className,
  containerClassName,
  borderRadius = "1.75rem",
  offset = 0,
}: MovingBorderProps) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const interactiveRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!pathRef.current || !interactiveRef.current) return;
    // Implementation here
  }, [duration, rx, offset]);

  return (
    <div
      className={twMerge("relative p-[1px] group", containerClassName)}
      style={{ borderRadius }}
    >
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path ref={pathRef} className="glow" />
          <path ref={pathRef} />
        </svg>
      </div>

      <div
        ref={interactiveRef}
        className={twMerge("relative bg-slate-900/[0.7]", className)}
        style={{
          borderRadius: `calc(${borderRadius} - 2px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const MovingBorderStyle = ({ children, ...props }: MovingBorderProps) => {
  return (
    <MovingBorder
      containerClassName="cursor-pointer"
      className="p-4 hover:bg-slate-800/[0.4] duration-500"
      {...props}
    >
      {children}
    </MovingBorder>
  );
};
