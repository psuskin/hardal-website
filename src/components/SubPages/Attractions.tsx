"use client";
import React from "react";

interface AttractionProps {
  attractions: Array<{
    name: string;
    description: string;
    distance: string;
    mapLink: string;
    category: string;
  }>;
  additionalAttractions: Array<{
    name: string;
    category: string;
    link: string;
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attractions.map((attraction, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group relative"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#fcc81a] group-hover:text-white transition-colors">
                {attraction.name}
              </h3>
              <span className="text-sm text-white/60 bg-white/5 py-1 px-3 rounded-full">
                {attraction.distance}
              </span>
            </div>
            <span className="inline-block bg-[#fcc81a]/10 text-[#fcc81a] text-sm py-1 px-3 rounded-full mb-3">
              {attraction.category}
            </span>
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
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {additionalAttractions.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 text-center group"
          >
            <span className="text-sm text-[#fcc81a]/80 mb-2 block">
              {item.category}
            </span>
            <p className="text-white font-medium group-hover:text-[#fcc81a] transition-colors">
              {item.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Attractions;
