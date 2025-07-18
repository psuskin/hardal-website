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
      className="bg-gradient-to-b from-black via-black/95 to-black min-h-screen py-24 px-6 lg:px-12 relative overflow-hidden"
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
            <div className="relative w-[45vh] h-[35vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
                sizes="45vh"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Elegant Header */}
        <div className="text-center mb-24">
          <div className="inline-block relative">
            <span className="text-sm tracking-[0.4em] text-[#fcc81a] uppercase font-light mb-4 block">
              Hardal Restaurant
            </span>
            <h2 className="text-5xl lg:text-7xl font-light text-white mb-8 tracking-tight">
              Unsere Speisekarte
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#fcc81a] to-transparent mx-auto opacity-60" />
            <p className="text-white/70 mt-8 text-base tracking-wide">
              Möllner Landstraße 3, 22111 Hamburg | www.hardal.de |
              @hardalrestaurant
            </p>
          </div>
        </div>

        {/* Download PDF Button */}
        <div className="flex justify-center mb-24">
          <Link
            href="https://hardal.de/wp-content/uploads/2025/06/Hardal_Speisekarte_04.04.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full bg-[#fcc81a]/10 hover:bg-[#fcc81a] border border-[#fcc81a]/20 hover:border-[#fcc81a] px-10 py-5 transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#fcc81a] group-hover:text-black transition-colors duration-300"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
              <span className="text-lg font-medium text-white group-hover:text-black transition-colors duration-300">
                Speisekarte Herunterladen (PDF)
              </span>
            </div>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#fcc81a]/0 via-white/10 to-[#fcc81a]/0 transition-transform duration-1000"></div>
          </Link>
        </div>

        {/* Modern Menu List */}
        <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {fullMenuData.map((category, index) => (
            <div
              key={category.title}
              className="menu-item group relative"
              data-item-id={category.title}
            >
              <div
                className={`flex items-center p-8 ${
                  index % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                } hover:bg-[#fcc81a]/5 backdrop-blur-sm rounded-xl transition-all duration-500 h-full border border-transparent hover:border-[#fcc81a]/20`}
              >
                <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
                  </div>

                  <div>
                    <h3 className="text-white text-xl font-light group-hover:text-[#fcc81a] transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-white/60 text-base mt-1 group-hover:text-white/80 transition-colors duration-300">
                      {category.titleTR}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-32 text-center">
          <h3 className="text-white text-3xl font-light mb-4">
            Empfehlungen des Küchenchefs
          </h3>
          <p className="text-white/60 text-base max-w-2xl mx-auto mb-16">
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
                className="relative aspect-square overflow-hidden rounded-2xl group"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h4 className="text-[#fcc81a] text-xl font-medium mb-2">
                    {item.name}
                  </h4>
                  <p className="text-white/90 text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
