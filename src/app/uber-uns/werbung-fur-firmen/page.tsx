import React from "react";
import SubHero from "@/components/Common/SubHero";
import Image from "next/image";

export const metadata = {
  title: "Werbung für Firmen | Hardal Restaurant",
  description:
    "Werben Sie in unserem Restaurant mit hochauflösenden Displays und erreichen Sie Ihre Zielgruppe effektiv.",
};

export default function WerbungFurFirmenPage() {
  return (
    <main className="min-h-screen">
      <SubHero
        title="WERBUNG FÜR FIRMEN"
        subtitle="Effektive Werbemöglichkeiten für Ihr Unternehmen"
        imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
        imageAlt="Werbung für Firmen"
      />

      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#fcc81a] mb-8">
                Display Werbung für Firmen
              </h2>

              <div className="space-y-6 text-white/80">
                <p className="text-lg">
                  Sie haben bei uns die Möglichkeiten attraktive Werbung Ihres
                  Unternehmens in den Gastroräumen mit hochauflösende
                  Bildschirmen darzustellen. Die Displays können Ihr Unternehmen
                  oder besondere Angebote zeigen. Sie haben hier vielfältige
                  Gestaltungsmöglichkeiten für die Präsentation Ihres
                  Unternehmens.
                </p>

                <p className="text-lg">
                  Die Restaurant Werbung spricht Ihre potentiellen Kunden direkt
                  und die visuelle Wahrnehmung der Menschen an und erhält über
                  diesen Weg sofort mehr Aufmerksamkeit. Nutzen SIe diese
                  Möglichkeit der Restaurant Werbung.
                </p>

                <div className="mt-12">
                  <p className="text-xl text-[#fcc81a] font-semibold">
                    Sprechen SIe uns dazu an.
                  </p>
                </div>
              </div>

              {/* Display Mockup Section */}
              <div className="mt-12 relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070"
                  alt="Digital Display Advertising"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contact Button */}
              <div className="mt-12 text-center">
                <a
                  href="/kontakt"
                  className="inline-block bg-[#fcc81a] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#fcc81a]/90 transition-colors"
                >
                  Kontaktieren Sie uns
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
