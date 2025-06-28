import React from "react";
import Gallery from "@/components/SubPages/Gallery";
import SubHero from "@/components/Common/SubHero";

const GalleryPage = () => {
  // Using placeholder images from Unsplash with smaller sizes for better loading
  const galleryImages = [
    // Restaurant Ambiance
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      alt: "Elegantes Restaurant-Interieur mit warmer Beleuchtung",
      category: "restaurant",
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
      alt: "Gemütliche Sitzecke mit traditioneller Dekoration",
      category: "restaurant",
    },
    {
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
      alt: "Moderne Bar mit stimmungsvoller Atmosphäre",
      category: "restaurant",
    },

    // Signature Dishes
    {
      src: "https://images.unsplash.com/photo-1561626423-a51b45dc0e3f?w=800&q=80",
      alt: "Hausgemachte türkische Spezialitäten",
      category: "food",
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1583953596952-51a4c2d7c7c5?w=800&q=80",
      alt: "Frisch zubereitete Mezze-Platte",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80",
      alt: "Traditionelles türkisches Frühstück",
      category: "food",
    },

    // Drinks & Beverages
    {
      src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80",
      alt: "Handgemachte Cocktails mit frischen Zutaten",
      category: "drinks",
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=800&q=80",
      alt: "Auswahl an türkischen Weinen",
      category: "drinks",
    },
    {
      src: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80",
      alt: "Traditioneller türkischer Tee Service",
      category: "drinks",
    },

    // Kitchen & Preparation
    {
      src: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?w=800&q=80",
      alt: "Unsere Köche bei der Zubereitung",
      category: "kitchen",
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      alt: "Frische Zutaten in unserer Küche",
      category: "kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1428515613728-6b4607e44363?w=800&q=80",
      alt: "Traditionelle Kochkunst in Aktion",
      category: "kitchen",
    },

    // Events & Celebrations
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      alt: "Festlich gedeckte Tafel für Feierlichkeiten",
      category: "events",
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80",
      alt: "Hochzeitsfeier im Restaurant",
      category: "events",
    },
    {
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
      alt: "Live-Musik und Unterhaltung",
      category: "events",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <SubHero
        title="Unsere Galerie"
        subtitle="Entdecken Sie die Atmosphäre, Gerichte und Momente in unserem Restaurant"
        description="Tauchen Sie ein in die visuelle Reise durch unser Restaurant. Von der einladenden Atmosphäre über unsere köstlichen Gerichte bis hin zu besonderen Momenten – erleben Sie einen Vorgeschmack auf Ihren Besuch bei uns."
        imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
        imageAlt="Elegantes Restaurant-Interieur"
        height="medium"
      />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Willkommen in unserer visuellen Welt
          </h2>
          <p className="text-gray-400 text-lg">
            Entdecken Sie die Magie unseres Restaurants durch unsere sorgfältig
            kuratierte Bildergalerie. Jedes Bild erzählt eine Geschichte von
            Tradition, Geschmack und Gastfreundschaft.
          </p>
        </div>

        <Gallery images={galleryImages} />

        <div className="mt-24 text-center">
          <p className="text-gray-400 mb-8">
            Folgen Sie uns auf Instagram für weitere Einblicke in unser
            Restaurant
          </p>
          <a
            href="https://instagram.com/hardal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/15 text-white rounded-full transition-all duration-300 border border-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            @hardal auf Instagram folgen
          </a>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
