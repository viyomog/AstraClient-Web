import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Is Astra Client still being developed?",
        answer: "No. Astra Client has officially been discontinued and is no longer receiving active development or updates."
    },
    {
        question: "Will Astra Client return?",
        answer: "There are currently no plans for active development. If time allows in the future, Astra Client may return, but there is no confirmed return date."
    },
    {
        question: "Can I still download Astra Client?",
        answer: "Astra Client is no longer available as an actively supported download. The website is now an archive of the project and its development journey."
    },
    {
        question: "Why was Astra Client discontinued?",
        answer: "Development was discontinued due to time, priorities, and the practical difficulty of continuing to maintain the project. This decision allows the project to remain archived rather than continue without consistent development and support."
    },
    {
        question: "Will the Discord community remain?",
        answer: "The community can remain as a place for existing users and people who were part of the Astra Client journey."
    },
    {
        question: "How did Astra Client achieve high FPS?",
        answer: "During its development, Astra Client leveraged tailored Java garbage collection optimizations, thread allocation tuning, and custom rendering pipelines to maximize FPS and deliver consistent frametimes."
    }
];

const FAQItem = ({ faq, isOpen, onClick, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            style={{
                background: isOpen ? 'rgba(30, 35, 45, 0.7)' : 'var(--bg-card)',
                border: `1px solid ${isOpen ? 'rgba(124, 58, 237, 0.35)' : 'rgba(255, 255, 255, 0.04)'}`,
                borderRadius: '16px',
                marginBottom: '1rem',
                overflow: 'hidden',
                boxShadow: isOpen ? '0 10px 30px rgba(124, 58, 237, 0.06)' : 'none',
                transition: 'background-color 0.3s, border-color 0.3s'
            }}
        >
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1.2rem, 4vw, 2rem)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-main)',
                    fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem'
                }}
            >
                {faq.question}
                <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    style={{
                        color: isOpen ? 'var(--primary)' : 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}
                >
                    <ChevronDown size={20} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{
                            padding: '0 clamp(1.2rem, 4vw, 2rem) 1.5rem clamp(1.2rem, 4vw, 2rem)',
                            color: '#94a3b8',
                            lineHeight: '1.6',
                            fontSize: 'clamp(0.9rem, 2vw, 1.02rem)'
                        }}>
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div style={{ paddingTop: 'clamp(100px, 15vh, 140px)', minHeight: '100vh', backgroundColor: 'var(--bg-darker)', paddingBottom: '4rem', overflow: 'hidden' }}>

            <section style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: 'min(90vw, 500px)', height: '150px',
                    background: 'var(--primary)',
                    filter: 'blur(150px)', opacity: 0.15,
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            color: 'var(--primary)',
                            fontWeight: '800',
                            fontSize: '0.85rem',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '1rem',
                            background: 'rgba(124, 58, 237, 0.1)',
                            padding: '0.4rem 1.2rem',
                            borderRadius: '50px',
                            border: '1px solid rgba(124, 58, 237, 0.2)'
                        }}
                    >
                        Project FAQ
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px' }}
                    >
                        Frequently Asked <span style={{ color: 'var(--primary)' }}>Questions</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ color: '#94a3b8', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', maxWidth: '600px', margin: '0 auto', fontWeight: '400', padding: '0 1rem', lineHeight: '1.6' }}
                    >
                        Information regarding the project's current discontinued status, development history, and future outlook.
                    </motion.p>
                </div>
            </section>

            <section className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => toggleFaq(index)}
                        />
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    style={{
                        marginTop: '4rem',
                        textAlign: 'center',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '24px',
                        padding: 'clamp(1.5rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)',
                        maxWidth: '800px',
                        margin: '4rem auto 0',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
                    }}
                >
                    <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: '700', marginBottom: '0.8rem' }}>Community Questions</h3>
                    <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '0.95rem' }}>
                        Astra Client is officially discontinued and active support is no longer provided. You can still visit the community archive.
                    </p>
                    <a
                        href="https://discord.gg/5AEp4bgund"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', display: 'inline-block' }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 12px 25px rgba(124, 58, 237, 0.45)' }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.8rem 2rem', borderRadius: '50px' }}
                        >
                            <MessageSquare size={18} /> Community Archive
                        </motion.button>
                    </a>
                </motion.div>
            </section>

        </div>
    );
};

export default FAQPage;
