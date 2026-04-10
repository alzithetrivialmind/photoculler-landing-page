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
        description: "No subscriptions. No annual renewals. One purchase, lifetime access. While others charge $10/month or $139 upfront, SnapCuller Pro is just $29 — forever.",
        highlight: "$29 one-time",
    },
    {
        icon: Zap,
        title: "Built for Flow, Not Bloat",
        description: "SnapCuller does one thing: fast selection. No editing tools, no cloud sync, and no tedious catalog imports. Just instant previews that let you find your best work in seconds.",
        highlight: "Zero Import",
    },
    {
        icon: Sparkles,
        title: "Keyboard Mastery",
        description: "A refined workflow built for speed. Use custom keyboard shortcuts to rate and move files instantly. It's designed to become muscle memory, so you can cull without thinking.",
        highlight: "Muscle Memory",
    },
]

export function WhySwitch() {
    return (
        <section id="why-switch" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
                        Why <span className="text-primary">Switch</span> to SnapCuller?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                            className="p-5 rounded-xl border border-divider bg-card/50 dark:bg-neutral-900/30"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-bold text-foreground">{comp.name}</span>
                                <span className="text-xs font-bold px-2 py-1 rounded-full bg-muted text-muted-foreground">
                                    {comp.price}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
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
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="h-px w-12 bg-border" />
                        <ArrowRight className="h-5 w-5 text-primary" />
                        <span className="text-sm font-bold text-foreground uppercase tracking-wider">
                            SnapCuller's Approach
                        </span>
                        <ArrowRight className="h-5 w-5 text-primary rotate-180 hidden" />
                        <div className="h-px w-12 bg-border" />
                    </div>
                </motion.div>

                {/* SnapCuller Advantages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {advantages.map((adv, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative p-8 rounded-2xl border border-border glass hover:border-primary/30 transition-all duration-300 group"
                        >
                            {/* Highlight Badge */}
                            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-foreground text-background text-xs font-bold shadow-lg">
                                {adv.highlight}
                            </div>

                            <div className="mb-5 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                                <adv.icon className="h-6 w-6" />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {adv.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
