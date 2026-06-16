import type { NavLink } from "./types";

export const SITE = {
  name: "Modern Classes",
  tagline: "Shaping Bright Futures Through Quality Education",
  description:
    "Modern Classes is a premium private coaching institute offering expert coaching from Std. 1 to Std. 12 across English, Marathi and Hindi mediums and all boards.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://modernclasses.vercel.app",
  email: "info@modernclasses.in",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "https://wa.me/919876543210",
  address: "Modern Classes, 2nd Floor, Vidya Complex, Main Road, Pune, Maharashtra 411001, India",
  shortAddress: "Vidya Complex, Main Road, Pune 411001",
  mapsQuery: "Pune+Maharashtra+India",
  hours: "Mon – Sat: 8:00 AM – 8:00 PM",
} as const;

export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "yourFormId";
export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Results", href: "#results" },
  { label: "Faculty", href: "#faculty" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: "Facebook" as const },
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" as const },
  { label: "YouTube", href: "https://youtube.com", icon: "Youtube" as const },
  { label: "WhatsApp", href: "https://wa.me/919876543210", icon: "MessageCircle" as const },
];
