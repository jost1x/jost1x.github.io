import { cn } from "@/lib/utils";
import type { JSX } from "react";
import { navItems, socialLinks } from "./data";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";

interface NavigationProps {
  activeItem: string;
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  onNavigate: (id: string) => void;
  onCloseMobileMenu: () => void;
}

export function Navigation({
  activeItem,
  isScrolled,
  isMobileMenuOpen,
  onNavigate,
  onCloseMobileMenu,
}: NavigationProps): JSX.Element {
  return (
    <>
      <Logo isScrolled={isScrolled} onClick={() => onNavigate("inicio")} />

      <nav className="hidden md:flex items-center">
        <div
          className={cn(
            "flex items-center gap-1 transition-all duration-500",
            isScrolled &&
              "bg-white/4 rounded-full px-2 py-1.5 border border-white/6",
          )}
        >
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              label={item.label}
              isActive={activeItem === item.id}
              onClick={() => onNavigate(item.id)}
            />
          ))}
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onCloseMobileMenu}
        />

        <div
          className={cn(
            "absolute top-0 right-0 h-full w-72 bg-linear-to-b from-[oklch(0.12_0.05_250)] to-[oklch(0.08_0.03_250)] border-l border-white/6 p-8 pt-24 transition-transform duration-500",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                label={item.label}
                variant="mobile"
                isActive={activeItem === item.id}
                onClick={() => onNavigate(item.id)}
              />
            ))}
          </nav>

          <div className="flex gap-2 mt-8 pt-8 border-t border-white/6">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-white/6 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
