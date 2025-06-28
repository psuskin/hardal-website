"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  UtensilsCrossed,
  CalendarRange,
  BookOpenCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: UtensilsCrossed,
    title: "FRÜHSTÜCK",
    description:
      "Traditionelles türkisches Frühstück mit einer Vielfalt an frischen Zutaten und Köstlichkeiten",
    link: "/fruhstuck",
    image:
      "https://images.unsplash.com/photo-1533920379810-6bedac961555?q=80&w=2070",
    number: "01",
  },
  {
    icon: Coffee,
    title: "BRUNCH",
    description:
      "Wochenend-Brunch-Erlebnis mit einer Mischung aus türkischen und internationalen Aromen",
    link: "/brunch",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070",
    number: "02",
  },
  {
    icon: CalendarRange,
    title: "CATERING",
    description:
      "Professioneller Catering-Service für Veranstaltungen und besondere Anlässe",
    link: "/catering",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
    number: "03",
  },
  {
    icon: BookOpenCheck,
    title: "RESERVIERUNG",
    description: "Buchen Sie Ihren Tisch online für ein perfektes Esserlebnis",
    link: "/reservierung",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
    number: "04",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");

      // Stagger animation for cards
      gsap.from(cards, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-black py-32 px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f4d03f]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f4d03f]/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-block">
            <p className="text-sm tracking-[0.3em] text-[#f4d03f] uppercase font-medium mb-4">
              Unser Angebot
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-white">
              Unsere Services
            </h2>
            <div className="h-[2px] w-20 bg-[#f4d03f] mx-auto mt-6"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                href={service.link}
                key={service.title}
                className="service-card group"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-neutral-900/50 backdrop-blur-sm border border-white/5">
                  {/* Large Number */}
                  <div className="absolute top-8 right-8 z-20">
                    <span className="text-7xl font-bold font-pacifico text-white/30 group-hover:text-white/20 transition-colors duration-500">
                      {service.number}
                    </span>
                  </div>

                  {/* Background Image with Parallax Effect */}
                  <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700 ease-out">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-50 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    {/* Top Content with Icon */}
                    <div className="relative z-10">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-[#f4d03f]/30 rounded-full blur-xl transform scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="relative bg-[#f4d03f] rounded-full w-16 h-16 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Icon className="w-8 h-8 text-black" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="relative z-10">
                      <h3 className="text-white text-2xl font-medium tracking-wider mb-3 group-hover:text-[#f4d03f] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed max-w-[90%] transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Centered Arrow - Always Visible */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center z-10">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full transform transition-all duration-500 group-hover:-rotate-45"
                    >
                      {/* Arrow Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#f4d03f"
                        strokeWidth="1.5"
                        className="transition-all duration-500 group-hover:fill-[#f4d03f]/20"
                      />

                      {/* Arrow Line */}
                      <line
                        x1="32"
                        y1="50"
                        x2="68"
                        y2="50"
                        stroke="#f4d03f"
                        strokeWidth="1.5"
                        className="transition-all duration-500"
                      />

                      {/* Arrow Head */}
                      <path
                        d="M60,38 L68,50 L60,62"
                        fill="none"
                        stroke="#f4d03f"
                        strokeWidth="1.5"
                        className="transition-colors duration-500"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Add keyframe animations to global styles */}
      <style jsx global>{`
        @keyframes circle-draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes line-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
