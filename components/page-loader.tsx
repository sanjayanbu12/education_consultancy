"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000) // 2 seconds loading time

        return () => clearTimeout(timer)
    }, [])

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black transition-opacity duration-500">
            <div className="relative">
                {/* Logo with professional animation */}
                <div className="animate-fade-in-scale">
                    <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd_ED_logo_final-removebg-preview-EmZWbBGyrR3ayEYVNsJmqvnvgjhtt3.png"
                        alt="AL-HUDA Educational Consultancy"
                        width={200}
                        height={200}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Loading indicator */}
                <div className="mt-8 flex justify-center">
                    <div className="flex space-x-2">
                        <div className="h-3 w-3 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]"></div>
                        <div className="h-3 w-3 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.15s]"></div>
                        <div className="h-3 w-3 animate-bounce rounded-full bg-blue-600"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
