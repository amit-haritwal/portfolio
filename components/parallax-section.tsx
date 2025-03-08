"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate transform based on direction
  let yTransform
  let xTransform

  switch (direction) {
    case "up":
      yTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
      break
    case "down":
      yTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
      break
    case "left":
      xTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
      break
    case "right":
      xTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
      break
  }

  const isHorizontal = direction === "left" || direction === "right"

  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <motion.div
        style={{
          y: yTransform,
          x: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

