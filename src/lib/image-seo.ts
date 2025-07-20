/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { StaticImageData } from "next/image";

/**
 * Image SEO and optimization utilities
 */

interface ImagePlaceholderOptions {
    width?: number;
    height?: number;
    quality?: number;
}

/**
 * Generate a placeholder color for images to improve LCP (Largest Contentful Paint)
 */
export function generatePlaceholderColor(): string {
    // Return a dark gray color for consistent appearance
    return "#1a1a1a";
}

/**
 * Create image attributes for better SEO and accessibility
 */
export function createImageSeoAttributes(
    alt: string,
    title?: string,
    description?: string,
    credit?: string
): Record<string, string> {
    const attrs: Record<string, string> = {
        alt: alt || "", // Alt text is required for accessibility
    };

    if (title) attrs.title = title;
    if (description) attrs["aria-describedby"] = description;
    if (credit) attrs["data-credit"] = credit;

    return attrs;
}

/**
 * Get optimal image sizes for responsive design
 * This helps with Core Web Vitals by reducing CLS (Cumulative Layout Shift)
 */
export function getResponsiveImageSizes(
    mobileWidth = "100vw",
    tabletWidth = "50vw",
    desktopWidth = "33vw"
): string {
    return `(max-width: 640px) ${mobileWidth}, (max-width: 1024px) ${tabletWidth}, ${desktopWidth}`;
}

/**
 * Get the correct image dimensions from either a string path or StaticImageData
 */
export function getImageDimensions(
    src: string | StaticImageData
): { width: number; height: number } {
    // If it's a StaticImageData object
    if (typeof src !== "string" && src.width && src.height) {
        return {
            width: src.width,
            height: src.height,
        };
    }

    // Default dimensions if we can't determine
    return {
        width: 1200,
        height: 630,
    };
}

/**
 * Create a complete set of image props for optimal loading and SEO
 */
export function createOptimalImageProps(
    src: string | StaticImageData,
    alt: string,
    title?: string
): Record<string, any> {
    const dimensions = getImageDimensions(src);

    return {
        src,
        alt,
        ...(title && { title }),
        width: dimensions.width,
        height: dimensions.height,
        loading: "lazy",
        sizes: getResponsiveImageSizes(),
        placeholder: "blur",
        blurDataURL: `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${dimensions.width} ${dimensions.height}'%3E%3Crect width='100%25' height='100%25' fill='%23${generatePlaceholderColor().replace(
            "#",
            ""
        )}'/%3E%3C/svg%3E`,
    };
} 