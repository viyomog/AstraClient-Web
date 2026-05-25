import React from 'react';
import { Download, Monitor, Apple, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DownloadPage = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <div style={{ paddingTop: 'clamp(100px, 15vh, 140px)', minHeight: '100vh', backgroundColor: 'var(--bg-darker)', overflow: 'hidden', paddingBottom: '4rem' }}>

            {/* Header Section */}
            <section style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: 'min(90vw, 600px)', height: '200px',
                    background: 'var(--primary)',
                    filter: 'blur(150px)', opacity: 0.15,
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
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
                        Get Astra
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px' }}
                    >
                        Download <span style={{ color: 'var(--primary)' }}>Astra</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ color: '#94a3b8', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', maxWidth: '600px', margin: '0 auto', fontWeight: '400', padding: '0 1rem', lineHeight: '1.6' }}
                    >
                        Join thousands of players and elevate your Minecraft experience today. Choose your operating system below.
                    </motion.p>
                </div>
            </section>

            {/* Main Download Options */}
            <motion.section 
                className="container" 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ paddingBottom: '3rem' }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>

                    {/* Windows - Active */}
                    <motion.div 
                        variants={cardVariants}
                        whileHover={{ y: -4, scale: 1.01 }}
                        style={{
                            background: 'linear-gradient(135deg, rgba(134, 64, 239, 0.12) 0%, rgba(10, 13, 20, 0.8) 100%)',
                            border: '1px solid rgba(134, 64, 239, 0.45)',
                            borderRadius: '24px',
                            padding: 'clamp(1.5rem, 4vw, 3rem)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 0 40px rgba(134, 64, 239, 0.05)',
                            position: 'relative',
                            overflow: 'hidden'
                        }} 
                        className="flex-responsive"
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div style={{
                                width: '70px', height: '70px', borderRadius: '18px',
                                background: 'rgba(134, 64, 239, 0.18)',
                                border: '1px solid rgba(134, 64, 239, 0.4)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)'
                            }}>
                                <Monitor size={36} />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', fontWeight: '800' }}>Windows</h2>
                                    <span style={{
                                        background: 'rgba(16, 185, 129, 0.12)', color: '#10b981',
                                        padding: '0.2rem 0.8rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', border: '1px solid rgba(16, 185, 129, 0.25)'
                                    }}>Recommended</span>
                                </div>
                                <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Supports Windows 10 & 11 (64-bit)</p>
                            </div>
                        </div>

                        <motion.a
                            href="https://github.com/viyomog/AstraClient/releases/latest/download/AstraClient-Setup.exe"
                            whileHover={{ scale: 1.05, boxShadow: '0 12px 25px rgba(134, 64, 239, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'linear-gradient(135deg, var(--primary) 0%, #a855f7 100%)',
                                color: '#fff',
                                padding: '1rem 2rem',
                                borderRadius: '12px',
                                textDecoration: 'none',
                                fontWeight: '800',
                                fontSize: '1.05rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                marginLeft: 'auto',
                                boxShadow: '0 8px 16px rgba(134, 64, 239, 0.25)',
                                whiteSpace: 'nowrap'
                            }}
                            className="md-hidden-margin"
                        >
                            <Download size={18} /> Download setup
                        </motion.a>
                    </motion.div>

                    {/* macOS - Coming Soon */}
                    <motion.div 
                        variants={cardVariants}
                        style={{
                            background: 'rgba(10, 13, 20, 0.5)',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                            borderRadius: '24px',
                            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                            opacity: 0.5
                        }} 
                        className="flex-responsive"
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div style={{
                                width: '60px', height: '60px', borderRadius: '16px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'
                            }}>
                                <Apple size={30} />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.5rem)', fontWeight: '700', marginBottom: '0.2rem', color: '#94a3b8' }}>macOS</h2>
                                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Apple Silicon & Intel supported</p>
                            </div>
                        </div>

                        <button
                            disabled
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                color: '#64748b',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                padding: '0.8rem 1.8rem',
                                borderRadius: '12px',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                cursor: 'not-allowed',
                                marginLeft: 'auto'
                            }}
                            className="md-hidden-margin"
                        >
                            Coming Soon
                        </button>
                    </motion.div>

                    {/* Linux - Coming Soon */}
                    <motion.div 
                        variants={cardVariants}
                        style={{
                            background: 'rgba(10, 13, 20, 0.5)',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                            borderRadius: '24px',
                            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                            opacity: 0.5
                        }} 
                        className="flex-responsive"
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div style={{
                                width: '60px', height: '60px', borderRadius: '16px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'
                            }}>
                                <Terminal size={30} />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.5rem)', fontWeight: '700', marginBottom: '0.2rem', color: '#94a3b8' }}>Linux</h2>
                                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>AppImage, Flatpak, and .deb</p>
                            </div>
                        </div>

                        <button
                            disabled
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                color: '#64748b',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                padding: '0.8rem 1.8rem',
                                borderRadius: '12px',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                cursor: 'not-allowed',
                                marginLeft: 'auto'
                            }}
                            className="md-hidden-margin"
                        >
                            Coming Soon
                        </button>
                    </motion.div>

                </div>

                <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '0 1rem' }}>
                    <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5' }}>
                        By downloading Astra Client, you agree to our <Link to="/terms" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Terms of Service</Link> and <Link to="/privacy" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Privacy Policy</Link>.
                    </p>
                </div>

            </motion.section>
        </div>
    );
};

export default DownloadPage;
