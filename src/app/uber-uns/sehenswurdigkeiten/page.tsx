import React from "react";
import SubHero from "@/components/Common/SubHero";
import Attractions from "@/components/SubPages/Attractions";
import Events from "@/components/SubPages/Events";
import LocationMap from "@/components/SubPages/LocationMap";

export const metadata = {
  title: "Sehenswürdigkeiten | Hardal Restaurant",
  description:
    "Entdecken Sie die faszinierendsten Sehenswürdigkeiten und Veranstaltungen in der Nähe des Hardal Restaurants in Hamburg.",
};

export default function SehenswurdigkeitenPage() {
  // Hamburg attractions data
  const attractions = [
    {
      name: "Schanzenviertel",
      description:
        "Das pulsierende Herz Hamburgs mit einzigartiger Atmosphäre, trendigen Cafés und authentischen Restaurants.",
      distance: "0.5 km",
      image:
        "https://images.unsplash.com/photo-1577193120905-21e0c384a592?q=80&w=2070",
      mapLink: "https://maps.google.com/?q=Schanzenviertel+Hamburg",
      category: "Viertel & Leben",
    },
    {
      name: "Reeperbahn",
      description:
        "Die weltberühmte Vergnügungsmeile im Herzen von St. Pauli - Hamburgs Entertainment-Zentrum.",
      distance: "1.2 km",
      image:
        "https://images.unsplash.com/photo-1560704429-509cb85baeb2?q=80&w=2070",
      mapLink: "https://maps.google.com/?q=Reeperbahn+Hamburg",
      category: "Unterhaltung",
    },
    {
      name: "Grosse Freiheit",
      description:
        "Legendäre Straße mit historischen Musik-Clubs und pulsierendem Nachtleben.",
      distance: "1.3 km",
      image:
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070",
      mapLink: "https://maps.google.com/?q=Grosse+Freiheit+Hamburg",
      category: "Unterhaltung",
    },
    {
      name: "Hamburger Hafen",
      description:
        "Das maritime Herz der Stadt - einer der bedeutendsten Häfen Europas mit atemberaubender Atmosphäre.",
      distance: "2.5 km",
      image:
        "https://images.unsplash.com/photo-1564260670111-18b14e5e0b3e?q=80&w=2070",
      mapLink: "https://maps.google.com/?q=Hamburger+Hafen",
      category: "Wahrzeichen",
    },
    {
      name: "Landungsbrücken",
      description:
        "Historische Hafenpromenade mit eindrucksvollem Blick auf Schiffe und Hafenkulisse.",
      distance: "2.7 km",
      image:
        "https://images.unsplash.com/photo-1561116275-7f3ad5e4d74a?q=80&w=2070",
      mapLink: "https://maps.google.com/?q=Landungsbrücken+Hamburg",
      category: "Wahrzeichen",
    },
    {
      name: "Miniatur Wunderland",
      description:
        "Die größte Modelleisenbahn der Welt - eine faszinierende Miniaturwelt für Jung und Alt.",
      distance: "3.0 km",
      image:
        "https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?q=80&w=2070",
      mapLink: "https://maps.google.com/?q=Miniatur+Wunderland+Hamburg",
      category: "Attraktion",
    },
  ];

  const additionalAttractions = [
    { name: "Fischmarkt", icon: "🐟" },
    { name: "Jungfernstieg", icon: "🛍️" },
    { name: "Alster", icon: "⛵" },
    { name: "Messehallen", icon: "🏛️" },
    { name: "Hamburg Airport", icon: "✈️" },
  ];

  const events = [
    {
      name: "Hamburg Musicals",
      description:
        "Weltklasse-Musicals wie 'König der Löwen' und 'Wicked' in spektakulären Theatern.",
      link: "https://www.stage-entertainment.de/hamburg",
      icon: "🎭",
    },
    {
      name: "HSV Arena",
      description:
        "Heimspielstätte des HSV - Erleben Sie die Atmosphäre des Volksparkstadions.",
      link: "https://www.hsv.de/tickets",
      icon: "⚽",
    },
    {
      name: "Millerntor FC St. Pauli",
      description:
        "Das legendäre Stadion des FC St. Pauli mit einzigartiger Fan-Kultur.",
      link: "https://www.fcstpauli.com/tickets",
      icon: "⚽",
    },
    {
      name: "Hamburger Dom",
      description:
        "Norddeutschlands größtes Volksfest mit aufregenden Attraktionen und Leckereien.",
      link: "https://hamburger-dom.de",
      icon: "🎡",
    },
    {
      name: "Messe Hamburg",
      description: "Internationale Messen und Kongresse in modernem Ambiente.",
      link: "https://www.hamburg-messe.de/veranstaltungen",
      icon: "🏢",
    },
    {
      name: "Hamburger Theater",
      description:
        "Von klassisch bis modern - Hamburgs vielfältige Theaterszene.",
      link: "https://www.hamburg.de/theater",
      icon: "🎭",
    },
  ];

  const eventLinks = [
    {
      name: "Hamburg Tourismus",
      url: "https://www.hamburg-tourism.de",
      icon: "🏰",
    },
    { name: "MOPO Termine", url: "https://www.mopo.de/termine", icon: "📅" },
    { name: "HSV-Spielplan", url: "https://www.hsv.de/spielplan", icon: "⚽" },
    {
      name: "St. Pauli Spielplan",
      url: "https://www.fcstpauli.com/spielplan",
      icon: "⚽",
    },
    { name: "Piste Hamburg", url: "https://www.piste-hamburg.de", icon: "🎉" },
    { name: "Prinz", url: "https://www.prinz.de/hamburg", icon: "🎭" },
    { name: "Szene Hamburg", url: "https://www.szene-hamburg.de", icon: "🎪" },
    { name: "Clubkombinat", url: "https://www.klubkombinat.de", icon: "🎵" },
    { name: "Klubsen.de", url: "https://www.klubsen.de", icon: "🎧" },
    {
      name: "Konzerte",
      url: "https://www.eventim.de/city/hamburg",
      icon: "🎸",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <SubHero
        imageAlt="Sehenswürdigkeiten Hamburg"
        title="SEHENSWÜRDIGKEITEN"
        subtitle="Entdecken Sie Hamburg"
        imageSrc="https://images.unsplash.com/photo-1473615695634-d284ec918736?q=80&w=2070"
      />

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#fcc81a] mb-6">
                Hamburgs Highlights
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Entdecken Sie die vielfältigen Sehenswürdigkeiten rund um das
                Hardal Restaurant. Von historischen Wahrzeichen bis zu modernen
                Attraktionen - Hamburg hat für jeden etwas zu bieten.
              </p>
            </div>

            <Attractions
              attractions={attractions}
              additionalAttractions={additionalAttractions}
            />

            <Events events={events} eventLinks={eventLinks} />

            <LocationMap />
          </div>
        </div>
      </section>
    </main>
  );
}
