import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import imgAccount from '../assets/feature/account.png';
import imgAstraAi from '../assets/feature/astra ai.png';
import imgMod from '../assets/feature/mod.png';
import imgNews from '../assets/feature/news.png';
import imgPlay from '../assets/feature/play .png';
import imgSettings from '../assets/feature/settings.png';

const featuresData = [
    {
        title: "The Ultimate Play Interface",
        desc: "Jump right into the action with a beautifully polished, distraction-free play interface. Our dark aesthetic eliminates eye strain while putting multiplayer and singleplayer worlds just one click away.",
        img: imgPlay,
        reversed: false
    },
    {
        title: "Astra AI Integration",
        desc: "Stuck on a recipe? Need a base design? Our powerful built-in AI assistant helps you on the fly. No more tabbing out into a browser; ask questions, get instant Minecraft knowledge, and stay in the game.",
        img: imgAstraAi,
        reversed: true
    },
    {
        title: "Intuitive Settings",
        desc: "Customize every single aspect of your client experience. With our massive overhaul of the typical Minecraft settings menu, you get precise control over your performance, visuals, and UI scale in a modern glassmorphic window.",
        img: imgSettings,
        reversed: false
    },
    {
        title: "Native Mod Support",
        desc: "Manage all your performance and utility mods seamlessly. We've built robust mod management right into the core of the client, ensuring you get maximum FPS without dealing with complicated configurations.",
        img: imgMod,
        reversed: true
    },
    {
        title: "Integrated News Feed",
        desc: "Keep up to date with the latest client updates, community events, and release notes straight from the launcher. A beautifully formatted feed ensures you never miss a beat.",
        img: imgNews,
        reversed: false
    },
    {
        title: "Seamless Accounts",
        desc: "Manage multiple Microsoft and Mojang accounts effortlessly. Switch identities, manage cosmetics, and authenticate securely with a single click using our integrated account panel.",
        img: imgAccount,
        reversed: true
    }
];

const FeaturesPage = () => {
    // Animation variants
    const rowVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 60, damping: 15 }
        }
    };

    return (
        <div style={{ paddingTop: 'clamp(100px, 15vh, 140px)', minHeight: '100vh', backgroundColor: 'var(--bg-darker)', paddingBottom: '4rem', overflow: 'hidden' }}>

            {/* Page Header */}
            <section style={{ paddingBottom: '2rem', textAlign: 'center', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '0%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '600px', height: '300px',
                    background: 'var(--primary)',
                    filter: 'blur(150px)', opacity: 0.15,
                    pointerEvents: 'none'
                }}></div>

                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.5rem 1.2rem', background: 'rgba(134, 64, 239, 0.1)',
                            border: '1px solid rgba(134, 64, 239, 0.2)', borderRadius: '20px',
                            color: 'var(--primary)', fontWeight: '600', marginBottom: '1.5rem'
                        }}
                    >
                        <Sparkles size={16} /> Showcase
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-1px' }}
                    >
                        Experience <span style={{
                            background: 'linear-gradient(135deg, var(--primary), #d946ef)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>Astra</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7', padding: '0 1rem' }}
                    >
                        Every pixel has been engineered to deliver a flawless, deeply customized experience. Take a detailed look at what makes Astra Client the best choice for Minecraft.
                    </motion.p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', paddingBottom: '4rem' }}>
                        {featuresData.map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                className={`feature-page-row ${item.reversed ? 'reversed' : ''}`}
                                variants={rowVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                style={{
                                    alignItems: 'center',
                                    flexWrap: 'wrap'
                                }}
                            >

                                {/* Image Container */}
                                <div className="feature-page-img-container" style={{ flex: '1.5', minWidth: 'min(100%, 360px)', position: 'relative' }}>
                                    {/* Ambient glow behind image */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                        width: '80%', height: '80%',
                                        background: 'var(--primary)',
                                        filter: 'blur(100px)', opacity: 0.08,
                                        zIndex: 0
                                    }}></div>

                                    <motion.div 
                                        whileHover={{ 
                                            scale: 1.02,
                                            rotateY: item.reversed ? -2 : 2,
                                            borderColor: 'rgba(134, 64, 239, 0.3)'
                                        }}
                                        style={{
                                            position: 'relative',
                                            zIndex: 1,
                                            borderRadius: '24px',
                                            padding: '0.5rem',
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <img src={item.img} alt={item.title} style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '20px',
                                            display: 'block'
                                        }} />
                                    </motion.div>
                                </div>

                                {/* Text Content */}
                                <div style={{ flex: '1', minWidth: '280px' }}>
                                    <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: '1.25' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', lineHeight: '1.75' }}>
                                        {item.desc}
                                    </p>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturesPage;
