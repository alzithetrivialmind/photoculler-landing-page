import { motion } from "framer-motion"
import { Rocket, FileText, Sparkles, Bug, Tag, ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { SEO } from "@/components/seo"

const releases = [
    {
        version: "1.1.5",
        date: "2026-04-03",
        latest: true,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Advanced Metadata Grouping",
                        description: "Support for grouping by Camera, Lens, and ISO to separate gear setups instantly.",
                    },
                    {
                        label: "Security & Gating Audit",
                        description: "Enhanced Pro-feature locking for keyboard shortcuts (External Editor, Face Panel) to ensure consistency.",
                    },
                ],
            },
            {
                title: "Bug Fixes",
                icon: Bug,
                items: [
                    {
                        label: "Grid Selection Fix",
                        description: "Resolved auto-scrolling issues when selecting images in grouped view modes.",
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
                        description: "Added 5 new Adobe-standard fields (Document Title, Author Title, etc.) for a total of 10 supported fields.",
                    },
                    {
                        label: "Unified IPTC Editor",
                        description: "Single and Batch editors now share a unified design with Live Preview and Drafting logic.",
                    },
                    {
                        label: "Rotate Support",
                        description: "New hotkeys '[' and ']' to rotate images instantly in Single and Compare views.",
                    },
                    {
                        label: "Code Replacements Export",
                        description: "Export your custom dictionary as a .tsv file for easy backup or sharing.",
                    },
                ],
            },
            {
                title: "Technical Refactoring",
                icon: Sparkles,
                items: [
                    {
                        label: "Modular Architecture",
                        description: "Complete refactor of App.tsx into 17+ domain-specialized hooks for extreme performance and stability.",
                    },
                    {
                        label: "Zero-Error Status",
                        description: "Achieved absolute TypeScript stability with zero errors across the entire codebase.",
                    },
                ],
            },
            {
                title: "Bug Fixes",
                icon: Bug,
                items: [
                    {
                        label: "EXIF Toggle Crash",
                        description: "Resolved a critical TypeError when toggling metadata info in the sidebar.",
                    },
                    {
                        label: "Filter Synchronization",
                        description: "Metadata filters (Camera, Lens, ISO) are now 100% synced between Sidebar and Grid views.",
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
                        description: "Multi-pass grid tiling dramatically improves detection accuracy on high-resolution 50MP+ photos.",
                    },
                    {
                        label: "Batch IPTC Editor",
                        description: "New professional bulk tagging modal with macro expansion support ({filename}, {date}, etc.).",
                    },
                    {
                        label: "Refined Grid Filtering",
                        description: "Advanced Camera/Lens/ISO filters moved to the top bar for faster access and visibility.",
                    },
                ],
            },
            {
                title: "Improved Features",
                icon: Sparkles,
                items: [
                    {
                        label: "RAW Preview Overhaul",
                        description: "Enhanced SubIFD extraction logic for pixel-perfect previews across ARW, CR2, and NEF.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.2",
        date: "2026-03-30",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Project Rebranding",
                        description: "Full transition from ReflexCull to SnapCuller across all UI, documentation, and metadata.",
                    },
                ],
            },
            {
                title: "Documentation",
                icon: FileText,
                items: [
                    {
                        label: "Updated Documentation",
                        description: "README, User Guide, Technical Details, and FAQ have been refreshed with the latest branding and information.",
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
                        description: "Create and manage professional metadata presets including Creator, Copyright, Headline, Caption, and Keywords.",
                    },
                    {
                        label: "Single Image IPTC Editor",
                        description: "New detailed form to edit metadata per-image with support for template loading.",
                    },
                    {
                        label: "Keyboard Shortcut",
                        description: "Press 'i' to instantly open the IPTC Editor for the currently focused photo.",
                    },
                    {
                        label: "Live Code Replacements",
                        description: "Code Replacements now act as real-time text expansion macros. Typing =code= instantly expands into the replacement string while typing in any IPTC field.",
                    },
                ],
            },
            {
                title: "Improved Features",
                icon: Sparkles,
                items: [
                    {
                        label: "Sidebar UI Alignment",
                        description: "Re-aligned all action buttons to a consistent left-aligned list for better readability.",
                    },
                    {
                        label: "Dark Mode Selects",
                        description: "Improved styling for native HTML select elements on Windows to ensure dark backgrounds in modals.",
                    },
                    {
                        label: "XMP Generation",
                        description: "Enhanced XMP engine to support industry-standard Dublin Core and Photoshop namespaces.",
                    },
                ],
            },
            {
                title: "Bug Fixes",
                icon: Bug,
                items: [
                    {
                        label: "React Hook Violation",
                        description: "Fixed a crash in the Apply IPTC Modal caused by conditional hook rendering.",
                    },
                    {
                        label: "Code Replacement Logic",
                        description: "Improved reliability of code expansion when users manually include delimiters in their search strings.",
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
                        description: "First stable release with RAW format support and Compare View.",
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
                title="Release Notes" 
                description="Keep track of the latest updates and improvements to SnapCuller. We're always working to make your workflow faster." 
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
                            className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </a>

                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                            Release <span className="text-indigo-500 dark:text-indigo-400">Notes</span>
                        </h1>
                        <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
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
                                            ? "bg-indigo-500 border-indigo-200 dark:border-indigo-900"
                                            : "bg-neutral-400 dark:bg-neutral-600 border-neutral-200 dark:border-neutral-800"
                                            }`} />
                                    </div>

                                    {/* Release Card */}
                                    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 overflow-hidden">
                                        {/* Version Header */}
                                        <div className={`px-6 md:px-8 py-6 border-b border-neutral-200 dark:border-neutral-800 ${release.latest
                                            ? "bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10"
                                            : "bg-neutral-50 dark:bg-neutral-900/30"
                                            }`}>
                                            <div className="flex items-center justify-between flex-wrap gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${release.latest
                                                        ? "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400"
                                                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                                                        }`}>
                                                        <Tag className="h-4 w-4" />
                                                        <span className="text-sm font-bold">v{release.version}</span>
                                                    </div>
                                                    {release.latest && (
                                                        <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-indigo-500 text-white">
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
                                                                    ? "bg-indigo-500 dark:bg-indigo-400"
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
