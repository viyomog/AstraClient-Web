import React from 'react';
import { Sparkles } from 'lucide-react';

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
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--bg-darker)' }}>

            {/* Page Header */}
            <section className="section" style={{ paddingBottom: '2rem', textAlign: 'center', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '0%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '600px', height: '300px',
                    background: 'var(--primary)',
                    filter: 'blur(150px)', opacity: 0.15,
                    pointerEvents: 'none'
                }}></div>

                <div className="container">
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.5rem 1rem', background: 'rgba(134, 64, 239, 0.1)',
                        border: '1px solid rgba(134, 64, 239, 0.2)', borderRadius: '20px',
                        color: 'var(--primary)', fontWeight: '600', marginBottom: '1.5rem'
                    }}>
                        <Sparkles size={16} /> Showcase
                    </div>
                    <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-1px' }}>
                        Experience <span style={{
                            background: 'linear-gradient(135deg, var(--primary), #d946ef)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>Astra</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
                        Every pixel has been engineered to deliver a flawless, deeply customized experience. Take a detailed look at what makes Astra Client the best choice for Minecraft.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', paddingBottom: '6rem' }}>
                        {featuresData.map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                flexDirection: item.reversed ? 'row-reverse' : 'row',
                                alignItems: 'center',
                                gap: '4rem',
                                flexWrap: 'wrap'
                            }}>

                                {/* Image Container */}
                                <div style={{ flex: '1.5', minWidth: '400px', position: 'relative' }}>
                                    {/* Ambient glow behind image */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                        width: '80%', height: '80%',
                                        background: 'var(--primary)',
                                        filter: 'blur(100px)', opacity: 0.1,
                                        zIndex: 0
                                    }}></div>

                                    <div style={{
                                        position: 'relative',
                                        zIndex: 1,
                                        borderRadius: '24px',
                                        padding: '0.5rem',
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                        transition: 'transform 0.4s ease',
                                        cursor: 'pointer'
                                    }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = item.reversed ? 'perspective(1000px) rotateY(-2deg) scale(1.02)' : 'perspective(1000px) rotateY(2deg) scale(1.02)';
                                            e.currentTarget.style.border = '1px solid rgba(134, 64, 239, 0.3)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1)';
                                            e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)';
                                        }}>
                                        <img src={item.img} alt={item.title} style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '20px',
                                            display: 'block'
                                        }} />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div style={{ flex: '1', minWidth: '300px' }}>
                                    <h3 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-main)', lineHeight: '1.2' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.8' }}>
                                        {item.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturesPage;
