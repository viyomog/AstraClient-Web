import React from 'react';
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

                    {/* Brand Col */}
                    <div style={{ flex: '2', minWidth: '320px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px' }}>
                                <img src={astraUI} alt="Astra Client Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>AstraClient</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '380px' }}>
                            The ultimate Minecraft client engineered for unparalleled performance, aesthetics, and professional standards.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://x.com/ViyomOg" style={{
                                color: 'var(--text-muted)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                padding: '0.5rem 1rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '8px',
                                transition: 'background 0.2s ease, color 0.2s ease'
                            }}
                                onMouseOver={(e) => { e.target.style.background = 'var(--primary)'; e.target.style.color = 'white'; }}
                                onMouseOut={(e) => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.color = 'var(--text-muted)'; }}
                            >
                                Twitter
                            </a>
                            <a href="https://discord.gg/5AEp4bgund" style={{
                                color: 'var(--text-muted)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                padding: '0.5rem 1rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '8px',
                                transition: 'background 0.2s ease, color 0.2s ease'
                            }}
                                onMouseOver={(e) => { e.target.style.background = '#5865F2'; e.target.style.color = 'white'; }}
                                onMouseOut={(e) => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.color = 'var(--text-muted)'; }}
                            >
                                Discord
                            </a>
                        </div>
                    </div>

                    {/* Links Cols */}
                    <div>
                        <h4 style={{ color: 'var(--text-main)', fontWeight: '600', marginBottom: '1.5rem' }}>Navigation</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a href="https://store.astraclient.in/" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Store</a>
                            <a href="https://status.astraclient.in/" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Status</a>
                            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Blog</a>
                            <a href="/download" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Download</a>
                        </div>
                    </div>

                    <div style={{ minWidth: '320px' }}>
                        <h4 style={{ color: 'var(--text-main)', fontWeight: '600', marginBottom: '1.5rem' }}>Legal</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                            <a href="/terms" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Terms of Service</a>
                            <a href="/privacy" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</a>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.6' }}>
                                <strong>Disclaimer:</strong> Astra Client is not affiliated with, nor endorsed by, Mojang AB or Microsoft Corporation. "Minecraft" is a trademark of Mojang AB.
                            </p>
                        </div>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        © {new Date().getFullYear()} Astra Client. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        <span>Crafted with 💜 by the Astra Team</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
