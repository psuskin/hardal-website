"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { navLinks, isNavItemWithChildren } from "@/lib/navigation";
import MobileNavbar from "./MobileNavbar";

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
    if (label === "MENU") return; // Don't show dropdown for MENU
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

  const handleMenuClick = (e: React.MouseEvent, label: string) => {
    if (label === "MENU") {
      e.preventDefault();
      window.open("/Hardal_Speisekarte20.03.pdf", "_blank");
      return;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-black/60 backdrop-blur-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
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
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((navItem) => {
                if (isNavItemWithChildren(navItem)) {
                  const isActive = activeMenu === navItem.label;
                  return (
                    <div
                      key={navItem.label}
                      className="relative"
                      onMouseEnter={() => handleDesktopMenuEnter(navItem.label)}
                      onMouseLeave={handleDesktopMenuLeave}
                    >
                      <button
                        onClick={(e) => handleMenuClick(e, navItem.label)}
                        className={`text-[15px] font-normal tracking-wide transition-all duration-300 flex items-center gap-2 py-2 px-1 relative group cursor-pointer
                          ${isActive ? "text-[#fcc81a]" : "text-white"}`}
                      >
                        {navItem.label}
                        {navItem.label !== "MENU" && (
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 opacity-60 group-hover:opacity-100 ${
                              isActive ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                        <span className="absolute left-0 right-0 bottom-0 h-px bg-[#fcc81a] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                      </button>

                      {/* Only show dropdown for ÜBER UNS */}
                      {navItem.label === "ÜBER UNS" && (
                        <div
                          className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[280px] ${
                            isActive
                              ? "pointer-events-auto"
                              : "pointer-events-none"
                          }`}
                        >
                          <div
                            className={`bg-black/80 backdrop-blur-lg rounded-xl overflow-hidden 
                              shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)] border border-white/10 transform transition-all 
                              duration-300 ease-out ${
                                isActive
                                  ? "opacity-100 translate-y-0"
                                  : "opacity-0 -translate-y-2"
                              }`}
                          >
                            <div className="py-1">
                              <div className="flex flex-col">
                                {navItem.sections.map((section) => (
                                  <Link
                                    key={section.title}
                                    href={section.items[0].href}
                                    className="px-5 py-2.5 text-white/90 hover:text-[#fcc81a] hover:bg-white/5 transition-colors duration-200"
                                  >
                                    <span className="text-[14px] font-normal">
                                      {section.title}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // Handle regular and external links
                if ("external" in navItem && navItem.external) {
                  return (
                    <a
                      key={navItem.label}
                      href={navItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-normal tracking-wide text-white/90 hover:text-[#fcc81a] transition-colors duration-300 py-2 px-1 relative group"
                    >
                      {navItem.label}
                      <span className="absolute left-0 right-0 bottom-0 h-px bg-[#fcc81a] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                    </a>
                  );
                }

                return (
                  <Link
                    key={navItem.label}
                    href={navItem.href}
                    className={`text-[15px] font-normal tracking-wide transition-colors duration-300 py-2 px-1 relative group
                      ${
                        pathname === navItem.href
                          ? "text-[#fcc81a]"
                          : "text-white/90 hover:text-white"
                      }`}
                  >
                    {navItem.label}
                    <span className="absolute left-0 right-0 bottom-0 h-px bg-[#fcc81a] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white relative group"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-4">
                <span
                  className={`absolute w-full h-[1.5px] bg-white transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "top-2 -mt-[0.75px] rotate-45"
                      : "top-0 group-hover:bg-[#fcc81a]"
                  }`}
                />
                <span
                  className={`absolute w-full h-[1.5px] bg-white top-2 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0"
                      : "opacity-100 group-hover:bg-[#fcc81a]"
                  }`}
                />
                <span
                  className={`absolute w-full h-[1.5px] bg-white transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "top-2 -mt-[0.75px] -rotate-45"
                      : "top-4 group-hover:bg-[#fcc81a]"
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
