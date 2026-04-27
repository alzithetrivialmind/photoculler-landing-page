import { useState, useEffect } from "react"
import { SEO } from "@/components/seo"
import Layout from "@/components/layout"
import { motion } from "framer-motion"
import { 
    LayoutDashboard, 
    Focus, 
    Layers, 
    Tag, 
    PlayCircle, 
    Keyboard, 
    Camera, 
    Terminal, 
    ShieldCheck, 
    HelpCircle,
    CheckCircle2,
    Info,
    AlertCircle,
    ArrowRight,
    Search
} from "lucide-react"

const docSections = [
    { id: "philosophy", title: "Philosophy", icon: LayoutDashboard },
    { id: "getting-started", title: "Getting Started", icon: PlayCircle },
    { id: "interface", title: "User Interface", icon: Layers },
    { id: "grid-view", title: "Grid View (Library)", icon: Camera },
    { id: "single-view", title: "Review (Single View)", icon: Focus },
    { id: "compare-mode", title: "Compare Mode", icon: Search },
    { id: "metadata", title: "Metadata & IPTC", icon: Tag },
    { id: "automation", title: "Power User Tools", icon: Terminal },
    { id: "shortcuts", title: "Shortcuts & Gamepad", icon: Keyboard },
    { id: "license", title: "License & Support", icon: ShieldCheck },
    { id: "faq", title: "Troubleshooting", icon: HelpCircle },
]

