import React from "react";
import SubHero from "@/components/Common/SubHero";

export const metadata = {
  title: "Gutscheine | Hardal Restaurant",
  description:
    "Verschenken Sie Genuß für das Hardal Restaurant - Stilvolle Geschenkgutscheine für jeden Anlass.",
};

export default function GutscheinePage() {
  return (
    <main className="min-h-screen">
      <SubHero
        imageAlt="Gutscheine"
        title="GUTSCHEINE"
        subtitle="Verschenken Sie Genuß für das Hardal Restaurant"
        imageSrc="https://images.unsplash.com/photo-1616666428759-679a7d578307?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Main Content */}
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Hardal{" "}
                <span className="text-[#fcc81a]">Geschenkgutscheine</span>
              </h2>
              <div className="space-y-4 text-lg text-white/80">
                <p>
                  Mit unseren Gutscheinen bieten wir Ihnen ein stilvolles
                  Geschenk.
                </p>
                <p>
                  Ob ein romantisches Dinner zu zweit, eine Feier im kleinen
                  Kreis, Catering oder einfach ein netter Besuch bei uns im
                  Hardal – all dies können Sie verschenken.
                </p>
              </div>
            </div>

            {/* Gift Card Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-semibold text-[#fcc81a] mb-6">
                  Wertgutscheine
                </h3>
                <div className="space-y-4 text-white/80">
                  <p>Wählen Sie aus unseren Standard-Gutscheinwerten:</p>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>€25 - Perfekt für ein Mittagessen</li>
                    <li>€50 - Ideal für ein Abendessen</li>
                    <li>€100 - Ein besonderes Dinner für zwei</li>
                    <li>Individuelle Beträge nach Wunsch</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-semibold text-[#fcc81a] mb-6">
                  Kontakt & Bestellung
                </h3>
                <div className="space-y-4 text-white/80">
                  <p>
                    Die Leistungen und den Betrag können Sie frei wählen. Für
                    die Bestellung eines Gutscheins haben Sie folgende
                    Möglichkeiten:
                  </p>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Besuchen Sie uns vor Ort</li>
                    <li>Rufen Sie uns an</li>
                    <li>Senden Sie uns eine E-Mail</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 text-center">
              <p className="text-white/60 text-sm">
                Unsere Gutscheine werden hochwertig gedruckt und sind ideal zum
                Verschenken. Gültig für alle Leistungen in unserem Restaurant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
