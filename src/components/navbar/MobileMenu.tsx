"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { navItems, socialLinks } from "./data"
import { NavItem } from "./NavItem"

interface MobileMenuProps {
  isOpen: boolean
  activeItem: string
  onNavigate: (id: string) => void
  onClose: () => void
}

export function MobileMenu({
  isOpen,
  activeItem,
  onNavigate,
  onClose,
}: MobileMenuProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-[100dvh] w-72 bg-gradient-to-b from-[oklch(0.12_0.05_250)] to-[oklch(0.08_0.03_250)] border-l border-white/6 p-8 pt-24 z-[101] md:hidden overflow-y-auto transition-transform duration-300 ease-out",
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
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-white/6 transition-all"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </>,
    document.body
  )
}
