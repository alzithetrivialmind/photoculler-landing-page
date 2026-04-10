import { motion } from "framer-motion"
import { Camera, Zap, Shield, Star } from "lucide-react"

const stats = [
    { icon: Camera, value: "15+", label: "RAW Formats Supported" },
    { icon: Zap, value: "<50ms", label: "Image Load Time" },
    { icon: Shield, value: "100%", label: "Offline & Private" },
    { icon: Star, value: "5-Star", label: "Rating System" },
]

const testimonials = [
    {
        quote: "SnapCuller saved me hours on my wedding shoots. The keyboard-first workflow is exactly what I needed.",
        name: "Sarah Chen",
        role: "Wedding Photographer",
        rating: 5,
    },
    {
        quote: "Finally, a culling tool that handles my Sony ARW files natively. The XMP export to Lightroom is seamless.",
        name: "Marcus Webb",
        role: "Portrait Photographer",
        rating: 5,
    },
    {
        quote: "I switched from Photo Mechanic. SnapCuller is faster, cleaner, and the price is unbeatable.",
        name: "Lisa Morales",
        role: "Event Photographer",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm"
                        >
                            <stat.icon className="h-6 w-6 text-white mx-auto mb-3" />
                            <div className="text-2xl md:text-3xl font-black tracking-tighter text-white">
                                {stat.value}
                            </div>
                            <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonials */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tighter"
                >
                    Loved by <span className="text-white">Photographers</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-white/30 transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, si) => (
                                    <Star key={si} className="h-4 w-4 fill-white text-white" />
                                ))}
                            </div>

                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 italic">
                                "{t.quote}"
                            </p>

                            <div>
                                <div className="font-bold text-sm">{t.name}</div>
                                <div className="text-xs text-neutral-500 dark:text-neutral-400">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
