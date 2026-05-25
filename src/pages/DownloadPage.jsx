import React from 'react';
import { Download, Monitor, Apple, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const DownloadPage = () => {
    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-darker)', display: 'flex', flexDirection: 'column' }}>

            {/* Header Section */}
            <section style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative' }} className="animate-fade-in-up">
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: 'min(600px, 90vw)', height: '200px',
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
                        Get Astra
                    </span>
                    
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px' }}>
                        Download <span className="text-gradient">Astra</span>
                    </h1>
                    
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                        Join thousands of players and elevate your Minecraft experience today. Choose your operating system below.
                    </p>
                </div>
            </section>

            {/* Main Download Options */}
            <section className="container animate-fade-in-up delay-100" style={{ paddingBottom: '6rem', flex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    maxWidth: '850px',
                    margin: '0 auto'
                }}>

                    {/* Windows - Active */}
                    <div className="download-card-active">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div style={{
                                width: '72px', height: '72px', borderRadius: '18px',
                                background: 'rgba(134, 64, 239, 0.15)',
                                border: '1px solid rgba(134, 64, 239, 0.4)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-hover)',
                                flexShrink: 0
                            }}>
                                <Monitor size={36} />
                            </div>
                            <div style={{ textAlign: 'center' }} className="text-left-desktop">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.35rem', flexWrap: 'wrap', justifyContent: 'center' }} className="justify-start-desktop">
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: '800' }}>Windows</h2>
                                    <span style={{
                                        background: 'rgba(16, 185, 129, 0.12)', color: '#10b981',
                                        padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', border: '1px solid rgba(16, 185, 129, 0.25)'
                                    }}>Recommended</span>
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Supports Windows 10 & 11 (64-bit)</p>
                            </div>
                        </div>

                        <a
                            href="https://github.com/viyomog/AstraClient/releases/latest/download/AstraClient-Setup.exe"
                            className="btn btn-primary"
                            style={{
                                padding: '1.1rem 2.2rem',
                                borderRadius: '14px',
                                fontWeight: '700',
                                fontSize: '1.05rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            <Download size={18} /> Download for Windows
                        </a>
                    </div>

                    {/* macOS - Placeholder */}
                    <div className="download-card-disabled">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div style={{
                                width: '56px', height: '56px', borderRadius: '14px',
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)',
                                flexShrink: 0
                            }}>
                                <Apple size={28} />
                            </div>
                            <div style={{ textAlign: 'center' }} className="text-left-desktop">
                                <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.2rem', color: 'var(--text-muted)' }}>macOS</h2>
                                <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>Apple Silicon & Intel supported</p>
                            </div>
                        </div>

                        <button
                            disabled
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                color: 'var(--text-sub)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                padding: '0.8rem 1.8rem',
                                borderRadius: '12px',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                cursor: 'not-allowed'
                            }}
                        >
                            Coming Soon
                        </button>
                    </div>

                    {/* Linux - Placeholder */}
                    <div className="download-card-disabled">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div style={{
                                width: '56px', height: '56px', borderRadius: '14px',
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)',
                                flexShrink: 0
                            }}>
                                <Terminal size={28} />
                            </div>
                            <div style={{ textAlign: 'center' }} className="text-left-desktop">
                                <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.2rem', color: 'var(--text-muted)' }}>Linux</h2>
                                <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>AppImage, Flatpak, and .deb</p>
                            </div>
                        </div>

                        <button
                            disabled
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                color: 'var(--text-sub)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                padding: '0.8rem 1.8rem',
                                borderRadius: '12px',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                cursor: 'not-allowed'
                            }}
                        >
                            Coming Soon
                        </button>
                    </div>

                </div>

                {/* Additional Helper Styles for Desktop vs Mobile Card Alignment */}
                <style>{`
                    @media (min-width: 768px) {
                        .text-left-desktop {
                            text-align: left !important;
                        }
                        .justify-start-desktop {
                            justify-content: flex-start !important;
                        }
                    }
                `}</style>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>
                        By downloading Astra Client, you agree to our <Link to="/terms" style={{ color: 'var(--primary-hover)', textDecoration: 'none' }}>Terms of Service</Link> and <Link to="/privacy" style={{ color: 'var(--primary-hover)', textDecoration: 'none' }}>Privacy Policy</Link>.
                    </p>
                </div>

            </section>
        </div>
    );
};

export default DownloadPage;
