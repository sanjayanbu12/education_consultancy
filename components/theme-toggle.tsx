"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#0E74D2]/10 to-[#0E74D2]/5 dark:from-blue-500/20 dark:to-purple-500/10 hover:from-[#0E74D2]/20 hover:to-[#0E74D2]/10 dark:hover:from-blue-500/30 dark:hover:to-purple-500/20 transition-all duration-300 flex items-center justify-center group border border-[#0E74D2]/20 dark:border-blue-400/30"
            aria-label="Toggle theme"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {/* Sun Icon - visible in dark mode */}
            <Sun className="absolute w-4 h-4 text-[#0E74D2] dark:text-yellow-400 transition-all duration-300 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />

            {/* Moon Icon - visible in light mode */}
            <Moon className="absolute w-4 h-4 text-[#0E74D2] dark:text-blue-300 transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-[#0E74D2]/0 dark:bg-blue-400/0 group-hover:bg-[#0E74D2]/10 dark:group-hover:bg-blue-400/20 transition-all duration-300" />
        </button>
    )
}
