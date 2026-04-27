import { motion } from "framer-motion"
import { Rocket, FileText, Sparkles, Bug, Tag, ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { SEO } from "@/components/seo"

const releases = [
    {
        version: "1.2.1",
        date: "2026-04-27",
        latest: true,
        sections: [
            {
                title: "Improvements",
                icon: Sparkles,
                items: [
                    {
                        label: "UI Refinement",
                        description: "Polished the interface for better readability and a more premium feel.",
                    },
                    {
                        label: "Stability",
                        description: "Minor improvements to ensure a consistent performance across all culling sessions.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.2.0",
        date: "2026-04-26",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Maximum Photos per Stack",
                        description: "Set strict limits on stack sizes—perfect for real estate photographers working with consistent HDR brackets.",
                    },
                ],
            },
            {
                title: "Improvements & Fixes",
                icon: Sparkles,
                items: [
                    {
                        label: "Smart Stacking Workflow",
                        description: "Moving or copying a stack now automatically includes all associated RAW and JPG files within that group.",
                    },
                    {
                        label: "Unified UI Feedback",
                        description: "Refined stack badges and header counts to provide clearer feedback when culling complex file groups.",
                    },
                    {
                        label: "Selection Logic",
                        description: "Clicking a selected image now toggles its selection state for more intuitive bulk management.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.9",
        date: "2026-04-22",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Professional Gamepad Support",
                        description: "Cull with maximum comfort using Xbox, PlayStation, or generic controllers. Navigate and rate with tactile precision.",
                    },
                    {
                        label: "Pick/Reject Flag System",
                        description: "Dedicated workflow for flagging photos with clear UI indicators, hotkeys, and grid filtering.",
                    },
                ],
            },
            {
                title: "Improvements",
                icon: Sparkles,
                items: [
                    {
                        label: "Pair-Aware Renaming",
                        description: "Batch renaming now natively links RAW+JPG pairs to maintain perfect synchronization.",
                    },
                    {
                        label: "Visual Precision",
                        description: "Fixed overlay rotation issues to ensure Exposure and Focus Peaking analytical tools align with image orientation.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.8",
        date: "2026-04-08",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Comprehensive Branding Refresh",
                        description: "Transitioned to our new official visual identity, featuring the signature aperture-inspired logotype.",
                    },
                    {
                        label: "Quad-Theme System",
                        description: "Four professionally curated themes: Snap Black, Snap Indigo, Classic Dark, and a high-contrast Light theme.",
                    },
                ],
            },
            {
                title: "UI Improvements",
                icon: Sparkles,
                items: [
                    {
                        label: "Redesigned Splash Screen",
                        description: "A modern, theme-aware startup experience for a more professional first impression.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.6",
        date: "2026-04-03",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Native macOS Support",
                        description: "SnapCuller is now officially available for Mac, running natively on Intel and Apple Silicon (M1/M2/M3/M4).",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.5",
        date: "2026-04-03",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Advanced Metadata Grouping",
                        description: "Instantly group your gallery by Camera model, Lens model, or ISO—perfect for gear-heavy event shoots.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.4",
        date: "2026-04-03",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Professional IPTC Expansion",
                        description: "Added support for 10 high-end Adobe-standard metadata fields.",
                    },
                    {
                        label: "Unified IPTC Editor",
                        description: "Single and Batch editors now feature a unified design with Live Previews of your metadata changes.",
                    },
                    {
                        label: "Image Rotation",
                        description: "Rotate images instantly in Single and Compare views to fix orientation issues.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.3",
        date: "2026-03-31",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "AI Face Detection (Pro)",
                        description: "Dramatically improved face detection accuracy on high-resolution photos using multi-pass grid tiling.",
                    },
                    {
                        label: "Batch IPTC Metadata Editor",
                        description: "Apply metadata to thousands of images at once with support for dynamic macros like {date} or {lens}.",
                    },
                ],
            },
            {
                title: "Improved Features",
                icon: Sparkles,
                items: [
                    {
                        label: "RAW Preview Overhaul",
                        description: "Faster, pixel-perfect previews for ARW, CR2, NEF, and DNG formats.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.0",
        date: "2026-03-27",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "IPTC Metadata Templates",
                        description: "Create and manage professional metadata presets for fast tagging.",
                    },
                    {
                        label: "Live Code Replacements",
                        description: "Real-time text expansion macros—type a code and see it instantly expand into full text.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.0.8",
        date: "2026-03-15",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Initial Stable Release",
                        description: "First stable release featuring RAW support, Compare View, and high-speed culling.",
                    },
                ],
            },
        ],
    },
]

export function ReleasesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO 
                title="Releases & Version History" 
                description="Stay updated with the latest SnapCuller features, performance improvements, and bug fixes. View our version history and changelog."
                keywords="SnapCuller releases, photo culling updates, software version history, changelog"
            />
            <ScrollProgress />
            <Navbar />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors mb-8 group"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </a>

                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                            Release <span className="text-gradient">Notes</span>
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Track every update, improvement, and fix we ship to SnapCuller.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="max-w-3xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 hidden md:block" />

                        <div className="space-y-12">
                            {releases.map((release, releaseIndex) => (
                                <motion.div
                                    key={release.version}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: releaseIndex * 0.1 }}
                                    className="relative md:pl-16"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-4 top-6 hidden md:block">
                                        <div className={`h-5 w-5 rounded-full border-4 ${release.latest
                                            ? "bg-primary border-primary/20"
                                            : "bg-neutral-400 dark:bg-neutral-600 border-neutral-200 dark:border-neutral-800"
                                            }`} />
                                    </div>

                                    {/* Release Card */}
                                    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 overflow-hidden">
                                        {/* Version Header */}
                                        <div className={`px-6 md:px-8 py-6 border-b border-neutral-200 dark:border-neutral-800 ${release.latest
                                            ? "bg-gradient-to-r from-primary/5 to-secondary/5"
                                            : "bg-neutral-50 dark:bg-neutral-900/30"
                                            }`}>
                                            <div className="flex items-center justify-between flex-wrap gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${release.latest
                                                        ? "bg-primary/10 text-primary"
                                                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                                                        }`}>
                                                        <Tag className="h-4 w-4" />
                                                        <span className="text-sm font-bold">v{release.version}</span>
                                                    </div>
                                                    {release.latest && (
                                                        <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-brand-gradient text-white">
                                                            Latest
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                                                    {new Date(release.date).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Release Content */}
                                        <div className="px-6 md:px-8 py-6 space-y-8">
                                            {release.sections.map((section, sectionIndex) => (
                                                <motion.div
                                                    key={sectionIndex}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: releaseIndex * 0.1 + sectionIndex * 0.1 }}
                                                >
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <div className={`p-1.5 rounded-lg ${release.latest
                                                            ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 dark:text-indigo-400"
                                                            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                                                            }`}>
                                                            <section.icon className="h-4 w-4" />
                                                        </div>
                                                        <h3 className="font-bold text-neutral-900 dark:text-white">
                                                            {section.title}
                                                        </h3>
                                                    </div>

                                                    <ul className="space-y-3 ml-2">
                                                        {section.items.map((item, itemIndex) => (
                                                            <li
                                                                key={itemIndex}
                                                                className="flex items-start gap-3 group"
                                                            >
                                                                <span className={`mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 ${release.latest
                                                                    ? "bg-primary"
                                                                    : "bg-neutral-400 dark:bg-neutral-500"
                                                                    }`} />
                                                                <div>
                                                                    <span className="font-semibold text-neutral-900 dark:text-white">
                                                                        {item.label}
                                                                    </span>
                                                                    <span className="text-neutral-500 dark:text-neutral-400">
                                                                        {" — "}
                                                                        {item.description}
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}
