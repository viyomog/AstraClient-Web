import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import astraUI from '../assets/logo.png';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '4rem 0 2rem 0',
            backgroundColor: 'var(--bg-card)',
            position: 'relative',
            overflow: 'hidden'
        }}>

            {/* Background glow for footer */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60vw',
                height: '100px',
                background: 'var(--primary)',
                filter: 'blur(120px)',
                opacity: 0.05,
                pointerEvents: 'none'
            }}></div>

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '3rem', marginBottom: '4rem' }}>

                    {/* Brand Col */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px' }}>
                                <img src={astraUI} alt="Astra Client Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>AstraClient</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1rem', maxWidth: '380px', fontSize: '0.95rem' }}>
                            The ultimate Minecraft client engineered for unparalleled performance, aesthetics, and professional standards.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <motion.a 
                                href="https://x.com/ViyomOg" 
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, backgroundColor: 'var(--primary)', color: 'white' }}
                                style={{
                                    color: 'var(--text-muted)',
                                    textDecoration: 'none',
                                    fontSize: '0.85rem',
                                    padding: '0.5rem 1rem',
                                    background: 'rgba(255,255,255,0.04)',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.02)',
                                    transition: 'color 0.2s'
                                }}
                            >
                                Twitter
                            </motion.a>
                            <motion.a 
                                href="https://discord.gg/5AEp4bgund" 
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, backgroundColor: '#5865F2', color: 'white' }}
                                style={{
                                    color: 'var(--text-muted)',
                                    textDecoration: 'none',
                                    fontSize: '0.85rem',
                                    padding: '0.5rem 1rem',
                                    background: 'rgba(255,255,255,0.04)',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.02)',
                                    transition: 'color 0.2s'
                                }}
                            >
                                Discord
                            </motion.a>
                        </div>
                    </div>

                    {/* Links Cols */}
                    <div>
                        <h4 style={{ color: 'var(--text-main)', fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.05rem' }}>Navigation</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <a href="https://store.astraclient.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Store</a>
                            <a href="https://status.astraclient.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Status</a>
                            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Blog</a>
                            <Link to="/download" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Download</Link>
                        </div>
                    </div>

                    {/* Legal Col */}
                    <div>
                        <h4 style={{ color: 'var(--text-main)', fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.05rem' }}>Legal</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                            <Link to="/terms" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Terms of Service</Link>
                            <Link to="/privacy" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</Link>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.01)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.6' }}>
                                <strong>Disclaimer:</strong> Astra Client is not affiliated with, nor endorsed by, Mojang AB or Microsoft Corporation. "Minecraft" is a trademark of Mojang AB.
                            </p>
                        </div>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        © {new Date().getFullYear()} Astra Client. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        <span>Crafted with 💜 by the Astra Team</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
