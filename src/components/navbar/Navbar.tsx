"use client"

import { DesktopNav } from "@/components/navbar/DesktopNav"
import { Logo } from "@/components/navbar/Logo"
import { MobileMenu } from "@/components/navbar/MobileMenu"
import { MobileMenuButton } from "@/components/navbar/MobileMenuButton"
import { SocialLinks } from "@/components/navbar/SocialLinks"
import { cn } from "@/lib/utils"
import { useCallback, useEffect, useState, type JSX } from "react"

export function Navbar(): JSX.Element {
  const [activeItem, setActiveItem] = useState<string>("inicio")
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleNavigate = useCallback((id: string): void => {
    setActiveItem(id)
    setIsMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const handleToggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((v) => !v)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3 bg-gradient-to-r from-[oklch(0.10_0.04_250/0.9)] to-[oklch(0.08_0.035_250/0.85)] backdrop-blur-xl border-b border-white/6"
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

          <div className="flex items-center gap-2">
            <SocialLinks />
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onToggle={handleToggleMobileMenu}
            />
          </div>
        </div>
      </header>

      {/* Mobile menu rendered via portal outside the header */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeItem={activeItem}
        onNavigate={handleNavigate}
        onClose={handleCloseMobileMenu}
      />
    </>
  )
}
