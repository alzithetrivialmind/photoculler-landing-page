import { Download, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20">
            <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-1 text-sm text-neutral-900 dark:text-neutral-100 mb-8 backdrop-blur-xl"
                >
                    <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                    v1.0 Now Available
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-neutral-900 via-neutral-700 to-neutral-400 dark:from-white dark:via-neutral-200 dark:to-neutral-500 bg-clip-text text-transparent max-w-4xl"
                >
                    Cull Photos at <br className="hidden md:block" />
                    <span className="text-indigo-500 dark:text-indigo-400">Light Speed.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    The fastest way to review and select your best shots.
                    Native RAW support, instant preview, and intuitive keyboard shortcuts.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto"
                >
                    <a
                        href="#pricing"
                        className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-neutral-900 transition-colors gap-2">
                            <Download className="h-5 w-5" />
                            Download for Windows
                        </span>
                    </a>

                    <a
                        href="#features"
                        className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-neutral-200 dark:border-neutral-800 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-900 dark:text-white text-sm font-medium transition-colors"
                    >
                        Learn More
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-0 w-full flex justify-center"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown className="text-neutral-400 dark:text-neutral-600 transition-colors" />
                </motion.div>
            </motion.div>
        </section>
    )
}
