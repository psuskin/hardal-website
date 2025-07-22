"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "nie netty",
    role: "Local Guide",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    quote:
      "Ich war total begeistert vom Hardal! Das Essen war frisch, super gewürzt und wirklich authentisch türkisch. Besonders der Grillteller und die Vorspeisen haben fantastisch geschmeckt. Der Service war sehr freundlich und aufmerksam, obwohl das Restaurant gut besucht war. Die Atmosphäre ist gemütlich und modern, man fühlt sich sofort wohl. Auch die kleinen Aufmerksamkeiten wie Tee nach dem Essen sind ein schönes Extra. Preis-Leistung ist top – ich komme definitiv wieder!",
    rating: 5,
  },
  {
    id: 2,
    name: "M. A.",
    role: "Local Guide",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    quote:
      "Wir haben hier gebruncht und es war wunderbar! Sehr ansprechend, riesige Auswahl, sehr gut auch für Vegetarier! Der Service freundlich und das Ambiente ansprechend und gepflegt! Vielen Dank und gerne wieder!",
    rating: 5,
  },
  {
    id: 3,
    name: "A H",
    role: "Local Guide",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
    quote:
      "Was für ein toller Laden! Mein Freund war anfangs noch skeptisch - ließ sich aber dennoch überreden. Und überzeugen! Der Service war super freundlich, dass Essen wirklich lecker und wir haben uns dort sehr wohl gefühlt. Gerne wieder!",
    rating: 5,
  },
  {
    id: 4,
    name: "Sani",
    role: "Local Guide",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
    quote:
      "Herzens Empfehlung!! Der beste Brunch bzw Buffet wo ich jemals war. Eine riesige Auswahl was einem schwer macht alles zu essen. Das Personal ist soo super nett und lieb. Das Restaurant selbst sehr stylisch und gemütlich. Das Essen ist der Wahnsinn! Soo viel Auswahl. Es wird immer wieder frisches nach gelegt. Kaffee, Tee und Säfte sind inkl. Sehr zu empfehlen",
    rating: 5,
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const gsapContextRef = useRef<gsap.Context | null>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-rotate testimonials with optimized interval
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  // Optimize GSAP animations
  useEffect(() => {
    // Create a single GSAP context for all animations
    if (!gsapContextRef.current) {
      gsapContextRef.current = gsap.context(() => {
        // Optimize scroll trigger with batch
        ScrollTrigger.batch(".testimonial-animate", {
          start: "top 80%",
          onEnter: (elements) => {
            gsap.to(elements, {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.8,
              ease: "power2.out",
              overwrite: true,
            });
          },
          once: true,
        });

        // Optimize floating animations by reducing complexity
        const decorElements = gsap.utils.toArray(".testimonial-decor");
        gsap.to(decorElements, {
          y: -10,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.5,
        });
      }, containerRef);
    }

    return () => {
      if (gsapContextRef.current) {
        gsapContextRef.current.revert();
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 lg:px-12 relative overflow-hidden bg-black"
    >
      {/* Decorative Background Elements - Reduced complexity */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f4d03f]/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f4d03f]/5 rounded-full blur-[128px]" />
      </div>

      {/* Decorative Elements - Reduced number */}
      <div className="testimonial-decor absolute top-24 right-24 w-20 h-20 rounded-full border border-[#f4d03f]/20 opacity-40"></div>
      <div className="testimonial-decor absolute bottom-32 left-16 w-32 h-32 rounded-full border border-[#f4d03f]/10 opacity-30"></div>

      {/* Geometric Patterns - Simplified SVG */}
      <div className="absolute left-0 top-1/4 w-32 h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-5">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#f4d03f"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="absolute right-0 bottom-1/4 w-48 h-48">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-5">
          <path
            d="M10,10 L90,10 L90,90 L10,90 Z"
            stroke="#f4d03f"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24 testimonial-animate opacity-0 translate-y-8">
          <div className="inline-block">
            <p className="text-sm tracking-[0.3em] text-[#f4d03f] uppercase font-medium mb-4">
              Was unsere Gäste sagen
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Bewertungen
            </h2>
            <div className="relative">
              <div className="h-[2px] w-20 bg-[#f4d03f] mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Modern 3D Carousel */}
        <div
          ref={testimonialsRef}
          className="relative max-w-6xl mx-auto testimonial-animate opacity-0 translate-y-8"
        >
          {/* 3D Carousel Container */}
          <div className="relative h-[500px] perspective-1000">
            {testimonials.map((testimonial, index) => {
              // Calculate position in 3D space
              const isActive = index === activeIndex;
              const isPrev =
                index ===
                (activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
              const isNext =
                index ===
                (activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);

              let position = "";
              let scale = "scale-100";
              let opacity = "opacity-0";
              let zIndex = "z-0";
              let willChange = "";

              if (isActive) {
                position = "translate-x-0 translate-z-0";
                opacity = "opacity-100";
                zIndex = "z-30";
                willChange = "will-change-transform";
              } else if (isPrev) {
                position = "-translate-x-[30%] -translate-z-[100px]";
                scale = "scale-90";
                opacity = "opacity-40";
                zIndex = "z-20";
                willChange = "will-change-transform";
              } else if (isNext) {
                position = "translate-x-[30%] -translate-z-[100px]";
                scale = "scale-90";
                opacity = "opacity-40";
                zIndex = "z-20";
                willChange = "will-change-transform";
              } else {
                position = "translate-x-0 -translate-z-[200px]";
                scale = "scale-80";
                opacity = "opacity-0";
              }

              return (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${position} ${scale} ${opacity} ${zIndex} ${willChange} transform-style-3d`}
                >
                  {/* Modern Card Design - Clean Layout */}
                  <div className="bg-neutral-900/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 shadow-xl shadow-black/30 h-full flex flex-col justify-center">
                    {/* Content Only */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center text-center">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="bg-[#f4d03f]/20 backdrop-blur-sm p-3 rounded-full">
                          <Quote size={24} className="text-[#f4d03f]" />
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="mb-8">
                        <p className="text-white/90 text-lg lg:text-2xl leading-relaxed font-light italic">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center items-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#f4d03f"
                            stroke="none"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>

                      {/* Author Info */}
                      <div>
                        <h4 className="text-[#f4d03f] text-xl font-medium">
                          {testimonial.name}
                        </h4>
                        <p className="text-white/60 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modern Navigation Controls - Simplified */}
          <div className="flex justify-center gap-6 mt-12 items-center">
            <button
              onClick={prevTestimonial}
              className="group relative w-14 h-14 rounded-full bg-neutral-900/50 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-[#f4d03f]/30 active:scale-95 active:bg-[#f4d03f]/20"
              aria-label="Vorherige Bewertung"
            >
              <div className="absolute inset-0 bg-[#f4d03f]/0 group-hover:bg-[#f4d03f]/10 transition-colors duration-300"></div>
              <ArrowLeft
                size={20}
                className="text-white/70 group-hover:text-[#f4d03f] transition-colors duration-300 group-active:translate-x-[-2px]"
              />
            </button>

            {/* Progress Bar - Simplified */}
            <div className="flex-1 max-w-xs h-14 relative flex items-center">
              <div className="h-[2px] w-full">
           
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="group relative w-14 h-14 rounded-full bg-neutral-900/50 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-[#f4d03f]/30 active:scale-95 active:bg-[#f4d03f]/20"
              aria-label="Nächste Bewertung"
            >
              <div className="absolute inset-0 bg-[#f4d03f]/0 group-hover:bg-[#f4d03f]/10 transition-colors duration-300"></div>
              <ArrowRight
                size={20}
                className="text-white/70 group-hover:text-[#f4d03f] transition-colors duration-300 group-active:translate-x-[2px]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
