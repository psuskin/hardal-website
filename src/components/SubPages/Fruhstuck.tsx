"use client";
import React, { useEffect, useRef } from "react";
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
  },
  {
    id: 371,
    name: "SUCUKLU YUMURTA",
    description:
      "Rührei mit türkischer Knoblauchwurst, dazu Tomaten, Gurken, Oliven, Weißkäse und Lavas-Brot",
    price: "14,50€",
    tags: ["3,5,1,1,4,A,H,D,C"],
    category: "dishes",
  },
  {
    id: 372,
    name: "PASTIRMALI YUMURTA",
    description:
      "Rührei mit türkischem Rinderschinken, dazu Tomaten, Gurken, Oliven, Weißkäse und Lavas-Brot",
    price: "14,90€",
    tags: ["3,5,1,1,4,A,H,D,C"],
    category: "dishes",
  },
  {
    id: 373,
    name: "PATATESLİ YUMURTA",
    description:
      "Rührei mit Kartoffeln, dazu Tomaten, Gurken, Oliven, Weißkäse und Lavas-Brot",
    price: "13,00€",
    tags: ["3,4,H,A,D,C"],
    category: "dishes",
  },
  {
    id: 374,
    name: "KAŞARLI OMLET",
    description:
      "Omlet mit Gouda, dazu Tomaten, Gurken, Oliven, Weißkäse und Lavas-Brot",
    price: "13,00€",
    tags: ["3,4,H,A,D,C"],
    category: "dishes",
  },
  {
    id: 375,
    name: "MANTARLI OMLET",
    description:
      "Omlet mit Champin, dazu Tomaten, Gurken, Oliven, Weißkäse und Lavas-Brot",
    price: "13,00€",
    tags: ["3,4,H,A,D,C"],
    category: "dishes",
  },
  {
    id: 180,
    name: "FRÜHSTÜCKSBUFFET",
    description:
      "Montags bis Samstags von 7:00 bis 14:00 Uhr\nImmer all - you - can - eat und Kaffee und Tee inklusive\nGroße Auswahl aus 40 verschiedenen warmen und kalten Speisen, Dessertbüffet",
    price: "17,90€",
    tags: [],
    category: "buffet",
  },
  {
    id: 181,
    name: "KINDER FRÜHSTÜCKSBUFFET",
    description:
      "Große Auswahl aus 40 verschiedenen warmen und kalten Speisen, Dessertbüffet",
    price: "12,90€",
    tags: ["(4-10 JAHRE)"],
    category: "buffet",
  },
  {
    id: 182,
    name: "SAMSTAGS BRUNCH",
    description: "50 verschiedene warme und kalten Speisen, Dessertbüffet",
    price: "20,90€",
    tags: [],
    category: "buffet",
  },
  {
    id: 183,
    name: "KINDER SAMSTAGS BRUNCH",
    description: "50 verschiedene warme und kalten Speisen, Dessertbüffet",
    price: "14,90€",
    tags: ["(4-10 JAHRE)"],
    category: "buffet",
  },
  {
    id: 184,
    name: "SONNTAGS BRUNCH",
    description:
      "an Sonn- und Feiertagen von 7:00 bis 15:00 Uhr\n60 verschiedene warme und kalten Speisen 2 Säfte, Dessertbüffet",
    price: "23,90€",
    tags: [],
    category: "buffet",
  },
  {
    id: 185,
    name: "KINDER SONNTAGS BRUNCH",
    description:
      "60 verschiedene warme und kalten Speisen 2 Säfte, Dessertbüffet",
    price: "17,90€",
    tags: ["(4-10 JAHRE)"],
    category: "buffet",
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
    }, menuRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={menuRef} className="bg-black min-h-screen pb-16">
      {/* Hero Section */}
      <SubHero
        title="Açık Büfe Kahvaltı"
        subtitle="Frühstück und Brunch"
        imageSrc="/images/fruhstuck.jpg"
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
                  className="menu-item group border-b border-white/10 pb-6 relative hover:bg-white/5 transition-colors duration-300 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl text-white font-medium group-hover:text-[#f4d03f] transition-colors duration-300">
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
                  className="menu-item group border-b border-white/10 pb-6 relative hover:bg-white/5 transition-colors duration-300 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl text-white font-medium group-hover:text-[#f4d03f] transition-colors duration-300">
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
          <MinimalButton variant="dark" size="small" href="/reservierung">
            TISCH RESERVIEREN
          </MinimalButton>
        </div>
      </div>
    </div>
  );
};

export default Fruhstuck;
