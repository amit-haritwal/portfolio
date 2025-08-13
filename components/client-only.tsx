"use client"

import { useEffect, useState } from "react"

interface ClientOnlyProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  suppressInitialRender?: boolean
}

export default function ClientOnly({ 
  children, 
  fallback = null, 
  suppressInitialRender = false 
}: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  // If suppressInitialRender is true, don't render anything during SSR
  if (!hasMounted) {
    return suppressInitialRender ? null : <>{fallback}</>
  }

  return <>{children}</>
}
