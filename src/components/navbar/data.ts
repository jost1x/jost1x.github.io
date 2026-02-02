import { Github, Linkedin } from "lucide-react";

export const navItems = [
  { id: "index", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export interface SocialLink {
  href: string;
  label: string;
  Icon: React.ComponentType<{ size: number }>;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/jost1x",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "https://linkedin.com/in/ch-melchiori",
    label: "LinkedIn",
    Icon: Linkedin,
  },
];
