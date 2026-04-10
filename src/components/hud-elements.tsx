import { motion } from "framer-motion"

export const HUDCorner = ({ className = "" }: { className?: string }) => (
    <div className={`absolute w-4 h-4 border-primary/40 ${className}`} />
)

export const HUDCrosshair = ({ className = "" }: { className?: string }) => (
    <div className={`absolute flex items-center justify-center pointer-events-none ${className}`}>
        <div className="w-4 h-[1px] bg-primary/20" />
        <div className="w-[1px] h-4 bg-primary/20 absolute" />
    </div>
)

export const HUDDataReadout = ({ label, value, className = "" }: { label: string, value: string, className?: string }) => (
    <div className={`flex flex-col gap-1 ${className}`}>
        <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">{label}</span>
        <span className="text-xs font-mono text-foreground/60">{value}</span>
    </div>
)

export const HUDGrid = ({ className = "" }: { className?: string }) => (
    <div className={`absolute inset-0 bg-grid-hud opacity-20 pointer-events-none ${className}`} />
)

export const HUDScanner = () => (
    <motion.div 
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute inset-x-0 h-[1px] bg-linear-to-r from-transparent via-primary/30 to-transparent z-10 pointer-events-none"
    />
)

export const HUDDecoration = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Corner */}
        <HUDCorner className="top-8 left-8 border-t-2 border-l-2" />
        {/* Top Right Corner */}
        <HUDCorner className="top-8 right-8 border-t-2 border-r-2" />
        {/* Bottom Left Corner */}
        <HUDCorner className="bottom-8 left-8 border-b-2 border-l-2" />
        {/* Bottom Right Corner */}
        <HUDCorner className="bottom-8 right-8 border-b-2 border-r-2" />

        {/* Decorative Lines */}
        <div className="absolute top-1/2 left-4 w-1 h-32 bg-linear-to-b from-transparent via-primary/20 to-transparent -translate-y-1/2" />
        <div className="absolute top-1/2 right-4 w-1 h-32 bg-linear-to-b from-transparent via-primary/20 to-transparent -translate-y-1/2" />
        

    </div>
)
