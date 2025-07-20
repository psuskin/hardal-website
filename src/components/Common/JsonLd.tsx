"use client";
import { useEffect, useState } from "react";

type JsonLdType = {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
};

interface JsonLdProps {
  data: JsonLdType;
}

/**
 * Client component for adding JSON-LD structured data to improve SEO
 *
 * @param data - The JSON-LD data object to be serialized
 */
export default function JsonLd({ data }: JsonLdProps) {
  const [jsonString, setJsonString] = useState("");

  useEffect(() => {
    // Safely stringify the JSON data
    try {
      setJsonString(JSON.stringify(data));
    } catch (error) {
      console.error("Error stringifying JSON-LD:", error);
    }
  }, [data]);

  // Only render on client side to avoid hydration issues
  if (!jsonString) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
