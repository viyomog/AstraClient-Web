import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const questions = [
        {
            q: "Is AstraClient free to use?",
            a: "Yes! AstraClient is completely free to use. There are no hidden fees or subscriptions."
        },
        {
            q: "Does it support Fabric mods?",
            a: "Absolutely. AstraClient is built with native Fabric support. You can install any Fabric mod directly into your version folder."
        },
        {
            q: "How do I install it?",
            a: "Simply download the .exe installer from our Download page, run it, and follow the on-screen instructions. It will automatically detect your Minecraft installation."
        },
        {
            q: "Is it safe? Will I get banned?",
            a: "AstraClient is safe to use and verified. It complies with most server rules, but always check specific server regulations regarding client modifications."
        },
        {
            q: "How do I allocate more RAM?",
            a: "Go to the Settings tab in the launcher and use the slider to adjust the RAM allocation based on your system's memory."
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">Frequently Asked <span className="text-[var(--primary)]">Questions</span></h1>

            <div className="space-y-4">
                {questions.map((item, index) => (
                    <Accordion key={index} question={item.q} answer={item.a} />
                ))}
            </div>
        </div>
    );
}

function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-[rgba(255,255,255,0.05)] rounded-xl bg-[var(--bg-1)] overflow-hidden transition-colors hover:border-[rgba(255,255,255,0.1)]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-lg focus:outline-none"
            >
                <span>{question}</span>
                <ChevronDown
                    className={`text-[var(--text-1)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={20}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 text-[var(--text-1)] leading-relaxed text-sm border-t border-[rgba(255,255,255,0.05)] pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
