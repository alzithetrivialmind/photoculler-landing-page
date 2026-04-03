import { Download, ArrowDown, Users } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import { useState, useEffect } from "react"

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

    useEffect(() => {
        fetch('https://snap-culler-proxy.vercel.app/api/stats')
            .then(res => res.json())
            .then(data => {
                if (data && data.total_downloads !== undefined) {
                    setStats(data)
                }
            })
            .catch(err => console.error("Failed to fetch stats", err))
    }, [])

    const displayedDownloads = stats ? stats.total_downloads + 120 : 120
    const versionLabel = stats?.latest_version ? `v${stats.latest_version}` : "v1.1.5"

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20">
            <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a
                        href="/releases"
                        className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-1 text-sm text-neutral-900 dark:text-neutral-100 mb-8 backdrop-blur-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                        {versionLabel} Now Available
                    </a>
                </motion.div>

                <div className="mb-8 max-w-5xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-2">
                        <span className="sr-only">SnapCuller — The Fastest Photo Culling Software</span>
                        <Reveal delay={0.2} className="bg-gradient-to-b from-neutral-900 via-neutral-700 to-neutral-400 dark:from-white dark:via-neutral-200 dark:to-neutral-500 bg-clip-text text-transparent">
                            Cull Photos at
                        </Reveal>
                        <br className="hidden md:block" />
                        <Reveal delay={0.6} className="text-indigo-500 dark:text-indigo-400">
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
                    className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto"
                >
                    <a
                        href="#pricing"
                        title="Download SnapCuller Photo Culling Software for Windows"
                        aria-label="Download SnapCuller for Windows"
                        className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform hover:scale-105"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-neutral-900 transition-colors gap-2">
                            <Download className="h-5 w-5" />
                            Download for Windows
                        </span>
                    </a>

                    <a
                        href="#features"
                        className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-neutral-200 dark:border-neutral-800 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-900 dark:text-white text-sm font-medium transition-all hover:scale-105"
                    >
                        Learn More
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="mt-8 flex flex-col items-center gap-3"
                >
                    {displayedDownloads > 0 && (
                        <div className="flex items-center gap-2 text-sm font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/20 shadow-sm shadow-indigo-500/10">
                            <Users className="h-4 w-4" />
                            <span>Trusted by {displayedDownloads.toLocaleString()}+ photographers</span>
                        </div>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900/50 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        No subscriptions. Pro is just <span className="font-bold text-neutral-900 dark:text-white">$29 Lifetime</span>.
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
