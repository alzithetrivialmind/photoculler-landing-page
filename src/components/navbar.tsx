import { Menu, X, ArrowRight } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeLogo } from "@/components/theme-logo"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { useState } from "react"

const navLinks = ["Features", "How It Works", "Pricing", "FAQ"]

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 glass group overflow-hidden rounded-2xl md:rounded-[2rem]"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-6">
                <a href="/" className="flex items-center space-x-3 group/logo">
                    <ThemeLogo className="h-9 w-auto transition-transform group-hover/logo:rotate-12" />
                    <span className="tracking-[0.1em] text-foreground dark:text-white font-black font-urbanist uppercase text-sm">SnapCuller</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`/#${item.toLowerCase().replace(/['']/g, '').replace(/\s+/g, '-')}`}
                            className="relative group/link text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full shadow-[0_0_10px_rgba(185,124,221,0.5)]" />
                        </a>
                    ))}
                    <a
                        href="/releases"
                        className="relative group/link text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                        Releases
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full shadow-[0_0_10px_rgba(185,124,221,0.5)]" />
                    </a>
                    <a
                        href="/docs"
                        className="relative group/link text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                        Docs
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full shadow-[0_0_10px_rgba(185,124,221,0.5)]" />
                    </a>
                </div>

                <div className="flex items-center space-x-4">
                    {/* <ModeToggle /> */}
                    <a
                        href="/#pricing"
                        className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:scale-105 transition-all shadow-[0_0_15px_rgba(185,124,221,0.3)]"
                    >
                        Get Started
                    </a>
                    
                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Scroll Progress Bar */}
            <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left z-10"
                style={{ scaleX }}
            />

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-lg"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((item) => (
                                <a
                                    key={item}
                                    href={`/#${item.toLowerCase().replace(/['']/g, '').replace(/\s+/g, '-')}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                                >
                                    {item}
                                </a>
                            ))}
                            <a
                                href="/releases"
                                onClick={() => setMobileOpen(false)}
                                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                            >
                                Releases
                            </a>
                            <a
                                href="/docs"
                                onClick={() => setMobileOpen(false)}
                                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                            >
                                Docs
                            </a>
                            <a
                                href="/#pricing"
                                onClick={() => setMobileOpen(false)}
                                className="inline-flex items-center justify-center h-12 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:scale-105 transition-all shadow-xl"
                            >
                                Get Started <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
