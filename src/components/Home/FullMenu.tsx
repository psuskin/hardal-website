"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fullMenuData } from "@/lib/menu-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function FullMenu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Helper function to normalize slugs
  const normalizeSlug = (str: string): string => {
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/&/g, "and")
      .replace(/[^\w-]/g, "");
  };

  // Animation for initial load and hover effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (listRef.current) {
        const items = listRef.current.querySelectorAll(".menu-item");

        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: "power2.out",
          }
        );
      }

      // Handle menu item hover effects
      const menuWrapper = menuRef.current as HTMLDivElement | null;
      if (!menuWrapper) return;

      // Mouse move handler for the entire menu section
      menuWrapper.addEventListener("mousemove", (e: MouseEvent) => {
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

      // Setup hover effects for each menu item
      const menuItems = document.querySelectorAll<HTMLDivElement>(".menu-item");
      menuItems.forEach((item) => {
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
    }, menuRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={menuRef}
      className="bg-black min-h-screen py-16 px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Floating Images Container */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {fullMenuData.map((category) => (
          <div
            key={`image-${category.title}`}
            data-image-id={category.title}
            className="menu-hover-image absolute opacity-0 scale-90 origin-center"
            style={{ top: 0, left: 0 }}
          >
            <div className="relative w-[40vh] h-[30vh] rounded-lg overflow-hidden">
              <Image
                src={category.image}
                alt={category.title}
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

      <div className="container mx-auto max-w-5xl">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="text-sm tracking-[0.3em] text-[#fcc81a] uppercase font-light mb-3 block">
              Hardal Restaurant
            </span>
            <h2 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
              Unsere Speisekarte
            </h2>
            <div className="w-16 h-px bg-[#fcc81a] mx-auto" />
            <p className="text-white/70 mt-6 text-sm">
              Möllner Landstraße 3, 22111 Hamburg | www.hardal.de |
              @hardalrestaurant
            </p>
          </div>
        </div>

        {/* Download PDF Button */}
        <div className="flex justify-center mb-16">
          <Link
            href="https://hardal.de/wp-content/uploads/2025/06/Hardal_Speisekarte_04.04.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-[#fcc81a]/30 rounded-full py-3 px-6 text-white transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#fcc81a]"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
            <span className="text-base font-medium">
              Komplette Speisekarte herunterladen (PDF)
            </span>
          </Link>
        </div>

        {/* Modern Menu List */}
        <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 gap-px">
          {fullMenuData.map((category, index) => (
            <Link
              key={category.title}
              href={`/menu/${normalizeSlug(category.title)}`}
              className="menu-item block group"
              data-item-id={category.title}
            >
              <div
                className={`flex items-center justify-between p-6 ${
                  index % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                } hover:bg-white/[0.04] transition-all duration-300 h-full`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h3 className="text-white text-lg font-light group-hover:text-[#fcc81a] transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <p className="text-white/60 text-sm">
                        {category.titleTR}
                      </p>
                      <span className="text-white/40 text-sm hidden sm:inline">
                        • {category.items.length} Gerichte
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-[#fcc81a] ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-32 text-center">
          <h3 className="text-white text-2xl font-light mb-3">
            Empfehlungen des Küchenchefs
          </h3>
          <p className="text-white/60 text-sm max-w-2xl mx-auto mb-12">
            Entdecken Sie unsere beliebtesten Gerichte, sorgfältig ausgewählt
            von unserem Küchenchef, um Ihnen die authentischen Aromen der
            türkischen Küche zu präsentieren.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Gemischte Grillplatte",
                description:
                  "Eine Auswahl unserer feinsten gegrillten Fleischsorten",
                image:
                  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070",
              },
              {
                name: "Künefe",
                description: "Traditionelles türkisches Dessert mit süßem Käse",
                image:
                  "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=2070",
              },
              {
                name: "Hardal Burger",
                description: "Unser Signature-Burger mit spezieller Sauce",
                image:
                  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl group"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                  <h4 className="text-[#fcc81a] text-xl font-medium mb-1">
                    {item.name}
                  </h4>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
