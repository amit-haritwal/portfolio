"use client"

import { useEffect, useState } from "react"

export default function NoFlashWrapper({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Ensure DOM is ready and prevent initial flash
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 50) // Very brief delay to prevent flash

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.1s ease-out',
        visibility: isReady ? 'visible' : 'hidden'
      }}
    >
      {children}
    </div>
  )
}
