import React from 'react';
import { Download, Monitor, Apple, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const DownloadPage = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-darker)' }}>

            {/* Header Section */}
            <section style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '600px', height: '200px',
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
                        Get Astra
                    </span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px' }}>
                        Download <span style={{ color: 'var(--primary)' }}>Astra</span>
                    </h1>
                    <p style={{ color: '#94a3b8', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto', fontWeight: '400' }}>
                        Join thousands of players and elevate your Minecraft experience today. Choose your operating system below.
                    </p>
                </div>
            </section>

            {/* Main Download Options */}
            <section className="container" style={{ paddingBottom: '6rem' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>

                    {/* Windows - Active */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(134, 64, 239, 0.1) 0%, rgba(30, 35, 45, 0.8) 100%)',
                        border: '1px solid rgba(134, 64, 239, 0.4)',
                        borderRadius: '24px',
                        padding: '3rem',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '2rem',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 0 40px rgba(134, 64, 239, 0.05)',
                        position: 'relative',
                        overflow: 'hidden'
                    }} className="flex-col md:flex-row text-center md:text-left">

                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="flex-col md:flex-row">
                            <div style={{
                                width: '80px', height: '80px', borderRadius: '20px',
                                background: 'rgba(134, 64, 239, 0.2)',
                                border: '1px solid rgba(134, 64, 239, 0.5)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)'
                            }}>
                                <Monitor size={40} />
                            </div>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }} className="justify-center md:justify-start">
                                    <h2 style={{ fontSize: '2rem', fontWeight: '800' }}>Windows</h2>
                                    <span style={{
                                        background: 'rgba(16, 185, 129, 0.15)', color: '#10b981',
                                        padding: '0.2rem 0.8rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', border: '1px solid rgba(16, 185, 129, 0.3)'
                                    }}>Recommended</span>
                                </div>
                                <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>Supports Windows 10 & 11 (64-bit)</p>
                            </div>
                        </div>

                        <a
                            href="https://github.com/viyomog/AstraClient/releases/latest/download/AstraClient.Setup.0.5.0.exe"
                            style={{
                                background: 'linear-gradient(135deg, var(--primary) 0%, #b485f8 100%)',
                                color: '#fff',
                                padding: '1.2rem 2.5rem',
                                borderRadius: '14px',
                                textDecoration: 'none',
                                fontWeight: '800',
                                fontSize: '1.1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 10px 20px rgba(134, 64, 239, 0.3)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(134, 64, 239, 0.5)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(134, 64, 239, 0.3)';
                            }}
                        >
                            <Download size={20} /> Download for Windows
                        </a>
                    </div>

                    {/* macOS - Placeholder */}
                    <div style={{
                        background: 'var(--bg-card)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '24px',
                        padding: '2rem 3rem',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '2rem',
                        opacity: 0.6 // Dimmed to indicate disabled
                    }} className="flex-col md:flex-row text-center md:text-left">

                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="flex-col md:flex-row">
                            <div style={{
                                width: '64px', height: '64px', borderRadius: '16px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'
                            }}>
                                <Apple size={32} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.2rem', color: '#94a3b8' }}>macOS</h2>
                                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Apple Silicon & Intel supported</p>
                            </div>
                        </div>

                        <button
                            disabled
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: '#64748b',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                padding: '1rem 2rem',
                                borderRadius: '12px',
                                fontWeight: '600',
                                fontSize: '1rem',
                                cursor: 'not-allowed'
                            }}
                        >
                            Coming Soon
                        </button>
                    </div>

                    {/* Linux - Placeholder */}
                    <div style={{
                        background: 'var(--bg-card)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '24px',
                        padding: '2rem 3rem',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '2rem',
                        opacity: 0.6 // Dimmed to indicate disabled
                    }} className="flex-col md:flex-row text-center md:text-left">

                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="flex-col md:flex-row">
                            <div style={{
                                width: '64px', height: '64px', borderRadius: '16px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8'
                            }}>
                                <Terminal size={32} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.2rem', color: '#94a3b8' }}>Linux</h2>
                                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>AppImage, Flatpak, and .deb</p>
                            </div>
                        </div>

                        <button
                            disabled
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: '#64748b',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                padding: '1rem 2rem',
                                borderRadius: '12px',
                                fontWeight: '600',
                                fontSize: '1rem',
                                cursor: 'not-allowed'
                            }}
                        >
                            Coming Soon
                        </button>
                    </div>

                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                        By downloading Astra Client, you agree to our <Link to="/terms" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Terms of Service</Link> and <Link to="/privacy" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Privacy Policy</Link>.
                    </p>
                </div>

            </section>
        </div>
    );
};

export default DownloadPage;
