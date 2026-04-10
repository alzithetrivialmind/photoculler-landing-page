import { useRef } from "react"
import { FolderOpen, Keyboard, Download } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"

const steps = [
    {
        icon: FolderOpen,
        step: "01",
        title: "Point & Shoot",
        description: "Simply drag & drop any folder. SnapCuller instantly accesses all your photos with zero import time—including professional RAW formats.",
        image: "/assets/point-and-shoot.mp4",
        isVideo: true
    },
    {
        icon: Keyboard,
        step: "02",
        title: "Keyboard Mastery",
        description: "Master the one-key workflow. Assign favorite and reject actions to specific keys and let your muscle memory handle the rest at lightning speed.",
        image: "/assets/screenshots/Single View.png"
    },
    {
        icon: Download,
        step: "03",
        title: "One-Click Handoff",
        description: "Your ratings and labels are exported as XMP sidecars. Everything is ready to be opened in Lightroom or Capture One for the final edit.",
        image: "/assets/screenshots/Complete Filter.png"
    },
]

export function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <section id="how-it-works" ref={containerRef} className="py-48 relative overflow-hidden bg-background">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-48"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-border text-foreground text-xs font-bold tracking-widest uppercase mb-8 font-urbanist">
                       Workflow Process
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tightest leading-[0.9]">
                        The Speed of <span className="text-primary">Thought</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                        A workflow meticulously designed to keep you in the flow, <br />
                        from extraction to the final selection.
                    </p>
                </motion.div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Vertical Flow Spine */}
                    <div className="absolute left-[2.25rem] md:left-[3.25rem] top-0 bottom-0 w-px bg-border">
                        <motion.div 
                            style={{ scaleY }}
                            className="absolute inset-0 bg-linear-to-b from-primary via-accent to-primary origin-top shadow-[0_0_15px_rgba(185,124,221,0.5)]"
                        />
                    </div>

                    <div className="space-y-48">
                        {steps.map((step: any, index) => (
                            <div key={index} className="relative flex flex-col lg:flex-row gap-16 lg:gap-32 pl-24 md:pl-40 group">
                                {/* Step Node */}
                                <div className="absolute left-0 top-0 z-20">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-card border-2 border-border flex items-center justify-center shadow-2xl group-hover:border-primary/50 transition-colors duration-500 overflow-hidden relative">
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/[0.02] dark:from-white/5 to-transparent" />
                                        <step.icon className="h-8 w-8 md:h-10 md:w-10 text-foreground dark:text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="mt-4 text-center">
                                         <span className="text-4xl md:text-5xl font-black text-muted-foreground/10 font-brand tracking-tighter">
                                            {step.step}
                                         </span>
                                    </div>
                                </div>

                                {/* Content and Image */}
                                <div className="flex-1 lg:max-w-md pt-4">
                                    <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tightest leading-tight group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-medium">
                                        {step.description}
                                    </p>
                                    <div className="flex items-center gap-3 py-4 border-t border-border">
                                        <div className="w-10 h-[1px] bg-primary/50" />
                                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground/50 font-mono">Step {index + 1} Sequence</span>
                                    </div>
                                </div>

                                {/* Huge Preview Mockup */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex-[2] w-full"
                                >
                                    <div className="relative">
                                        {/* Background Glow */}
                                        <div className="absolute -inset-10 bg-primary/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                        
                                        <div className="relative z-10 rounded-[3rem] overflow-hidden border border-border shadow-2xl transition-all duration-700 bg-card ring-1 ring-border">
                                            {/* Window Header */}
                                            <div className="h-12 bg-muted/80 backdrop-blur-3xl border-b border-border flex items-center px-6 gap-2">
                                                <div className="w-3 h-3 rounded-full bg-border" />
                                                <div className="w-3 h-3 rounded-full bg-border" />
                                                <div className="w-3 h-3 rounded-full bg-border" />
                                            </div>
                                            
                                            <div className="aspect-video relative overflow-hidden bg-background">
                                                {step.isVideo ? (
                                                    <video 
                                                        src={step.image} 
                                                        autoPlay 
                                                        loop 
                                                        muted 
                                                        playsInline
                                                        className="w-full h-full object-contain opacity-100 transition-transform duration-1000 group-hover:scale-[1.01]"
                                                    />
                                                ) : (
                                                    <img 
                                                        src={step.image} 
                                                        alt={step.title}
                                                        className="w-full h-full object-contain opacity-100 transition-transform duration-1000 group-hover:scale-[1.01]"
                                                    />
                                                )}
                                                <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
