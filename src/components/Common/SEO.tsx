import React from "react";
import { BreadcrumbSchema } from "@/lib/schema";
import { getOgImageUrl } from "@/lib/seo-utils";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  children?: React.ReactNode;
  breadcrumbs?: { name: string; item?: string }[];
}

/**
 * SEO component to add page-specific metadata and schema
 */
export default function SEO({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "/images/package6.jpg",
  children,
  breadcrumbs,
}: SEOProps) {
  // Default canonical URL is the current page URL
  const pageCanonical =
    canonical || (typeof window !== "undefined" ? window.location.href : "");

  // Process OpenGraph image URL
  const processedOgImage = getOgImageUrl(ogImage);

  return (
    <>
      {/* Add page metadata */}
      {(title ||
        description ||
        ogType ||
        processedOgImage ||
        pageCanonical) && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: title,
              description: description,
              url: pageCanonical,
              image: processedOgImage,
            }),
          }}
        />
      )}

      {/* Add breadcrumb schema if breadcrumbs are provided */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <BreadcrumbSchema items={breadcrumbs} />
      )}

      {/* Additional structured data or custom page metadata */}
      {children}
    </>
  );
}
