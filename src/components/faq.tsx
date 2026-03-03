import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
    {
        question: "Is PhotoCuller free?",
        answer: "Yes! PhotoCuller has a generous free tier that includes blazing fast JPG/PNG viewing, basic culling with move/copy, zoom & pan, and up to 3 custom buckets. The Pro version unlocks RAW support, star ratings, color labels, XMP sidecar export, batch rename, and more."
    },
    {
        question: "What RAW formats are supported?",
        answer: "PhotoCuller Pro supports all major RAW formats including Canon CR2/CR3, Sony ARW, Nikon NEF, Adobe DNG, Panasonic RW2, Olympus ORF, Sony SR2, and Fujifilm RAF. We use a multi-strategy extraction pipeline for the fastest possible preview loading."
    },
    {
        question: "Does it work offline?",
        answer: "Absolutely. PhotoCuller runs 100% locally on your computer. Your photos never leave your device, and no internet connection is required for any feature. The only exception is the initial license activation for Pro users."
    },
    {
        question: "Is it compatible with Lightroom?",
        answer: "Yes! PhotoCuller exports ratings and color labels as standard XMP sidecar files (.xmp). When you open your photos in Adobe Lightroom or Capture One, the ratings and labels are automatically imported."
    },
    {
        question: "What platforms are supported?",
        answer: "PhotoCuller is currently available for Windows 10/11. macOS support is planned and coming soon. The app is built with Electron, so Linux support is also on our roadmap."
    },
    {
        question: "How is this different from Photo Mechanic?",
        answer: "PhotoCuller is designed to be faster and simpler for the culling workflow specifically. It features a modern UI, native RAW previews with progressive loading, and a one-time payment instead of a subscription. It's built for photographers who want speed without complexity."
    },
]

function FaqItem({ question, answer, isOpen, onClick }: {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className="text-lg font-semibold pr-4 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="h-5 w-5 text-neutral-400" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
                        Frequently Asked <span className="text-indigo-500 dark:text-indigo-400">Questions</span>
                    </h2>
                    <p className="text-xl text-neutral-500 dark:text-neutral-400">
                        Everything you need to know about PhotoCuller.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-2 md:p-8">
                    {faqs.map((faq, i) => (
                        <FaqItem
                            key={i}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
