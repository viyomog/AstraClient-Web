import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import astraUI from '../assets/image.png';

const Hero = () => {
    const [version, setVersion] = useState("Loading...");

    useEffect(() => {
        fetch('https://api.github.com/repos/viyomog/AstraClient/releases/latest')
            .then(res => res.json())
            .then(data => {
                if (data && data.tag_name) {
                    setVersion(data.tag_name);
                } else {
                    setVersion("v0.6"); // Fallback
                }
            })
            .catch(() => setVersion("v0.6")); // Fallback on error
    }, []);

    return (
        <section className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }} id="home">

            {/* Background Orbs */}
            <div className="bg-orb bg-orb-1"></div>
            <div className="bg-orb bg-orb-2"></div>

            {/* Grid Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: -1,
                pointerEvents: 'none',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }}></div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10, paddingTop: '4rem' }}>

                {/* Badge */}
                <div className="animate-fade-in-up" style={{ display: 'inline-block', marginBottom: '2rem' }}>
                    <div style={{
                        background: 'rgba(134, 64, 239, 0.1)',
                        border: '1px solid rgba(134, 64, 239, 0.3)',
                        padding: '0.4rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 0 20px rgba(134, 64, 239, 0.15)'
                    }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', display: 'inline-block', animation: 'pulse-glow 2s infinite' }}></span>
                        Astra Client {version} is out now
                    </div>
                </div>

                {/* Headline */}
                <h1 className="animate-fade-in-up delay-100" style={{
                    fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                    fontWeight: '900',
                    lineHeight: '1.1',
                    marginBottom: '1.5rem',
                    textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}>
                    Experience Minecraft <br />
                    <span className="text-gradient">Redefined.</span>
                </h1>

                {/* Sub-headline */}
                <p className="animate-fade-in-up delay-200" style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-muted)',
                    maxWidth: '650px',
                    margin: '0 auto 3rem auto',
                    lineHeight: '1.6'
                }}>
                    Unleash the ultimate performance with Astra Client. Featuring state-of-the-art optimization, premium aesthetics, and a flawlessly professional experience.
                </p>

                {/* Action Buttons */}
                <div className="animate-fade-in-up delay-300" style={{
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Link to="/download" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', boxShadow: '0 0 40px rgba(134, 64, 239, 0.4)', textDecoration: 'none' }}>
                        Download Client
                    </Link>
                    <Link to="/features" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', textDecoration: 'none' }}>
                        View Features
                    </Link>
                </div>

                {/* 3D Mockup / Dashboard Preview */}
                <div className="animate-fade-in-up glass-panel" style={{
                    marginTop: '6rem',
                    maxWidth: '1000px',
                    margin: '6rem auto 0',
                    height: '500px',
                    borderRadius: '24px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    animation: 'fadeInUp 1s ease 0.5s forwards, float 6s ease-in-out infinite'
                }}>

                    {/* Mockup Top Bar */}
                    <div style={{
                        height: '40px',
                        background: 'rgba(0,0,0,0.2)',
                        borderBottom: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 1rem',
                        gap: '0.5rem'
                    }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                    </div>

                    {/* Launcher UI Img */}
                    <div style={{ flex: 1, position: 'relative', background: 'var(--bg-card)', overflow: 'hidden' }}>
                        <img src={astraUI} alt="Astra Client UI" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
