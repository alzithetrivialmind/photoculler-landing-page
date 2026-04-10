import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  className?: string
}

export function SectionReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.6,
  className = ""
}: SectionRevealProps) {
  const getInitial = () => {
    switch (direction) {
      case "up": return { y: distance, opacity: 0 }
      case "down": return { y: -distance, opacity: 0 }
      case "left": return { x: distance, opacity: 0 }
      case "right": return { x: -distance, opacity: 0 }
      default: return { opacity: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // Custom ease-premium
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
