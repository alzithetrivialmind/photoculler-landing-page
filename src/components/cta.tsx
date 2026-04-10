import { motion } from "framer-motion"
import { Download, Sparkles } from "lucide-react"

export function CTA() {
    return (
        <section className="py-48 relative overflow-hidden rounded-[4rem] mx-6 my-32 lg:mx-12 border border-border shadow-2xl bg-card">
            {/* Immersive Animated Background Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] bg-primary/20 blur-[150px] rounded-full"
                />
                <motion.div 
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] bg-accent/20 blur-[150px] rounded-full"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/40 to-background" />
            </div>
            
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-10 font-urbanist">
                       Limited Time Launch Offer
                    </div>
                    
                    <h2 className="text-6xl md:text-9xl font-black text-foreground mb-10 tracking-tightest leading-[0.85] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        Save 5+ Hours <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-foreground to-accent dark:via-white">Every Single Week</span>
                    </h2>
                    
                    <p className="text-xl md:text-3xl text-neutral-400 mb-16 leading-relaxed font-medium max-w-3xl mx-auto border-l-2 border-primary/30 pl-8">
                        Stop fighting your software. Start culling at the speed of muscle memory. Join pro shooters who value their time.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="#pricing"
                            className="inline-flex h-16 items-center justify-center rounded-2xl bg-white px-12 py-3 text-base font-bold text-black shadow-2xl transition-all hover:scale-105 hover:bg-neutral-50 gap-2 w-full sm:w-auto"
                        >
                            <Download className="h-6 w-6" />
                            Download Free Trial
                        </a>
                        <a
                            href="#pricing"
                            className="inline-flex h-16 items-center justify-center rounded-2xl border border-border glass-premium px-12 py-3 text-base font-bold text-foreground transition-all hover:bg-foreground/5 hover:scale-105 gap-2 w-full sm:w-auto"
                        >
                            <Sparkles className="h-6 w-6 text-primary" />
                            Get Pro Early Access
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
