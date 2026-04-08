import { motion } from "framer-motion"
import { Download, Sparkles } from "lucide-react"

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden bg-brand-gradient rounded-[2.5rem] mx-4 my-24 lg:mx-8 shadow-2xl shadow-primary/20">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-white/20 rotate-12 blur-3xl rounded-full" />
                <div className="absolute top-[20%] right-[10%] w-[40%] h-[100%] bg-white/10 rotate-45 blur-3xl rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-7xl font-brand font-black text-white mb-6 tracking-tighter leading-tight drop-shadow-xl">
                        Ready to save 5 hours of work this week?
                    </h2>
                    <p className="text-xl text-white/90 mb-12 leading-relaxed font-medium">
                        Stop fighting your software. Start culling at the speed of thought. Join thousands of pro photographers who have already switched to SnapCuller.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <a
                            href="#pricing"
                            className="inline-flex h-16 items-center justify-center rounded-2xl bg-white px-10 py-3 text-base font-bold text-primary shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:bg-neutral-50 gap-2 w-full sm:w-auto"
                        >
                            <Download className="h-6 w-6" />
                            Download Free Version
                        </a>
                        <a
                            href="#pricing"
                            className="inline-flex h-16 items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 px-10 py-3 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 gap-2 w-full sm:w-auto"
                        >
                            <Sparkles className="h-6 w-6 text-white" />
                            Get Pro for $29
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
