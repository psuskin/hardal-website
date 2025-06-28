"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
  interval?: number;
}

export function ImageSlider({
  images,
  className,
  interval = 5000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none z-[1]"></div>

      {/* Images */}
      {images.map((image, index) => (
        <div
          key={image.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            currentIndex === index ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-[2]">
        {images.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-white w-4"
                : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => setCurrentIndex(index)}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
