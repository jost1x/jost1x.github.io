import { cn } from "@/lib/utils"

interface NavItemProps {
  label: string
  isActive: boolean
  onClick: () => void
  variant?: "desktop" | "mobile"
}

export function NavItem({
  label,
  isActive,
  onClick,
  variant = "desktop",
}: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative font-medium transition-all duration-300",
        variant === "desktop" &&
          "px-4 py-2 text-[13px] rounded-full",
        variant === "mobile" &&
          "px-4 py-3 text-sm rounded-xl text-left",
        isActive
          ? "text-primary bg-white/8"
          : "text-muted-foreground hover:text-foreground hover:bg-white/4"
      )}
    >
      {label}
    </button>
  )
}
