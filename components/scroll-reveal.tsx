"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

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
  duration = 0.5,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: threshold, once })

  // Set initial animation values based on direction
  let initial = {}

  switch (direction) {
    case "up":
      initial = { y: 50, opacity: 0 }
      break
    case "down":
      initial = { y: -50, opacity: 0 }
      break
    case "left":
      initial = { x: 50, opacity: 0 }
      break
    case "right":
      initial = { x: -50, opacity: 0 }
      break
    case "none":
      initial = { opacity: 0 }
      break
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : initial}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

