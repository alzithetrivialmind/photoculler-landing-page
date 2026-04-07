import { useState } from "react"
import { SEO } from "@/components/seo"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { LayoutDashboard, Keyboard, Zap, Focus, Download, Settings } from "lucide-react"

const docSections = [
    { id: "getting-started", title: "Getting Started", icon: LayoutDashboard },
    { id: "keyboard-shortcuts", title: "Keyboard Shortcuts", icon: Keyboard },
    { id: "culling-workflow", title: "Culling Workflow", icon: Zap },
    { id: "features", title: "Smart Features", icon: Focus },
    { id: "exporting", title: "Exporting (XMP)", icon: Download },
    { id: "preferences", title: "Preferences", icon: Settings },
]

export function DocsPage() {
    const [activeSection, setActiveSection] = useState("getting-started")

    const scrollToSection = (id: string) => {
        setActiveSection(id)
        const element = document.getElementById(id)
        if (element) {
            // Adjust offset for fixed header
            const y = element.getBoundingClientRect().top + window.scrollY - 100
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200">
            <ScrollProgress />
            <Navbar />
            <div className="pt-24 pb-20">
                <SEO 
                    title="Documentation | SnapCuller" 
                    description="Learn how to use SnapCuller for the fastest photo culling workflow." 
                />
            
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-8">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">SnapCuller Docs</h1>
                    <p className="text-xl text-neutral-500 dark:text-neutral-400">Everything you need to know to master your culling workflow.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="lg:w-64 shrink-0">
                        <div className="sticky top-28">
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-neutral-900 dark:text-white">On this page</h3>
                            <nav className="flex flex-col space-y-1">
                                {docSections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left ${
                                            activeSection === section.id 
                                                ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium" 
                                                : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                        }`}
                                    >
                                        <section.icon className="w-4 h-4" />
                                        {section.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="flex-1 w-full max-w-3xl prose prose-neutral dark:prose-invert prose-indigo prose-headings:font-bold prose-h2:tracking-tight">
                        
                        <div id="getting-started" className="scroll-mt-28">
                            <h2>1. Getting Started</h2>
                            <p>
                                SnapCuller is designed to be the fastest step in your photography workflow. Unlike traditional catalog-based editors (like Lightroom), SnapCuller <strong>reads your files directly from your disk</strong>. There is no waiting for import, and no generating "smart previews"—it loads the embedded JPGs in your RAW files instantly.
                            </p>
                            <h3>Opening a Folder</h3>
                            <ol>
                                <li>Click the <strong>Change Folder</strong> button on the left sidebar.</li>
                                <li>Select any folder on your computer (SSD, HDD, or directly from an SD Card).</li>
                                <li>SnapCuller will instantly display all images in the Grid View.</li>
                            </ol>
                            <p><em>Pro Tip: For the best performance, always cull from a high-speed SSD!</em></p>
                        </div>

                        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

                        <div id="keyboard-shortcuts" className="scroll-mt-28">
                            <h2>2. Keyboard Shortcuts (Muscle Memory)</h2>
                            <p>
                                SnapCuller relies on keyboard shortcuts so your hands never have to leave the keyboard. Master these to cut your culling time in half.
                            </p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Shortcut (Windows/Mac)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Next/Previous Image</td>
                                        <td><kbd>→</kbd> / <kbd>←</kbd> (Arrow Keys)</td>
                                    </tr>
                                    <tr>
                                        <td>Set Star Rating</td>
                                        <td><kbd>0</kbd> to <kbd>5</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Set Color Label</td>
                                        <td><kbd>6</kbd> (Red) to <kbd>9</kbd> (Blue)</td>
                                    </tr>
                                    <tr>
                                        <td>Pick / Reject</td>
                                        <td><kbd>P</kbd> (Pick) / <kbd>X</kbd> (Reject) / <kbd>U</kbd> (Unflag)</td>
                                    </tr>
                                    <tr>
                                        <td>Toggle View (Grid/Single)</td>
                                        <td><kbd>G</kbd> / <kbd>E</kbd> or <kbd>Enter</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Zoom 100% (Loupe)</td>
                                        <td><kbd>Space</kbd> or Click</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

                        <div id="culling-workflow" className="scroll-mt-28">
                            <h2>3. The Culling Workflow</h2>
                            <p>
                                SnapCuller supports **Workflow Presets** natively. This means you can create multiple "Buckets" and assign hotkeys to move photos into them instantly.
                            </p>
                            <h3>Using Workflow Presets</h3>
                            <ul>
                                <li><strong>Creating a Preset:</strong> Click "+ SAVE NEW" under the WORKFLOW PRESETS sidebar.</li>
                                <li><strong>Adding Buckets:</strong> In a preset, you can define target folders (e.g., "Selects", "To Edit", "Trash").</li>
                                <li><strong>Moving Files:</strong> Once active, use the designated hotkey for that bucket to instantly sort the current image. The file will be transferred on the filesystem level.</li>
                            </ul>
                            <h3>Auto-Advance</h3>
                            <p>Make sure to enable <strong>Auto-Advance</strong> in the settings. This automatically moves you to the next photo the moment you assign a rating or flag, maintaining your momentum.</p>
                        </div>

                        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

                        <div id="features" className="scroll-mt-28">
                            <h2>4. Smart Features</h2>
                            
                            <h3>Focus Peaking</h3>
                            <p>
                                Never guess if the eyes are in focus again. Toggle <strong>Focus Peaking</strong> in the top toolbar to overlay a bright green highlight on the sharpest parts of the image. This calculates high-contrast edges in real-time.
                            </p>

                            <h3>Compare View (Side-by-Side)</h3>
                            <p>
                                Torn between two almost identical shots? Select two images and enter <strong>Compare View</strong>. Both images will appear side-by-side. You can zoom and pan synchronously to see which one has the better micro-expression.
                            </p>

                            <h3>Advanced Filtering</h3>
                            <p>
                                Open the FILTER tab on the bottom left sidebar. You can instantly filter out images by:
                            </p>
                            <ul>
                                <li><strong>Camera Model</strong> or <strong>Lens</strong></li>
                                <li><strong>ISO, Aperture, or Shutter Speed</strong></li>
                                <li><strong>Ratings and Labels</strong></li>
                            </ul>
                            <p>This is extremely useful when shooting events with multiple camera bodies.</p>
                        </div>

                        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

                        <div id="exporting" className="scroll-mt-28">
                            <h2>5. Exporting (XMP Sidecars)</h2>
                            <p>
                                SnapCuller is <strong>Non-Destructive</strong>. When you rate or label an image, it writes tiny <code>.xmp</code> text files next to your original photos (if they are RAWs) or updates the metadata directly for JPEGs/DNGs.
                            </p>
                            <p>
                                <strong>How to move to Lightroom / Capture One:</strong>
                            </p>
                            <ol>
                                <li>Finish your culling in SnapCuller.</li>
                                <li>Open your editing software (Lightroom, Capture One, etc).</li>
                                <li>Import the folder.</li>
                                <li>Your ratings, colors, and flags will <strong>automatically</strong> appear!</li>
                            </ol>
                        </div>

                        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

                        <div id="preferences" className="scroll-mt-28 mb-20">
                            <h2>6. Preferences</h2>
                            <p>
                                Click the gear icon (<Settings className="w-4 h-4 inline" />) at the bottom left to open Settings.
                            </p>
                            <ul>
                                <li><strong>Hardware Acceleration:</strong> Leave on for smooth GPU rendering.</li>
                                <li><strong>Background Color:</strong> Change the canvas backdrop to true black or a neutral gray to aid color perception.</li>
                                <li><strong>Default Sort:</strong> Choose whether images load sorted by Filename or Date Taken.</li>
                            </ul>
                        </div>
                    </main>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
