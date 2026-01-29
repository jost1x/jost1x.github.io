import { Github, Linkedin } from "lucide-react";

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
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
