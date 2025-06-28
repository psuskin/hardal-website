"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { fullMenuData } from "@/lib/menu-data";
import { MenuItem, MenuSection } from "@/lib/navigation";
import SubHero from "@/components/Common/SubHero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function CategoryPage() {
  const params = useParams();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categoryData, setCategoryData] = useState<MenuSection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Immediately try to find the category data
    if (params.category) {
      const categorySlug = Array.isArray(params.category)
        ? params.category[0]
        : params.category;

      // Normalize the slugs for comparison (handle special characters)
      const normalizeSlug = (str: string) => {
        return str
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/&/g, "and")
          .replace(/[^\w-]/g, "");
      };

      // Try to find an exact match first
      let foundCategory = fullMenuData.find(
        (item) => normalizeSlug(item.title) === normalizeSlug(categorySlug)
      );

      // If no exact match, try a more flexible match
      if (!foundCategory) {
        foundCategory = fullMenuData.find((item) => {
          const itemSlug = normalizeSlug(item.title);
          return (
            itemSlug.includes(categorySlug) || categorySlug.includes(itemSlug)
          );
        });
      }

      if (foundCategory) {
        setMenuItems(foundCategory.items);
        setCategoryData(foundCategory);
      }

      // Set loading to false after a short delay to prevent flash
      setTimeout(() => setIsLoading(false), 100);
    }
  }, [params]);

  // Animation for hover effects
  useEffect(() => {
    if (!categoryData) return;

    const ctx = gsap.context(() => {
      // Animate menu items with staggered effect
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
  }, [categoryData]);

  // If category not found, show a helpful message
  if (!categoryData && !isLoading) {
    return (
      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-light text-white mb-6">
              Kategorie nicht gefunden
            </h1>
            <p className="text-white/70 mb-8">
              Wir konnten die Kategorie nicht finden, die Sie suchen.
              Sie wurde möglicherweise verschoben oder entfernt.
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-[#fcc81a]/10 hover:bg-[#fcc81a]/20 backdrop-blur-sm border border-[#fcc81a]/30 rounded-full py-2.5 px-5 text-[#fcc81a] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Zurück zur Speisekarte</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (categoryData) {
    return (
      <main
        ref={menuRef}
        className="min-h-screen bg-black relative overflow-hidden"
      >
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
                  src={item.image || categoryData.image}
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

        <SubHero
          title={categoryData.title}
          subtitle={categoryData.titleTR}
          description={categoryData.description}
          imageSrc={categoryData.image}
          imageAlt={categoryData.title}
          height="medium"
          overlay="dark"
          align="center"
        />

        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 lg:w-1/4">
              <div className="sticky top-24">
                <Link
                  href="/menu"
                  className="text-[#fcc81a]/80 hover:text-[#fcc81a] text-sm flex items-center gap-2 mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Zurück zur Speisekarte
                </Link>

                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 mb-6">
                  <Image
                    src={categoryData.image}
                    alt={categoryData.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60" />
                </div>

                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-white/80 text-sm">
                    <span className="text-[#fcc81a]">{menuItems.length}</span>{" "}
                    Gerichte in dieser Kategorie
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href="https://hardal.de/wp-content/uploads/2025/06/Hardal_Speisekarte_04.04.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#fcc81a]/30 rounded-lg py-3 px-4 text-white transition-all duration-300 hover:bg-white/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#fcc81a] group-hover:text-[#fcc81a]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="12" y1="18" x2="12" y2="12"></line>
                      <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                    <span className="text-sm font-medium">
                      PDF-Speisekarte herunterladen
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div ref={itemsRef} className="md:w-2/3 lg:w-3/4">
              <div className="space-y-8">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    id={`item-${item.id}`}
                    data-item-id={item.id}
                    className="menu-item group pb-8 border-b border-white/10 last:border-b-0"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[#fcc81a]/60 text-sm">
                            {item.id}
                          </span>
                          <h3 className="text-white text-xl font-light group-hover:text-[#fcc81a] transition-colors duration-300">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed font-light">
                          {item.description}
                        </p>
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex gap-2 mt-2">
                            {item.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="text-xs text-[#fcc81a]/60 bg-[#fcc81a]/5 px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="text-[#fcc81a] text-xl font-light whitespace-nowrap">
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return null;
}
