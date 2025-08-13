"use client"

import { useEffect, useState } from "react"

export default function LoadingIndicator() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show loading indicator briefly
    setIsVisible(true)
    const timer = setTimeout(() => setIsVisible(false), 300)
    
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-primary animate-pulse"
        style={{
          animation: 'loadingProgress 0.3s ease-out forwards'
        }}
      />
      <style jsx>{`
        @keyframes loadingProgress {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </div>
  )
}
