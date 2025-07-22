"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedText } from "@/components/ui/animated-text";
import { ImageSlider } from "@/components/ui/image-slider";
import MinimalButton from "@/components/Buttons/MinimalButton";

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  {
    src: "/images/package2.jpg",
    alt: "Gemütliche Restaurant-Atmosphäre",
  },
  {
    src: "/images/package3.jpg",
    alt: "Moderner Essbereich",
  },
  {
    src: "/images/package6.jpg",
    alt: "Elegantes Gedeck",
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const accentRef = useRef(null);
  const dishesRef = useRef(null);

  useEffect(() => {
    // GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Initial setup for elements
      gsap.set(
        [".hero-image", ".menu-image", ".accent-shape", ".floating-dish"],
        {
          opacity: 0,
          y: 10,
          transformOrigin: "center center",
        }
      );
      gsap.set(".fade-in", { opacity: 0, y: 10 });
      gsap.set(".accent-line", { scaleX: 0, transformOrigin: "left" });
      gsap.set(".accent-circle", { scale: 0, transformOrigin: "center" });

      // Initial animation timeline
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.to([".hero-image", ".menu-image"], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
      })
        .to(
          ".accent-shape",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
          },
          "-=0.4"
        )
        .to(
          ".accent-line",
          {
            scaleX: 1,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.6"
        )
        .to(
          ".accent-circle",
          {
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.7"
        )
        .to(
          ".floating-dish",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.5"
        )
        .to(
          ".fade-in",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
          },
          "-=0.6"
        );

      // Floating animation for accent shapes and dishes
      gsap.to(".accent-float", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      // Subtle rotation for stars
      gsap.to(".star-rotate", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      // Only apply scroll animations on desktop
      if (window.innerWidth > 1024) {
        if (textRef.current && imageRef.current && contentRef.current) {
          // Text parallax
          gsap.to(textRef.current, {
            yPercent: -15,
            ease: "expo.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
              anticipatePin: 0.1,
            },
          });

          // Image parallax
          gsap.to(imageRef.current, {
            yPercent: -8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
              anticipatePin: 0.1,
            },
          });

          // Accent shapes parallax
          gsap.to(accentRef.current, {
            yPercent: -20,
            ease: "expo.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          });

          // Floating dishes parallax
          gsap.to(dishesRef.current, {
            yPercent: -12,
            ease: "expo.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          });

          // Content fade
          gsap.to(contentRef.current, {
            opacity: 0.95,
            ease: "expo.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-[100svh] lg:h-screen bg-black overflow-hidden pt-[80px] lg:pt-[80px]"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none"></div>

      <div className="container mx-auto px-4 h-full relative">
        <div className="h-full flex items-center py-12 lg:py-0">
          <div className="w-full grid grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Main content */}
            <div
              ref={textRef}
              className="col-span-12 lg:col-span-5 relative z-[1] will-change-transform space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              <div className="inline-block relative">
                <p className="text-sm tracking-[0.3em] text-[#fcc81a] uppercase font-medium mb-4 fade-in">
                  Willkommen bei Hardal
                </p>
                {/* Underline accent */}
                <div className="absolute -bottom-2 left-0 h-[2px] w-12">
                  <div className="accent-line w-full h-full bg-[#fcc81a]"></div>
                </div>
              </div>

              <div className="-space-y-3">
                <AnimatedText
                  text="Traditionelle Türkische"
                  className="font-light text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight"
                  delay={0.1}
                />
                <AnimatedText
                  text="Küche im"
                  className="font-light text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight"
                  color="#fcc81a"
                  delay={0.2}
                />
                <AnimatedText
                  text="Herzen Hamburgs"
                  className="font-light text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight"
                  delay={0.3}
                />
              </div>

              <p className="fade-in text-gray-400 text-base lg:text-lg max-w-xl leading-relaxed">
                Vom authentischen türkischen Frühstück bis hin zu exquisiten
                Abendspezialitäten erleben Sie die reichhaltigen Aromen der
                türkischen Küche. Jetzt auch mit Lieferservice, um unsere
                köstlichen Gerichte zu Hause zu genießen.
              </p>

              {/* CTA Button with creative design */}
              <div className="fade-in">
                <MinimalButton variant="dark" size="small" href="/reservierung">
                  TISCH RESERVIEREN
                </MinimalButton>
              </div>

              {/* Location info with creative styling */}
              <div className="fade-in flex items-center space-x-4 bg-black/30 backdrop-blur-sm p-4 rounded-md border border-white/5 max-w-md">
                <div>
                  <div className="text-lg lg:text-xl font-medium text-white">
                    Möllner Landstraße 3
                  </div>
                  <div className="text-[#fcc81a]">22111 Hamburg</div>
                </div>
              </div>
            </div>

            {/* Right Column - Creative layout with main image and floating elements */}
            <div className="col-span-12 lg:col-span-7 relative order-1 lg:order-2">
              {/* Main hero image */}
              <div ref={imageRef} className="will-change-transform relative">
                <div className="hero-image relative aspect-[4/3] lg:aspect-[16/10] rounded-md overflow-hidden">
                  <ImageSlider images={heroImages} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
