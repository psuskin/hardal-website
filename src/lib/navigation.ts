import { fullMenuData } from './menu-data';

export interface NavItem {
    href: string;
    label: string;
    external?: boolean;
}

export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
    image?: string;
    tags?: string[];
}

export interface MenuSection {
    title: string;
    titleTR: string;
    description: string;
    image: string;
    items: MenuItem[];
}

export interface NavigationSection {
    title: string;
    description?: string;
    image?: string;
    items: NavItem[];
}

export interface NavItemWithChildren {
    label: string;
    sections: NavigationSection[];
}

export type NavLinkType = NavItem | NavItemWithChildren;

export const isNavItemWithChildren = (
    item: NavLinkType
): item is NavItemWithChildren => {
    return (item as NavItemWithChildren).sections !== undefined;
};

// Helper function to normalize slugs
const normalizeSlug = (str: string): string => {
    return str.toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/&/g, "and")
        .replace(/[^\w-]/g, "");
};

// Convert menu data to navigation sections
const menuToNavSections = (menuData: MenuSection[]): NavigationSection[] => {
    return menuData.map(section => ({
        title: section.title,
        description: section.description,
        image: section.image,
        items: section.items.map(item => ({
            href: `/menu/${normalizeSlug(section.title)}#${item.id}`,
            label: item.name
        }))
    }));
};

// About Us dropdown sections
const aboutUsSections: NavigationSection[] = [
    {
        title: "FEIERN",
        description: "Feiern Sie Ihre besonderen Anlässe bei uns",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
        items: [
            { href: "/uber-uns/feiern", label: "FEIERN" }
        ]
    },
    {
        title: "WERBUNG FÜR FIRMEN",
        description: "Werbemöglichkeiten für Unternehmen",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070",
        items: [
            { href: "/uber-uns/werbung-fur-firmen", label: "WERBUNG FÜR FIRMEN" }
        ]
    },
    {
        title: "GUTSCHEINE",
        description: "Geschenkgutscheine für jeden Anlass",
        image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=2070",
        items: [
            { href: "/uber-uns/gutscheine", label: "GUTSCHEINE" }
        ]
    },
    {
        title: "GALERIE",
        description: "Fotos aus unserem Restaurant",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
        items: [
            { href: "/uber-uns/galerie", label: "GALERIE" }
        ]
    },
    {
        title: "SEHENSWÜRDIGKEITEN",
        description: "Lokale Attraktionen und Sehenswürdigkeiten",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070",
        items: [
            { href: "/uber-uns/sehenswurdigkeiten", label: "SEHENSWÜRDIGKEITEN" }
        ]
    }
];

export const navLinks: NavLinkType[] = [
    { href: "/", label: "HOME" },
    {
        href: "https://hardalbbq.simplywebshop.de/storedata/listStore",
        label: "ONLINE BESTELLEN",
        external: true
    },
    { href: "/reservierung", label: "RESERVIERUNG" },
    { href: "/fruhstuck", label: "FRÜHSTÜCK" },
    {
        label: "MENU",
        sections: menuToNavSections(fullMenuData)
    },
    { href: "https://catering.hardal.de/", label: "CATERING", external: true },
    { href: "/kontakt", label: "KONTAKT" },
    {
        label: "ÜBER UNS",
        sections: aboutUsSections
    },
]; 