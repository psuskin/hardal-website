import React from "react";

interface RestaurantSchemaProps {
  url: string;
  name: string;
  description: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  image?: string;
  priceRange?: string;
  servesCuisine?: string[];
  menu?: string;
}

export const RestaurantSchema = ({
  url,
  name,
  description,
  telephone,
  address,
  geo,
  openingHours,
  image,
  priceRange,
  servesCuisine,
  menu,
}: RestaurantSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": url,
    name,
    description,
    url,
    ...(telephone && { telephone }),
    ...(address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: address.streetAddress,
        addressLocality: address.addressLocality,
        postalCode: address.postalCode,
        addressCountry: address.addressCountry,
      },
    }),
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    ...(openingHours && {
      openingHoursSpecification: openingHours.map((hours) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: hours.split(" ")[0],
        opens: hours.split(" ")[1].split("-")[0],
        closes: hours.split(" ")[1].split("-")[1],
      })),
    }),
    ...(image && { image }),
    ...(priceRange && { priceRange }),
    ...(servesCuisine && { servesCuisine }),
    ...(menu && { hasMenu: menu }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const LocalBusinessSchema = ({
  url,
  name,
  description,
  telephone,
  address,
  geo,
  openingHours,
  image,
}: Omit<RestaurantSchemaProps, "priceRange" | "servesCuisine" | "menu">) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    name,
    description,
    url,
    ...(telephone && { telephone }),
    ...(address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: address.streetAddress,
        addressLocality: address.addressLocality,
        postalCode: address.postalCode,
        addressCountry: address.addressCountry,
      },
    }),
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    ...(openingHours && {
      openingHoursSpecification: openingHours.map((hours) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: hours.split(" ")[0],
        opens: hours.split(" ")[1].split("-")[0],
        closes: hours.split(" ")[1].split("-")[1],
      })),
    }),
    ...(image && { image }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BreadcrumbSchema = ({
  items,
}: {
  items: { name: string; item?: string }[];
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.item && { item: item.item }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const WebsiteSchema = ({
  url,
  name,
  description,
  author,
}: {
  url: string;
  name: string;
  description: string;
  author: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": url,
    url,
    name,
    description,
    author: {
      "@type": "Organization",
      name: author,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const OrganizationSchema = ({
  url,
  name,
  logo,
  description,
  sameAs,
}: {
  url: string;
  name: string;
  logo: string;
  description: string;
  sameAs?: string[];
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": url,
    url,
    name,
    logo,
    description,
    ...(sameAs && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
