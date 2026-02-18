import { Zap, Image, Keyboard, Eye, Lock, HardDrive, Undo2, Save, Layers } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        icon: Zap,
        title: "Blazing Fast",
        description: "Built for speed using Rust and Electron. Cull thousands of photos in minutes, not hours.",
    },
    {
        icon: Image,
        title: "RAW Support",
        description: "Native support for RAW formats from all major camera manufacturers (Canon, Sony, Nikon, Fujifilm, etc).",
    },
    {
        icon: Keyboard,
        title: "Keyboard Driven",
        description: "Keep your hands on the keyboard. Rate, flag, and navigate without touching the mouse.",
    },
    {
        icon: Undo2,
        title: "Smart Undo",
        description: "Made a mistake? Just hit Ctrl+Z to undo moves, ratings, or flags instantly.",
    },
    {
        icon: Eye,
        title: "Instant Preview",
        description: "Zero-latency full-screen previews with smart prefetching for the next image.",
    },
    {
        icon: Save,
        title: "Auto-Save",
        description: "Never lose progress. PhotoCuller remembers your last folder and selection on restart.",
    },
    {
        icon: Lock,
        title: "Local Privacy",
        description: "Your photos never leave your device. PhotoCuller works 100% offline securely.",
    },
    {
        icon: HardDrive,
        title: "Efficient Storage",
        description: "Review images directly from your SD card or SSD without importing them first.",
    },
    {
        icon: Layers,
        title: "XMP Sidecars",
        description: "Ratings and labels sync with Lightroom and Capture One via standard XMP files.",
    }
]

export function Features() {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <section id="features" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tighter"
                >
                    Designed for <span className="text-indigo-500 dark:text-indigo-400">Pro Workflows</span>
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300 hover:border-indigo-500/30"
                        >
                            <div className="mb-6 inline-flex p-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
