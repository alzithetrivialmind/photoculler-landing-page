import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeLogo } from "@/components/theme-logo"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const navLinks = ["Features", "How It Works", "Pricing", "FAQ"]

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 glass rounded-2xl border border-black/5 dark:border-white/10 transition-all duration-300"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-6">
                <a href="/" className="flex items-center space-x-2 font-brand font-bold text-xl">
                    <ThemeLogo className="h-9 w-auto" />
                    <span className="tracking-tight text-foreground">SnapCuller</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`/#${item.toLowerCase().replace(/['']/g, '').replace(/\s+/g, '-')}`}
                            className="relative group text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full shadow-[0_0_10px_rgba(242,127,178,0.5)]" />
                        </a>
                    ))}
                    <a
                        href="/docs"
                        className="relative group text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                    >
                        Docs
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full shadow-[0_0_10px_rgba(242,127,178,0.5)]" />
                    </a>
                    <a
                        href="/releases"
                        className="relative group text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                    >
                        Releases
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full shadow-[0_0_10px_rgba(242,127,178,0.5)]" />
                    </a>
                </div>

                <div className="flex items-center space-x-4">
                    <ModeToggle />
                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden border-t border-neutral-200 dark:border-neutral-800 bg-background/95 backdrop-blur-lg"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((item) => (
                                <a
                                    key={item}
                                    href={`/#${item.toLowerCase().replace(/['']/g, '').replace(/\s+/g, '-')}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-lg font-medium text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors py-2"
                                >
                                    {item}
                                </a>
                            ))}
                            <a
                                href="/docs"
                                onClick={() => setMobileOpen(false)}
                                className="text-lg font-medium text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors py-2"
                            >
                                Docs
                            </a>
                            <a
                                href="/releases"
                                onClick={() => setMobileOpen(false)}
                                className="text-lg font-medium text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors py-2"
                            >
                                Releases
                            </a>
                            <a
                                href="/#pricing"
                                onClick={() => setMobileOpen(false)}
                                className="inline-flex items-center justify-center h-12 rounded-xl bg-brand-gradient text-white text-sm font-bold hover:opacity-90 transition-all"
                            >
                                Download Free
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
