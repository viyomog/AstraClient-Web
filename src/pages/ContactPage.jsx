import React from 'react';
import { Mail, ArrowRight, Disc as Discord } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 35, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 15 }
        }
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
                        Archived Project
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px' }}
                    >
                        Contact & <span style={{ color: 'var(--primary)' }}>Archive</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ color: '#94a3b8', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', maxWidth: '650px', margin: '0 auto', fontWeight: '400', padding: '0 1rem', lineHeight: '1.6' }}
                    >
                        Astra Client is no longer actively maintained. You can still reach out through the available community channels, but responses and future development are not guaranteed.
                    </motion.p>
                </div>
            </section>

            <motion.section 
                className="container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                    gap: '2.5rem',
                    alignItems: 'start',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        <motion.div 
                            variants={itemVariants}
                            whileHover={{ y: -4, borderColor: 'rgba(88, 101, 242, 0.5)' }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(88, 101, 242, 0.12) 0%, rgba(10, 13, 20, 0.8) 100%)',
                                border: '1px solid rgba(88, 101, 242, 0.3)',
                                borderRadius: '24px',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px', background: '#5865F2',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                                boxShadow: '0 8px 16px rgba(88, 101, 242, 0.3)'
                            }}>
                                <Discord size={22} />
                            </div>
                            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff' }}>Community Archive</h3>
                            <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                Connect with past players and community members on Discord. Note that active technical support and customer assistance are discontinued.
                            </p>
                            <a
                                href="https://discord.gg/5AEp4bgund"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                    color: '#7289da', fontWeight: '700', marginTop: '0.5rem', textDecoration: 'none',
                                    fontSize: '0.95rem'
                                }}
                            >
                                Community Archive <ArrowRight size={14} />
                            </a>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants}
                            whileHover={{ y: -4, borderColor: 'rgba(124, 58, 237, 0.3)' }}
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid rgba(255, 255, 255, 0.04)',
                                borderRadius: '24px',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)',
                                border: '1px solid rgba(255,255,255,0.08)'
                            }}>
                                <Mail size={22} />
                            </div>
                            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff' }}>Project Inquiries</h3>
                            <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                For legacy archive matters or general inquiries, you may reach out via email. Responses are not guaranteed.
                            </p>
                            <a
                                href="mailto:support@astraclient.in"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                    color: 'var(--text-main)', fontWeight: '700', marginTop: '0.5rem', textDecoration: 'none',
                                    fontSize: '0.95rem'
                                }}
                            >
                                support@astraclient.in <ArrowRight size={14} />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div 
                        variants={itemVariants}
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                            borderRadius: '24px',
                            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div style={{
                            position: 'absolute', top: '-100px', right: '-100px',
                            width: '200px', height: '200px', background: 'var(--primary)',
                            filter: 'blur(100px)', opacity: 0.08, pointerEvents: 'none'
                        }}></div>

                        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.4rem' }}>Send an Inquiry</h2>
                        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '0.95rem' }}>Astra Client is archived. Responses and future development are not guaranteed.</p>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div className="contact-grid">
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="form-input"
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label className="form-label">Subject</label>
                                <div style={{ position: 'relative' }}>
                                    <select
                                        className="form-input"
                                        style={{ cursor: 'pointer', appearance: 'none' }}
                                    >
                                        <option value="inquiry">General Inquiry</option>
                                        <option value="archive">Archive Question</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div style={{
                                        position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)',
                                        pointerEvents: 'none', color: '#94a3b8', fontSize: '0.8rem'
                                    }}>▼</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label className="form-label">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Your message or inquiry..."
                                    className="form-input"
                                    style={{ resize: 'vertical', fontFamily: 'inherit' }}
                                ></textarea>
                            </div>

                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(124, 58, 237, 0.45)' }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-primary"
                                style={{
                                    width: '100%', padding: '1.1rem', borderRadius: '12px',
                                    fontSize: '1.05rem', fontWeight: '700', cursor: 'pointer',
                                    marginTop: '0.5rem'
                                }}
                            >
                                Send Inquiry
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </motion.section>
        </div>
    );
};

export default ContactPage;
