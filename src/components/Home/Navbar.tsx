"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { navLinks, isNavItemWithChildren } from "@/lib/navigation";
import MobileNavbar from "./MobileNavbar";
import MinimalButton from "../Buttons/MinimalButton";
import {
  FileText,
  PartyPopper,
  BarChart3,
  Gift,
  Image as ImageIcon,
  Landmark,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleDesktopMenuEnter = (label: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMenu(label);
  };

  const handleDesktopMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Toggle body scroll
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-black/90 backdrop-blur-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - Show on all screens */}
            <Link href="/" className="relative w-32 h-12">
              <Image
                src="/logo-dark.png"
                alt="Hardal Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                if (isNavItemWithChildren(link)) {
                  const isActive = activeMenu === link.label;
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => handleDesktopMenuEnter(link.label)}
                      onMouseLeave={handleDesktopMenuLeave}
                    >
                      <button
                        className={`text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 py-2 px-1 relative
                          ${
                            isActive
                              ? "text-[#fcc81a]"
                              : "text-white hover:text-[#fcc81a]"
                          }
                          after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                          after:bg-[#fcc81a] after:transform after:scale-x-0 after:origin-left after:transition-transform 
                          after:duration-300 hover:after:scale-x-100 ${
                            isActive ? "after:scale-x-100" : ""
                          }`}
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isActive ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Modern Mega Menu Dropdown */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 ${
                          link.label === "MENU" ? "w-[1000px]" : "w-[300px]"
                        } ${
                          isActive
                            ? "pointer-events-auto"
                            : "pointer-events-none"
                        }`}
                      >
                        <div
                          className={`bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-xl rounded-2xl overflow-hidden 
                            shadow-[0_20px_70px_-10px_rgba(252,200,26,0.15)] border border-white/10 transform transition-all 
                            duration-500 ease-out origin-top
                            ${
                              isActive
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 -translate-y-4 scale-95"
                            }`}
                        >
                          {link.label === "MENU" && (
                            <div className="flex">
                              {/* Featured Image Section - More Compact */}
                              <div className="w-[25%] relative overflow-hidden border-r border-white/10">
                                <div className="relative h-full">
                                  <Image
                                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
                                    alt="Turkish Cuisine"
                                    fill
                                    className="object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

                                  {/* PDF Menu Button - Positioned at top-right */}
                                  <div className="absolute top-4 right-4 z-10">
                                    <a
                                      href="https://hardal.de/wp-content/uploads/2025/06/Hardal_Speisekarte_04.04.pdf"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group flex items-center justify-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/20 hover:border-[#fcc81a] rounded-lg py-1.5 px-3 text-white transition-all duration-300 hover:bg-black/60"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <FileText
                                        size={16}
                                        className="text-[#fcc81a]"
                                      />
                                      <span className="text-xs font-medium">
                                        PDF Menu
                                      </span>
                                    </a>
                                  </div>

                                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                                    <h3 className="text-[#fcc81a] font-medium text-lg mb-2">
                                      Hardal Restaurant
                                    </h3>
                                    <p className="text-white/90 text-sm font-light mb-4 max-w-xs">
                                      Experience authentic Turkish cuisine
                                    </p>
                                    <div className="flex flex-col space-y-2 z-20 relative">
                                      <Link
                                        href="/menu"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          e.preventDefault();
                                          window.location.href = "/menu";
                                        }}
                                        className="block"
                                      >
                                        <MinimalButton
                                          variant="dark"
                                          size="small"
                                          className="shadow-lg shadow-[#fcc81a]/20 hover:shadow-[#fcc81a]/30 cursor-pointer"
                                        >
                                          View Full Menu
                                        </MinimalButton>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Menu Grid Section - Clean List Style */}
                              <div className="w-[75%] grid grid-cols-3 gap-2 p-3">
                                {/* Featured Categories */}
                                <div className="col-span-3 mb-2">
                                  <h3 className="text-[#fcc81a] font-medium text-base mb-1">
                                    Featured Categories
                                  </h3>
                                  <div className="h-px w-full bg-white/10 mb-2"></div>
                                </div>

                                {link.sections.slice(0, 6).map((section) => (
                                  <div
                                    key={section.title}
                                    className="group relative p-2.5 hover:bg-white/[0.02] transition-all duration-300"
                                  >
                                    <div className="relative z-10">
                                      <div className="flex items-center gap-2 mb-1.5">
                                        <h3 className="text-[#fcc81a] font-medium text-md">
                                          {section.title}
                                        </h3>
                                      </div>
                                      <div className="flex flex-col space-y-1">
                                        {section.items
                                          .slice(0, 4)
                                          .map((item) => (
                                            <Link
                                              key={item.label}
                                              href={item.href}
                                              className="text-[16px] text-white/80 hover:text-[#fcc81a] transition-all duration-300 relative group/item"
                                              onClick={(e) =>
                                                e.stopPropagation()
                                              }
                                            >
                                              <span>{item.label}</span>
                                              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#fcc81a] transition-all duration-300 group-hover/item:w-full"></span>
                                            </Link>
                                          ))}
                                        <Link
                                          href={`/menu/${section.title
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")
                                            .replace(/&/g, "and")
                                            .replace(/[^\w-]/g, "")}`}
                                          className="text-sm text-[#fcc81a]/80 hover:text-[#fcc81a] transition-all duration-300 relative group/item"
                                          onClick={(e) => e.stopPropagation()}
                                        >
                                          <span>View All</span>
                                          <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#fcc81a] transition-all duration-300 group-hover/item:w-full"></span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {link.label === "ÜBER UNS" && (
                            <div className="py-3">
                              <div className="flex flex-col">
                                {link.sections.map((section) => (
                                  <Link
                                    key={section.title}
                                    href={section.items[0].href}
                                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-all duration-300"
                                  >
                                    <div className="w-6 h-6 flex items-center justify-center text-[#fcc81a]">
                                      {section.title === "FEIERN" && (
                                        <PartyPopper size={16} />
                                      )}
                                      {section.title ===
                                        "WERBUNG FÜR FIRMEN" && (
                                        <BarChart3 size={16} />
                                      )}
                                      {section.title === "GUTSCHEINE" && (
                                        <Gift size={16} />
                                      )}
                                      {section.title === "GALERIE" && (
                                        <ImageIcon size={16} />
                                      )}
                                      {section.title ===
                                        "SEHENSWÜRDIGKEITEN" && (
                                        <Landmark size={16} />
                                      )}
                                    </div>
                                    <span className="text-white text-sm hover:text-[#fcc81a] transition-colors">
                                      {section.title}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Handle regular and external links
                if ("external" in link && link.external) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium tracking-wide transition-all duration-300 py-2 px-1 relative
                        text-white hover:text-[#fcc81a]
                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                        after:bg-[#fcc81a] after:transform after:scale-x-0 after:origin-left after:transition-transform 
                        after:duration-300 hover:after:scale-x-100`}
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-all duration-300 py-2 px-1 relative
                      ${
                        pathname === link.href
                          ? "text-[#fcc81a]"
                          : "text-white hover:text-[#fcc81a]"
                      }
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                      after:bg-[#fcc81a] after:transform after:scale-x-0 after:origin-left after:transition-transform 
                      after:duration-300 hover:after:scale-x-100 ${
                        pathname === link.href ? "after:scale-x-100" : ""
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "top-2 -mt-0.5 rotate-45"
                      : "top-0 rotate-0"
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-white top-2 transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "top-2 -mt-0.5 -rotate-45"
                      : "top-4 rotate-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNavbar isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
};

export default Navbar;
