"use client";
import React from "react";
import Image from "next/image";

interface AttractionProps {
  attractions: Array<{
    name: string;
    description: string;
    distance: string;
    image: string;
    mapLink: string;
    category: string;
  }>;
  additionalAttractions: Array<{
    name: string;
    category: string;
  }>;
}

const Attractions: React.FC<AttractionProps> = ({
  attractions,
  additionalAttractions,
}) => {
  return (
    <div className="mb-24">
      <h3 className="text-2xl md:text-3xl font-semibold text-[#fcc81a] mb-10 text-center">
        Beliebte Sehenswürdigkeiten
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((attraction, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={attraction.image}
                alt={attraction.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/60 text-white text-sm py-1 px-3 rounded-full">
                {attraction.distance}
              </div>
              <div className="absolute bottom-4 left-4 bg-[#fcc81a] text-black text-sm py-1 px-3 rounded-full">
                {attraction.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#fcc81a] mb-3">
                {attraction.name}
              </h3>
              <p className="text-white/70 mb-4 line-clamp-3">
                {attraction.description}
              </p>
              <a
                href={attraction.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-[#fcc81a] transition-colors"
              >
                <span>Auf Karte anzeigen</span>
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
                  className="ml-2"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {additionalAttractions.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center"
          >
            <span className="text-sm text-[#fcc81a]/80 mb-2 block">
              {item.category}
            </span>
            <p className="text-white font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attractions;
