import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
        <div
            style={{
                background: isOpen ? 'rgba(30, 35, 45, 0.8)' : 'var(--bg-card)',
                border: `1px solid ${isOpen ? 'rgba(134, 64, 239, 0.3)' : 'rgba(255, 255, 255, 0.05)'}`,
                borderRadius: '16px',
                marginBottom: '1rem',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
        >
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-main)',
                    fontSize: '1.15rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                {faq.question}
                <div style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: isOpen ? 'var(--primary)' : 'var(--text-muted)'
                }}>
                    <ChevronDown size={24} />
                </div>
            </button>

            <div
                style={{
                    maxHeight: isOpen ? '500px' : '0',
                    opacity: isOpen ? 1 : 0,
                    padding: isOpen ? '0 2rem 1.5rem 2rem' : '0 2rem',
                    color: '#94a3b8',
                    lineHeight: '1.6',
                    fontSize: '1.05rem',
                    transition: 'all 0.4s ease',
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
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-darker)' }}>

            {/* Header Section */}
            <section style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '500px', height: '150px',
                    background: 'var(--primary)',
                    filter: 'blur(150px)', opacity: 0.15,
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{
                        color: 'var(--primary)',
                        fontWeight: '800',
                        fontSize: '0.85rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '1rem',
                        background: 'rgba(134, 64, 239, 0.1)',
                        padding: '0.4rem 1rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(134, 64, 239, 0.2)'
                    }}>
                        Support
                    </span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px' }}>
                        Frequently Asked <span style={{ color: 'var(--primary)' }}>Questions</span>
                    </h1>
                    <p style={{ color: '#94a3b8', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto', fontWeight: '400' }}>
                        Everything you need to know about the Astra Client, how it works, and how to get the most out of it.
                    </p>
                </div>
            </section>

            {/* Main FAQ Accordion */}
            <section className="container" style={{ paddingBottom: '8rem' }}>
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
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '24px',
                    padding: '3rem 2rem',
                    maxWidth: '800px',
                    margin: '5rem auto 0'
                }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Still have questions?</h3>
                    <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
                        Our support team is active on Discord to help you configure your client perfectly.
                    </p>
                    <a
                        href="https://discord.gg/5AEp4bgund"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'var(--primary)',
                            color: '#fff',
                            fontWeight: '600',
                            fontSize: '1rem',
                            padding: '0.8rem 2rem',
                            borderRadius: '50px',
                            border: 'none',
                            textDecoration: 'none',
                            display: 'inline-block',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 10px 20px rgba(134, 64, 239, 0.3)'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 15px 25px rgba(134, 64, 239, 0.4)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 10px 20px rgba(134, 64, 239, 0.3)';
                        }}
                    >
                        Join our Discord
                    </a>
                </div>
            </section>

        </div>
    );
};

export default FAQPage;
