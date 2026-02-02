import { Github, Linkedin } from "@lucide/astro";

export const navItems = [
  { id: "index", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export type SocialLinkIcon = "github" | "linkedin"| "gitlab";

export const iconMap = {
  github: Github,
  linkedin: Linkedin,
  gitlab: Linkedin,
};

export interface SocialLink {
  href: string;
  label: string;
  icon: SocialLinkIcon;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/jost1x",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://linkedin.com/in/ch-melchiori",
    label: "LinkedIn",
    icon: "linkedin",
  },  {
    href: "https://gitlab.com/jost1x",
    label: "GitLab",
    icon: "gitlab",
  },
];
