"use client";
import React, { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  width?: number;
  height?: number;
  featured?: boolean;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "restaurant", "food", "events", "interior"];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="px-4 md:px-6 pt-24">
      {/* Floating Category Filter */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/30 backdrop-blur-md rounded-full px-2 py-1.5 shadow-lg border border-white/10">
          <div className="flex items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#fcc81a] text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="max-w-7xl mx-auto">
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative mb-4 overflow-hidden rounded-lg bg-white/5"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="space-y-2">
                      <span className="inline-block px-2 py-1 bg-[#fcc81a] text-black text-xs font-medium rounded">
                        {image.category}
                      </span>
                      <h3 className="text-white text-base font-medium line-clamp-2">
                        {image.alt}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Gallery;
