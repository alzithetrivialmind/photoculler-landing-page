"use client"

import { motion } from "framer-motion"
import { Zap, Target, MousePointer2, Focus, BarChart3, Layers, FileJson, Package, ArrowRight } from "lucide-react"

const features = [
  {
    title: "Instant RAW Previews",
    subtitle: "HIGH SPEED RENDERING",
    description: "Accelerated engine for high-res RAW files. Begin culling immediately with instant previews.",
    icon: <Zap className="w-6 h-6 text-primary" />,
    image: "/assets/screenshots/RAW View.png",
    color: "from-primary/30 to-secondary/30"
  },
  {
    title: "AI Powered Face Detection",
    subtitle: "SMART CULLING",
    description: "Automatically detect and zoom into faces on every frame. Verify focus and expression without manual zooming for entire bursts.",
    icon: <Target className="w-6 h-6 text-accent" />,
    image: "/assets/screenshots/AI Powered Face Detection.png",
    color: "from-primary/30 to-accent/30"
  },
  {
    title: "Pick & Cull Workflow",
    subtitle: "DIRECT DISK ACCESS",
    description: "Simply select the folder you want to work on and start culling your project instantly.",
    icon: <MousePointer2 className="w-6 h-6 text-primary" />,
    image: "/assets/screenshots/Grid View.png",
    color: "from-primary/30 to-accent/30"
  },
  {
    title: "Pro Focus Peaking",
    subtitle: "PRECISION TOOLS",
    description: "Military-grade focus peaking overlays ensure you never miss a blurry shot again. High-contrast indicators work on any scene.",
    icon: <Focus className="w-6 h-6 text-accent" />,
    image: "/assets/screenshots/Focus Peaking.png",
    color: "from-primary/30 to-accent/30"
  },
  {
    title: "Exposure Analysis",
    subtitle: "TECHNICAL ACCURACY",
    description: "Instant heatmaps for highlights and shadows. Detect clipped whites and crushed blacks before you even open your editor.",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    image: "/assets/screenshots/Exposure Highlight and Shadow.png",
    color: "from-primary/30 to-accent/30"
  },
  {
    title: "Compare & Sync",
    subtitle: "SIDE-BY-SIDE SELECTION",
    description: "Compare images side-by-side. Sync ratings and labels across entire bursts effortlessly with one-click multi-select.",
    icon: <Layers className="w-6 h-6 text-accent" />,
    image: "/assets/screenshots/Compare View or Side by Side view zoom sync.png",
    color: "from-primary/30 to-secondary/30"
  }
]

export function Features() {
  return (
    <section id="features" className="relative py-32 bg-background overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-dot-hud opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 mb-32 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-border text-foreground text-xs font-bold tracking-widest uppercase mb-8 font-urbanist">
            <Zap className="w-3 h-3 text-primary" /> Professional Toolkit
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tightest mb-8 leading-[0.9]">
            The Decisive Tool for <br />
            <span className="text-gradient">Professional Finishers</span>
          </h2>
          <p className="text-xl text-muted-foreground dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            SnapCuller isn't just a viewer. It's a high-performance engine 
            built to eliminate the bottleneck between shooting and editing.
          </p>
        </motion.div>
      </div>

      <div className="space-y-48 relative z-10">
        {features.map((feature, index) => (
          <FeatureSection key={index} feature={feature} index={index} />
        ))}
      </div>

      {/* Auxiliary Features - Clean Horizontal Cards */}
      <div className="container mx-auto px-4 py-32 mt-32 border-t border-border relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <SmallFeature 
               icon={<FileJson className="w-8 h-8 text-foreground" />}
               title="IPTC Metadata Editor"
               description="Batch update metadata across thousands of frames with lightning speed."
            />
            <SmallFeature 
               icon={<Package className="w-8 h-8 text-foreground" />}
               title="Tactical Move Buckets"
               description="Organize files into custom folders with single-key shortcuts during review."
            />
            <div className="p-10 rounded-[2.5rem] bg-foreground text-background flex flex-col justify-center items-start shadow-2xl relative overflow-hidden group">
                <Layers className="absolute -right-8 -bottom-8 w-48 h-48 opacity-5 rotate-12 group-hover:rotate-6 transition-transform duration-700 pointer-events-none" />
                <h4 className="text-2xl font-black mb-4 tracking-tightest">And 20+ more <br />pro-level tools.</h4>
                <a href="/docs" className="flex items-center gap-2 font-bold text-sm bg-background text-foreground px-6 py-2.5 rounded-xl hover:opacity-90 transition-all cursor-pointer">
                    Explore Documentation <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
      </div>
    </section>
  )
}

function FeatureSection({ feature, index }: { feature: any, index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}>
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 max-w-xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(185,124,221,0.15)]">
                {feature.icon}
            </div>
            <div className="h-[1px] w-8 bg-border" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground font-urbanist">
                {feature.subtitle}
            </span>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tightest leading-[0.95]">
            {feature.title}
          </h3>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
            {feature.description}
          </p>

          <div className="flex items-center gap-4 py-8 border-y border-border relative group/line">
              <div className="text-sm font-bold text-muted-foreground font-mono tracking-tighter">
                  <span className="text-foreground mr-1">0{index + 1}</span> / 06
              </div>
              <div className="flex-1 h-[2px] bg-muted relative overflow-hidden rounded-full">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: "all" }}
                    transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute inset-0 ${index % 2 === 0 ? 'bg-primary shadow-[0_0_15px_rgba(185,124,221,0.5)]' : 'bg-accent shadow-[0_0_15px_rgba(72,105,207,0.5)]'} origin-left`} 
                  />
              </div>
          </div>
        </motion.div>

        {/* Mockup Presentation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full"
        >
          <div className="relative group">
            {/* Background Glow */}
            <div className={`absolute -inset-10 bg-gradient-to-tr ${feature.color} blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000`} />
            
            <div className="mockup-frame relative z-10 shadow-2xl group-hover:translate-y-[-5px] transition-transform duration-700">
              {/* Window Header */}
              <div className="h-8 bg-muted/80 backdrop-blur-md border-b border-border flex items-center px-4 justify-between">
                  <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-urbanist">{feature.title}</div>
              </div>
              
              <div className="bg-card group-hover:scale-[1.01] transition-transform duration-700">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-auto" 
                  />
              </div>
              
              {/* Refinement: Inner Border Glow */}
              <div className="absolute inset-0 border border-border pointer-events-none rounded-2xl" />
            </div>
            
            {/* HUD Decoration */}
            <div className={`absolute -top-6 ${isEven ? '-right-6' : '-left-6'} w-24 h-24 border-t-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} w-24 h-24 border-b-2 border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function SmallFeature({ icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] glass hover:bg-muted/50 transition-all group border border-border hover:border-primary/30"
        >
            <div className="mb-8 transform group-hover:rotate-6 transition-transform">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(185,124,221,0.1)]">
                    {icon}
                </div>
            </div>
            <h4 className="text-2xl font-black mb-4 tracking-tightest">{title}</h4>
            <p className="text-muted-foreground leading-relaxed font-medium">
                {description}
            </p>
        </motion.div>
    )
}
