import { Menu, X, ArrowRight } from "lucide-react"
import { ThemeLogo } from "@/components/theme-logo"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = ["Features", "How It Works", "Pricing", "FAQ"]

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
            <div className="w-full flex items-center justify-between h-16 px-4 sm:px-6 lg:px-12">
                {/* Logo Section */}
                <a href="/" className="flex items-center space-x-3 shrink-0">
                    <ThemeLogo className="h-8 w-auto" />
                    <span className="tracking-[0.1em] text-foreground font-black font-urbanist uppercase text-sm">SnapCuller</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`/#${item.toLowerCase().replace(/['']/g, '').replace(/\s+/g, '-')}`}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a href="/releases" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Releases
                    </a>
                    <a href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Docs
                    </a>
                </nav>

                {/* Actions */}
                <div className="flex items-center space-x-4 shrink-0">
                    <a
                        href="/#pricing"
                        className="hidden lg:inline-flex items-center justify-center h-9 px-5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity"
                    >
                        Download Free
                    </a>
                    
                    {/* Tablet & Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden bg-background border-b border-border"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((item) => (
                                <a
                                    key={item}
                                    href={`/#${item.toLowerCase().replace(/['']/g, '').replace(/\s+/g, '-')}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-lg font-medium text-muted-foreground hover:text-foreground"
                                >
                                    {item}
                                </a>
                            ))}
                            <a href="/releases" onClick={() => setMobileOpen(false)} className="block text-lg font-medium text-muted-foreground hover:text-foreground">
                                Releases
                            </a>
                            <a href="/docs" onClick={() => setMobileOpen(false)} className="block text-lg font-medium text-muted-foreground hover:text-foreground">
                                Docs
                            </a>
                            <a
                                href="/#pricing"
                                onClick={() => setMobileOpen(false)}
                                className="flex w-full items-center justify-center h-12 rounded-xl bg-primary text-primary-foreground text-sm font-bold"
                            >
                                Download Free <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
