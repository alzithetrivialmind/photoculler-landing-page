import { Check, X, Users } from "lucide-react"
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt'
import { useState, useEffect } from "react"

export function Pricing() {
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

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Simple Pricing</h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-lg">Start for free, upgrade for the pro workflow.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Tilt
                            tiltMaxAngleX={3}
                            tiltMaxAngleY={3}
                            scale={1.01}
                            transitionSpeed={2000}
                            className="h-full rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-8 flex flex-col hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                        >
                            <h3 className="text-2xl font-bold mb-2">Free</h3>
                            <div className="text-4xl font-bold mb-6 tracking-tighter">$0<span className="text-lg font-normal text-muted-foreground">/forever</span></div>
                            <p className="text-muted-foreground mb-8">The fastest way to clean up your gallery.</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    "Blazing Fast JPG/PNG Viewer",
                                    "Standard Zoom & Pan",
                                    "Flag (Pick) & Reject",
                                    "Star Ratings & Color Labels",
                                    "Manual Move/Copy"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="rounded-full bg-neutral-100 dark:bg-neutral-800 p-1">
                                            <Check className="h-3 w-3 text-neutral-900 dark:text-white" />
                                        </div>
                                        <span className="text-neutral-600 dark:text-neutral-300">{item}</span>
                                    </li>
                                ))}
                                <li className="flex items-center gap-3 opacity-50">
                                    <div className="rounded-full bg-neutral-100 dark:bg-neutral-800 p-1">
                                        <X className="h-3 w-3 text-neutral-500" />
                                    </div>
                                    <span className="text-neutral-500">No RAW Support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="rounded-full bg-neutral-100 dark:bg-neutral-800 p-1">
                                        <Check className="h-3 w-3 text-neutral-900 dark:text-white" />
                                    </div>
                                    <span className="text-neutral-600 dark:text-neutral-300">Max 3 Buckets</span>
                                </li>
                            </ul>
                            <div className="space-y-4">
                                <a href="#" className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-neutral-200 dark:border-neutral-800 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 h-12 px-8">
                                    Download Free
                                </a>
                                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-indigo-500/80 dark:text-indigo-400/80 uppercase tracking-wider">
                                    <Users className="h-3.5 w-3.5" />
                                    <span>{displayedDownloads.toLocaleString()}+ Downloaded</span>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Tilt
                            tiltMaxAngleX={3}
                            tiltMaxAngleY={3}
                            scale={1.01}
                            transitionSpeed={2000}
                            className="h-full rounded-3xl border-2 border-indigo-500 bg-white dark:bg-neutral-900/80 p-8 flex flex-col relative overflow-hidden shadow-2xl shadow-indigo-500/20"
                        >
                            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">POPULAR</div>
                            <h3 className="text-2xl font-bold mb-2">Pro</h3>
                            <div className="text-4xl font-bold mb-6 tracking-tighter">$29<span className="text-lg font-normal text-muted-foreground"> One-time investment</span></div>
                            <p className="text-muted-foreground mb-8">The ultimate workflow for pros.</p>
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
                                        <div className="rounded-full bg-indigo-100 dark:bg-indigo-500/20 p-1">
                                            <Check className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <span className="text-neutral-900 dark:text-white font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="https://gumroad.com" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 h-12 px-8 shadow-lg shadow-indigo-500/25">
                                Buy Now
                            </a>
                        </Tilt>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
