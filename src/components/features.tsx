import { Zap, Image, Keyboard, Eye, HardDrive, Undo2, Layers, Briefcase, FastForward } from "lucide-react"
import { motion } from "framer-motion"

const featureGroups = [
    {
        title: "High-Performance Culling Engine",
        features: [
            {
                icon: Zap,
                title: "Instant RAW Previews",
                description: "Zero-latency viewing even for 50MB RAW files. SnapCuller extracts camera-embedded previews so you never wait for a loading bar again—keeping your laptop cool and responsive.",
            },
            {
                icon: HardDrive,
                title: "Zero Import Workflow",
                description: "Direct access to your SD card or SSD. No building catalogs, no smart previews, and no bloating your hard drive with duplicate data.",
            },
            {
                icon: Image,
                title: "Professional RAW Support",
                description: "Seamless support for ARW, CR2, NEF, DNG, and HEIC. Transition through your professional portfolio without any friction.",
            }
        ]
    },
    {
        title: "Efficiency-First Workflow Master",
        features: [
            {
                icon: Keyboard,
                title: "Muscle Memory Hotkeys",
                description: "Designed for speed. One key to favorite, one key to reject. Your hands never leave the keyboard.",
            },
            {
                icon: Briefcase,
                title: "Tactical Workflow Presets",
                description: "Save your tactical key setups. Instantly switch keys 1-9 from a Wedding workflow to a Photojournalism workflow without reconfiguring.",
            },
            {
                icon: FastForward,
                title: "Smart Auto-Advance Logic",
                description: "Accelerate your flow. The moment you rate or reject a photo, SnapCuller instantly jumps to the next frame so you don't break your rhythm.",
            }
        ]
    },
    {
        title: "Precision Selection Tools",
        features: [
            {
                icon: Undo2,
                title: "Non-Destructive Safety Net",
                description: "The ultimate mistake-proof feature. Instantly undo any move or rating with total peace of mind. Your files are always protected.",
            },
            {
                icon: Eye,
                title: "Pro Focus Peaking",
                description: "Instantly verify sharpness. Smart highlights show you exactly where the focus landed, saving you from guessing on small screens.",
            },
            {
                icon: Layers,
                title: "Side-by-Side Zoom Sync",
                description: "Perfect A/B testing. Compare two similar shots side-by-side with locked zoom and pan to pick the absolute best frame.",
            },
            {
                icon: Zap, // Using Zap or maybe a more appropriate one like Focus later
                title: "AI-Powered Face Detection",
                description: "Instantly verify focus where it matters most. SnapCuller automatically detects faces and provides high-resolution crops for instant sharpness verification.",
            }
        ]
    }
]

export function Features() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
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
                    className="text-4xl md:text-6xl font-brand font-black text-center mb-20 tracking-tighter text-foreground"
                >
                    Designed for <span className="text-gradient">Pro Workflows</span>
                </motion.h2>

                <div className="space-y-20">
                    {featureGroups.map((group, groupIndex) => (
                        <div key={groupIndex}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6 mb-10"
                            >
                                <h3 className="text-2xl md:text-3xl font-brand font-bold text-foreground/90">{group.title}</h3>
                                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                            </motion.div>

                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {group.features.map((feature, index) => (
                                    <motion.div key={index} variants={item}>
                                            <div className="h-full group p-8 rounded-2xl glass-card hover:border-primary/30 cursor-pointer">
                                                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-[0_0_20px_rgba(242,127,178,0.1)]">
                                                    <feature.icon className="h-7 w-7" />
                                                </div>
                                                <h4 className="text-xl font-brand font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h4>
                                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm group-hover:dark:text-neutral-300 transition-colors">{feature.description}</p>
                                            </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
