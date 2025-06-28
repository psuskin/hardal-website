"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinkType, isNavItemWithChildren } from "@/lib/navigation";
import { navLinks } from "@/lib/navigation";
import {
  PartyPopper,
  BarChart3,
  Gift,
  Image as ImageIcon,
  Landmark,
} from "lucide-react";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (label: string) => {
    setActiveSection(activeSection === label ? null : label);
  };

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-b from-black/98 to-black/95 backdrop-blur-md z-50 transform transition-all duration-500 ease-in-out ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="h-full overflow-y-auto pb-20 scrollbar-none">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-b from-black/80 to-black/0 backdrop-blur-sm py-6 px-6">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={onClose} className="relative w-32 h-12">
              <Image
                src="/logo-dark.png"
                alt="Hardal Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-white/80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Content */}
        <nav className="px-6 pt-4">
          {navLinks.map((item: NavLinkType) => {
            if (isNavItemWithChildren(item)) {
              const isActive = activeSection === item.label;
              return (
                <div key={item.label} className="mb-6">
                  <button
                    onClick={() => handleSectionClick(item.label)}
                    className="w-full text-left text-white/90 hover:text-white text-xl font-medium py-3 flex justify-between items-center transition-colors"
                  >
                    <span className="tracking-wide">{item.label}</span>
                    <span
                      className={`ml-2 transform transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-[#fcc81a]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isActive
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.label === "MENU" && (
                      <div className="grid grid-cols-1 gap-4 py-4">
                        {item.sections.map((section) => (
                          <div
                            key={section.title}
                            className="group relative bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl overflow-hidden transition-all duration-300"
                          >
                            {section.image && (
                              <div className="relative h-48 w-full">
                                <Image
                                  src={section.image}
                                  alt={section.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6">
                                  <h3 className="text-[#fcc81a] text-lg font-semibold mb-1">
                                    {section.title}
                                  </h3>
                                  {section.description && (
                                    <p className="text-sm text-white/70">
                                      {section.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            )}
                            <div className="p-4">
                              <div className="grid grid-cols-2 gap-2">
                                {section.items.slice(0, 6).map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                                    onClick={onClose}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-3 px-2">
                                <Link
                                  href={`/menu/${section.title
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")
                                    .replace(/&/g, "and")
                                    .replace(/[^\w-]/g, "")}`}
                                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/5 text-[#fcc81a] hover:bg-white/10 transition-all duration-300"
                                  onClick={onClose}
                                >
                                  <span>View All {section.title}</span>
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
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.label === "ÜBER UNS" && (
                      <div className="py-3">
                        <div className="grid grid-cols-1 gap-2">
                          {item.sections.map((section) => (
                            <Link
                              key={section.title}
                              href={section.items[0].href}
                              onClick={onClose}
                              className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition-all duration-300"
                            >
                              <div className="w-6 h-6 flex items-center justify-center text-[#fcc81a]">
                                {section.title === "FEIERN" && (
                                  <PartyPopper size={16} />
                                )}
                                {section.title === "WERBUNG FÜR FIRMEN" && (
                                  <BarChart3 size={16} />
                                )}
                                {section.title === "GUTSCHEINE" && (
                                  <Gift size={16} />
                                )}
                                {section.title === "GALERIE" && (
                                  <ImageIcon size={16} />
                                )}
                                {section.title === "SEHENSWÜRDIGKEITEN" && (
                                  <Landmark size={16} />
                                )}
                              </div>
                              <span className="text-white">
                                {section.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            // Handle external links
            if ("external" in item && item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="block text-white/90 hover:text-white text-xl font-medium py-3 tracking-wide transition-colors mb-6"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="block text-white/90 hover:text-white text-xl font-medium py-3 tracking-wide transition-colors mb-6"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
