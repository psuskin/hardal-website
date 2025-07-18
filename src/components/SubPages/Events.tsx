"use client";
import React from "react";

interface EventsProps {
  events: Array<{
    name: string;
    description: string;
    link: string;
    category: string;
  }>;
  eventLinks: Array<{
    name: string;
    url: string;
    category: string;
  }>;
}

const Events: React.FC<EventsProps> = ({ events, eventLinks }) => {
  return (
    <div className="mt-24">
      <h3 className="text-2xl md:text-3xl font-semibold text-[#fcc81a] mb-10 text-center">
        Veranstaltungen & Entertainment
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <h4 className="text-xl font-semibold text-[#fcc81a] group-hover:text-white transition-colors">
                {event.name}
              </h4>
            </div>
            <span className="inline-block bg-[#fcc81a]/10 text-[#fcc81a] text-sm py-1 px-3 rounded-full mb-3">
              {event.category}
            </span>
            <p className="text-white/70 mb-4">{event.description}</p>
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-[#fcc81a] transition-colors"
            >
              <span>Mehr erfahren</span>
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
        {eventLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 text-center group"
          >
            <span className="text-sm text-[#fcc81a]/80 mb-2 block">
              {link.category}
            </span>
            <span className="text-white text-sm font-medium group-hover:text-[#fcc81a] transition-colors">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Events;
