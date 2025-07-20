import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hardal.de';

    // Define static pages
    const routes = [
        '',
        '/menu',
        '/fruhstuck',
        '/brunch',
        '/reservierung',
        '/kontakt',
        '/impressum',
        '/datenschutz',
        '/uber-uns/galerie',
        '/uber-uns/feiern',
        '/uber-uns/gutscheine',
        '/uber-uns/sehenswurdigkeiten',
        '/uber-uns/werbung-fur-firmen',
    ];

    // Menu categories
    const menuCategories = ['vorspeisen', 'hauptgerichte', 'desserts', 'getranke'];

    // Create sitemap entries with their respective lastModified dates and priorities
    const staticPages = routes.map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    })) as MetadataRoute.Sitemap;

    // Add menu category pages
    const menuPages = menuCategories.map(category => ({
        url: `${baseUrl}/menu/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    })) as MetadataRoute.Sitemap;

    return [...staticPages, ...menuPages];
} 