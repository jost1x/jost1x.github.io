import { cn } from "@/lib/utils"

interface LogoProps {
  isScrolled: boolean
  onClick: () => void
}

export function Logo({ isScrolled, onClick }: LogoProps) {
  return (
    <a onClick={onClick} className="flex items-center gap-3 group cursor-pointer">
      <div
        className={cn(
          "w-9 h-9 rounded-lg bg-linear-to-br from-primary/90 to-accent/80 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-lg border border-white/10",
          isScrolled && "w-8 h-8"
        )}
      >
        <span className="text-primary-foreground font-semibold text-sm">
          CM
        </span>
      </div>

      <div
        className={cn(
          "hidden sm:block transition-all duration-300",
          isScrolled ? "opacity-0 -translate-x-2 w-0" : "opacity-100"
        )}
      >
        <h1 className="text-foreground font-medium text-sm">
          Charlie Melchiori
        </h1>
        <p className="text-muted-foreground text-xs">
          Ingeniero Civil Electrónico
        </p>
      </div>
    </a>
  )
}
