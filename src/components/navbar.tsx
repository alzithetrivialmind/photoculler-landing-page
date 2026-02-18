import { Camera } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { motion } from "framer-motion"

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-md border-b border-white/10 dark:border-neutral-800 transition-colors duration-300"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-6">
                <div className="flex items-center space-x-2 font-bold text-xl">
                    <Camera className="h-6 w-6 text-indigo-500" />
                    <span className="tracking-tight">PhotoCuller</span>
                </div>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    {["Features", "Pricing"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative group text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <ModeToggle />
                </div>
            </div>
        </motion.nav>
    )
}
