import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/AboutUs";
import Services from "@/components/Home/Services";
import HomeMenu from "@/components/Home/HomeMenu";
import Testimonials from "@/components/Home/Testimonials";
import {
  RestaurantSchema,
  WebsiteSchema,
  OrganizationSchema,
} from "@/lib/schema";
import { createFaqSchema } from "@/lib/seo-utils";
import JsonLd from "@/components/Common/JsonLd";
import SEO from "@/components/Common/SEO";

export const metadata = {
  alternates: {
    canonical: "https://hardal.de",
  },
};

export default function Home() {
  // FAQ content for SEO
  const faqData = [
    {
      question: "Welche Speisen bietet das Hardal Restaurant an?",
      answer:
        "Das Hardal Restaurant bietet authentische türkische Küche an, von traditionellem Frühstück bis hin zu köstlichen Hauptgerichten und Desserts.",
    },
    {
      question: "Kann ich im Hardal Restaurant einen Tisch reservieren?",
      answer:
        "Ja, Sie können einen Tisch über unsere Website oder telefonisch reservieren.",
    },
    {
      question: "Bietet das Hardal Restaurant auch vegetarische Optionen an?",
      answer:
        "Ja, wir bieten eine Vielzahl an vegetarischen und veganen Gerichten an, die aus frischen, lokalen Zutaten zubereitet werden.",
    },
    {
      question: "Wo befindet sich das Hardal Restaurant in Hamburg?",
      answer:
        "Das Hardal Restaurant befindet sich zentral in Hamburg. Die genaue Adresse und Anfahrtsbeschreibung finden Sie auf unserer Kontaktseite.",
    },
  ];

  return (
    <main>
      {/* SEO Component with breadcrumbs */}
      <SEO breadcrumbs={[{ name: "Home", item: "https://hardal.de" }]}>
        {/* Schema.org structured data for SEO */}
        <RestaurantSchema
          url="https://hardal.de"
          name="Hardal Restaurant"
          description="Authentische türkische Küche im Herzen von Hamburg. Erleben Sie traditionelles Frühstück, Brunch und Abendessen in gemütlicher Atmosphäre."
          telephone="+49 40 12345678" // Replace with actual phone number
          address={{
            streetAddress: "Musterstraße 123", // Replace with actual address
            addressLocality: "Hamburg",
            postalCode: "20095", // Replace with actual postal code
            addressCountry: "DE",
          }}
          geo={{
            latitude: 53.551086, // Replace with actual coordinates
            longitude: 9.993682, // Replace with actual coordinates
          }}
          openingHours={[
            "Monday 09:00-22:00",
            "Tuesday 09:00-22:00",
            "Wednesday 09:00-22:00",
            "Thursday 09:00-22:00",
            "Friday 09:00-23:00",
            "Saturday 10:00-23:00",
            "Sunday 10:00-22:00",
          ]} // Replace with actual opening hours
          image="https://hardal.de/images/package6.jpg"
          priceRange="€€"
          servesCuisine={["Türkisch", "Mediterran"]}
          menu="https://hardal.de/menu"
        />

        <WebsiteSchema
          url="https://hardal.de"
          name="Hardal Restaurant"
          description="Authentische türkische Küche im Herzen von Hamburg. Erleben Sie traditionelles Frühstück, Brunch und Abendessen in gemütlicher Atmosphäre."
          author="Hardal Restaurant"
        />

        <OrganizationSchema
          url="https://hardal.de"
          name="Hardal Restaurant"
          logo="https://hardal.de/logo-dark.png"
          description="Authentische türkische Küche im Herzen von Hamburg."
          sameAs={[
            "https://facebook.com/hardalrestaurant"
          ]}
        />

        {/* FAQ Schema for rich results */}
        <JsonLd data={createFaqSchema(faqData)} />
      </SEO>

      <Hero />
      <Services />
      <HomeMenu />
      <Testimonials />
      <AboutUs />
    </main>
  );
}
