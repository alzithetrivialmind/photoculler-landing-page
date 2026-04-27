import { useState } from "react"
import { SEO } from "@/components/seo"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { LayoutDashboard, Zap, Focus, Layers, Tag, Download, PlayCircle, Keyboard } from "lucide-react"

const docSections = [
    { id: "philosophy", title: "Philosophy", icon: LayoutDashboard },
    { id: "first-session", title: "First Session", icon: PlayCircle },
    { id: "pass-one", title: "High-Speed Culling", icon: Zap },
    { id: "pass-two", title: "Critical Selection", icon: Focus },
    { id: "complex-shoots", title: "Complex Shoots", icon: Layers },
    { id: "metadata", title: "Professional Metadata", icon: Tag },
    { id: "exporting", title: "Exporting & Finalizing", icon: Download },
    { id: "shortcuts", title: "Quick Reference", icon: Keyboard },
]

export function DocsPage() {
    const [activeSection, setActiveSection] = useState("philosophy")

    const scrollToSection = (id: string) => {
        setActiveSection(id)
        const element = document.getElementById(id)
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
            <ScrollProgress />
            <Navbar />
            <div className="pt-24 pb-20">
                <SEO 
                    title="Documentation | SnapCuller" 
                    description="Learn how to use SnapCuller for the fastest photo culling workflow on the market." 
                />
            
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-8">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">SnapCuller <span className="text-gradient">Docs</span></h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">Master the most efficient photo selection workflow on the market.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="lg:w-64 shrink-0">
                        <div className="sticky top-28">
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-neutral-900 dark:text-white">Workflow Chapters</h3>
                            <nav className="flex flex-col space-y-1">
                                {docSections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left ${
                                            activeSection === section.id 
                                                ? "bg-primary/10 text-primary font-bold shadow-sm" 
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
                    <main className="flex-1 w-full max-w-3xl prose prose-neutral dark:prose-invert prose-brand prose-headings:font-black prose-h2:tracking-tight prose-a:text-primary">
                        
                        <div id="philosophy" className="scroll-mt-28">
                            <h2>The SnapCuller Philosophy</h2>
                            <p className="lead">
                                SnapCuller is built on one principle: <strong>Zero Waiting.</strong>
                            </p>
                            <p>
                                Traditional tools force you to "Import" photos into a database. SnapCuller works directly with your hard drive. We extract embedded previews instantly, so you can start culling 10,000+ photos the second you open a folder.
                            </p>
                        </div>

                        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

                        <div id="first-session" className="scroll-mt-28">
                            <h2>1. Your First Session</h2>
                            <p>Setting up a perfect environment is the key to speed.</p>
                            
                            <h3>Opening Your Photos</h3>
                            <ul>
                                <li><strong>Direct Access:</strong> Drag a folder from your file explorer into SnapCuller, or click the <strong>Open Folder</strong> button in the sidebar.</li>
                                <li><strong>Instant Grid:</strong> The grid will populate immediately. Even with thousands of photos, navigation remains smooth thanks to our virtualized rendering engine.</li>
                            </ul>

                            <h3>Configuring Workflow Presets</h3>
                            <p>Before you start, select a <strong>Workflow Preset</strong> in the sidebar.</p>
                            <ul>
                                <li><strong>Why?</strong> A "Wedding" shoot requires different organization than a "Sports" shoot.</li>
                                <li><strong>Customization:</strong> Presets save your bucket locations, keyboard shortcuts, and active tools (like Focus Peaking).</li>
                            </ul>
                        </div>

                        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

                        <div id="pass-one" className="scroll-mt-28">
                            <h2>2. High-Speed Culling (Pass One)</h2>
                            <p>The goal of Pass One is to remove the obvious "rejects" as fast as humanly possible.</p>

                            <h3>The "Bucket" System</h3>
                            <p>Buckets are target folders where your photos will be moved or copied instantly.</p>
                            <ol>
                                <li>Click <strong>"Add Bucket"</strong> in the sidebar.</li>
                                <li>Select a folder (e.g., <code>Keepers</code>) and assign a key (e.g., <code>K</code>).</li>
                                <li>Set the action to <strong>"Move"</strong>.</li>
                            </ol>

                            <h3>Enabling Auto-Advance</h3>
                            <p>Go to <strong>Settings &gt; General</strong> and toggle <strong>Auto-Advance</strong> to ON.</p>
                            <p><em>The Workflow:</em> When you press your bucket key, SnapCuller moves the file and instantly jumps to the next photo. You never have to press the arrow keys manually.</p>

                            <h3>Using a Gamepad</h3>
                            <p>For maximum comfort during long sessions, plug in an Xbox or PlayStation controller.</p>
                            <ul>
                                <li><strong>Thumbsticks:</strong> Navigate the grid.</li>
                                <li><strong>Triggers:</strong> Zoom in to check details.</li>
                                <li><strong>Buttons:</strong> Map them to your Buckets for tactile feedback.</li>
                            </ul>
                        </div>

                        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

                        <div id="pass-two" className="scroll-mt-28">
                            <h2>3. Critical Selection (Pass Two)</h2>
                            <p>Once you've narrowed down the field, it's time to choose the best of the best.</p>

                            <h3>Dual-Panel Compare Mode</h3>
                            <p>When you encounter a series of similar shots, press <code>C</code> to enter <strong>Compare View</strong>.</p>
                            <ul>
                                <li><strong>Zoom Sync:</strong> Click the <strong>Lock icon</strong> in the top bar. Panning or zooming in the left panel will move the right panel in perfect synchronization.</li>
                                <li><strong>Focus Peaking:</strong> Activate this in the Top Bar to see a colorful highlight on the sharpest parts of the image.</li>
                            </ul>

                            <h3>AI Face Detection & Focus Check</h3>
                            <p>Portraits require perfect focus on the eyes.</p>
                            <ol>
                                <li>Open the <strong>Faces (🔍)</strong> tab in the sidebar.</li>
                                <li>SnapCuller's AI finds every person in the photo and shows them in a filmstrip.</li>
                                <li><strong>Click a face:</strong> The viewer instantly zooms to those eyes at 100% resolution.</li>
                            </ol>
                        </div>

                        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

                        <div id="complex-shoots" className="scroll-mt-28">
                            <h2>4. Managing Complex Shoots</h2>
                            <p>Specialized tools for handling high-volume professional formats.</p>

                            <h3>RAW + JPEG Pairing</h3>
                            <p>If your camera shoots both formats simultaneously:</p>
                            <ul>
                                <li><strong>Enable Pairing:</strong> Toggle this in the sidebar.</li>
                                <li><strong>Unified Action:</strong> SnapCuller will show only one thumbnail. When you move or rate it, the "invisible" companion file is updated automatically.</li>
                            </ul>

                            <h3>Burst Stacking</h3>
                            <p>For wildlife or sports bursts:</p>
                            <ul>
                                <li><strong>Auto-Stack:</strong> Click the <strong>Stack</strong> button to group photos taken within milliseconds.</li>
                                <li><strong>Navigation:</strong> Click the <strong>Stack Badge</strong> to expand, or pick the best one and keep the rest hidden to declutter your grid.</li>
                            </ul>
                        </div>

                        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

                        <div id="metadata" className="scroll-mt-28">
                            <h2>5. Professional Metadata</h2>
                            <p>Preparing your photos for hand-off or archival.</p>

                            <h3>IPTC Templates</h3>
                            <p>Apply creator, copyright, and location data to thousands of photos in seconds.</p>
                            <ul>
                                <li>Create templates in the <strong>IPTC Modal (<code>I</code>)</strong>.</li>
                                <li>Use <strong>Dynamic Variables</strong> like <code>&#123;date&#125;</code> or <code>&#123;camera&#125;</code> to auto-fill fields.</li>
                            </ul>

                            <h3>Code Replacements</h3>
                            <p>Stop typing long names or venue descriptions manually.</p>
                            <ul>
                                <li><strong>Setup:</strong> Import a .TSV file with your codes (e.g., <code>j10 = Lionel Messi</code>).</li>
                                <li><strong>Usage:</strong> Type <code>=j10=</code> in any metadata field for instant expansion.</li>
                            </ul>
                        </div>

                        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

                        <div id="exporting" className="scroll-mt-28">
                            <h2>6. Exporting & Finalizing</h2>
                            <p>The final step before moving to your editing suite.</p>

                            <h3>The Export Modal</h3>
                            <p>Select your keepers and click <strong>Export</strong> in the sidebar:</p>
                            <ul>
                                <li><strong>Subfolder Grouping:</strong> Organize exports by Rating, Lens, or Capture Date.</li>
                                <li><strong>Selective RAW Keeping:</strong> Keep RAW files only for high-star shots, and JPEGs for the rest to save massive disk space.</li>
                            </ul>

                            <h3>Handing Off to Lightroom</h3>
                            <p>SnapCuller writes industry-standard <strong>.XMP sidecar files</strong>.</p>
                            <ol>
                                <li>Finish your culling in SnapCuller.</li>
                                <li>Import the folder into Lightroom or Capture One.</li>
                                <li>Ratings, labels, and metadata appear <strong>automatically</strong>.</li>
                            </ol>
                        </div>

                        <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

                        <div id="shortcuts" className="scroll-mt-28 mb-20">
                            <h2>Quick Reference</h2>
                            <table className="text-sm">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Action</th>
                                        <th>Shortcut</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={2} className="font-bold">Views</td>
                                        <td>Grid View</td>
                                        <td><kbd>G</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Compare Mode</td>
                                        <td><kbd>C</kbd></td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3} className="font-bold">Analysis</td>
                                        <td>Focus Peaking</td>
                                        <td><kbd>Shift</kbd> + <kbd>P</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Exposure Zebras</td>
                                        <td><kbd>J</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Toggle Zoom</td>
                                        <td><kbd>Space</kbd> or <kbd>Double-Click</kbd></td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={4} className="font-bold">Culling</td>
                                        <td>Flag Pick / Reject</td>
                                        <td><kbd>P</kbd> / <kbd>X</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Open in Editor</td>
                                        <td><kbd>E</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Edit IPTC</td>
                                        <td><kbd>I</kbd></td>
                                    </tr>
                                    <tr>
                                        <td>Face Panel</td>
                                        <td><kbd>F</kbd></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
