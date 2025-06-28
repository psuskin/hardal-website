"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface ImageItem {
  id: number | string;
  image: string;
  name: string;
}

interface CursorImageFollowProps {
  items: ImageItem[];
  className?: string;
}

const CursorImageFollow = ({
  items,
  className = "",
}: CursorImageFollowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Mouse move handler for the entire menu section
    container.addEventListener("mousemove", (e: MouseEvent) => {
      gsap.to(".menu-hover-image", {
        x: e.clientX,
        y: e.clientY,
        xPercent: -50,
        yPercent: -50,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      });
    });

    // Setup hover effects for each item
    const items = document.querySelectorAll<HTMLElement>("[data-item-id]");
    items.forEach((item) => {
      const itemId = item.getAttribute("data-item-id");

      item.addEventListener("mouseenter", () => {
        gsap.to(`[data-image-id="${itemId}"]`, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.set(`[data-image-id="${itemId}"]`, { zIndex: 1 });
        gsap.set(item, { zIndex: 2 });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(`[data-image-id="${itemId}"]`, {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.set(`[data-image-id="${itemId}"]`, { zIndex: -1 });
        gsap.set(item, { zIndex: 0 });
      });
    });

    return () => {
      // Cleanup event listeners
      container.removeEventListener("mousemove", () => {});
      items.forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 ${className}`}
      ref={containerRef}
    >
      {items.map((item) => (
        <div
          key={`image-${item.id}`}
          data-image-id={item.id}
          className="menu-hover-image absolute opacity-0 scale-90 origin-center"
          style={{ top: 0, left: 0 }}
        >
          <div className="relative w-[40vh] h-[30vh] rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="40vh"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CursorImageFollow;
