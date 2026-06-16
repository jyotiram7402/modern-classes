/**
 * Centralized image constants.
 * Replace any of these URLs with your own hosted/real photos later —
 * nothing else in the codebase needs to change.
 */

const U = (id: string, w = 800, h = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const AVATAR = (name: string, bg = "2563EB") =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&size=256&background=${bg}&color=fff&bold=true&format=png`;

export const IMAGES = {
  // Hero
  hero: U("photo-1523240795612-9a054b0db644", 1200, 900),
  heroSecondary: U("photo-1503676260728-1c00da094a0b", 900, 900),

  // About
  about: U("photo-1427504494785-3a9ca7044f45", 1000, 800),

  // Gallery (mixed orientations for masonry)
  gallery: [
    { src: U("photo-1509062522246-3755977927d7", 800, 1100), alt: "Students collaborating in a study session", span: "tall" as const },
    { src: U("photo-1571260899304-425eee4c7efc", 1100, 700), alt: "Modern smart classroom", span: "wide" as const },
    { src: U("photo-1497633762265-9d179a990aa6", 800, 800), alt: "Library and study material", span: "normal" as const },
    { src: U("photo-1522202176988-66273c2fd55f", 800, 800), alt: "Group of students discussing", span: "normal" as const },
    { src: U("photo-1503676260728-1c00da094a0b", 800, 1100), alt: "Teacher guiding a student", span: "tall" as const },
    { src: U("photo-1577896851231-70ef18881754", 1100, 700), alt: "Classroom learning environment", span: "wide" as const },
    { src: U("photo-1543269865-cbf427effbad", 800, 800), alt: "Students working together", span: "normal" as const },
    { src: U("photo-1588072432836-e10032774350", 800, 800), alt: "Lecture in progress", span: "normal" as const },
  ],

  // Toppers — placeholder avatars, swap for real photos
  topper: (name: string) => AVATAR(name, "1d4ed8"),
  // Faculty — placeholder avatars
  faculty: (name: string) => AVATAR(name, "0f172a"),
  // Testimonials
  testimonial: (name: string) => AVATAR(name, "06b6d4"),

  ogImage: U("photo-1523240795612-9a054b0db644", 1200, 630),
};
