"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MinimalButton from "../Buttons/MinimalButton";
import SubHero from "../Common/SubHero";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const menuItems = [
  {
    id: 370,
    name: "MENEMEN",
    description:
      "Rührei mit Tomaten und milder Peperoni, dazu Tomaten, Gurken, Oliven, Weißkäse und Lavas-Brot",
    price: "13,50€",
    tags: ["3,4,H,A,D,C"],
    category: "dishes",
    image:
      "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 371,
    name: "SUCUKLU YUMURTA",
    description:
      "Rührei mit türkischer Knoblauchwurst, dazu Tomaten, Gurken, Oliven, Weißkäse und Lavas-Brot",
    price: "14,50€",
    tags: ["3,5,1,1,4,A,H,D,C"],
    category: "dishes",
    image:
      "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 372,
    name: "PASTIRMALI YUMURTA",
    description:
      "Rührei mit türkischem Rinderschinken, dazu Tomaten, Gurken, Oliven, Weißkäse und Lavas-Brot",
    price: "14,90€",
    tags: ["3,5,1,1,4,A,H,D,C"],
    category: "dishes",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080&auto=format&fit=crop",
  },
  {
    id: 373,
    name: "PATATESLİ YUMURTA",
    description:
      "Rührei mit Kartoffeln, dazu Tomaten, Gurken, Oliven, Weißkäse und Lavas-Brot",
    price: "13,00€",
    tags: ["3,4,H,A,D,C"],
    category: "dishes",
    image:
      "https://images.unsplash.com/photo-1484344597163-9347ad5c4b42?q=80&w=2080&auto=format&fit=crop",
  },
  {
    id: 374,
    name: "KAŞARLI OMLET",
    description:
      "Omlet mit Gouda, dazu Tomaten, Gurken, Oliven, Weißkäse und Lavas-Brot",
    price: "13,00€",
    tags: ["3,4,H,A,D,C"],
    category: "dishes",
    image:
      "https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=2098&auto=format&fit=crop",
  },
  {
    id: 375,
    name: "MANTARLI OMLET",
    description:
      "Omlet mit Champin, dazu Tomaten, Gurken, Oliven, Weißkäse und Lavas-Brot",
    price: "13,00€",
    tags: ["3,4,H,A,D,C"],
    category: "dishes",
    image:
      "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 180,
    name: "FRÜHSTÜCKSBUFFET",
    description:
      "Montags bis Samstags von 7:00 bis 14:00 Uhr\nImmer all - you - can - eat und Kaffee und Tee inklusive\nGroße Auswahl aus 40 verschiedenen warmen und kalten Speisen, Dessertbüffet",
    price: "17,90€",
    tags: [],
    category: "buffet",
    image:
      "https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 181,
    name: "KINDER FRÜHSTÜCKSBUFFET",
    description:
      "Große Auswahl aus 40 verschiedenen warmen und kalten Speisen, Dessertbüffet",
    price: "12,90€",
    tags: ["(4-10 JAHRE)"],
    category: "buffet",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
  },
  {
    id: 182,
    name: "SAMSTAGS BRUNCH",
    description: "50 verschiedene warme und kalten Speisen, Dessertbüffet",
    price: "20,90€",
    tags: [],
    category: "buffet",
    image:
      "https://images.unsplash.com/photo-1533920379810-6bedac961555?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 183,
    name: "KINDER SAMSTAGS BRUNCH",
    description: "50 verschiedene warme und kalten Speisen, Dessertbüffet",
    price: "14,90€",
    tags: ["(4-10 JAHRE)"],
    category: "buffet",
    image:
      "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 184,
    name: "SONNTAGS BRUNCH",
    description:
      "an Sonn- und Feiertagen von 7:00 bis 15:00 Uhr\n60 verschiedene warme und kalten Speisen 2 Säfte, Dessertbüffet",
    price: "23,90€",
    tags: [],
    category: "buffet",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 185,
    name: "KINDER SONNTAGS BRUNCH",
    description:
      "60 verschiedene warme und kalten Speisen 2 Säfte, Dessertbüffet",
    price: "17,90€",
    tags: ["(4-10 JAHRE)"],
    category: "buffet",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=2070&auto=format&fit=crop",
  },
];

