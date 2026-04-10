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
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 border border-primary/30 shadow-[0_0_15px_rgba(185,124,221,0.2)]">
                <Check className="h-5 w-5 text-primary" />
            </div>
        )
    }
    if (value === false) {
        return (
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/5 opacity-10">
                <Minus className="h-4 w-4 text-white/50" />
            </div>
        )
    }
    return (
        <span className="text-sm font-black text-white/90 font-brand tracking-tight">{value}</span>
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
                        Free vs <span className="text-primary drop-shadow-[0_0_15px_rgba(185,124,221,0.5)]">Pro</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-center">
                        A detailed breakdown of every feature across both plans.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto glass-hud rounded-[32px] overflow-hidden border border-primary/20 shadow-[0_0_50px_rgba(185,124,221,0.05)]"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-[1fr_120px_120px] md:grid-cols-[1fr_180px_180px] bg-white/[0.03] backdrop-blur-3xl border-b border-primary/10">
                        <div className="px-8 py-8 text-xs font-black text-white/40 uppercase tracking-[0.3em] font-urbanist">Classification</div>
                        <div className="px-4 py-8 text-center text-sm font-black text-white/60 uppercase tracking-widest font-brand">Free</div>
                        <div className="px-4 py-8 text-center text-sm font-black uppercase tracking-widest text-primary font-brand drop-shadow-[0_0_10px_rgba(185,124,221,0.5)]">Pro</div>
                    </div>

                    {/* Table Body */}
                    {comparison.map((group, gi) => (
                        <div key={gi} className="group/category">
                            {/* Category Header */}
                            <div className="px-8 py-4 bg-primary/5 border-b border-primary/5">
                                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary/60 font-urbanist">{group.category}</span>
                            </div>

                            {/* Feature Rows */}
                            {group.features.map((feature, fi) => (
                                <div
                                    key={fi}
                                    className="grid grid-cols-[1fr_120px_120px] md:grid-cols-[1fr_180px_180px] border-b border-white/[0.03] last:border-b-0 hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="px-8 py-5 text-sm font-medium text-white/80 font-urbanist">{feature.name}</div>
                                    <div className="px-4 py-5 flex items-center justify-center bg-black/20">
                                        <ValueCell value={feature.free} />
                                    </div>
                                    <div className="px-4 py-5 flex items-center justify-center bg-primary/5">
                                        <ValueCell value={feature.pro} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Bottom Feature Footer */}
                    <div className="grid grid-cols-[1fr_120px_120px] md:grid-cols-[1fr_180px_180px] bg-primary/10 border-t border-primary/20">
                        <div className="px-8 py-8">
                            <span className="text-sm font-black text-white uppercase tracking-widest font-brand">Commitment</span>
                        </div>
                        <div className="px-4 py-8 flex items-center justify-center">
                            <span className="text-2xl font-brand font-black text-white/80">$0</span>
                        </div>
                        <div className="px-4 py-8 flex items-center justify-center">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-brand font-black text-primary drop-shadow-[0_0_15px_rgba(185,124,221,0.5)]">$29</span>
                                <span className="text-[8px] font-bold text-primary/60 uppercase tracking-tighter">One-time payment</span>
                            </div>
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
                        className="inline-flex items-center justify-center h-14 px-10 rounded-2xl btn-primary text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl"
                    >
                        Upgrade to Pro
                    </a>
                    <p className="text-sm text-neutral-500 mt-4">One-time payment. No subscription.</p>
                </motion.div>
            </div>
        </section>
    )
}
