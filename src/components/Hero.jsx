import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Compass } from 'lucide-react';
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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '120px',
            paddingBottom: '4rem'
        }} id="home">

            {/* Background Orbs */}
            <div className="bg-orb bg-orb-1" style={{ top: '-10%', left: '-10%', width: '40vw', height: '40vw' }}></div>
            <div className="bg-orb bg-orb-2" style={{ bottom: '-15%', right: '-15%', width: '50vw', height: '50vw' }}></div>

            {/* Grid Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: -1,
                pointerEvents: 'none',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }}></div>

            <motion.div 
                className="container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}
            >
                {/* Release Badge */}
                <motion.div variants={itemVariants} style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
                    <div style={{
                        background: 'rgba(134, 64, 239, 0.1)',
                        border: '1px solid rgba(134, 64, 239, 0.25)',
                        padding: '0.5rem 1.2rem',
                        borderRadius: '100px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        boxShadow: '0 4px 20px rgba(134, 64, 239, 0.1)'
                    }}>
                        <span style={{ 
                            width: '8px', 
                            height: '8px', 
                            borderRadius: '50%', 
                            background: 'var(--primary)', 
                            display: 'inline-block', 
                            boxShadow: '0 0 10px var(--primary)' 
                        }}></span>
                        Astra Client {version} is out now
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1 
                    variants={itemVariants}
                    style={{
                        fontSize: 'clamp(2.2rem, 7vw, 5rem)',
                        fontWeight: '900',
                        lineHeight: '1.15',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.03em',
                        textShadow: '0 10px 30px rgba(0,0,0,0.4)'
                    }}
                >
                    Experience Minecraft <br />
                    <span className="text-gradient">Redefined.</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p 
                    variants={itemVariants}
                    style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        color: 'var(--text-muted)',
                        maxWidth: '650px',
                        margin: '0 auto 2.5rem auto',
                        lineHeight: '1.6',
                        padding: '0 1rem'
                    }}
                >
                    Unleash the ultimate performance with Astra Client. Featuring state-of-the-art optimization, premium aesthetics, and a flawlessly professional experience.
                </motion.p>

                {/* Action Buttons */}
                <motion.div 
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        alignItems: 'center'
                    }}
                >
                    <Link to="/download" style={{ textDecoration: 'none' }}>
                        <motion.button 
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(134, 64, 239, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary"
                            style={{ gap: '8px' }}
                        >
                            <Download size={18} /> Download Client
                        </motion.button>
                    </Link>
                    <Link to="/features" style={{ textDecoration: 'none' }}>
                        <motion.button 
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.06)' }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-outline"
                            style={{ gap: '8px' }}
                        >
                            <Compass size={18} /> View Features
                        </motion.button>
                    </Link>
                </motion.div>

                {/* 3D Mockup / Dashboard Preview */}
                <motion.div 
                    variants={itemVariants}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.6 }}
                    style={{
                        marginTop: '5rem',
                        maxWidth: '900px',
                        width: '100%',
                        margin: '5rem auto 0',
                        borderRadius: '24px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        aspectRatio: '16/10',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(134, 64, 239, 0.1)'
                    }}
                >
                    {/* Mockup Top Bar */}
                    <div style={{
                        height: '36px',
                        background: 'rgba(0,0,0,0.3)',
                        borderBottom: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 1rem',
                        gap: '0.5rem',
                        zIndex: 2
                    }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                    </div>

                    {/* Launcher UI Img */}
                    <div style={{ flex: 1, position: 'relative', background: 'var(--bg-card)', overflow: 'hidden' }}>
                        <motion.img 
                            src={astraUI} 
                            alt="Astra Client UI" 
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                display: 'block'
                            }} 
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
