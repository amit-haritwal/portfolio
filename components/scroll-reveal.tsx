"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useHasMounted } from "@/hooks/use-hydration"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.4, // Slightly increased for smoother animations
  threshold = 0.05, // Reduced from 0.1 to trigger earlier
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: threshold, once })
  const hasMounted = useHasMounted()

  // Don't animate until mounted to prevent hydration issues
  if (!hasMounted) {
    return <div className={className}>{children}</div>
  }

  // Set initial animation values based on direction
  let initial = {}

  switch (direction) {
    case "up":
      initial = { y: 20, opacity: 0.8 } // More visible initially
      break
    case "down":
      initial = { y: -20, opacity: 0.8 } 
      break
    case "left":
      initial = { x: 20, opacity: 0.8 } 
      break
    case "right":
      initial = { x: -20, opacity: 0.8 } 
      break
    case "none":
      initial = { opacity: 0.8 } 
      break
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : initial}
      transition={{ 
        duration, 
        delay, 
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

