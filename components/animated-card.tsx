"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useRef } from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: "tilt" | "scale" | "glow" | "none"
}

export default function AnimatedCard({ children, className = "", hoverEffect = "tilt" }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || hoverEffect !== "tilt") return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({
      x: (x / rect.width) * 2 - 1,
      y: (y / rect.height) * 2 - 1,
    })
  }

  const variants = {
    initial: { scale: 1 },
    hover: {
      scale: hoverEffect === "scale" ? 1.05 : 1,
      boxShadow: hoverEffect === "glow" ? "0 0 25px rgba(120, 120, 255, 0.5)" : "none",
    },
  }

  return (
    <motion.div
      ref={cardRef}
      className={className}
      initial="initial"
      whileHover="hover"
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={
        hoverEffect === "tilt" && isHovered
          ? {
              transform: `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)`,
            }
          : {}
      }
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

