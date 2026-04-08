import { ArrowDown, Users, Monitor, Apple } from "lucide-react"
import { motion, type Variants, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { useState, useEffect } from "react"
import { detectOS, type OS } from "../utils/os"
import { Magnetic } from "./magnetic"

// Text Reveal Component
const Reveal = ({ children, delay = 0, className = "" }: { children: string, delay?: number, className?: string }) => {
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay }
        }
    }

    const child: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={`inline-block ${className}`}
        >
            {children.split("").map((char, index) => (
                <motion.span variants={child} key={index} className="inline-block whitespace-pre">
                    {char}
                </motion.span>
            ))}
        </motion.div>
    )
}


export function Hero() {
    const [stats, setStats] = useState<{ total_downloads: number, latest_version: string } | null>(null)
    const [os, setOS] = useState<OS>("win")

    useEffect(() => {
        setOS(detectOS())
        
        fetch('https://snap-culler-proxy.vercel.app/api/stats')
            .then(res => res.json())
            .then(data => {
                if (data && data.total_downloads !== undefined) {
                    setStats(data)
                }
            })
            .catch(err => console.error("Failed to fetch stats", err))
    }, [])

    const displayedDownloads = stats ? stats.total_downloads + 500 : 500 // Start with a base of 500 for social proof
    const versionLabel = stats?.latest_version ? `v${stats.latest_version}` : "v1.1.7"
    
    // Dynamic Download Logic
    const version = stats?.latest_version || "1.1.7"
    const platformName = os === 'mac' ? 'macOS' : 'Windows'
    const fileName = os === 'mac' 
        ? `SnapCuller-${version}.dmg` 
        : `SnapCuller-Setup-${version}.exe`
    const downloadUrl = `https://snap-culler-proxy.vercel.app/${fileName}`
    const PlatformIcon = os === 'mac' ? Apple : Monitor

    // Spotlight logic
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springX = useSpring(mouseX, { damping: 50, stiffness: 200 })
    const springY = useSpring(mouseY, { damping: 50, stiffness: 200 })

    const handleMouseMove = (e: React.MouseEvent) => {
        const { currentTarget, clientX, clientY } = e
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <section 
            onMouseMove={handleMouseMove}
            className="group/hero relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden pt-20"
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500 z-0"
                style={{
                    background: useMotionTemplate`radial-gradient(800px circle at ${springX}px ${springY}px, rgba(242,127,178,0.1), transparent 80%)`
                }}
            />
            <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <a
                        href="/releases"
                        className="inline-flex items-center rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl px-4 py-1.5 text-sm font-medium text-foreground dark:text-white mb-8 hover:opacity-80 transition-all border-b-primary shadow-sm dark:shadow-[0_0_20px_rgba(242,127,178,0.1)]"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse shadow-[0_0_8px_#f27fb2]"></span>
                        {versionLabel} Released
                    </a>
                </motion.div>

                <div className="mb-8 max-w-5xl">
                    <h1 className="text-5xl md:text-7xl lg:text-[100px] font-brand font-black tracking-tighter leading-[0.9] mb-4">
                        <span className="sr-only">SnapCuller — The Fastest Photo Culling Software</span>
                        <Reveal delay={0.2} className="text-foreground dark:text-white drop-shadow-2xl">
                            Cull Photos at
                        </Reveal>
                        <br className="hidden md:block" />
                        <Reveal delay={0.6} className="text-gradient">
                            Muscle Memory Speed
                        </Reveal>
                    </h1>
                </div>
 
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    The ultra-lightweight way to sort thousands of shots instantly. 
                    Zero import time, no-lag RAW previews, and a workflow designed to keep your hands on the keyboard.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-8 justify-center w-full sm:w-auto mt-4"
                >
                    <Magnetic strength={0.2}>
                        <a
                            href={downloadUrl}
                            title={`Download SnapCuller Photo Culling Software for ${platformName}`}
                            aria-label={`Download SnapCuller for ${platformName}`}
                            className="relative inline-flex h-16 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-transform hover:scale-105 active:scale-95 group shadow-[0_20px_40px_rgba(242,127,178,0.2)]"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f27fb2_0%,#445ca9_50%,#f27fb2_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-black px-10 py-1 text-base font-bold text-white backdrop-blur-3xl transition-colors gap-3 group-hover:bg-black/90">
                                <PlatformIcon className="h-6 w-6 text-primary" />
                                Download for {platformName}
                            </span>
                        </a>
                    </Magnetic>

                    <Magnetic strength={0.3}>
                        <a
                            href="#features"
                            className="inline-flex items-center justify-center h-16 px-12 rounded-2xl border border-black/5 dark:border-white/20 glass text-foreground dark:text-white text-base font-bold transition-all hover:scale-105 hover:bg-white/10 active:scale-95 shadow-xl"
                        >
                            Learn More
                        </a>
                    </Magnetic>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="mt-10 flex flex-col items-center gap-4"
                >
                    {displayedDownloads > 0 && (
                        <div className="flex items-center gap-2 text-sm font-bold text-primary bg-primary/10 px-5 py-2 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(242,127,178,0.1)]">
                            <Users className="h-4 w-4" />
                            <span>Trusted by {displayedDownloads.toLocaleString()}+ photographers</span>
                        </div>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 glass px-5 py-2 rounded-full border border-black/5 dark:border-white/5">
                        <span className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_5px_#f27fb2]"></span>
                        No subscriptions. Pro is just <span className="text-neutral-500 line-through decoration-primary/30 mx-1">$39</span> <span className="font-bold text-neutral-900 dark:text-white">$29 Lifetime</span>.
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-0 w-full flex justify-center"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown className="text-neutral-400 dark:text-neutral-600 transition-colors" />
                </motion.div>
            </motion.div>
        </section>
    )
}
