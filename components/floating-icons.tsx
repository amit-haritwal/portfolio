"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Globe, Server, Cpu, Cloud, Layers, Smartphone } from "lucide-react"

interface FloatingIconsProps {
  count?: number
  className?: string
}

export default function FloatingIcons({ count = 8, className = "" }: FloatingIconsProps) {
  const [icons, setIcons] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const iconComponents = [
      <Code key="code" />,
      <Database key="database" />,
      <Globe key="globe" />,
      <Server key="server" />,
      <Cpu key="cpu" />,
      <Cloud key="cloud" />,
      <Layers key="layers" />,
      <Smartphone key="smartphone" />,
    ]

    const generatedIcons = Array.from({ length: count }).map((_, index) => {
      const randomIcon = iconComponents[Math.floor(Math.random() * iconComponents.length)]
      const size = Math.random() * 20 + 20 // 20-40px
      const duration = Math.random() * 20 + 10 // 10-30s
      const delay = Math.random() * 5

      return (
        <motion.div
          key={index}
          className="absolute text-primary/30"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            scale: [0, 1, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ width: size, height: size }}
        >
          {randomIcon}
        </motion.div>
      )
    })

    setIcons(generatedIcons)
  }, [count])

  return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>{icons}</div>
}

