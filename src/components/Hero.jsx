import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Shield } from 'lucide-react';
import astraUI from '../assets/image.png';

const Hero = () => {
    const [version, setVersion] = useState("v0.6"); // Default/Fallback

    useEffect(() => {
        fetch('https://api.github.com/repos/viyomog/AstraClient/releases/latest')
            .then(res => res.json())
            .then(data => {
                if (data && data.tag_name) {
                    setVersion(data.tag_name);
                }
            })
            .catch(() => {}); // Silent catch, keep default
    }, []);

    return (
        <section className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '8rem',
            paddingBottom: '4rem'
        }} id="home">

            {/* Background Orbs */}
            <div className="bg-orb bg-orb-1"></div>
            <div className="bg-orb bg-orb-2"></div>

            {/* Grid Overlay */}
            <div className="grid-bg-overlay"></div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>

                {/* Release Badge */}
                <div className="animate-fade-in-up" style={{ display: 'inline-block', marginBottom: '2rem' }}>
                    <div style={{
                        background: 'rgba(134, 64, 239, 0.08)',
                        border: '1px solid rgba(134, 64, 239, 0.25)',
                        padding: '0.5rem 1.25rem',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: 'var(--primary-hover)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        boxShadow: '0 0 30px rgba(134, 64, 239, 0.15)'
                    }}>
                        <span style={{ 
                            width: '8px', 
                            height: '8px', 
                            borderRadius: '50%', 
                            background: 'var(--primary)', 
                            display: 'inline-block', 
                            boxShadow: '0 0 8px var(--primary)'
                        }}></span>
                        Astra Client {version} is now available
                    </div>
                </div>

                {/* Headline */}
                <h1 className="animate-fade-in-up delay-100" style={{
                    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                    fontWeight: '900',
                    lineHeight: '1.15',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.04em',
                    textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}>
                    Experience Minecraft <br />
                    <span className="text-gradient">Redefined.</span>
                </h1>

                {/* Sub-headline */}
                <p className="animate-fade-in-up delay-200" style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: 'var(--text-muted)',
                    maxWidth: '700px',
                    margin: '0 auto 3rem auto',
                    lineHeight: '1.6',
                    padding: '0 1rem'
                }}>
                    Unleash peak performance with Astra Client. Featuring state-of-the-art frame optimization, premium aesthetics, and a distraction-free gaming environment built for modern players.
                </p>

                {/* Action Buttons */}
                <div className="animate-fade-in-up delay-300" style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: '0 1rem'
                }}>
                    <Link to="/download" className="btn btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}>
                        <Play size={18} style={{ marginRight: '0.5rem', fill: 'currentColor' }} /> Download Client
                    </Link>
                    <Link to="/features" className="btn btn-outline" style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}>
                        View Features
                    </Link>
                </div>

                {/* 3D Mockup / Dashboard Preview */}
                <div className="animate-fade-in-up glass-panel" style={{
                    marginTop: '5rem',
                    width: '100%',
                    maxWidth: '1000px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    aspectRatio: '16/10',
                    maxHeight: '550px',
                    borderRadius: '24px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(134,64,239,0.05)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    animation: 'fadeInUp 1s ease 0.5s forwards, float 6s ease-in-out infinite'
                }}>

                    {/* Mockup Top Bar */}
                    <div style={{
                        height: '40px',
                        background: 'rgba(6, 8, 12, 0.8)',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 1.25rem',
                        gap: '0.5rem',
                        flexShrink: 0
                    }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                        
                        {/* URL Bar representation */}
                        <div style={{
                            margin: '0 auto',
                            background: 'rgba(255,255,255,0.04)',
                            borderRadius: '6px',
                            width: '40%',
                            height: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            color: 'var(--text-sub)',
                            border: '1px solid rgba(255,255,255,0.02)'
                        }}>
                            astraclient.in
                        </div>
                    </div>

                    {/* Launcher UI Image */}
                    <div style={{ flex: 1, position: 'relative', background: '#0a0d14', overflow: 'hidden' }}>
                        <img 
                            src={astraUI} 
                            alt="Astra Client Dashboard Preview" 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                objectPosition: 'top'
                            }} 
                        />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
