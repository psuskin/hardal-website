"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  color?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  duration = 1,
  color = "white",
  as: Component = "h1",
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const splitText = text.split("");
    if (textRef.current) {
      textRef.current.innerHTML = "";
      splitText.forEach((char) => {
        const span = document.createElement("span");
        if (char === " ") {
          span.innerHTML = "&nbsp;";
          span.style.marginRight = "";
        } else {
          span.textContent = char;
        }
        span.style.opacity = "0";
        span.style.display = "inline-block";
        span.style.transform = "translateY(100%) rotate(20deg)";
        textRef.current?.appendChild(span);
      });

      gsap.to(textRef.current.children, {
        opacity: 1,
        y: 0,
        rotate: 0,
        stagger: 0.03,
        delay,
        duration,
        ease: "power4.out",
        onStart: () => {
          if (containerRef.current) {
            containerRef.current.style.visibility = "visible";
          }
        },
      });
    }
  }, [text, delay, duration]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden"
      style={{ visibility: "hidden" }}
    >
      <Component
        ref={textRef}
        className={cn("inline-block", className)}
        style={{ color }}
      />
    </div>
  );
}
