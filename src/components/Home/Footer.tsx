"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer elements on scroll
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });

      // Staggered animation for links
      gsap.from(".footer-link", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: linksRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-black overflow-hidden">
      {/* Elegant top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fcc81a]/30 to-transparent" />

      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div ref={contentRef} className="pt-16 pb-12 px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Left Column - Logo & Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center">
                  <Image
                    src="/logo-dark.png"
                    alt="Hardal Logo"
                    width={130}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-white/70 max-w-md text-sm leading-relaxed">
                  Erleben Sie authentische türkische Küche im Herzen von
                  Hamburg. Von traditionellem Frühstück bis hin zu eleganten
                  Abendessen-Optionen bringen wir Ihnen die reichhaltigen Aromen
                  der Türkei.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <a
                  href="https://maps.google.com/?q=Möllner+Landstraße+3,+Hamburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#fcc81a]/10">
                    <MapPin size={16} className="text-[#fcc81a]" />
                  </div>
                  <p className="text-white/80 text-sm group-hover:text-[#fcc81a]">
                    Möllner Landstraße 3, Hamburg
                  </p>
                </a>

                <a
                  href="tel:+4940123456789"
                  className="flex items-center gap-3 group transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#fcc81a]/10">
                    <Phone size={16} className="text-[#fcc81a]" />
                  </div>
                  <p className="text-white/80 text-sm group-hover:text-[#fcc81a]">
                    +49 (0) 40 123 456 78
                  </p>
                </a>

                <a
                  href="mailto:info@hardal.de"
                  className="flex items-center gap-3 group transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#fcc81a]/10">
                    <Mail size={16} className="text-[#fcc81a]" />
                  </div>
                  <p className="text-white/80 text-sm group-hover:text-[#fcc81a]">
                    info@hardal.de
                  </p>
                </a>
              </div>
            </div>

            {/* Center Column - Opening Hours */}
            <div className="lg:col-span-3">
              <h3 className="text-white text-base font-medium mb-6">
                Öffnungszeiten
              </h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-white/60 text-sm">Montag - Freitag</p>
                    <p className="text-white text-sm font-medium">
                      09:00 - 22:00
                    </p>
                  </div>
                  <div className="h-px w-full bg-white/10"></div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-white/60 text-sm">Samstag</p>
                    <p className="text-white text-sm font-medium">
                      10:00 - 23:00
                    </p>
                  </div>
                  <div className="h-px w-full bg-white/10"></div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-white/60 text-sm">Sonntag</p>
                    <p className="text-white text-sm font-medium">
                      10:00 - 22:00
                    </p>
                  </div>
                  <div className="h-px w-full bg-white/10"></div>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Links */}
            <div ref={linksRef} className="lg:col-span-4">
              <h3 className="text-white text-base font-medium mb-6">
                Schnellzugriff
              </h3>

              <div className="grid grid-cols-1 gap-2">
                <Link
                  href="/Hardal_Speisekarte20.03.pdf"
                  className="footer-link group flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <span className="text-white/80 text-sm group-hover:text-[#fcc81a]">
                    Unsere Speisekarte
                  </span>
                  <ArrowUpRight size={16} className="text-[#fcc81a]" />
                </Link>

                <Link
                  href="/reservierung"
                  className="footer-link group flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <span className="text-white/80 text-sm group-hover:text-[#fcc81a]">
                    Reservierungen
                  </span>
                  <ArrowUpRight size={16} className="text-[#fcc81a]" />
                </Link>

                <a
                  href="https://catering.hardal.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link group flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <span className="text-white/80 text-sm group-hover:text-[#fcc81a]">
                    Catering Service
                  </span>
                  <ArrowUpRight size={16} className="text-[#fcc81a]" />
                </a>

                <Link
                  href="/impressum"
                  className="footer-link group flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <span className="text-white/80 text-sm group-hover:text-[#fcc81a]">
                    Impressum
                  </span>
                  <ArrowUpRight size={16} className="text-[#fcc81a]" />
                </Link>

                <Link
                  href="/datenschutz"
                  className="footer-link group flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <span className="text-white/80 text-sm group-hover:text-[#fcc81a]">
                    Datenschutz
                  </span>
                  <ArrowUpRight size={16} className="text-[#fcc81a]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 px-6 lg:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Hardal Restaurant. Alle Rechte
              vorbehalten.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/hardal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#fcc81a]/10 transition-colors duration-200 group"
              >
                <Instagram
                  size={16}
                  className="text-white/60 group-hover:text-[#fcc81a]"
                />
              </a>

              <a
                href="https://facebook.com/hardal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#fcc81a]/10 transition-colors duration-200 group"
              >
                <Facebook
                  size={16}
                  className="text-white/60 group-hover:text-[#fcc81a]"
                />
              </a>

              <a
                href="https://twitter.com/hardal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#fcc81a]/10 transition-colors duration-200 group"
              >
                <Twitter
                  size={16}
                  className="text-white/60 group-hover:text-[#fcc81a]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
