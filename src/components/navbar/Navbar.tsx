"use client"

import { MobileMenuButton } from "@/components/navbar/MobileMenuButton"
import { Navigation } from "@/components/navbar/Navigation"
import { SocialLinks } from "@/components/navbar/SocialLinks"
import { cn } from "@/lib/utils"
import { useEffect, useState, type JSX } from "react"

export function Navbar(): JSX.Element {
  const [activeItem, setActiveItem] = useState<string>("inicio")
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigate = (id: string): void => {
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
          <Navigation
            activeItem={activeItem}
            isScrolled={isScrolled}
            isMobileMenuOpen={isMobileMenuOpen}
            onNavigate={handleNavigate}
            onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
          />
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen((v) => !v)}
          />
          <SocialLinks />
        </div>
      </header>
    </>
  )
}
