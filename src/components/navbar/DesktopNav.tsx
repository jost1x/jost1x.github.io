'use client';

import { cn } from "@/lib/utils";
import { navItems } from "./data";
import { NavItem } from "./NavItem";

interface DesktopNavProps {
  activeItem: string
  isScrolled: boolean
  onNavigate: (id: string) => void
}

export function DesktopNav({ activeItem, isScrolled, onNavigate }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center">
      <div
        className={cn(
          "flex items-center gap-1 transition-all duration-500",
          isScrolled && "bg-white/4 rounded-full px-2 py-1.5 border border-white/6"
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
  )
}
