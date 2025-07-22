"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MinimalButton from "@/components/Buttons/MinimalButton";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Featured menu items
const featuredItems = [
  {
    name: "Fleischgerichte",
    description: "Traditionelle türkische gegrillte Fleischsorten",
    titleTR: "Karışık Izgaralar",
    image: "/images/24A09071.jpg",
  },
  {
    name: "Teigwaren",
    description: "Teigwaren mit frischen Zutaten und traditionellen Rezepten",
    titleTR: "Makarna",
    image: "/images/032822_20.jpg",
  },
  {
    name: "Frühstück & Brunch",
    description: "Mit Tomaten, Gurken, Oliven, Weißkäse und Lavas-Brot",
    titleTR: "Frühstück & Brunch",
    image: "/images/24A06660 (1).jpg",
  },
];

export default function HomeMenu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate menu items on scroll
      gsap.from(".menu-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: menuRef.current,
          start: "top center",
        },
      });

      // Parallax effect for the CTA image
      gsap.to(ctaImageRef.current, {
        y: -50,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, menuRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={menuRef}
      className="bg-gradient-to-b from-black via-black/95 to-black min-h-screen py-24 px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Elegant Header */}
        <div className="text-center mb-24">
          <div className="inline-block relative">
            <span className="text-sm tracking-[0.4em] text-[#fcc81a] uppercase font-light mb-4 block">
              Unsere Spezialitäten
            </span>
            <h2 className="text-5xl lg:text-7xl font-light text-white mb-8 tracking-tight">
              Beliebte Gerichte
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#fcc81a] to-transparent mx-auto opacity-60" />
            <p className="text-white/70 mt-8 text-base max-w-2xl mx-auto">
              Entdecken Sie unsere sorgfältig ausgewählten Spezialitäten, die
              die authentischen Aromen der türkischen Küche verkörpern
            </p>
          </div>
        </div>

        {/* Modern Menu Layout */}
        <div className="space-y-20">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className={`menu-item flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-4 -right-4 w-full h-full border-2 border-[#fcc81a]/20 rounded-lg" />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 relative">
                <div className="lg:max-w-xl">
                  <h3 className="text-3xl lg:text-4xl text-white font-light mb-6">
                    {item.name}
                  </h3>
                  <p className="text-white/70 text-lg font-light leading-relaxed mb-4">
                    {item.titleTR}
                  </p>
                  <p className="text-white/50 text-base font-light mb-8">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creative Call to Action */}
        <div className="mt-32 relative">
          <div className="container mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm">
              {/* Creative Layout Structure */}
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Content */}
                <div className="relative z-10 p-12 lg:p-16 flex flex-col justify-center">
                  <div className="">
                    <h3 className="text-3xl lg:text-5xl text-white font-light leading-tight">
                      Bereit für
                      <span className="block mt-2 text-[#fcc81a]">
                        authentische
                      </span>
                      <span className="block mt-2">türkische Küche?</span>
                    </h3>

                    <div className="mt-12">
                      <MinimalButton
                        variant="dark"
                        href="/reservierung"
                        size="default"
                      >
                        Jetzt Reservieren
                      </MinimalButton>
                    </div>
                  </div>
                </div>

                {/* Right Image Section */}
                <div className="relative min-h-[300px] lg:min-h-[400px]">
                  {/* Main Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/SNY07168.jpg"
                      alt="Turkish cuisine"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Creative Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