const Fruhstuck = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      });

      gsap.from(".menu-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".menu-price", {
        x: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top 80%",
        },
      });

      const menuWrapper = menuRef.current;
      if (!menuWrapper) return;

      const handleMouseMove = (e: MouseEvent) => {
        gsap.to(".menu-hover-image", {
          x: e.clientX,
          y: e.clientY,
          xPercent: -50,
          yPercent: -50,
          stagger: 0.05,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      menuWrapper.addEventListener("mousemove", handleMouseMove);

      const menuItems = document.querySelectorAll<HTMLDivElement>(".menu-item");
      menuItems.forEach((item) => {
        const itemId = item.getAttribute("data-item-id");

        const handleMouseEnter = () => {
          gsap.to(`[data-image-id="${itemId}"]`, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.set(`[data-image-id="${itemId}"]`, { zIndex: 1 });
          gsap.set(item, { zIndex: 2 });
        };

        const handleMouseLeave = () => {
          gsap.to(`[data-image-id="${itemId}"]`, {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.set(`[data-image-id="${itemId}"]`, { zIndex: -1 });
          gsap.set(item, { zIndex: 0 });
        };

        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);
      });

      // Cleanup
      return () => {
        menuWrapper.removeEventListener("mousemove", handleMouseMove);
        menuItems.forEach((item) => {
          item.removeEventListener("mouseenter", () => {});
          item.removeEventListener("mouseleave", () => {});
        });
      };
    }, menuRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={menuRef}
      className="bg-black min-h-screen pt-24 pb-16 relative overflow-hidden"
    >
      {/* Floating Images Container */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {menuItems.map((item) => (
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

      {/* Hero Section */}
      <SubHero
        title="Açık Büfe Kahvaltı"
        subtitle="Frühstück und Brunch"
        imageSrc="https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Turkish Breakfast"
        height="medium"
        overlay="dark"
        align="center"
        showDivider={true}
      />

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Breakfast Dishes Section */}
        <div ref={itemsRef} className="mb-20">
          <h2 className="text-2xl md:text-3xl text-white font-light mb-2">
            Türkische Frühstücksspezialitäten
          </h2>
          <p className="text-gray-400 mb-8">
            Traditionelle türkische Eiergerichte, serviert mit frischen Beilagen
          </p>

          <div className="grid gap-8">
            {menuItems
              .filter((item) => item.category === "dishes")
              .map((item) => (
                <div
                  key={item.id}
                  data-item-id={item.id}
                  className="menu-item border-b border-white/10 pb-6 relative cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl text-white font-medium transition-colors duration-300">
                          {item.id}. {item.name}
                        </h3>
                        {item.tags.length > 0 && (
                          <span className="text-xs text-[#f4d03f]/80">
                            {item.tags.join(" ")}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 mt-2">{item.description}</p>
                    </div>
                    <div className="menu-price text-xl text-[#f4d03f] font-medium ml-4">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Buffet Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl text-white font-light mb-2">
            Frühstücksbuffet & Brunch
          </h2>
          <p className="text-gray-400 mb-8">
            Reichhaltiges Buffet mit großer Auswahl an warmen und kalten Speisen
          </p>

          <div className="grid gap-8">
            {menuItems
              .filter((item) => item.category === "buffet")
              .map((item) => (
                <div
                  key={item.id}
                  data-item-id={item.id}
                  className="menu-item border-b border-white/10 pb-6 relative cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl text-white font-medium transition-colors duration-300">
                          {item.id}. {item.name}
                        </h3>
                        {item.tags.length > 0 && (
                          <span className="text-sm text-[#f4d03f]/80">
                            {item.tags.join(" ")}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 mt-2 whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                    <div className="menu-price text-xl text-[#f4d03f] font-medium ml-4">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Reservieren Sie jetzt Ihren Tisch für unser Frühstücksbuffet oder
            Brunch
          </p>
          <MinimalButton variant="dark" size="small">
            TISCH RESERVIEREN
          </MinimalButton>
        </div>
      </div>
    </div>
  );
};

export default Fruhstuck;
