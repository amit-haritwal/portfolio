"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TextAnimationProps {
  text: string
  className?: string
  delay?: number
  type?: "typing" | "reveal" | "wave"
}

export default function TextAnimation({ text, className = "", delay = 0, type = "reveal" }: TextAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (type === "typing") {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, 100)

        return () => clearTimeout(timeout)
      }
    }
  }, [currentIndex, text, type])

  if (type === "typing") {
    return (
      <div className={className}>
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          className="inline-block w-[2px] h-[1em] bg-current ml-1"
        />
      </div>
    )
  }

  if (type === "wave") {
    return (
      <div className={className}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              delay: delay + index * 0.05,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    )
  }

  // Default reveal animation
  return (
    <div className={`${className} overflow-hidden`}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: delay + wordIndex * 0.1 + charIndex * 0.03,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  )
}

