import { cn } from "@/lib/utils"
import { navItems, socialLinks } from "./data"
import { NavItem } from "./NavItem"

interface MobileMenuProps {
  isOpen: boolean
  activeItem: string
  onClose: () => void
  onNavigate: (id: string) => void
}

export function MobileMenu({
  isOpen,
  activeItem,
  onClose,
  onNavigate,
}: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 md:hidden transition-all duration-500",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={cn(
          "absolute top-0 right-0 h-full w-72 bg-linear-to-b from-[oklch(0.12_0.05_250)] to-[oklch(0.08_0.03_250)] border-l border-white/6 p-8 pt-24 transition-transform duration-500",
          isOpen ? "translate-x-0" : "translate-x-full"
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
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-white/6 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
