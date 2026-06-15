"use client"

import { cn } from "@/lib/utils"

interface ToggleSwitchProps {
  isActive: boolean
  onToggle: () => void
  className?: string
  highContrast?: boolean
}

export function ToggleSwitch({ isActive, onToggle, className, highContrast = false }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isActive}
      onClick={onToggle}
      className={cn(
        "relative h-[26px] w-[44px] rounded-full transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isActive ? "bg-[#0A0A0A]" : "bg-[#E9E9EA]",
        !isActive && highContrast && "ring-2 ring-black",
        className
      )}
    >
      <span
        className={cn(
          "absolute top-[2px] left-[2px] h-[22px] w-[22px] rounded-full bg-white shadow-[0_3px_7px_rgba(0,0,0,0.12)] transition-all duration-200 ease-in-out",
          isActive ? "translate-x-[18px]" : "translate-x-0",
          !isActive && highContrast && "border-2 border-black"
        )}
      />
      <span className="sr-only">{isActive ? "Active" : "Inactive"}</span>
    </button>
  )
}
