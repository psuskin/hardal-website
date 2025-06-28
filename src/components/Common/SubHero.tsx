"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedText } from "@/components/ui/animated-text";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface SubHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  height?: "small" | "medium" | "large";
  overlay?: "light" | "dark" | "none";
  align?: "left" | "center" | "right";
  showDivider?: boolean;
  className?: string;
}

const SubHero: React.FC<SubHeroProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  height = "medium",
  overlay = "dark",
  align = "center",
  showDivider = true,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Height classes mapping
  const heightClasses = {
    small: "h-[30vh] md:h-[40vh]",
    medium: "h-[40vh] md:h-[50vh]",
    large: "h-[50vh] md:h-[60vh]",
  };

  // Overlay classes mapping
  const overlayClasses = {
    light: "bg-gradient-to-b from-black/30 to-black/10",
    dark: "bg-gradient-to-b from-black/70 to-black/30",
    none: "",
  };

  // Alignment classes mapping
  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  useEffect(() => {
    // Simple, subtle parallax effect
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    parallaxTl.to(imageRef.current, {
      yPercent: -15,
      ease: "none",
    });

    // Simple fade in for description and divider
    gsap.from(".hero-fade-in", {
      opacity: 0,
      y: 10,
      duration: 0.8,
      delay: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });

    return () => {
      parallaxTl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${heightClasses[height]} w-full overflow-hidden ${className}`}
    >
      {/* Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-[120%] scale-110"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
        </div>
      </div>

      {/* Content */}
      <div
        className={`container mx-auto px-4 h-full flex flex-col justify-center ${alignClasses[align]} relative z-10`}
      >
        {subtitle && (
          <p className="hero-fade-in text-lg md:text-xl text-[#f4d03f] font-light mb-2">
            {subtitle}
          </p>
        )}
        <AnimatedText
          text={title}
          as="h1"
          className="text-4xl md:text-6xl font-light mb-4"
          delay={0.2}
          duration={0.8}
        />
        {description && (
          <p className="hero-fade-in text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
            {description}
          </p>
        )}
        {showDivider && (
          <div className="hero-fade-in mt-8 h-[1px] w-24 bg-[#f4d03f] mx-auto" />
        )}
      </div>
    </div>
  );
};

export default SubHero;
