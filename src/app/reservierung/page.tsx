"use client";

import React from "react";
import SubHero from "@/components/Common/SubHero";

const ReservierungPage = () => {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <SubHero
        title="Online Reservierung"
        description="Reservieren Sie Ihren Tisch bei uns"
        imageSrc="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070"
        imageAlt="Hardal Restaurant Reservation"
        height="small"
        overlay="dark"
        align="center"
        showDivider={false}
      />

      <section className="flex-1 flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Centered iframe container */}
            <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="relative pt-[120%] md:pt-[80%] lg:pt-[65%]">
                <iframe
                  src="https://8d21lk6rqn41sjb7r25r.centralplanner.online/public/webforms/2575-Hardal-Restaurant-Hamburg"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="camera; microphone; geolocation"
                />
              </div>
            </div>

            {/* Centered contact info */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/60">
              <a
                href="tel:+4940655888999"
                className="hover:text-[#fcc81a] transition-colors"
              >
                +49 40 655 888 999
              </a>
              <span className="hidden md:inline text-white/20">•</span>
              <span>Mollner Landstraße 3, 22111 Hamburg</span>
              <span className="hidden md:inline text-white/20">•</span>
              <a
                href="mailto:info@hardal.de"
                className="hover:text-[#fcc81a] transition-colors"
              >
                info@hardal.de
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReservierungPage;
