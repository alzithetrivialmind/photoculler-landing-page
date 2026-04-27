import { motion } from "framer-motion"
import { Scale, CreditCard, Ban, Sparkles, AlertCircle, Bookmark, LogOut, Gavel, Mail, ArrowLeft } from "lucide-react"
import Layout from "@/components/layout"
import { SEO } from "@/components/seo"

export function TermsPage() {
    return (
        <Layout>
            <SEO 
                title="Terms of Service" 
                description="Read our standard license and usage terms. SnapCuller is built to speed up your professional photography workflow." 
                keywords="SnapCuller license, terms of service, software license, professional photo tool terms"
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
                            Terms of <span className="text-indigo-500 dark:text-indigo-400">Service</span>
                        </h1>
                        <p className="text-neutral-500 dark:text-neutral-400 font-medium">
                            Last Updated: April 1, 2026
                        </p>
                    </motion.div>

                    {/* Intro */}
                    <section className="mb-12 prose dark:prose-invert max-w-none">
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                            Please read these Terms of Service ("Terms") carefully before using the SnapCuller application ("Software"). By using the Software, you agree to be bound by these Terms.
                        </p>
                    </section>

                    {/* Sections */}
                    <div className="space-y-12">
                        {/* 1. License Grant */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                                    <Scale className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-bold font-black tracking-tight text-foreground">1. License Grant</h2>
                            </div>
                            <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                                <p>SnapCuller grants you a non-exclusive, non-transferable license for personal or commercial workflows:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-foreground">Lifetime License</strong>: Perpetual access to the version purchased.</li>
                                    <li><strong className="text-foreground">Updates</strong>: Includes minor updates (e.g., v1.1 to v1.2) for free. Major upgrades (e.g., v2.0) may require a fee.</li>
                                    <li><strong className="text-foreground">Quantity Limit</strong>: Maximum of <strong className="text-indigo-500 font-bold underline decoration-indigo-500/30">two (2) devices</strong> per license key.</li>
                                </ul>
                            </div>
                        </motion.section>

                        {/* 2. Pricing & Payments */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                                    <CreditCard className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-bold">2. Pricing and Payments</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                                    <h3 className="font-bold mb-2">Price</h3>
                                    <p className="text-2xl font-black text-indigo-500 mb-2">$29 USD</p>
                                    <p className="text-xs text-neutral-500 leading-relaxed italic opacity-80">
                                        *or equivalent in local currency via Gumroad.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                                    <h3 className="font-bold mb-2 text-indigo-500">Purchase Policy</h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        To ensure SnapCuller fits your workflow, we provide a fully functional Free Version for evaluation. Because of this "try before you buy" opportunity, we do not offer refunds once a Pro license has been purchased.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* 3. Restrictions */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-xl bg-red-500/10 text-red-500">
                                    <Ban className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-bold">3. Usage Restrictions</h2>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-4">You agree not to:</p>
                            <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                                {[
                                    "Reverse engineer or decompile the software",
                                    "Rent, lease, or sublicense to third parties",
                                    "Use for illegal activities or prohibited content",
                                    "Distribute license keys publicly"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900/40 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800">
                                        <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        {/* 4. AI Feature */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-indigo-500/20 bg-indigo-500/5"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Sparkles className="h-6 w-6 text-indigo-500" />
                                <h2 className="text-2xl font-bold">4. AI Feature Disclaimer</h2>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed italic opacity-90">
                                SnapCuller includes AI-powered features (e.g., face detection). These are provided "as-is". We do not guarantee 100% accuracy, and users are responsible for final image selections.
                            </p>
                        </motion.section>

                        {/* 5. Limitation of Liability */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                        >
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <AlertCircle className="h-6 w-6 text-red-500" />
                                5. LIMITATION OF LIABILITY
                            </h2>
                            <p className="text-sm font-black uppercase tracking-tight leading-relaxed opacity-90">
                                THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. IN NO EVENT SHALL SNAPCULLER, ALZI, OR CV DIGISENTRAL SOLUSI BE LIABLE FOR ANY DAMAGES, INCLUDING DATA LOSS, CORRUPTION OF FILES, FINANCIAL LOSS, OR BUSINESS INTERRUPTION. USERS ARE STRONGLY ADVISED TO ALWAYS MAINTAIN A BACKUP OF THEIR PHOTO DATA.
                            </p>
                        </motion.section>

                        {/* 6. Intellectual Property */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                                    <Bookmark className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-bold">6. Intellectual Property</h2>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                SnapCuller branding and code is the intellectual property of <strong>Alzi</strong>. The Software is licensed and distributed by <strong>CV Digisentral Solusi</strong>.
                            </p>
                        </motion.section>

                        {/* 7 & 8: Termination & Law */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.section 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <LogOut className="h-5 w-5 text-indigo-500" />
                                    7. Termination
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                    We reserve the right to terminate your license if you violate these Terms, particularly regarding license distribution or reverse engineering.
                                </p>
                            </motion.section>

                            <motion.section 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Gavel className="h-5 w-5 text-indigo-500" />
                                    8. Governing Law
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                    These Terms shall be governed by and construed in accordance with the laws of <strong>Indonesia</strong>.
                                </p>
                            </motion.section>
                        </div>

                        {/* Contact */}
                        <motion.section 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-neutral-100 dark:bg-neutral-900/50 rounded-3xl p-8 md:p-12 text-center"
                        >
                            <Mail className="h-12 w-12 mx-auto mb-6 text-indigo-500" />
                            <h2 className="text-3xl font-black mb-4 tracking-tight">9. Contact</h2>
                            <p className="mb-8 text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
                                For support or inquiries regarding these Terms, please reach out to our team.
                            </p>
                            <a 
                                href="mailto:support@snapculler.com"
                                className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
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