export function DocsPage() {
    const [activeSection, setActiveSection] = useState("philosophy")

    useEffect(() => {
        const options = {
            rootMargin: '-150px 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        docSections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <Layout>
            <SEO 
                title="Comprehensive Documentation | SnapCuller" 
                description="The definitive guide to mastering SnapCuller. Learn about high-speed culling, AI face detection, metadata management, and professional workflows." 
            />
            
            <div className="pt-40 pb-20">
                <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <header className="mb-16 border-b border-neutral-200 dark:border-neutral-800 pb-12 pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/20">Official Guide</span>
                            <span className="text-neutral-500 text-xs font-medium opacity-60">v1.2.0 • Updated April 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tightest mb-6">
                            SnapCuller <span className="text-gradient">Comprehensive Docs</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
                            Master the standard in high-speed professional photo culling and metadata management.
                        </p>
                    </motion.div>
                </header>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sidebar Navigation */}
                    <aside className="lg:w-72 shrink-0">
                        <div className="sticky top-28 space-y-6">
                            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 mb-6">
                                <h3 className="font-black text-xs uppercase tracking-widest mb-4 text-neutral-900 dark:text-white px-2">Table of Contents</h3>
                                <nav className="flex flex-col space-y-1">
                                    {docSections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl transition-all text-left group ${
                                                activeSection === section.id 
                                                    ? "bg-primary text-white font-bold shadow-lg shadow-primary/20 scale-[1.02]" 
                                                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 hover:translate-x-1"
                                            }`}
                                        >
                                            <section.icon className={`w-4 h-4 transition-colors ${activeSection === section.id ? "text-white" : "text-neutral-400 group-hover:text-primary"}`} />
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            <div className="p-5 rounded-2xl bg-brand-gradient border border-primary/20 glass-hud">
                                <h4 className="font-black text-sm mb-2 text-primary flex items-center gap-2">
                                    <HelpCircle className="w-4 h-4" /> Need Help?
                                </h4>
                                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed font-medium">
                                    Can't find what you're looking for? Reach out to our support team for specialized assistance.
                                </p>
                                <a href="mailto:support@snapculler.com" className="text-xs font-black uppercase tracking-widest text-neutral-900 dark:text-white flex items-center gap-2 hover:gap-3 transition-all text-primary group">
                                    Contact Support <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="flex-1 w-full max-w-4xl">
                        
                        {/* Philosophy */}
                        <section id="philosophy" className="scroll-mt-32 mb-32">
                            <div className="flex items-center gap-3 text-primary mb-6">
                                <LayoutDashboard className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Core Philosophy</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-8 text-neutral-900 dark:text-white">
                                The SnapCuller Philosophy
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                                <p>
                                    SnapCuller is built on one core principle: <strong className="text-neutral-900 dark:text-white">Zero Waiting.</strong>
                                </p>
                                <p>
                                    Traditional culling tools force you into an "Import" database model that creates unnecessary friction and bloat. SnapCuller works directly with your filesystem. We extract embedded previews instantly, enabling you to start culling 10,000+ photos the absolute second you open a folder.
                                </p>
                            </div>
                            
                            <div className="my-12 bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                                <h4 className="flex items-center gap-2 text-primary font-bold mb-4"><Info className="w-4 h-4" /> Why Instant Previews?</h4>
                                <p className="text-base leading-relaxed m-0 text-neutral-600 dark:text-neutral-400">
                                    By utilizing the high-resolution JPEG previews already embedded in your RAW files, we bypass the heavy processing required to decode RAW data during the initial cull. This means 100% speed, 100% of the time.
                                </p>
                            </div>

                            <div className="relative group rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl">
                                <img 
                                    src="/assets/screenshots/Viewport (Center).png" 
                                    alt="SnapCuller Interface Overview" 
                                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                                />
                            </div>
                        </section>

                        <hr className="my-24 border-neutral-200 dark:border-neutral-800 opacity-50" />

                        {/* Getting Started */}
                        <section id="getting-started" className="scroll-mt-32 mb-32">
                            <div className="flex items-center gap-3 text-primary mb-6">
                                <PlayCircle className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Chapter 1</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-8 text-neutral-900 dark:text-white">
                                Getting Started
                            </h2>
                            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-10">
                                Moving from your SD card to culling should take seconds, not minutes. SnapCuller simplifies the entry point of your post-production workflow.
                            </p>
                            
                            <h3 className="text-2xl font-black tracking-tight mb-6 text-neutral-900 dark:text-white">Opening Your Photos</h3>
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                                    <h4 className="text-lg font-bold mb-3 text-neutral-900 dark:text-white">Drag and Drop</h4>
                                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">Simply grab any folder from your file explorer (Windows/macOS) and drop it anywhere into SnapCuller.</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                                    <h4 className="text-lg font-bold mb-3 text-neutral-900 dark:text-white">Browse Manually</h4>
                                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">Use the <strong>Change Folder</strong> button in the sidebar to select your project directory via the system picker.</p>
                                </div>
                            </div>

                            <div className="max-w-md mx-auto mb-12 p-4 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                                <img src="/assets/screenshots/Open Folder Button.png" alt="Open Folder Button" className="w-full h-auto rounded-xl" />
                            </div>

                            <div className="flex items-start gap-5 p-6 rounded-3xl bg-green-500/5 border border-green-500/20 text-green-700 dark:text-green-400">
                                <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                                <p className="text-base leading-relaxed m-0">
                                    <strong>Format Support:</strong> SnapCuller natively supports RAW (CR3, ARW, NEF, etc.), HEIC, and JPEG formats, leveraging your GPU for smooth rendering.
                                </p>
                            </div>
                        </section>

                        <hr className="my-24 border-neutral-200 dark:border-neutral-800 opacity-50" />

                        {/* Interface Overview */}
                        <section id="interface" className="scroll-mt-32 mb-32">
                            <div className="flex items-center gap-3 text-primary mb-6">
                                <Layers className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Chapter 2</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-8 text-neutral-900 dark:text-white">
                                User Interface Overview
                            </h2>
                            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-12">
                                SnapCuller’s interface is optimized for speed, placing critical tools within a single click or keystroke. The design follows a professional dark-first aesthetic to minimize eye strain during long sessions.
                            </p>
                            
                            <div className="space-y-16">
                                <div className="flex flex-col md:flex-row gap-12 items-start">
                                    <div className="flex-1 pt-4">
                                        <h4 className="text-xl font-black mb-4 text-neutral-900 dark:text-white">1. Sidebar Navigation</h4>
                                        <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                                            Your command center for folder management, batch renaming, IPTC templates, and workflow presets. It's designed to be pinned or auto-hidden to maximize screen real estate.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-48 shrink-0 bg-neutral-100 dark:bg-neutral-900 p-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                                        <img 
                                            src="/assets/screenshots/Sidebar (Left).png" 
                                            alt="Sidebar Navigation" 
                                            className="w-full h-auto max-h-[400px] object-contain rounded-lg mx-auto" 
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
                                    <div className="flex-1 pt-4">
                                        <h4 className="text-xl font-black mb-4 text-neutral-900 dark:text-white">2. Metadata & Filmstrip</h4>
                                        <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                                            The bottom area houses the dynamic filmstrip for rapid jumping across the shoot and the Metadata panel for real-time EXIF readout.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-80 shrink-0 space-y-4">
                                        <div className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
                                            <img src="/assets/screenshots/Filmstrip (Bottom).png" alt="Filmstrip" className="w-full h-auto rounded-lg" />
                                        </div>
                                        <div className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
                                            <img src="/assets/screenshots/Metadata Panel (Sidebar Bottom).png" alt="Metadata Panel" className="w-full h-auto rounded-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="my-24 border-neutral-200 dark:border-neutral-800 opacity-50" />

                        {/* Grid View */}
                        <section id="grid-view" className="scroll-mt-32 mb-32">
                            <div className="flex items-center gap-3 text-primary mb-6">
                                <Camera className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Chapter 3</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-8 text-neutral-900 dark:text-white">
                                Grid View Library
                            </h2>
                            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-10">
                                The Grid View provides a bird's-eye view of your entire shoot. It is built using a highly optimized virtualization engine that can render 50,000+ thumbnails without skipping a frame.
                            </p>
                            
                            <div className="rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl mb-12">
                                <img src="/assets/screenshots/Grid View.png" alt="Grid View Library" className="w-full h-auto" />
                            </div>

                            <h3 className="text-2xl font-black tracking-tight mb-6 text-neutral-900 dark:text-white">Grouping & Sorting</h3>
                            <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 mb-10">
                                Tame large shoots by grouping your photos by <strong>Date</strong>, <strong>Camera</strong>, <strong>Lens</strong>, or <strong>ISO</strong>. This is invaluable for separating different segments of an event (e.g., "Ceremony" from "Reception") based on capture time or camera body.
                            </p>
                            <div className="max-w-2xl mx-auto mb-16 p-2 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                                <img src="/assets/screenshots/Grouping.png" alt="Grouping Options" className="w-full h-auto rounded-2xl" />
                            </div>

                            <h3 className="text-2xl font-black tracking-tight mb-6 text-neutral-900 dark:text-white">Image Pairing & Burst Stacks</h3>
                            <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-neutral-900 dark:text-white">RAW + JPG Pairing</h4>
                                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                                        Treat pairs as a single entity. Ratings and moves applied to the JPG are automatically mirrored to the hidden RAW companion.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-neutral-900 dark:text-white">Burst Stacking</h4>
                                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                                        Automatically group photos taken in rapid succession. SnapCuller intelligently identifies bursts based on timestamp proximity.
                                    </p>
                                </div>
                            </div>
                            <div className="max-w-2xl mx-auto p-2 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                                <img src="/assets/screenshots/Auto Stacks.png" alt="Auto Stacking" className="w-full h-auto rounded-2xl" />
                            </div>
                        </section>

                        <hr className="my-24 border-neutral-200 dark:border-neutral-800 opacity-50" />

                        {/* Single View */}
                        <section id="single-view" className="scroll-mt-32 mb-32">
                            <div className="flex items-center gap-3 text-primary mb-6">
                                <Focus className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Chapter 4</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-8 text-neutral-900 dark:text-white">
                                Review & Analysis
                            </h2>
                            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-12">
                                Single View is where critical decisions happen. We provide professional analytical tools to ensure every pick is technically perfect before it hits your editor.
                            </p>
                            
                            <h3 className="text-2xl font-black tracking-tight mb-6 text-neutral-900 dark:text-white">Exposure Analytical Tool</h3>
                            <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8">
                                Press <kbd className="font-bold">E</kbd> to cycle through professional exposure overlays. This helps you detect technical flaws instantly without looking at a histogram.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                <div className="space-y-4">
                                    <div className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
                                        <img src="/assets/screenshots/Exposure Highlight.png" alt="Highlight Clipping" className="w-full h-auto rounded-lg" />
                                    </div>
                                    <p className="text-xs text-center font-bold text-neutral-500">1st Press: Highlights</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
                                        <img src="/assets/screenshots/Exposure Shadow.png" alt="Shadow Clipping" className="w-full h-auto rounded-lg" />
                                    </div>
                                    <p className="text-xs text-center font-bold text-neutral-500">2nd Press: Shadows</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
                                        <img src="/assets/screenshots/Exposure Highlight and Shadow.png" alt="Highlight and Shadow Clipping" className="w-full h-auto rounded-lg" />
                                    </div>
                                    <p className="text-xs text-center font-bold text-neutral-500">3rd Press: Both</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-black tracking-tight mb-6 text-neutral-900 dark:text-white">Focus Peaking</h3>
                            <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8">
                                Verify sharpness at a glance using the <kbd className="font-bold">P</kbd> key or the peaking button. High-contrast edges are highlighted in bright colors, showing you exactly where the focal plane lies.
                            </p>
                            <div className="rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl mb-16">
                                <img src="/assets/screenshots/Focus Peaking.png" alt="Focus Peaking Tool" className="w-full h-auto" />
                            </div>

                            <h3 className="text-2xl font-black tracking-tight mb-6 text-neutral-900 dark:text-white">AI Face Detection</h3>
                            <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8">
                                The "Facestrip" is a SnapCuller exclusive. Toggle it using the <kbd className="font-bold">F</kbd> key. Our local AI detects every face and displays them as crops in a dedicated panel.
                            </p>
                            <div className="rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl">
                                <img src="/assets/screenshots/AI Powered Face Detection.png" alt="AI Facestrip" className="w-full h-auto" />
                            </div>
                        </section>

                        <hr className="my-24 border-neutral-200 dark:border-neutral-800 opacity-50" />

                        {/* Compare Mode */}
                        <section id="compare-mode" className="scroll-mt-32 mb-32">
                            <div className="flex items-center gap-3 text-primary mb-6">
                                <Search className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Chapter 5</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-8 text-neutral-900 dark:text-white">
                                Compare Mode
                            </h2>
                            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-10">
                                When you have two or three nearly identical frames, Compare Mode allows for side-by-side evaluation with synchronized navigation.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-6 mb-12 list-none p-0">
                                <li className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 flex gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <p className="text-sm m-0"><strong>Activation:</strong> Select multiple images and press <kbd className="font-black">C</kbd> to enter comparison mode.</p>
                                </li>
                                <li className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 flex gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <p className="text-sm m-0"><strong>Zoom Sync:</strong> Lock panels to pan and zoom in unison across all compared images.</p>
                                </li>
                            </ul>
                            <div className="rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl">
                                <img src="/assets/screenshots/Compare View or Side by Side view zoom sync.png" alt="Compare Mode Side-by-Side" className="w-full h-auto" />
                            </div>
                        </section>

                        <hr className="my-24 border-neutral-200 dark:border-neutral-800 opacity-50" />

                        {/* Metadata & IPTC */}
                        <section id="metadata" className="scroll-mt-32 mb-32">
                            <div className="flex items-center gap-3 text-primary mb-6">
                                <Tag className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Chapter 6</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-8 text-neutral-900 dark:text-white">
                                Metadata & IPTC
                            </h2>
                            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-12">
                                SnapCuller is a fully-featured metadata editor that strictly follows IPTC/Adobe standards. We use non-destructive <strong>.XMP sidecar files</strong>, meaning your original files are never altered.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-12 mb-16">
                                <div>
                                    <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">Single Image Editor</h4>
                                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 mb-6">Edit titles and tags for individual images directly in the <strong className="text-primary">EXIF Info</strong> panel or via the <kbd className="font-bold">I</kbd> key.</p>
                                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
                                        <img src="/assets/screenshots/IPTC Editor Single.png" alt="Single IPTC Editor" className="w-full h-auto rounded-lg" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">Batch IPTC Editor</h4>
                                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 mb-6">Enter Grid View (<kbd className="font-bold">G</kbd>), select multiple images, and click <strong className="text-primary">EDIT IPTC</strong> or press <kbd className="font-bold">I</kbd>.</p>
                                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
                                        <img src="/assets/screenshots/Multi IPTC Editor.png" alt="Batch IPTC Editor" className="w-full h-auto rounded-lg" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20 shadow-sm">
                                <h4 className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold mb-4"><AlertCircle className="w-4 h-4" /> Compatibility</h4>
                                <p className="text-base leading-relaxed m-0 text-neutral-700 dark:text-neutral-400">
                                    Your work in SnapCuller is instantly visible in <strong>Adobe Lightroom, Capture One, and Photo Mechanic</strong>. Just import the folder and all ratings/metadata will appear automatically.
                                </p>
                            </div>
                        </section>

                        <hr className="my-24 border-neutral-200 dark:border-neutral-800 opacity-50" />

                        {/* Power User Automation */}
                        <section id="automation" className="scroll-mt-32 mb-32">
                            <div className="flex items-center gap-3 text-primary mb-6">
                                <Terminal className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Chapter 7</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-8 text-neutral-900 dark:text-white">
                                Power User Tools
                            </h2>
                            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-12">
                                Master these automation features to cut your workflow time by up to 80%.
                            </p>
                            
                            <div className="space-y-20">
                                <div>
                                    <h3 className="text-2xl font-black mb-6 text-neutral-900 dark:text-white">Codes & Variables</h3>
                                    <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8">
                                        Stop typing repetitive text. Export templates to <strong className="text-primary">TSV format</strong> to manage large datasets in Excel/Spreadsheets, then import them back for instant use.
                                    </p>
                                    
                                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                                        <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                                            <h4 className="font-bold mb-3">Basic Codes</h4>
                                            <p className="text-sm text-neutral-500">Type <code>=code=</code> in any IPTC field to instantly expand it to its defined replacement.</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                                            <h4 className="font-bold mb-3">Multi-column TSV</h4>
                                            <p className="text-sm text-neutral-500">Use <code>=code=2</code> to extract the 2nd column from your imported TSV template.</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                                            <h4 className="font-bold mb-3">EXIF Variables</h4>
                                            <p className="text-sm text-neutral-500">Use <code>&#123;model&#125;</code>, <code>&#123;lens&#125;</code>, <code>&#123;iso&#125;</code>, <code>&#123;filename&#125;</code>, or <code>&#123;date&#125;</code>.</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                                            <h4 className="font-bold mb-3">Sequential Batching</h4>
                                            <p className="text-sm text-neutral-500">Use <code>&#123;seq&#125;</code> in templates to automatically pad numbers (001, 002...) for multiple photos.</p>
                                        </div>
                                    </div>

                                    <div className="max-w-2xl mx-auto p-2 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                                        <img src="/assets/screenshots/Code Replacements.png" alt="Code Replacement Dictionary" className="w-full h-auto rounded-2xl" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-black mb-6 text-neutral-900 dark:text-white">Batch Rename</h3>
                                    <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8">
                                        Standardize your filenames before delivery. Use dynamic variables like <code>&#123;Date&#125;</code>, <code>&#123;Project&#125;</code>, and <code>&#123;Counter&#125;</code>.
                                    </p>
                                    <div className="max-w-2xl mx-auto p-2 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                                        <img src="/assets/screenshots/Batch Rename New.png" alt="Batch Renaming Tool" className="w-full h-auto rounded-2xl" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-black mb-6 text-neutral-900 dark:text-white">Buckets (Routing)</h3>
                                    <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8">
                                        Buckets are the ultimate culling shortcut. Map a key (e.g., <kbd className="font-black">1</kbd>) to a "Picks" folder. Pressing that key instantly moves the file and sidecars to the destination.
                                    </p>
                                    <div className="max-w-xl mx-auto p-2 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                                        <img src="/assets/screenshots/Bucket For Move or Copy Pictures.png" alt="Bucket Configuration" className="w-full h-auto rounded-2xl" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="my-24 border-neutral-200 dark:border-neutral-800 opacity-50" />

                        {/* Shortcuts & Settings */}
                        <section id="shortcuts" className="scroll-mt-32 mb-32">
                            <div className="flex items-center gap-3 text-primary mb-6">
                                <Keyboard className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Chapter 8</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-8 text-neutral-900 dark:text-white">
                                Customization
                            </h2>
                            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-12">
                                SnapCuller is designed to be controlled via muscle memory. Every key is remappable, and we offer native support for gaming controllers.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-12 mb-16">
                                <div>
                                    <h4 className="text-xl font-bold mb-6 text-neutral-900 dark:text-white">Keyboard Remapping</h4>
                                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 mb-6">Every single key can be remapped to perfectly match your existing <strong>muscle memory</strong> from other software.</p>
                                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
                                        <img src="/assets/screenshots/Settings Keyboard.png" alt="Keyboard Shortcuts" className="w-full h-auto rounded-lg" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-6 text-neutral-900 dark:text-white">Gamepad Support</h4>
                                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 mb-6">Lean back and cull with an Xbox or PS5 controller. Use triggers for zooming and face buttons for rating.</p>
                                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
                                        <img src="/assets/screenshots/Settings Gamepad.png" alt="Gamepad Configuration" className="w-full h-auto rounded-lg" />
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-black mb-6 text-neutral-900 dark:text-white">External Editor Linking</h3>
                            <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8">
                                Link your preferred software in Settings and open the current image with a single click.
                            </p>
                            <div className="max-w-2xl mx-auto p-2 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                                <img src="/assets/screenshots/External Editors.png" alt="External Editor Settings" className="w-full h-auto rounded-2xl" />
                            </div>
                        </section>

                        <hr className="my-24 border-neutral-200 dark:border-neutral-800 opacity-50" />

                        {/* License Management */}
                        <section id="license" className="scroll-mt-32 mb-32">
                            <div className="flex items-center gap-3 text-primary mb-6">
                                <ShieldCheck className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Licensing</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-8 text-neutral-900 dark:text-white">
                                License Management
                            </h2>
                            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-10">
                                Your Pro license is flexible. You can manage your activation directly within the app.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-6 mb-12 list-none p-0">
                                <li className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 flex gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <p className="text-sm m-0"><strong>Device Switching:</strong> Deactivate license on desktop to move it to laptop.</p>
                                </li>
                                <li className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 flex gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <p className="text-sm m-0"><strong>Offline Use:</strong> Once activated, SnapCuller works entirely offline.</p>
                                </li>
                            </ul>
                            <div className="max-w-xl mx-auto p-2 bg-neutral-100 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
                                <img src="/assets/screenshots/License Management.png" alt="License Manager" className="w-full h-auto rounded-2xl" />
                            </div>
                        </section>

                        <hr className="my-24 border-neutral-200 dark:border-neutral-800 opacity-50" />

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-32 mb-40">
                            <div className="flex items-center gap-3 text-primary mb-6">
                                <HelpCircle className="w-5 h-5" />
                                <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Support</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-10 text-neutral-900 dark:text-white">
                                Troubleshooting
                            </h2>
                            <div className="space-y-6">
                                <details className="group border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 bg-neutral-50 dark:bg-neutral-900/50 hover:border-primary/30 transition-all cursor-pointer">
                                    <summary className="font-black text-xl flex items-center justify-between list-none">
                                        Why are my RAW files not loading?
                                        <span className="text-primary group-open:rotate-180 transition-transform">↓</span>
                                    </summary>
                                    <div className="mt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200 dark:border-neutral-800 pt-6">
                                        Ensure the folder is not locked by another process (like a backup tool). If issues persist, check that you have at least 5GB of free space for the preview cache.
                                    </div>
                                </details>

                                <details className="group border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 bg-neutral-50 dark:bg-neutral-900/50 hover:border-primary/30 transition-all cursor-pointer">
                                    <summary className="font-black text-xl flex items-center justify-between list-none">
                                        Can I use my Photo Mechanic code files?
                                        <span className="text-primary group-open:rotate-180 transition-transform">↓</span>
                                    </summary>
                                    <div className="mt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200 dark:border-neutral-800 pt-6">
                                        Yes! SnapCuller supports standard TSV (Tab-Separated) files. Simply import them in the Code Replacements manager.
                                    </div>
                                </details>

                                <details className="group border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 bg-neutral-50 dark:bg-neutral-900/50 hover:border-primary/30 transition-all cursor-pointer">
                                    <summary className="font-black text-xl flex items-center justify-between list-none">
                                        Does SnapCuller modify original RAW data?
                                        <span className="text-primary group-open:rotate-180 transition-transform">↓</span>
                                    </summary>
                                    <div className="mt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200 dark:border-neutral-800 pt-6">
                                        Never. SnapCuller is 100% non-destructive. All your hard work (ratings, labels, IPTC) is stored in .XMP sidecar files next to your images.
                                    </div>
                                </details>
                            </div>
                        </section>

                    </main>

                </div>
            </div>
        </div>
    </Layout>
    )
}
