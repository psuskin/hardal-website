"use client";

import { useRef, useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MinimalButton from "@/components/Buttons/MinimalButton";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define types for menu items
type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
};

type MenuData = {
  [category: string]: MenuItem[];
};

const menuData: MenuData = {
  frühstück: [
    {
      name: "Türkisches Frühstücksplatte",
      description:
        "Traditionelles türkisches Frühstück mit Oliven, Käse, Honig und frischem Brot.",
      price: "€14,90",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1533920379810-6bedac961555?q=80&w=2070",
    },
    {
      name: "Menemen",
      description:
        "Rührei mit Tomaten, Paprika und Gewürzen. Serviert mit frischem Brot.",
      price: "€9,90",
      image:
        "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1974",
    },
    {
      name: "Simit & Käse",
      description:
        "Türkisches Sesamgebäck serviert mit Fetakäse, Oliven, Gurken und Tomaten.",
      price: "€8,90",
      image:
        "https://images.unsplash.com/photo-1593854823322-5a737e326b5c?q=80&w=1974",
    },
    {
      name: "Kaymak mit Honig",
      description:
        "Rahm serviert mit reinem Honig und frischem Brot. Eine türkische Delikatesse.",
      price: "€7,90",
      image:
        "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1974",
    },
    {
      name: "Börek",
      description:
        "Blätterteig gefüllt mit Käse, Spinat oder Hackfleisch. Ein Frühstücksfavorit.",
      price: "€6,90",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981",
    },
  ],
  nachspeisen: [
    {
      name: "Baklava",
      description:
        "Schichten von Filoteig gefüllt mit gehackten Nüssen und mit Sirup gesüßt.",
      price: "€7,90",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1583401515094-a9aa0a9b9502?q=80&w=2070",
    },
    {
      name: "Künefe",
      description:
        "Fadennudeln gefüllt mit Käse, in süßem Sirup getränkt, mit Pistazien garniert.",
      price: "€8,90",
      image:
        "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=2070",
    },
    {
      name: "Sütlaç",
      description:
        "Traditioneller türkischer Milchreis, fein gewürzt mit Zimt.",
      price: "€6,90",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974",
    },
  ],
  hauptgerichte: [
    {
      name: "Adana Kebab",
      description:
        "Würziger Hackfleisch-Kebab serviert mit Reis, Salat und Brot.",
      price: "€16,90",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
    },
    {
      name: "İskender Kebab",
      description:
        "Dünn geschnittenes Dönerfleisch auf Brot, mit Tomatensauce und Joghurt.",
      price: "€18,90",
      image:
        "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2070",
    },
    {
      name: "Mantı",
      description:
        "Türkische Teigtaschen gefüllt mit gewürztem Fleisch, mit Joghurt-Knoblauch-Sauce.",
      price: "€14,90",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
    },
  ],
  mezze: [
    {
      name: "Mezze Platte",
      description:
        "Auswahl an Hummus, Cacık, Muhammara und Ezme, serviert mit warmem Brot.",
      price: "€12,90",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1606850246029-dd00bd5a0f25?q=80&w=2070",
    },
    {
      name: "Sigara Böreği",
      description:
        "Knusprige Filoteig-Röllchen gefüllt mit Fetakäse und Kräutern.",
      price: "€7,90",
      image:
        "https://images.unsplash.com/photo-1530189755474-b84b91cf3c15?q=80&w=1974",
    },
    {
      name: "Dolma",
      description:
        "Weinblätter gefüllt mit Reis, Pinienkernen und Kräutern. Serviert mit Joghurt.",
      price: "€8,90",
      image:
        "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1974",
    },
  ],
  getränke: [
    {
      name: "Türkischer Tee",
      description:
        "Traditioneller schwarzer Tee serviert in Tulpengläsern. Nachschenken möglich.",
      price: "€2,50",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1974",
    },
    {
      name: "Türkischer Kaffee",
      description:
        "Fein gemahlener Kaffee in der Cezve zubereitet, serviert mit Lokum.",
      price: "€3,90",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937",
    },
    {
      name: "Ayran",
      description:
        "Traditionelles Joghurtgetränk, leicht gesalzen und erfrischend kühl.",
      price: "€2,90",
      image:
        "https://images.unsplash.com/photo-1553787499-6f9133242872?q=80&w=1974",
    },
  ],
};

