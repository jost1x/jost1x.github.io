"use client"

import { DesktopNav } from "@/components/navbar/DesktopNav"
import { Logo } from "@/components/navbar/Logo"
import { MobileMenu } from "@/components/navbar/MobileMenu"
import { MobileMenuButton } from "@/components/navbar/MobileMenuButton"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function Navbar() {
  const [activeItem, setActiveItem] = useState("inicio")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigate = (id: string) => {
    setActiveItem(id)
    setIsMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3 bg-linear-to-r from-[oklch(0.10_0.04_250/0.9)] to-[oklch(0.08_0.035_250/0.85)] backdrop-blur-xl border-b border-white/6"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <Logo isScrolled={isScrolled} onClick={() => handleNavigate("inicio")} />
          <DesktopNav
            activeItem={activeItem}
            isScrolled={isScrolled}
            onNavigate={handleNavigate}
          />
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen((v) => !v)}
          />
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeItem={activeItem}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavigate}
      />
    </>
  )
}
