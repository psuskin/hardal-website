import React from "react";
import Image from "next/image";
import SubHero from "@/components/Common/SubHero";

const GalleryPage = () => {
  const images = [
    "/images/DSC00766.jpg",
    "/images/DSC00767.jpg",
    "/images/DSC00771.jpg",
    "/images/DSC00773.jpg",
    "/images/DSC00777.jpg",
    "/images/DSC00780.jpg",
    "/images/DSC00782.jpg",
    "/images/DSC00788.jpg",
    "/images/DSC00789.jpg",
    "/images/DSC00791.jpg",
    "/images/DSC00792.jpg",
    "/images/DSC00793.jpg",
    "/images/DSC00794.jpg",
    "/images/DSC00798.jpg",
    "/images/DSC00799.jpg",
    "/images/DSC00800.jpg",
    "/images/DSC00802.jpg",
    "/images/DSC00803.jpg",
    "/images/DSC00806.jpg",
    "/images/DSC00808.jpg",
    "/images/DSC00809.jpg",
    "/images/DSC00826.jpg",
    "/images/DSC00836.jpg",
    "/images/DSC00837.jpg",
    "/images/DSC00845.jpg",
    "/images/DSC00849.jpg",
  ];

  return (
    <main className="min-h-screen bg-black">
      <SubHero
        title="GALERIE"
        subtitle="Eindrücke aus unserem Restaurant"
        imageSrc="/images/package6.jpg"
        imageAlt="Restaurant Hardal"
        height="medium"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square relative overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
