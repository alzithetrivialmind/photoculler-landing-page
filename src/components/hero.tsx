import { ArrowDown, Apple, Monitor, Zap, Users, Shield } from "lucide-react"
import { motion, type Variants, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { useState, useEffect } from "react"
import { detectOS, type OS } from "../utils/os"
import { Magnetic } from "./magnetic"
import { HUDDecoration, HUDCrosshair } from "./hud-elements"

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
            className="group/hero relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden pt-20 bg-dot-hud"
        >
            <HUDDecoration />
            
            {/* Minimal Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500 z-1"
                style={{
                    background: useMotionTemplate`radial-gradient(800px circle at ${springX}px ${springY}px, rgba(255,255,255,0.03), transparent 80%)`
                }}
            />


            
            <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <a
                        href="/releases"
                        className="inline-flex items-center rounded-full border border-primary/60 bg-card px-3 py-1 text-[11px] font-black uppercase tracking-wider text-primary mb-8 hover:bg-primary/10 transition-all shadow-[0_0_15px_rgba(185,124,221,0.1)] group font-urbanist"
                    >
                        <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-2 animate-pulse shadow-[0_0_8px_rgba(185,124,221,0.8)]"></span>
                        {versionLabel} Released
                        <Zap className="w-3 h-3 ml-1.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </motion.div>

                <div className="mb-10 max-w-5xl relative">
                    <HUDCrosshair className="-top-12 -left-12 opacity-20" />
                    <HUDCrosshair className="-bottom-12 -right-12 rotate-180 opacity-20" />
                    
                    <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tightest leading-[0.85] mb-6">
                        <span className="sr-only">SnapCuller — The Fastest Photo Culling Software</span>
                        <Reveal delay={0.2} className="text-foreground inline-block">
                            Cull Photos at
                        </Reveal>
                        <br className="hidden md:block" />
                        <Reveal delay={0.6} className="text-foreground dark:text-white inline-block whitespace-nowrap">
                            Muscle Memory Speed
                        </Reveal>
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mb-14 leading-relaxed font-medium"
                >
                    The ultra-lightweight engine to sort thousands of shots instantly. 
                    No import lag, ultra-fast viewing, and a workflow that keeps your hands on the keyboard.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto"
                >
                    <Magnetic strength={0.2}>
                        <a
                            href={downloadUrl}
                            className="relative inline-flex h-16 items-center justify-center rounded-2xl btn-primary px-10 py-1 text-base font-bold transition-all hover:scale-105 active:scale-95 group shadow-2xl"
                        >
                            <PlatformIcon className="h-6 w-6 mr-3" />
                            Download for {platformName}
                        </a>
                    </Magnetic>

                    <Magnetic strength={0.3}>
                        <a
                            href="#features"
                            className="inline-flex items-center justify-center h-16 px-12 rounded-2xl btn-secondary text-base font-bold transition-all hover:scale-105 active:scale-95 group"
                        >
                            Explore Features
                            <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </Magnetic>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="mt-10 mb-20 flex flex-col items-center gap-4"
                >
                    <div className="flex items-center gap-4">
                        {displayedDownloads > 0 && (
                            <div className="flex items-center gap-2 text-sm font-bold text-primary bg-primary/10 px-5 py-2 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(185,124,221,0.1)] font-urbanist">
                                <Users className="h-4 w-4" />
                                <span>Trusted by {displayedDownloads.toLocaleString()}+ photographers</span>
                            </div>
                        )}
                        <div className="flex items-center gap-2 text-sm font-bold text-secondary bg-secondary/10 px-5 py-2 rounded-full border border-secondary/20 shadow-[0_0_15px_rgba(72,105,207,0.1)] font-urbanist">
                            <Shield className="h-4 w-4" />
                            <span>Privacy First. No Cloud.</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm font-bold glass px-6 py-2.5 rounded-full border border-primary/30 shadow-[0_0_20px_rgba(185,124,221,0.1)] group transition-all hover:border-primary/50">
                        <span className="text-muted-foreground font-medium">No subscriptions. Pro is just</span>
                        <span className="text-muted-foreground/50 line-through text-xs tracking-tight">$39</span>
                        <span className="text-2xl text-foreground dark:text-white font-black drop-shadow-[0_0_10px_rgba(185,124,221,0.5)]">$29</span>
                        <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-md tracking-widest uppercase font-black border border-primary/30">Lifetime</span>
                    </div>
                </motion.div>
            </div>





            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-0 w-full flex justify-center"
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

