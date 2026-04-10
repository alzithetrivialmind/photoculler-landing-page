import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
    {
        question: "Is SnapCuller free?",
        answer: "Yes! SnapCuller has a generous free tier for standard photos. You can view, Pan/Zoom, and sort JPG/PNG files instantly. The Pro version unlocks professional RAW support, unlimited workflow presets, advanced EXIF filtering, and seamless Lightroom integration."
    },
    {
        question: "What camera formats are supported?",
        answer: "SnapCuller Pro supports professional RAW formats from all major manufacturers, including Sony (ARW), Canon (CR2/CR3), Nikon (NEF), Fujifilm (RAF), and more. It also handles iPhone HEIC files perfectly."
    },
    {
        question: "Does it work offline?",
        answer: "Absolutely. SnapCuller is a desktop-native app that runs 100% on your machine. Your photos never leave your device, and you don't need an internet connection to cull your shoots with lightning speed."
    },
    {
        question: "How does it sync with Lightroom?",
        answer: "SnapCuller uses industry-standard sidecar files. When you rate or label a photo, it creates a small metadata file that Adobe Lightroom and Capture One read automatically. Your sorting work is preserved perfectly."
    },
    {
        question: "Do you offer refunds?",
        answer: "We offer a fully featured Free Version so you can test SnapCuller thoroughly before purchasing. Because of this opportunity to 'try before you buy', we do not provide refunds for Pro licenses. We recommend exploring the free edition to ensure it meets your needs."
    },
    {
        question: "What platforms are supported?",
        answer: "SnapCuller is currently optimized for Windows 10 and 11. We are working hard to bring this same speed to macOS and other platforms very soon."
    },
    {
        question: "How is this different from existing tools?",
        answer: "Most tools are bloated with editing features that slow down the initial selection process. SnapCuller is built with one goal: Speed. It's about muscle memory, zero import lag, and getting your best shots found in record time."
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
                <span className="text-lg font-brand font-bold pr-4 text-foreground group-hover:text-primary transition-colors">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className={`h-5 w-5 transition-colors ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
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
                        <p className="pb-6 text-muted-foreground leading-relaxed font-medium">
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
                    <h2 className="text-4xl md:text-6xl font-brand font-black mb-6 tracking-tighter text-foreground">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        Everything you need to know about SnapCuller.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto rounded-3xl glass-card p-2 md:p-8 border border-border">
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
