import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';

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

const FAQItem = ({ faq, isOpen, onClick }) => {
    return (
        <div className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    padding: '1.25rem 1.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-main)',
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem'
                }}
            >
                {faq.question}
                <div style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    color: isOpen ? 'var(--primary-hover)' : 'var(--text-muted)',
                    flexShrink: 0
                }}>
                    <ChevronDown size={20} />
                </div>
            </button>

            <div
                style={{
                    maxHeight: isOpen ? '300px' : '0',
                    opacity: isOpen ? 1 : 0,
                    padding: isOpen ? '0 1.75rem 1.25rem 1.75rem' : '0 1.75rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden'
                }}
            >
                {faq.answer}
            </div>
        </div>
    );
};

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(0); // The first item is open by default

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-darker)' }}>

            {/* Header Section */}
            <section style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative' }} className="animate-fade-in-up">
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: 'min(500px, 90vw)', height: '150px',
                    background: 'var(--primary)',
                    filter: 'blur(150px)', opacity: 0.15,
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{
                        color: 'var(--primary-hover)',
                        fontWeight: '800',
                        fontSize: '0.8rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '1.25rem',
                        background: 'rgba(134, 64, 239, 0.08)',
                        padding: '0.4rem 1.2rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(134, 64, 239, 0.2)'
                    }}>
                        Support
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px' }}>
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                        Everything you need to know about the Astra Client, how it works, and how to get the most out of it.
                    </p>
                </div>
            </section>

            {/* Main FAQ Accordion */}
            <section className="container animate-fade-in-up delay-100" style={{ paddingBottom: '8rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => toggleFaq(index)}
                        />
                    ))}
                </div>

                {/* Contact CTA */}
                <div style={{
                    marginTop: '5rem',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.01)',
                    border: '1px solid var(--border)',
                    borderRadius: '24px',
                    padding: '3rem 2rem',
                    maxWidth: '800px',
                    margin: '5rem auto 0',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem' }}>Still have questions?</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                        Our support team is active on Discord to help you configure your client perfectly.
                    </p>
                    <a
                        href="https://discord.gg/5AEp4bgund"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{
                            padding: '0.8rem 2.2rem',
                            borderRadius: '50px',
                            gap: '0.5rem'
                        }}
                    >
                        <MessageSquare size={16} /> Join our Discord
                    </a>
                </div>
            </section>

        </div>
    );
};

export default FAQPage;
