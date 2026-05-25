import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Is Astra Client free to use?",
        answer: "Yes, Astra Client is completely free to download and use. We believe in providing a premium, optimized Minecraft experience for everyone."
    },
    {
        question: "Will I get banned on servers for using Astra Client?",
        answer: "No. Astra Client only includes utility and performance mods that are generally accepted by most major Minecraft servers. However, we always recommend checking the rules of specific servers you join, as some competitive servers may restrict certain HUD elements or mods."
    },
    {
        question: "How much FPS increase can I expect?",
        answer: "FPS increases vary wildly depending on your hardware. Players on lower-end systems often see a massive 2x to 3x increase in frame rates, while higher-end setups will experience more stable frame times, reduced stuttering, and smoother gameplay overall."
    },
    {
        question: "Can I use custom mods with Astra Client?",
        answer: "To ensure maximum stability, security, and performance, Astra Client acts as a closed ecosystem. You cannot drag and drop external mods into the client. However, we continuously listen to community feedback and regularly add highly requested, optimized mods to our official roster."
    },
    {
        question: "Does Astra Client support macOS or Linux?",
        answer: "Currently, our main focus is providing the ultimate experience for Windows users. Support for macOS and Linux is on our long-term roadmap as we continue to grow."
    },
    {
        question: "How do I install custom capes or cosmetics?",
        answer: "You can link your Minecraft account and equip free/premium cosmetics through the Astra Client website dashboard. Once equipped on the site, they will automatically sync and appear instantly in-game to all other Astra Client users."
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
                border: `1px solid ${isOpen ? 'rgba(134, 64, 239, 0.35)' : 'rgba(255, 255, 255, 0.04)'}`,
                borderRadius: '16px',
                marginBottom: '1rem',
                overflow: 'hidden',
                boxShadow: isOpen ? '0 10px 30px rgba(134, 64, 239, 0.06)' : 'none',
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
    const [openIndex, setOpenIndex] = useState(0); // The first item is open by default

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div style={{ paddingTop: 'clamp(100px, 15vh, 140px)', minHeight: '100vh', backgroundColor: 'var(--bg-darker)', paddingBottom: '4rem', overflow: 'hidden' }}>

            {/* Header Section */}
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
                            background: 'rgba(134, 64, 239, 0.1)',
                            padding: '0.4rem 1.2rem',
                            borderRadius: '50px',
                            border: '1px solid rgba(134, 64, 239, 0.2)'
                        }}
                    >
                        Support
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
                        Everything you need to know about the Astra Client, how it works, and how to get the most out of it.
                    </motion.p>
                </div>
            </section>

            {/* Main FAQ Accordion */}
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

                {/* Contact CTA */}
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
                    <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: '700', marginBottom: '0.8rem' }}>Still have questions?</h3>
                    <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '0.95rem' }}>
                        Our support team is active on Discord to help you configure your client perfectly.
                    </p>
                    <a
                        href="https://discord.gg/5AEp4bgund"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', display: 'inline-block' }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 12px 25px rgba(134, 64, 239, 0.45)' }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.8rem 2rem', borderRadius: '50px' }}
                        >
                            <MessageSquare size={18} /> Join our Discord
                        </motion.button>
                    </a>
                </motion.div>
            </section>

        </div>
    );
};

export default FAQPage;
