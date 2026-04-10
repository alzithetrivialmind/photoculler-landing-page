import { Check, X, Users, Monitor, Apple } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { detectOS, type OS } from "../utils/os"

export function Pricing() {
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

    const displayedDownloads = stats ? stats.total_downloads + 500 : 500
    const version = stats?.latest_version || "1.1.5"
    const platformName = os === 'mac' ? 'macOS' : 'Windows'
    const fileName = os === 'mac' 
        ? `SnapCuller-${version}.dmg` 
        : `SnapCuller-Setup-${version}.exe`
    const downloadUrl = `https://snap-culler-proxy.vercel.app/${fileName}`
    const PlatformIcon = os === 'mac' ? Apple : Monitor

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-brand font-black mb-6 tracking-tighter text-foreground">Simple Pricing</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg font-medium">Start for free, upgrade for the pro workflow.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="h-full rounded-[2rem] glass p-8 flex flex-col hover:border-white/40 transition-all duration-500">
                            <h3 className="text-2xl font-brand font-bold mb-2 text-foreground/90">Free</h3>
                            <div className="text-4xl font-brand font-bold mb-6 tracking-tighter text-foreground">$0<span className="text-lg font-normal text-neutral-400">/forever</span></div>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 font-medium">The fastest way to clean up your gallery.</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    "Blazing Fast JPG/PNG Viewer",
                                    "Standard Zoom & Pan",
                                    "Flag (Pick) & Reject",
                                    "Star Ratings & Color Labels",
                                    "Manual Move/Copy"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="rounded-full bg-primary/10 p-1">
                                            <Check className="h-3 w-3 text-primary" />
                                        </div>
                                        <span className="text-muted-foreground font-medium">{item}</span>
                                    </li>
                                ))}
                                <li className="flex items-center gap-3 opacity-30">
                                    <div className="rounded-full bg-muted p-1">
                                        <X className="h-3 w-3 text-muted-foreground" />
                                    </div>
                                    <span className="text-muted-foreground">No RAW Support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="rounded-full bg-muted p-1">
                                        <Check className="h-3 w-3 text-muted-foreground" />
                                    </div>
                                    <span className="text-muted-foreground">Max 3 Buckets</span>
                                </li>
                            </ul>
                            <div className="space-y-4">
                                <a 
                                    href={downloadUrl} 
                                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-all btn-secondary h-12 px-8 gap-2"
                                >
                                    <PlatformIcon className="h-4 w-4 text-foreground" />
                                    Download for {platformName}
                                </a>
                                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground/40 uppercase tracking-wider">
                                    <Users className="h-3.5 w-3.5" />
                                    <span>{displayedDownloads.toLocaleString()}+ Downloaded</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="h-full rounded-[2rem] border border-primary/20 glass-premium p-8 flex flex-col relative overflow-hidden shadow-2xl group">
                            {/* Animated Background Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] group-hover:bg-primary/30 transition-all duration-700 pointer-events-none" />
                            
                            <motion.div 
                                animate={{ y: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-0 right-8 bg-primary text-primary-foreground text-[10px] font-black px-4 py-1.5 rounded-b-xl tracking-widest uppercase shadow-[0_5px_15px_rgba(185,124,221,0.2)] z-20"
                            >
                                BEST VALUE
                            </motion.div>
                            <h3 className="text-2xl font-brand font-bold mb-2 text-foreground">Pro</h3>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-4xl font-brand font-bold tracking-tighter text-foreground font-brand">$29</span>
                                <span className="text-xl text-neutral-400 dark:text-neutral-500 line-through font-medium decoration-primary/30">$39</span>
                                <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-bold border border-primary/20 uppercase tracking-wider ml-1">Save 25%</span>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400 -mt-4 mb-8 text-sm font-medium">One-time payment. Lifetime access.</p>
                            <p className="text-neutral-900 dark:text-neutral-200 mb-8 font-bold">The ultimate workflow for pros.</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    "Native RAW + HEIC Support",
                                    "Advanced EXIF Filtering & Grouping",
                                    "AI-Powered Face Detection",
                                    "Unlimited Workflow Presets",
                                    "Zoom Sync & Focus Peaking",
                                    "XMP Sidecar Export (Lightroom)",
                                    "Batch Rename & Auto-Advance",
                                    "Unlimited Custom Buckets"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="rounded-full bg-primary/10 p-1 font-bold">
                                            <Check className="h-3 w-3 text-primary" />
                                        </div>
                                        <span className="text-foreground font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a 
                                href="https://gumroad.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-bold transition-all hover:scale-[1.02] active:scale-95 btn-primary h-14 px-8 shadow-2xl"
                            >
                                Buy SnapCuller Pro
                            </a>
                            <p className="text-[10px] text-center mt-4 text-neutral-500 font-bold uppercase tracking-widest opacity-60">
                                🛡️ 14-Day Money Back Guarantee
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
