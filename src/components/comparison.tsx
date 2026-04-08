import { Check, Minus } from "lucide-react"
import { motion } from "framer-motion"

type FeatureValue = boolean | string

interface ComparisonFeature {
    category: string
    features: {
        name: string
        free: FeatureValue
        pro: FeatureValue
    }[]
}

const comparison: ComparisonFeature[] = [
    {
        category: "Image Viewing",
        features: [
            { name: "JPG, PNG, WebP Support", free: true, pro: true },
            { name: "RAW & HEIC Support (All Manufacturers)", free: false, pro: true },
            { name: "Instant Embedded Preview Extraction", free: false, pro: true },
            { name: "Smart Prefetching (Next/Prev)", free: true, pro: true },
            { name: "Zoom & Pan (up to 5×)", free: true, pro: true },
        ]
    },
    {
        category: "Workflow Speed",
        features: [
            { name: "Zero Import Time (Direct Access)", free: true, pro: true },
            { name: "Muscle Memory Shortcuts (1-key actions)", free: true, pro: true },
            { name: "Dynamic Workflow Presets (Project Identities)", free: "1 Fixed Profile", pro: "Unlimited" },
            { name: "Memory Management (10,000+ photos)", free: true, pro: true },
            { name: "Safety Net (Ctrl+Z Undo System)", free: true, pro: true },
            { name: "Auto-Advance after Action", free: false, pro: true },
        ]
    },
    {
        category: "Professional Tools",
        features: [
            { name: "Focus Peaking (Sharpness Check)", free: false, pro: true },
            { name: "AI Face Detection (Sharpness Check)", free: false, pro: true },
            { name: "Exposure Warnings (Clipping)", free: false, pro: true },
            { name: "Compare View (Side-by-Side)", free: false, pro: true },
            { name: "Zoom Sync (Locked Pan/Zoom)", free: false, pro: true },
            { name: "Burst Stacking (Group similar shots)", free: false, pro: true },
        ]
    },
    {
        category: "Organization",
        features: [
            { name: "Custom Move/Copy Buckets", free: "Max 3", pro: "Unlimited" },
            { name: "Star Ratings & Color Labels", free: true, pro: true },
            { name: "Filter by Rating / Label", free: true, pro: true },
            { name: "Group By Camera/Lens/ISO", free: false, pro: true },
            { name: "Advanced EXIF Filter (Lens/ISO)", free: false, pro: true },
        ]
    },
    {
        category: "Metadata & Integration",
        features: [
            { name: "XMP Sidecar Export (Lightroom/C1)", free: false, pro: true },
            { name: "Batch Rename (Prefix + Sequential)", free: false, pro: true },
            { name: "External Editor Integration", free: false, pro: true },
            { name: "Full EXIF Data Panel", free: "Basic", pro: "Full" },
            { name: "100% Offline Performance", free: true, pro: true },
        ]
    },
]

function ValueCell({ value }: { value: FeatureValue }) {
    if (value === true) {
        return (
            <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-500/20">
                <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            </div>
        )
    }
    if (value === false) {
        return (
            <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800">
                <Minus className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-600" />
            </div>
        )
    }
    return (
        <span className="text-sm font-bold text-primary">{value}</span>
    )
}

export function Comparison() {
    return (
        <section id="comparison" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-brand font-black mb-6 tracking-tighter text-foreground text-center">
                        Free vs <span className="text-gradient">Pro</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-center">
                        A detailed breakdown of every feature across both plans.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto rounded-3xl glass-card overflow-hidden border-black/5 dark:border-white/10"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] sticky top-0 bg-white/80 dark:bg-black/40 backdrop-blur-3xl border-b border-black/5 dark:border-white/10 z-10 font-bold">
                        <div className="px-6 py-5 text-xs font-black text-neutral-500 uppercase tracking-widest font-brand">Feature</div>
                        <div className="px-4 py-5 text-center text-xs font-black text-neutral-500 uppercase tracking-widest font-brand">Free</div>
                        <div className="px-4 py-5 text-center text-xs font-black uppercase tracking-widest text-primary font-brand drop-shadow-[0_0_10px_rgba(242,127,178,0.3)]">Pro</div>
                    </div>

                    {/* Table Body */}
                    {comparison.map((group, gi) => (
                        <div key={gi}>
                            {/* Category Header */}
                            <div className="px-6 py-3 bg-neutral-100/50 dark:bg-neutral-800/30 border-b border-neutral-200 dark:border-neutral-800">
                                <span className="text-sm font-bold text-neutral-900 dark:text-white">{group.category}</span>
                            </div>

                            {/* Feature Rows */}
                            {group.features.map((feature, fi) => (
                                <div
                                    key={fi}
                                    className={`grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] border-b border-neutral-100 dark:border-neutral-800/50 last:border-b-0 hover:bg-neutral-50 dark:hover:bg-neutral-800/20 transition-colors ${feature.pro === true && feature.free === false ? "" : ""
                                        }`}
                                >
                                    <div className="px-6 py-3.5 text-sm text-neutral-700 dark:text-neutral-300">{feature.name}</div>
                                    <div className="px-4 py-3.5 flex items-center justify-center">
                                        <ValueCell value={feature.free} />
                                    </div>
                                    <div className="px-4 py-3.5 flex items-center justify-center">
                                        <ValueCell value={feature.pro} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Bottom CTA */}
                    <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] bg-neutral-50/50 dark:bg-white/5 border-t border-black/5 dark:border-white/10">
                        <div className="px-6 py-6 font-bold">
                            <span className="text-sm font-black text-foreground uppercase tracking-widest font-brand">Price</span>
                        </div>
                        <div className="px-4 py-6 flex items-center justify-center">
                            <span className="text-xl font-brand font-black text-foreground">$0</span>
                        </div>
                        <div className="px-4 py-6 flex items-center justify-center">
                            <span className="text-xl font-brand font-black text-primary drop-shadow-[0_0_10px_rgba(242,127,178,0.3)]">$29</span>
                        </div>
                    </div>
                </motion.div>

                {/* Upgrade CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="#pricing"
                        className="inline-flex items-center justify-center h-14 px-10 rounded-2xl bg-primary text-black text-base font-bold hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(242,127,178,0.3)]"
                    >
                        Upgrade to Pro
                    </a>
                    <p className="text-sm text-neutral-500 mt-4">One-time payment. No subscription.</p>
                </motion.div>
            </div>
        </section>
    )
}
