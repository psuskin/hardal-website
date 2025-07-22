"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import MinimalButton from "@/components/Buttons/MinimalButton";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const topImageRef = useRef<HTMLDivElement>(null);
  const bottomLeftImageRef = useRef<HTMLDivElement>(null);
  const bottomRightImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for all small images
      gsap.to(topImageRef.current, {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(bottomLeftImageRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(bottomRightImageRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Basic fade in for text
      gsap.fromTo(
        textContentRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <section ref={containerRef} className="relative py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Content */}
            <div ref={textContentRef} className="space-y-10">
              <div className="inline-block">
                <p className="text-sm tracking-[0.3em] text-[#f4d03f] uppercase font-medium relative">
                  Über Hardal
                  <span className="absolute -bottom-2 left-0 w-1/3 h-[2px] bg-[#f4d03f]"></span>
                </p>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight">
                <span className="text-[#f4d03f]">AUTHENTISCHE</span>
                <br />
                TÜRKISCHE
                <br />
                <span className="font-extralight">KÜCHE</span>
              </h1>

              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Erleben Sie die reichhaltigen Aromen der türkischen Küche im
                  Herzen Hamburgs. Vom traditionellen Frühstück bis hin zu
                  eleganten Abendgerichten bringen wir Ihnen den authentischen
                  Geschmack der Türkei.
                </p>
                <p className="text-gray-400 leading-relaxed max-w-xl">
                  In der Möllner Landstraße 3 bieten wir eine vielfältige
                  Speisekarte mit Frühstück, Brunch, Catering-Service und jetzt
                  auch einem bequemen Lieferservice. Begleiten Sie uns auf einer
                  kulinarischen Reise, die traditionelle Rezepte mit moderner
                  Gastronomie verbindet.
                </p>
              </div>

              <div className="flex gap-6 items-center">
                <MinimalButton variant="dark" href="/Hardal_Speisekarte20.03.pdf">
                  Speisekarte Entdecken
                </MinimalButton>
                <div className="h-[2px] w-12 bg-gray-700"></div>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Hamburg
                </p>
              </div>
            </div>

            {/* Right Images with Connecting Lines */}
            <div className="relative h-[600px] lg:h-[700px]">
              {/* Connecting Lines SVG */}
              <svg
                className="absolute inset-0 w-full h-full z-0"
                viewBox="0 0 400 600"
                fill="none"
              >
                <path
                  d="M200 120 L150 300 L300 450 L200 120 L320 250 L150 300"
                  stroke="#333333"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <path
                  d="M80 330 L320 250 M200 120 L300 450"
                  stroke="#333333"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Top Right Image */}
              <div
                ref={topImageRef}
                className="absolute top-0 right-8 w-64 h-48 lg:w-96 lg:h-72 z-10 group"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                  <Image
                    src="/images/24A09535.jpg"
                    alt="Gemütliche Restaurant-Atmosphäre"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 256px, 288px"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-white text-sm font-light">
                      Unser Restaurant
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Left Image */}
              <div
                ref={bottomLeftImageRef}
                className="absolute bottom-48 left-0 w-60 h-44 lg:w-64 lg:h-48 z-10 group"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                  <Image
                    src="https://hardal.de/wp-content/uploads/2019/10/3.jpg"
                    alt="Eleganter Innenbereich"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 240px, 256px"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-white text-sm font-light">
                      Elegantes Ambiente
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Right Image */}
              <div
                ref={bottomRightImageRef}
                className="absolute bottom-0 right-0 w-64 h-52 lg:w-72 lg:h-56 z-10 group"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                  <Image
                    src="/images/24A06624.jpg"
                    alt="Moderne Einrichtung"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 256px, 288px"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-white text-sm font-light">
                      Modernes Design
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional decorative lines */}
              <svg
                className="absolute inset-0 w-full h-full z-0"
                viewBox="0 0 400 600"
                fill="none"
              >
                <path
                  d="M350 50 L380 20 M350 180 L390 150 M50 320 L20 350 M320 520 L350 550"
                  stroke="#333333"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
