import { socialLinks } from "./data";

export function SocialLinks() {
  return (
    <div className="hidden md:flex items-center gap-1">
      {socialLinks.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="p-2 rounded-lg text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-white/[0.06]"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
