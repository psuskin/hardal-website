import React from "react";
import SubHero from "@/components/Common/SubHero";

export const metadata = {
  title: "Feiern | Hardal Restaurant",
  description: "Host your celebrations and events at Hardal Restaurant.",
};

export default function FeiernPage() {
  return (
    <main className="min-h-screen">
      <SubHero
        imageAlt="Feiern"
        title="FEIERN"
        subtitle="Feiern Sie Ihre besonderen Anlässe bei uns"
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
      />

      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fcc81a] mb-6">
              Besondere Anlässe im Hardal Restaurant
            </h2>

            <div className="prose prose-lg prose-invert mb-10">
              <p className="text-white/80 text-lg">
                Feiern Sie Ihre schönsten Augenblicke im Hardal Restaurant. Sie
                möchten Ihre Hochzeit, Weihnachten, Taufe, Konfirmation,
                Geburtstag, Firmenjubiläum oder Ihre Betriebsfeier bei uns
                feiern? –
              </p>

              <p className="text-white/80 text-lg">
                Was auch immer Sie im Restaurant Hardal vorhaben, wir sorgen
                dafür, dass Sie und Ihre Gäste Freude daran haben und ein
                unvergessliches Erlebnis wird.
              </p>

              <p className="text-white/80 text-lg">
                Die Speisen für Ihre Feier stimmen wir individuell auf Ihre
                Wünsche ab – Sie können à la carte, ein Buffet oder ein
                spezielles Menü bestellen.
              </p>

              <p className="text-white/80 text-lg mt-8 font-medium">
                Wir beraten Sie kompetent bei der Auswahl für Ihr Festmenü.
              </p>
            </div>

            <p className="text-white/80 mb-6 text-lg">
              Ob Geburtstag, Hochzeit, Firmenfeier oder ein anderer besonderer
              Anlass - im Hardal Restaurant sind Sie genau richtig. Wir bieten
              Ihnen den perfekten Rahmen für Ihre Feierlichkeiten.
            </p>
            <p className="text-white/80 mb-10 text-lg">
              Unser erfahrenes Team steht Ihnen bei der Planung und Durchführung
              Ihrer Veranstaltung zur Seite und sorgt dafür, dass Ihr Event ein
              voller Erfolg wird.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-[#fcc81a] mb-3">
                  Unsere Räumlichkeiten
                </h3>
                <p className="text-white/70">
                  Wir verfügen über verschiedene Räumlichkeiten, die sich für
                  unterschiedliche Anlässe und Gruppengrößen eignen. Von
                  kleinen, intimen Feiern bis hin zu großen Veranstaltungen -
                  wir haben den passenden Raum für Sie.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-[#fcc81a] mb-3">
                  Catering & Menüs
                </h3>
                <p className="text-white/70">
                  Wir bieten maßgeschneiderte Menüs für Ihre Veranstaltung.
                  Unsere Küche bereitet authentische türkische Gerichte zu, die
                  Ihre Gäste begeistern werden.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-[#fcc81a] mb-4">
                Kontaktieren Sie uns
              </h3>
              <p className="text-white/80 mb-6">
                Für weitere Informationen oder um eine Reservierung vorzunehmen,
                kontaktieren Sie uns bitte unter:
              </p>
              <div className="bg-white/5 p-6 rounded-xl">
                <p className="text-white mb-2">
                  <strong>Telefon:</strong> +49 123 456789
                </p>
                <p className="text-white mb-2">
                  <strong>E-Mail:</strong> info@hardal-restaurant.de
                </p>
                <p className="text-white">
                  <strong>Adresse:</strong> Musterstraße 123, 12345 Musterstadt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
