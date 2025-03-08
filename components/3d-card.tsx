"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface ThreeDCardProps {
  children: React.ReactNode
  className?: string
  backgroundImage?: string
  glareEnabled?: boolean
}

export default function ThreeDCard({
  children,
  className = "",
  backgroundImage,
  glareEnabled = true,
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for tracking mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse tracking with springs
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig)

  // Glare effect
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-20%", "120%"]), springConfig)
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["-20%", "120%"]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate normalized mouse position (-0.5 to 0.5)
    const normalizedX = (e.clientX - centerX) / rect.width
    const normalizedY = (e.clientY - centerY) / rect.height

    mouseX.set(normalizedX)
    mouseY.set(normalizedY)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      onMouseMove={handleMouseMove}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {children}

      {glareEnabled && isHovered && (
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background: "linear-gradient(120deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",
            top: glareY,
            left: glareX,
            transform: "translateZ(1px)",
            mixBlendMode: "overlay",
          }}
        />
      )}
    </motion.div>
  )
}

