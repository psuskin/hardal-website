"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedText } from "@/components/ui/animated-text";
import { ImageSlider } from "@/components/ui/image-slider";
import MinimalButton from "@/components/Buttons/MinimalButton";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    alt: "Restaurant Innenraum",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    alt: "Gemütliche Restaurant-Atmosphäre",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    alt: "Moderner Essbereich",
  },
  {
    src: "https://images.unsplash.com/photo-1574936145840-28808d77a0b6",
    alt: "Elegantes Gedeck",
  },
];

// Featured dishes for the floating cards
const featuredDishes = [
  {
    name: "Türkisches Frühstück",
    image: "https://images.unsplash.com/photo-1574936145840-28808d77a0b6",
  },
  {
    name: "Kebab Platte",
    image: "https://images.unsplash.com/photo-1574936145840-28808d77a0b6",
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
                <MinimalButton variant="dark" size="small">
                  TISCH RESERVIEREN
                </MinimalButton>
              </div>

              {/* Location info with creative styling */}
              <div className="fade-in flex items-center space-x-4 bg-black/30 backdrop-blur-sm p-4 rounded-md border border-white/5 max-w-md">
                <div className="flex -space-x-3">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#fcc81a]/20 overflow-hidden"
                    >
                      <Image
                        src={`https://hardal.de/wp-content/uploads/2019/10/${i}.jpg`}
                        alt={`Zufriedener Kunde ${i}`}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
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

              {/* Floating dish cards - Only show on desktop */}
              <div
                ref={dishesRef}
                className="hidden lg:block absolute -right-4 -bottom-8 space-y-4 w-48 z-[2]"
              >
                {featuredDishes.map((dish, index) => (
                  <div
                    key={index}
                    className={`floating-dish accent-float bg-black/60 backdrop-blur-md p-2 rounded-md border border-white/10 shadow-xl ${
                      index === 1 ? "translate-x-8" : ""
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-20 rounded-sm overflow-hidden mb-2">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium text-white">
                      {dish.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Order online button */}
              <div className="absolute left-8 bottom-8 hidden lg:block z-[2]">
                <MinimalButton variant="light" size="small">
                  JETZT BESTELLEN
                </MinimalButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
