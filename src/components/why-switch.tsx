import { motion } from "framer-motion"
import { DollarSign, Zap, Sparkles, ArrowRight } from "lucide-react"

const competitors = [
    {
        name: "Photo Mechanic",
        price: "$139",
        painPoint: "Powerful but expensive, with a dated interface from the 2000s.",
    },
    {
        name: "Adobe Lightroom",
        price: "$10/mo",
        painPoint: "Bloated with editing tools you don't need just to cull photos.",
    },
    {
        name: "FastRawViewer",
        price: "$20",
        painPoint: "Technical but no culling buckets, no XMP export, no modern UI.",
    },
]

const advantages = [
    {
        icon: DollarSign,
        title: "Pay Once, Own Forever",
        description: "No subscriptions. No annual renewals. One purchase, lifetime access. While others charge $10/month or $139 upfront, PhotoCuller Pro is just $29 — forever.",
        highlight: "$29 one-time",
    },
    {
        icon: Zap,
        title: "Built for Speed, Not Bloat",
        description: "PhotoCuller does one thing and does it exceptionally well: culling. No editing tools, no cloud sync, no catalog import. Just blazing-fast photo selection with native RAW preview.",
        highlight: "< 50ms load",
    },
    {
        icon: Sparkles,
        title: "Modern Experience",
        description: "A clean, dark UI built with modern tech. Custom keyboard shortcuts, smooth animations, drag & drop, and an intuitive workflow that feels like it belongs in 2025 — not 2005.",
        highlight: "2025 Design",
    },
]

export function WhySwitch() {
    return (
        <section id="why-switch" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
                        Why <span className="text-indigo-500 dark:text-indigo-400">Switch</span> to PhotoCuller?
                    </h2>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
                        We respect the tools that came before us. But photographers deserve better.
                    </p>
                </motion.div>

                {/* Competitor Pain Points */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
                    {competitors.map((comp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-bold text-neutral-900 dark:text-white">{comp.name}</span>
                                <span className="text-xs font-bold px-2 py-1 rounded-full bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400">
                                    {comp.price}
                                </span>
                            </div>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                {comp.painPoint}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Arrow transition */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-16"
                >
                    <div className="flex items-center gap-3 text-neutral-400 dark:text-neutral-600">
                        <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
                        <ArrowRight className="h-5 w-5 text-indigo-500" />
                        <span className="text-sm font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
                            PhotoCuller's Approach
                        </span>
                        <ArrowRight className="h-5 w-5 text-indigo-500 rotate-180 hidden" />
                        <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
                    </div>
                </motion.div>

                {/* PhotoCuller Advantages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {advantages.map((adv, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative p-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-500/5 to-transparent dark:from-indigo-500/10 dark:to-transparent hover:border-indigo-500/40 transition-all duration-300 group"
                        >
                            {/* Highlight Badge */}
                            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/25">
                                {adv.highlight}
                            </div>

                            <div className="mb-5 inline-flex p-3 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                                <adv.icon className="h-6 w-6" />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-sm">
                                {adv.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
