import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Sparkles, Terminal, Activity, ArrowRight, Gamepad2, Puzzle, Settings, Users, Shield, Cpu, Layers, UserCheck } from 'lucide-react';

const Hero = () => {
    const [version, setVersion] = useState("v0.6");
    const [taglineIndex, setTaglineIndex] = useState(0);
    const [taglineText, setTaglineText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    
    // Interactive launcher state
    const [activeTab, setActiveTab] = useState("play"); // "play", "mods", "settings", "profiles"
    const [optimizeEngine, setOptimizeEngine] = useState(true);
    const [customCapes, setCustomCapes] = useState(true);
    const [anticheat, setAnticheat] = useState(true);
    const [fastRender, setFastRender] = useState(false);
    const [launchState, setLaunchState] = useState("idle"); // "idle", "loading", "playing"
    const [launchProgress, setLaunchProgress] = useState(0);

    // 3D Tilt state
    const [tiltStyle, setTiltStyle] = useState({});
    const mockupRef = useRef(null);

    const taglines = [
        "Unleash maximum frame rates.",
        "Built-in Astra AI assistant.",
        "Beautiful glassmorphic styles.",
        "Zero-latency competitive play."
    ];

    // Fetch version
    useEffect(() => {
        fetch('https://api.github.com/repos/viyomog/AstraClient/releases/latest')
            .then(res => res.json())
            .then(data => {
                if (data && data.tag_name) {
                    setVersion(data.tag_name);
                }
            })
            .catch(() => {});
    }, []);

    // Typewriter effect
    useEffect(() => {
        let timer;
        const currentTagline = taglines[taglineIndex];
        
        if (isDeleting) {
            timer = setTimeout(() => {
                setTaglineText(currentTagline.substring(0, taglineText.length - 1));
            }, 30);
        } else {
            timer = setTimeout(() => {
                setTaglineText(currentTagline.substring(0, taglineText.length + 1));
            }, 60);
        }

        if (!isDeleting && taglineText === currentTagline) {
            timer = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && taglineText === "") {
            setIsDeleting(false);
            setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }

        return () => clearTimeout(timer);
    }, [taglineText, isDeleting, taglineIndex]);

    // Handle 3D mouse tilt
    const handleMouseMove = (e) => {
        if (!mockupRef.current) return;
        const element = mockupRef.current;
        const rect = element.getBoundingClientRect();
        
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        const rotateX = -y * 15;
        const rotateY = x * 15;
        
        setTiltStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
            transition: 'transform 0.05s ease-out'
        });
    };

    const handleMouseLeave = () => {
        setTiltStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'transform 0.5s ease'
        });
    };

    // Simulate launcher game load
    const triggerMockLaunch = () => {
        if (launchState !== "idle") return;
        setLaunchState("loading");
        setLaunchProgress(0);
    };

    useEffect(() => {
        if (launchState !== "loading") return;
        
        const interval = setInterval(() => {
            setLaunchProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setLaunchState("playing");
                    // Reset back to idle after a simulated play duration
                    setTimeout(() => {
                        setLaunchState("idle");
                    }, 4000);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [launchState]);

    return (
        <section className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '8rem',
            paddingBottom: '6rem'
        }} id="home">

            {/* Futuristic 3D Horizon Grid Background */}
            <div className="horizon-grid-container">
                <div className="horizon-grid-plane"></div>
                <div className="horizon-grid-glow"></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }} className="hero-layout-grid">

                    {/* Left Column: Typography, Statistics & CTAs */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }} className="hero-text-align">
                        
                        {/* Floating release badge */}
                        <div className="animate-fade-in-up floating-badge" style={{ marginBottom: '1.5rem' }}>
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(134, 64, 239, 0.1) 0%, rgba(134, 64, 239, 0.03) 100%)',
                                border: '1px solid rgba(134, 64, 239, 0.25)',
                                padding: '0.5rem 1.25rem',
                                borderRadius: '50px',
                                fontSize: '0.8rem',
                                fontWeight: '700',
                                color: 'var(--text-main)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                boxShadow: '0 5px 15px rgba(134, 64, 239, 0.1)',
                                letterSpacing: '0.5px'
                            }}>
                                <Sparkles size={14} style={{ color: 'var(--primary-hover)', filter: 'drop-shadow(0 0 4px var(--primary))' }} />
                                Astra Client {version} is live
                            </div>
                        </div>

                        {/* Title Headline */}
                        <h1 className="animate-fade-in-up delay-100" style={{
                            fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
                            fontWeight: '900',
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.04em'
                        }}>
                            Minecraft <br />
                            <span className="text-gradient-pulsing">Redefined.</span>
                        </h1>

                        {/* Animated Typewriter Sub-headline */}
                        <div className="animate-fade-in-up delay-200" style={{
                            minHeight: '2.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '2.5rem'
                        }}>
                            <Terminal size={18} style={{ color: 'var(--primary-hover)' }} />
                            <span style={{
                                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                                color: 'var(--text-muted)',
                                fontWeight: '500',
                                borderRight: '2px solid var(--primary-hover)',
                                paddingRight: '4px',
                                display: 'inline-block',
                                letterSpacing: '0.2px'
                            }}>
                                {taglineText}
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="animate-fade-in-up delay-300 hero-buttons-container" style={{
                            display: 'flex',
                            gap: '1.25rem',
                            flexWrap: 'wrap',
                            width: '100%',
                            marginBottom: '3rem'
                        }}>
                            <Link to="/download" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', gap: '0.5rem' }}>
                                <Play size={16} style={{ fill: 'currentColor' }} /> Download Client
                            </Link>
                            <Link to="/features" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', gap: '0.5rem' }}>
                                View Features <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Neon Gaming Telemetry Grid */}
                        <div className="animate-fade-in-up delay-300 hero-status-row" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1rem',
                            width: '100%',
                            borderTop: '1px solid var(--border)',
                            paddingTop: '2rem'
                        }}>
                            <div className="stat-metric-card">
                                <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: '800', color: '#fff' }}>+240%</h4>
                                <p style={{ color: 'var(--text-sub)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.25rem' }}>FPS Increase</p>
                            </div>
                            <div className="stat-metric-card">
                                <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: '800', color: '#10b981' }}>&lt; 4ms</h4>
                                <p style={{ color: 'var(--text-sub)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.25rem' }}>Ping Latency</p>
                            </div>
                            <div className="stat-metric-card">
                                <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: '800', color: '#a855f7' }}>12.4k</h4>
                                <p style={{ color: 'var(--text-sub)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.25rem' }}>Active Gamers</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Interactive Glass Launcher Dashboard Mockup */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="animate-fade-in-up delay-200 perspective-container">
                        <div 
                            ref={mockupRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="launcher-dashboard tilt-card"
                            style={{
                                width: '100%',
                                maxWidth: '580px',
                                aspectRatio: '1.45/1',
                                ...tiltStyle
                            }}
                        >
                            {/* Window Top Bar controls */}
                            <div style={{
                                height: '40px',
                                background: 'rgba(6, 8, 12, 0.9)',
                                borderBottom: '1px solid rgba(255,255,255,0.06)',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 1.25rem',
                                gap: '0.5rem',
                                zIndex: 10,
                                flexShrink: 0
                            }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                                <div style={{ 
                                    margin: '0 auto', 
                                    fontSize: '0.75rem', 
                                    color: 'var(--text-sub)',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px'
                                }}>ASTRA CLIENT LAUNCHER</div>
                            </div>

                            {/* Launcher Main Frame */}
                            <div className="launcher-body">
                                
                                {/* Dashboard Sidebar */}
                                <div className="launcher-sidebar">
                                    <div 
                                        className={`launcher-sidebar-icon ${activeTab === 'play' ? 'active' : ''}`}
                                        onClick={() => setActiveTab("play")}
                                        title="Play tab"
                                    >
                                        <Gamepad2 size={20} />
                                    </div>
                                    <div 
                                        className={`launcher-sidebar-icon ${activeTab === 'mods' ? 'active' : ''}`}
                                        onClick={() => setActiveTab("mods")}
                                        title="Performance mods"
                                    >
                                        <Puzzle size={20} />
                                    </div>
                                    <div 
                                        className={`launcher-sidebar-icon ${activeTab === 'settings' ? 'active' : ''}`}
                                        onClick={() => setActiveTab("settings")}
                                        title="Settings"
                                    >
                                        <Settings size={20} />
                                    </div>
                                    <div 
                                        className={`launcher-sidebar-icon ${activeTab === 'profiles' ? 'active' : ''}`}
                                        onClick={() => setActiveTab("profiles")}
                                        title="Minecraft accounts"
                                    >
                                        <Users size={20} />
                                    </div>
                                </div>

                                {/* Dashboard Content Panel */}
                                <div className="launcher-main">
                                    
                                    {/* TAB 0: PLAY VIEW */}
                                    {activeTab === 'play' && (
                                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', zIndex: 1 }} className="tilt-card-inner">
                                            {/* Account status header */}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.02)', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.04)' }}>
                                                <img 
                                                    src="https://mc-heads.net/avatar/ViyomOG/64" 
                                                    alt="User avatar" 
                                                    style={{ width: '32px', height: '32px', borderRadius: '4px', imageRendering: 'pixelated' }}
                                                />
                                                <div style={{ flex: 1 }}>
                                                    <h5 style={{ fontSize: '0.9rem', fontWeight: '700' }}>ViyomOG</h5>
                                                    <p style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: '600' }}>
                                                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span> Microsoft Account
                                                    </p>
                                                </div>
                                                <span style={{ fontSize: '0.7rem', color: 'var(--text-sub)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '6px' }}>Ready</span>
                                            </div>

                                            {/* Game launching visual feedback */}
                                            <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
                                                {launchState === "idle" && (
                                                    <div>
                                                        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.25rem' }}>Astra Client {version}</h3>
                                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>OptiFine & Sodium Engine loaded successfully</p>
                                                    </div>
                                                )}
                                                {launchState === "loading" && (
                                                    <div style={{ width: '80%', margin: '0 auto' }}>
                                                        <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--primary-hover)' }}>Optimizing assets... {launchProgress}%</h4>
                                                        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                                                            <div style={{ width: `${launchProgress}%`, height: '100%', background: 'linear-gradient(90deg, var(--primary), #a855f7)', transition: 'width 0.1s ease', borderRadius: '10px', boxShadow: '0 0 10px var(--primary)' }}></div>
                                                        </div>
                                                    </div>
                                                )}
                                                {launchState === "playing" && (
                                                    <div style={{ animation: 'floating-badge-anim 1.5s infinite' }}>
                                                        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#10b981', marginBottom: '0.25rem' }}>CLIENT LAUNCHED</h3>
                                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Enjoy Minecraft at 340+ FPS!</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Launcher play action trigger */}
                                            <button 
                                                className="launcher-btn-play"
                                                onClick={triggerMockLaunch}
                                                disabled={launchState !== "idle"}
                                                style={{
                                                    background: launchState === "playing" ? '#059669' : undefined,
                                                    cursor: launchState !== "idle" ? 'not-allowed' : 'pointer'
                                                }}
                                            >
                                                {launchState === "idle" && <>Launch Game</>}
                                                {launchState === "loading" && <>Loading Client...</>}
                                                {launchState === "playing" && <>Playing...</>}
                                            </button>
                                        </div>
                                    )}

                                    {/* TAB 1: MODS PERFORMANCE ENGINE */}
                                    {activeTab === 'mods' && (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 1 }} className="tilt-card-inner">
                                            <h4 style={{ fontSize: '1rem', fontWeight: '800', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Cpu size={16} style={{ color: 'var(--primary-hover)' }} /> Performance Engine
                                            </h4>
                                            
                                            <div className="neo-switch-container">
                                                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Fast Render Engine</span>
                                                <div className={`neo-switch ${optimizeEngine ? 'active' : ''}`} onClick={() => setOptimizeEngine(!optimizeEngine)}></div>
                                            </div>

                                            <div className="neo-switch-container">
                                                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Custom Cosmetics & Capes</span>
                                                <div className={`neo-switch ${customCapes ? 'active' : ''}`} onClick={() => setCustomCapes(!customCapes)}></div>
                                            </div>

                                            <div className="neo-switch-container">
                                                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Astra Anticheat Protection</span>
                                                <div className={`neo-switch ${anticheat ? 'active' : ''}`} onClick={() => setAnticheat(!anticheat)}></div>
                                            </div>

                                            <div className="neo-switch-container">
                                                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Low Latency Input</span>
                                                <div className={`neo-switch ${fastRender ? 'active' : ''}`} onClick={() => setFastRender(!fastRender)}></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* TAB 2: SETTINGS OPTIMIZATION */}
                                    {activeTab === 'settings' && (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 1 }} className="tilt-card-inner">
                                            <h4 style={{ fontSize: '1rem', fontWeight: '800', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Layers size={16} style={{ color: 'var(--primary-hover)' }} /> Custom Adjustments
                                            </h4>

                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem' }}>
                                                    <span>Render Distance</span>
                                                    <span style={{ color: 'var(--primary-hover)' }}>12 Chunks</span>
                                                </div>
                                                <input 
                                                    type="range" 
                                                    min="4" max="32" defaultValue="12" 
                                                    style={{ width: '100%', accentColor: 'var(--primary)' }}
                                                />
                                            </div>

                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem' }}>
                                                    <span>Max FPS Limit</span>
                                                    <span style={{ color: '#10b981' }}>Unlimited</span>
                                                </div>
                                                <input 
                                                    type="range" 
                                                    min="30" max="260" defaultValue="260" 
                                                    style={{ width: '100%', accentColor: 'var(--primary)' }}
                                                />
                                            </div>

                                            <div className="neo-switch-container" style={{ padding: '0.75rem 1rem' }}>
                                                <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>Vertical Sync</span>
                                                <div className="neo-switch"></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* TAB 3: PROFILES LIST */}
                                    {activeTab === 'profiles' && (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 1 }} className="tilt-card-inner">
                                            <h4 style={{ fontSize: '1rem', fontWeight: '800', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <UserCheck size={16} style={{ color: 'var(--primary-hover)' }} /> Account Manager
                                            </h4>

                                            {/* Profile 1 */}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0.75rem', background: 'rgba(134,64,239,0.1)', border: '1px solid rgba(134,64,239,0.25)', borderRadius: '10px' }}>
                                                <img src="https://mc-heads.net/avatar/ViyomOG/64" alt="avatar" style={{ width: '28px', height: '28px', borderRadius: '4px', imageRendering: 'pixelated' }} />
                                                <span style={{ fontSize: '0.85rem', fontWeight: '700', flex: 1 }}>ViyomOG</span>
                                                <span style={{ fontSize: '0.65rem', background: '#10b981', color: 'white', padding: '0.15rem 0.4rem', borderRadius: '4px', fontWeight: '700' }}>ACTIVE</span>
                                            </div>

                                            {/* Profile 2 */}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '10px', opacity: 0.6 }}>
                                                <img src="https://mc-heads.net/avatar/pxychoOG/64" alt="avatar" style={{ width: '28px', height: '28px', borderRadius: '4px', imageRendering: 'pixelated' }} />
                                                <span style={{ fontSize: '0.85rem', fontWeight: '700', flex: 1 }}>pxychoOG</span>
                                                <span style={{ fontSize: '0.65rem', color: 'var(--text-sub)' }}>Offline</span>
                                            </div>

                                            {/* Profile 3 */}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '10px', opacity: 0.6 }}>
                                                <img src="https://mc-heads.net/avatar/Famada_/64" alt="avatar" style={{ width: '28px', height: '28px', borderRadius: '4px', imageRendering: 'pixelated' }} />
                                                <span style={{ fontSize: '0.85rem', fontWeight: '700', flex: 1 }}>Famada_</span>
                                                <span style={{ fontSize: '0.65rem', color: 'var(--text-sub)' }}>Offline</span>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom Desktop vs Mobile responsive CSS overrides */}
            <style>{`
                @media (min-width: 992px) {
                    .hero-layout-grid {
                        grid-template-columns: 1.15fr 0.85fr !important;
                    }
                }
                @media (max-width: 991px) {
                    .hero-text-align {
                        align-items: center !important;
                        text-align: center !important;
                    }
                    .hero-buttons-container {
                        justify-content: center !important;
                    }
                    .hero-status-row {
                        justify-content: center !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
