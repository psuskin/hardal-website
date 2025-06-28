import React from "react";
import { cn } from "@/lib/utils";

interface MinimalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "light" | "dark";
  size?: "default" | "small";
  withArrow?: boolean;
}

const MinimalButton = ({
  children,
  className,
  variant = "light",
  size = "default",
  withArrow = true,
  ...props
}: MinimalButtonProps) => {
  return (
    <button
      className={cn(
        "group relative overflow-hidden rounded-full transition-all duration-300",
        "before:absolute before:inset-0 before:transition-transform before:duration-500",
        size === "default"
          ? "px-8 py-4 hover:pr-12"
          : "px-6 py-2.5 text-sm hover:pr-10",
        variant === "light"
          ? "bg-white text-black before:bg-[#f4d03f]"
          : "bg-[#f4d03f] text-black before:bg-white",
        "before:translate-x-full before:opacity-0 hover:before:translate-x-0 hover:before:opacity-100",
        className
      )}
      {...props}
    >
      <span className="relative z-10 font-medium tracking-wide text-sm uppercase">
        {children}
      </span>
      {withArrow && (
        <span
          className={cn(
            "absolute top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 z-10",
            size === "default" ? "right-6" : "right-4"
          )}
        >
          <svg
            width={size === "default" ? "20" : "16"}
            height={size === "default" ? "20" : "16"}
            viewBox="0 0 45 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
              fill="currentColor"
            />
          </svg>
        </span>
      )}
    </button>
  );
};

export default MinimalButton;
