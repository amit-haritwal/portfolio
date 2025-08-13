"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Show loader for a brief moment during navigation
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 100)
    
    return () => clearTimeout(timer)
  }, [pathname])

  if (!isLoading) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
      style={{
        pointerEvents: 'none',
        transition: 'opacity 0.1s ease-out'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    </div>
  )
}
