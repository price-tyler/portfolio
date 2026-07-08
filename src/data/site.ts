/**
 * Single source of truth for site identity and external links.
 * Every page pulls from here — update once, propagates everywhere.
 */

export const site = {
  name: "Tyler Price",
  role: "Mechanical Engineering Student",
  emphasis: "Aerospace Emphasis",
  university: "Utah State University",
  location: "Logan, Utah",
  coordinates: "41.74°N 111.83°W",
  gradYear: 2029,
  /** One-sentence positioning statement — shown in the hero. */
  tagline:
    "I like problems that end with a working machine — and I document the engineering it took to get there.",
  email: "tyler.price.usu@gmail.com",
  github: "https://github.com/price-tyler" as string | null,
  linkedin: "https://www.linkedin.com/in/tylerpriceusu/" as string | null,
  /** Set true once public/resume.pdf is the version you want recruiters downloading. */
  resumePdfReady: true,
  metaDescription:
    "Tyler Price — Mechanical Engineering student (Aerospace emphasis) at Utah State University. Projects in hardware design, Python automation, and web development.",
  url: "https://portfolio-nu-two.vercel.app",
} as const;

export const navLinks = [
  { href: "/projects", label: "Projects", index: "01" },
  { href: "/timeline", label: "Timeline", index: "02" },
  { href: "/skills", label: "Skills", index: "03" },
  { href: "/experience", label: "Experience", index: "04" },
  { href: "/about", label: "About", index: "05" },
  { href: "/resume", label: "Resume", index: "06" },
  { href: "/contact", label: "Contact", index: "07" },
] as const;
