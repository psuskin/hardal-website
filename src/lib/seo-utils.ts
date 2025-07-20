/**
 * SEO utility functions
 */

/**
 * Creates Open Graph image URL with proper dimensions
 */
export function getOgImageUrl(imagePath: string, width = 1200, height = 630): string {
    if (imagePath.startsWith('http')) {
        // For external URLs, append dimensions as query parameters
        const url = new URL(imagePath);
        url.searchParams.set('width', width.toString());
        url.searchParams.set('height', height.toString());
        return url.toString();
    }

    // For relative paths, ensure they have leading slash
    const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `https://hardal.de${path}?width=${width}&height=${height}`;
}

/**
 * Generates a canonical URL
 */
export function getCanonicalUrl(path: string): string {
    const basePath = 'https://hardal.de';
    const cleanPath = path === '/' ? '' : path;
    return `${basePath}${cleanPath}`;
}

/**
 * Creates a proper title with limits for SEO
 */
export function createSeoTitle(title: string, includeBaseName = true): string {
    const baseName = ' | Hardal Restaurant';
    const maxLength = 60;

    if (!includeBaseName) return title.substring(0, maxLength);

    const fullTitle = `${title}${baseName}`;

    if (fullTitle.length <= maxLength) {
        return fullTitle;
    }

    // If too long, trim the title part
    const availableLength = maxLength - baseName.length;
    return `${title.substring(0, availableLength - 3)}...${baseName}`;
}

/**
 * Truncates description to optimal length for SEO
 */
export function createSeoDescription(description: string): string {
    const maxLength = 160;
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength - 3)}...`;
}

/**
 * Creates breadcrumb data for schema markup
 */
export function createBreadcrumbs(
    items: Array<{ name: string; path: string }>
): Array<{ name: string; item: string }> {
    return items.map(({ name, path }) => ({
        name,
        item: getCanonicalUrl(path),
    }));
}

interface FaqQuestion {
    question: string;
    answer: string;
}

interface FaqSchema {
    '@context': string;
    '@type': string;
    mainEntity: Array<{
        '@type': string;
        name: string;
        acceptedAnswer: {
            '@type': string;
            text: string;
        };
    }>;
    [key: string]: unknown;
}

/**
 * Creates JSON-LD data for FAQ
 */
export function createFaqSchema(questions: FaqQuestion[]): FaqSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map((q) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: q.answer,
            },
        })),
    };
} 