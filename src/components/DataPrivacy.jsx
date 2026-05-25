import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Activity, EyeOff } from 'lucide-react';

const DataPrivacy = () => {
    const [animate, setAnimate] = useState(false);
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const [tiltStyle, setTiltStyle] = useState({});

    // Scroll trigger intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Mouse coordinates tracker for spotlight glow
    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        
        // Calculate relative cursor position
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Extremely subtle 3D tilt
        const normX = (x / rect.width) - 0.5;
        const normY = (y / rect.height) - 0.5;
        setTiltStyle({
            transform: `perspective(1000px) rotateX(${-normY * 5}deg) rotateY(${normX * 5}deg) scale3d(1.01, 1.01, 1.01)`
        });
    };

    const handleMouseLeave = () => {
        setTiltStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'transform 0.5s ease'
        });
    };

    return (
        <section 
            ref={containerRef}
            className="section" 
            style={{ backgroundColor: 'var(--bg-card)', padding: '7rem 0', borderTop: '1px solid var(--border)', overflow: 'hidden' }}
        >
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                
                {/* High Tech Encryption Vault container card */}
                <div 
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={`glow-card-interactive reveal-hidden ${animate ? 'reveal-visible' : ''}`}
                    style={{
                        maxWidth: '850px',
                        margin: '0 auto',
                        borderRadius: '32px',
                        padding: 'clamp(2rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3rem)',
                        textAlign: 'center',
                        border: '1px solid rgba(134, 64, 239, 0.15)',
                        position: 'relative',
                        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.15s ease-out',
                        ...tiltStyle
                    }}
                >
                    {/* Background spotlights & terminal scanlines */}
                    <div className="glow-card-spotlight"></div>
                    <div className="glow-card-border-glow"></div>
                    <div className="scanlines"></div>

                    <div style={{ position: 'relative', zIndex: 5 }} className="tilt-card-inner">
                        
                        {/* High-tech shield overlay decoration */}
                        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2.5rem' }}>
                            {/* Expanding background pulsing halo */}
                            <span style={{
                                position: 'absolute',
                                top: '50%', left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '80px', height: '80px',
                                borderRadius: '50%',
                                background: 'var(--primary)',
                                animation: 'pulse-glow 2s infinite',
                                opacity: 0.1,
                                zIndex: 0
                            }}></span>
                            
                            <div style={{ 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                width: '64px', 
                                height: '64px', 
                                borderRadius: '50%', 
                                background: 'rgba(134, 64, 239, 0.1)', 
                                color: 'var(--primary)', 
                                border: '1px solid rgba(134, 64, 239, 0.3)',
                                boxShadow: '0 0 30px rgba(134, 64, 239, 0.3)',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <ShieldCheck size={32} />
                            </div>
                        </div>

                        {/* Title text */}
                        <h2 style={{ 
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
                            fontWeight: '900', 
                            marginBottom: '1.5rem', 
                            color: 'var(--text-main)',
                            letterSpacing: '-0.5px'
                        }}>
                            Transparent Data Usage
                        </h2>
                        
                        {/* Body description text */}
                        <p style={{ 
                            color: 'var(--text-muted)', 
                            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', 
                            lineHeight: '1.8', 
                            marginBottom: '3rem',
                            maxWidth: '680px',
                            marginRight: 'auto',
                            marginLeft: 'auto'
                        }}>
                            Astra Client requests access to your Microsoft account solely to authenticate your ownership of Minecraft Java Edition. This allows you to securely log in and play on servers without us ever seeing your password. We also collect minimal, anonymous hardware data and crash reports exclusively to improve client performance and fix bugs.
                        </p>
                        
                        {/* High tech security features dashboard icons */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '2.5rem',
                            flexWrap: 'wrap',
                            marginBottom: '3rem',
                            padding: '0 1rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                <Lock size={14} style={{ color: '#10b981' }} /> OAuth 2.0 Auth
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                <Activity size={14} style={{ color: 'var(--primary-hover)' }} /> Anonymous Metrics
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                <EyeOff size={14} style={{ color: '#ef4444' }} /> No Stored Passwords
                            </div>
                        </div>

                        {/* CTA button */}
                        <Link 
                            to="/privacy" 
                            className="btn btn-outline" 
                            style={{ 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                gap: '0.5rem', 
                                padding: '0.8rem 2.2rem', 
                                textDecoration: 'none', 
                                borderRadius: '12px', 
                                border: '1px solid var(--primary)', 
                                color: 'var(--primary-hover)',
                                boxShadow: '0 0 15px rgba(134, 64, 239, 0.05)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = 'var(--primary-hover)';
                                e.currentTarget.style.boxShadow = '0 0 25px rgba(134, 64, 239, 0.15)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = 'var(--primary)';
                                e.currentTarget.style.boxShadow = '0 0 15px rgba(134, 64, 239, 0.05)';
                            }}
                        >
                            Read our full Privacy Policy
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DataPrivacy;
