// Shared between Header and Footer so the two nav lists can't drift apart.
export type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/vision", label: "Vision" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/culture", label: "Our Culture" },
      { href: "/careers", label: "Careers" },
      { href: "/partnership", label: "Partnership" },
    ],
  },
  { href: "/services", label: "Services" },
  { href: "/expertise", label: "Expertise" },
  { href: "/contact", label: "Contact" },
];
