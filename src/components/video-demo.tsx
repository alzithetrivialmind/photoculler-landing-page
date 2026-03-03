import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useState, useRef } from "react"

const screenshots = [
    {
        src: "/screenshot-single.png",
        label: "Single View — Full-screen photo review with filmstrip",
    },
    {
        src: "/screenshot-grid.png",
        label: "Grid View — Thumbnail overview with ratings & labels",
    },
    {
        src: "/screenshot-compare.png",
        label: "Compare View — Side-by-side A/B comparison",
    },
]

export function VideoDemo() {
    const [current, setCurrent] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const prev = () => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length)
    const next = () => setCurrent((c) => (c + 1) % screenshots.length)

    const handlePlayVideo = () => {
        setIsPlaying(true)
        setTimeout(() => videoRef.current?.play(), 100)
    }

    return (
        <section id="demo" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">
                        See <span className="text-indigo-500 dark:text-indigo-400">PhotoCuller</span> in Action
                    </h2>
                    <p className="text-xl text-neutral-500 dark:text-neutral-400 mb-16 max-w-2xl mx-auto">
                        Experience the speed and simplicity of our native desktop application.
                        From import to export, cull your photos effortlessly.
                    </p>

                    {/* Video / Screenshot Frame */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
                        className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-2xl overflow-hidden"
                    >
                        {/* Top Bar (Window Controls) */}
                        <div className="h-8 bg-neutral-200 dark:bg-neutral-800 flex items-center px-4 gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                            <span className="text-xs text-neutral-500 ml-3 font-medium">PhotoCuller</span>
                        </div>

                        {/* Content Area */}
                        <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                            {isPlaying ? (
                                /* ===== VIDEO PLAYER ===== */
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    controls
                                    poster="/screenshot-single.png"
                                    onEnded={() => setIsPlaying(false)}
                                >
                                    {/* 
                                        TARUH VIDEO DI: public/demo-video.mp4
                                        Format yang didukung: .mp4 (H.264), .webm
                                    */}
                                    <source src="/demo-video.mp4" type="video/mp4" />
                                    <source src="/demo-video.webm" type="video/webm" />
                                </video>
                            ) : (
                                /* ===== SCREENSHOT CAROUSEL + PLAY BUTTON ===== */
                                <>
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={current}
                                            src={screenshots[current].src}
                                            alt={screenshots[current].label}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full h-full object-cover"
                                        />
                                    </AnimatePresence>

                                    {/* Play Video Overlay Button */}
                                    <button
                                        onClick={handlePlayVideo}
                                        className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 group"
                                        aria-label="Play demo video"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/30">
                                            <Play className="w-8 h-8 text-white fill-current translate-x-0.5" />
                                        </div>
                                    </button>

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prev() }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                                        aria-label="Previous screenshot"
                                    >
                                        <ChevronLeft className="h-5 w-5" />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); next() }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                                        aria-label="Next screenshot"
                                    >
                                        <ChevronRight className="h-5 w-5" />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Caption + Dots (only when not playing video) */}
                        {!isPlaying && (
                            <div className="bg-neutral-100 dark:bg-neutral-800/50 py-4 px-6 flex flex-col items-center gap-3">
                                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                                    {screenshots[current].label}
                                </p>
                                <div className="flex gap-2">
                                    {screenshots.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrent(i)}
                                            className={`w-2 h-2 rounded-full transition-all ${i === current
                                                    ? "bg-indigo-500 w-6"
                                                    : "bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400"
                                                }`}
                                            aria-label={`Go to screenshot ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
