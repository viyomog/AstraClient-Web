import React from 'react';
import { Link } from 'react-router-dom';
import astraUI from '../assets/logo.png';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '5rem 0 2rem 0',
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
                <div className="footer-grid">

                    {/* Brand Col */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: '#fff' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px' }}>
                                <img src={astraUI} alt="Astra Client Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>AstraClient</span>
                        </Link>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '380px', fontSize: '0.95rem' }}>
                            The ultimate Minecraft client engineered for unparalleled performance, aesthetics, and professional standards.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="https://x.com/ViyomOg" target="_blank" rel="noopener noreferrer" style={{
                                color: 'var(--text-muted)',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                padding: '0.5rem 1.25rem',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '8px',
                                transition: 'all 0.2s ease'
                            }}
                                onMouseOver={(e) => { e.target.style.background = 'var(--primary)'; e.target.style.color = 'white'; }}
                                onMouseOut={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.color = 'var(--text-muted)'; }}
                            >
                                Twitter
                            </a>
                            <a href="https://discord.gg/5AEp4bgund" target="_blank" rel="noopener noreferrer" style={{
                                color: 'var(--text-muted)',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                padding: '0.5rem 1.25rem',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '8px',
                                transition: 'all 0.2s ease'
                            }}
                                onMouseOver={(e) => { e.target.style.background = '#5865F2'; e.target.style.color = 'white'; }}
                                onMouseOut={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.color = 'var(--text-muted)'; }}
                            >
                                Discord
                            </a>
                        </div>
                    </div>

                    {/* Navigation Col */}
                    <div>
                        <h4 style={{ color: 'var(--text-main)', fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.05rem', letterSpacing: '0.5px' }}>Navigation</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                            <a href="https://store.astraclient.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Store</a>
                            <a href="https://status.astraclient.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Status</a>
                            <Link to="/download" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Download</Link>
                            <Link to="/faq" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>FAQ</Link>
                        </div>
                    </div>

                    {/* Legal Col */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <h4 style={{ color: 'var(--text-main)', fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.05rem', letterSpacing: '0.5px' }}>Legal</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                                <Link to="/terms" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Terms of Service</Link>
                                <Link to="/privacy" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</Link>
                            </div>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.01)', borderRadius: '12px', border: '1px solid var(--border)', marginTop: '0.5rem' }}>
                            <p style={{ color: 'var(--text-sub)', fontSize: '0.75rem', lineHeight: '1.5' }}>
                                <strong>Disclaimer:</strong> Astra Client is not affiliated with, nor endorsed by, Mojang AB or Microsoft Corporation. "Minecraft" is a trademark of Mojang AB.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom Bar */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>
                        © {new Date().getFullYear()} Astra Client. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-sub)', fontSize: '0.85rem' }}>
                        <span>Crafted with 💜 by the Astra Team</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
