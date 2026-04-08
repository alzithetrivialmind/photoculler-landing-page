import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 200 }
    const x = useSpring(cursorX, springConfig)
    const y = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const isClickable = 
                target.tagName.toLowerCase() === 'button' || 
                target.tagName.toLowerCase() === 'a' || 
                target.closest('button') || 
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer'
            
            setIsHovered(!!isClickable)
        }

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mouseover", handleHover)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mouseover", handleHover)
        }
    }, [cursorX, cursorY])

    return (
        <>
            <style>{`
                body, a, button {
                    cursor: none !important;
                }
                @media (max-width: 1024px) {
                    .custom-cursor { display: none !important; }
                    body, a, button { cursor: auto !important; }
                }
            `}</style>
            <motion.div
                className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center"
                style={{
                    x: x,
                    y: y,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovered ? 2 : 1,
                    backgroundColor: isHovered ? "rgba(242, 127, 178, 0.2)" : "rgba(242, 127, 178, 0)",
                    borderWidth: isHovered ? "1px" : "2px"
                }}
                transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
            >
                <div className="w-1 h-1 bg-primary rounded-full" />
            </motion.div>
        </>
    )
}
