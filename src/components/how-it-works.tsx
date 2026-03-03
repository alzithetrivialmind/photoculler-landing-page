import { FolderOpen, Keyboard, Download } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
    {
        icon: FolderOpen,
        step: "01",
        title: "Open Your Folder",
        description: "Simply drag & drop any folder or browse to it. PhotoCuller instantly loads all your photos — including RAW formats from Canon, Sony, Nikon, and more.",
    },
    {
        icon: Keyboard,
        step: "02",
        title: "Cull with Shortcuts",
        description: "Use keyboard shortcuts to rate, flag, and sort photos at lightning speed. Create custom buckets and assign single-key shortcuts for your workflow.",
    },
    {
        icon: Download,
        step: "03",
        title: "Export & Done",
        description: "Move or copy your selected photos to destination folders. Ratings and labels are exported as XMP sidecars — ready for Lightroom or Capture One.",
    },
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
                        How It <span className="text-indigo-500 dark:text-indigo-400">Works</span>
                    </h2>
                    <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
                        Three simple steps to go from thousands of photos to only your best shots.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
                    {/* Connecting Line (desktop only) */}
                    <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-indigo-500/20 via-indigo-500/50 to-indigo-500/20" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            {/* Step Number Circle */}
                            <div className="relative mb-6">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                                    <step.icon className="h-8 w-8 text-white" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-black flex items-center justify-center">
                                    {step.step}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