export default function HomeMenu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaImageRef = useRef<HTMLImageElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("frühstück");
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);

  // Get featured item for current category
  const featuredItem =
    menuData[activeCategory]?.find((item) => item.featured) ||
    menuData[activeCategory]?.[0];

  // Initialize GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the image element
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
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={menuRef}
      className="bg-black min-h-screen py-24 px-6 lg:px-12"
    >
      <div className="container mx-auto">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="text-sm tracking-[0.3em] text-[#f4d03f] uppercase font-light mb-3 block">
              Geschmack der Türkei
            </span>
            <h2 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
              Unsere Speisekarte
            </h2>
            <div className="w-16 h-px bg-[#f4d03f] mx-auto" />
          </div>
        </div>

        {/* Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Minimal Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <h3 className="text-white text-sm font-light mb-8 tracking-[0.2em] uppercase">
                Kategorien
              </h3>

              <nav className="space-y-3">
                {Object.keys(menuData).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`block w-full text-left py-3 px-0 text-sm transition-all duration-300 ${
                      activeCategory === category
                        ? "text-[#f4d03f] border-l-2 border-[#f4d03f] pl-4"
                        : "text-white/60 hover:text-white/90 border-l-2 border-transparent pl-4"
                    }`}
                  >
                    <span className="capitalize font-light tracking-wide">
                      {category}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Clean Menu Items */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {menuData[activeCategory]?.map((item, index) => (
                <div
                  key={index}
                  className="group pb-8 border-b border-white/10 last:border-b-0 transition-all duration-300"
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-white text-xl font-light group-hover:text-[#f4d03f] transition-colors duration-300">
                        {item.name}
                      </h3>
                      {item.featured && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f4d03f]" />
                      )}
                    </div>
                    <span className="text-[#f4d03f] text-xl font-light">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed font-light max-w-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Elegant Image Display */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Main Image Frame */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 shadow-lg shadow-black/50">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-[#f4d03f]/20"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-[#f4d03f]/10"></div>

                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={hoveredItem?.image || featuredItem?.image || ""}
                    alt={hoveredItem?.name || featuredItem?.name || "Menu"}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Elegant Info Card */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-black/60 backdrop-blur-md p-5 rounded-lg border border-white/10 transform transition-all duration-500 hover:border-[#f4d03f]/20">
                    <div className="flex items-start gap-3">
                      <div className="min-w-[32px] h-8 flex items-center justify-center rounded-full bg-[#f4d03f]/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#f4d03f"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
                          <line x1="6" y1="17" x2="18" y2="17"></line>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-light mb-1">
                          {hoveredItem?.name || featuredItem?.name}
                        </h4>
                        <p className="text-white/60 text-xs font-light">
                          {activeCategory.charAt(0).toUpperCase() +
                            activeCategory.slice(1)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                    <p className="text-[#f4d03f] text-xs uppercase tracking-wider font-light">
                      {activeCategory}
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured Indicator */}
              {featuredItem && (
                <div className="flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f4d03f]/10 border border-[#f4d03f]/30 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f4d03f]"></span>
                    <span className="text-[#f4d03f] text-xs tracking-[0.15em] uppercase font-light">
                      Empfehlung des Hauses
                    </span>
                  </div>
                </div>
              )}

              {/* Quick Navigation */}
              <div className="hidden lg:flex justify-center mt-4 space-x-2">
                {[0, 1, 2].map((dot) => (
                  <div
                    key={dot}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      dot === 0
                        ? "bg-[#f4d03f]"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modern Call to Action with Image Parallax */}
        <div
          ref={ctaRef}
          className="mt-24 relative h-[300px] rounded-2xl overflow-hidden"
        >
          {/* Background with image parallax */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              ref={ctaImageRef}
              src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070"
              alt="Turkish cuisine"
              className="absolute w-full h-[120%] object-cover object-center will-change-transform"
              style={{ top: "-10%" }}
              fill
            />
          </div>

          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 lg:px-16">
            <h3 className="text-white text-2xl lg:text-3xl font-light mb-8">
              Bereit für authentische türkische Küche?
            </h3>
            <MinimalButton variant="dark">Jetzt Reservieren</MinimalButton>
          </div>
        </div>
      </div>
    </section>
  );
}
