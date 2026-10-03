import React from 'react';
import { Archive, ArrowLeft, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DownloadPage = () => {
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
                            background: 'rgba(124, 58, 237, 0.1)',
                            padding: '0.4rem 1.2rem',
                            borderRadius: '50px',
                            border: '1px solid rgba(124, 58, 237, 0.2)'
                        }}
                    >
                        Astra Client • Discontinued
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px' }}
                    >
                        Downloads <span style={{ color: 'var(--primary)' }}>Closed</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ color: '#94a3b8', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', maxWidth: '650px', margin: '0 auto', fontWeight: '400', padding: '0 1rem', lineHeight: '1.6' }}
                    >
                        Astra Client has been officially discontinued. Active releases, installations, and downloads are no longer provided.
                    </motion.p>
                </div>
            </section>

            <motion.section 
                className="container" 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ paddingBottom: '3rem' }}
            >
                <div style={{
                    maxWidth: '750px',
                    margin: '0 auto'
                }}>
                    <motion.div 
                        variants={cardVariants}
                        style={{
                            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(10, 13, 20, 0.8) 100%)',
                            border: '1px solid rgba(124, 58, 237, 0.35)',
                            borderRadius: '24px',
                            padding: 'clamp(2rem, 5vw, 3.5rem)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem'
                        }}
                    >
                        <div style={{
                            width: '72px', height: '72px', borderRadius: '20px',
                            background: 'rgba(124, 58, 237, 0.15)',
                            border: '1px solid rgba(124, 58, 237, 0.35)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)'
                        }}>
                            <Archive size={36} />
                        </div>

                        <div>
                            <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '800', marginBottom: '0.75rem', color: '#fff' }}>
                                Project Development Has Concluded
                            </h2>
                            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.7', maxWidth: '580px', margin: '0 auto' }}>
                                Development and updates have been stopped. The client is no longer offered as an active download. We deeply appreciate everyone who was part of the Astra Client community, tested releases, and shared feedback.
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <motion.button 
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(134, 64, 239, 0.5)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary"
                                    style={{ gap: '8px', padding: '0.8rem 1.8rem' }}
                                >
                                    <ArrowLeft size={16} /> Return to Homepage
                                </motion.button>
                            </Link>
                            <Link to="/features" style={{ textDecoration: 'none' }}>
                                <motion.button 
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.06)' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-outline"
                                    style={{ gap: '8px', padding: '0.8rem 1.8rem' }}
                                >
                                    <Compass size={16} /> View Feature Archive
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3.5rem', padding: '0 1rem' }}>
                    <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5' }}>
                        View our archived <Link to="/terms" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Terms of Service</Link> and <Link to="/privacy" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Privacy Policy</Link>.
                    </p>
                </div>

            </motion.section>
        </div>
    );
};

export default DownloadPage;
