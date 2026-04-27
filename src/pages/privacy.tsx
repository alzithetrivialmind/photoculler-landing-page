import { motion } from "framer-motion"
import { Shield, Lock, Eye, Database, Globe, UserCheck, Mail, ArrowLeft } from "lucide-react"
import Layout from "@/components/layout"
import { SEO } from "@/components/seo"

export function PrivacyPage() {
    return (
        <Layout>
            <SEO 
                title="Privacy Policy" 
                description="SnapCuller is built with human privacy in mind. We don't collect personal information or use your photos for AI training. All processing is local." 
                keywords="SnapCuller privacy, photo data security, local-first software, no-upload photography tool"
            />
            <main className="pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </a>
                        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                            Privacy <span className="text-indigo-500 dark:text-indigo-400">Policy</span>
                        </h1>
                        <p className="text-neutral-500 dark:text-neutral-400 font-medium">
                            Last Updated: April 1, 2026
                        </p>
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-12">
                        <section className="prose dark:prose-invert max-w-none">
                            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                                At SnapCuller, we value your privacy. This Privacy Policy describes how we collect, use, and protect your information when you use the SnapCuller application and visit our website.
                            </p>
                        </section>

                        {/* Section 1: Local-First */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                                    <Lock className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-bold">1. Local-First Data Processing</h2>
                            </div>
                            <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                                <p>SnapCuller is a desktop application designed to process your photos locally on your computer.</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-foreground">No Photo Uploads</strong>: Your photos and their associated metadata (XMP/IPTC) are never uploaded to our servers. All culling, sorting, and AI-powered face detection happen entirely on your machine.</li>
                                    <li><strong className="text-foreground">No Image Access</strong>: We do not have access to your image files at any time.</li>
                                    <li><strong className="text-foreground">AI Processing</strong>: Facial detection and focus peaking features run using a local AI model on your device. No biometric data, facial representations, or images are ever transmitted to our servers or any third party.</li>
                                </ul>
                            </div>
                        </motion.section>

                        {/* Section 2: Info We Collect */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                                    <Database className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-bold">2. Information We Collect</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                                    <h3 className="font-bold mb-3 flex items-center gap-2">
                                        <UserCheck className="h-4 w-4 text-indigo-500" />
                                        Licensing Information
                                    </h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        When you purchase and activate SnapCuller, we use <strong>Gumroad</strong> as our payment and licensing provider. Data processed includes:
                                    </p>
                                    <ul className="text-sm text-neutral-500 mt-2 list-dash pl-4">
                                        <li>License Key (from Gumroad)</li>
                                        <li>Email Address (from purchase)</li>
                                        <li>Machine ID (non-reversible hashed identifier)</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                                    <h3 className="font-bold mb-3 flex items-center gap-2">
                                        <Globe className="h-4 w-4 text-indigo-500" />
                                        Software Updates
                                    </h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        SnapCuller checks for updates via <strong>GitHub Releases</strong>. This involves checking the version number and does not collect personal data.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section 3: Hosting */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                                    <Eye className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-bold">3. Website Hosting & Technical Logs</h2>
                            </div>
                             <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                                <p>Our landing page is hosted on <strong>Vercel</strong>. Vercel automatically collects standard technical information for security and performance purposes:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>IP Address, Browser Type, Access Time</li>
                                </ul>
                                <p className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-medium">
                                    We do not use third-party tracking tools such as Google Analytics, Meta Pixel, or other marketing cookies.
                                </p>
                            </div>
                        </motion.section>

                        {/* Section 4 & 5: Security & Rights */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.section 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-indigo-500" />
                                    4. Data Security
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                    We take reasonable measures to protect your information from unauthorized access. Licensing data is stored securely by Gumroad. Local settings remain on your device.
                                </p>
                            </motion.section>

                            <motion.section 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <UserCheck className="h-5 w-5 text-indigo-500" />
                                    5. Your Rights
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                    In accordance with regulations like GDPR or Indonesia's UU PDP, you have the right to access, rectify, or request deletion of your licensing data.
                                </p>
                            </motion.section>
                        </div>

                        {/* Contact */}
                        <motion.section 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white"
                        >
                            <Mail className="h-12 w-12 mx-auto mb-6 opacity-80" />
                            <h2 className="text-3xl font-black mb-4 tracking-tight text-white">6. Contact Us</h2>
                            <p className="mb-8 opacity-90 max-w-lg mx-auto">
                                If you have any questions about this Privacy Policy, please reach out to our team.
                            </p>
                            <a 
                                href="mailto:support@snapculler.com"
                                className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-neutral-100 transition-colors"
                            >
                                support@snapculler.com
                            </a>
                        </motion.section>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
