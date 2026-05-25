import React, { useState, useEffect, useRef } from 'react';
import { Zap, Sparkles, Paintbrush, MonitorPlay, Shield, Rocket } from 'lucide-react';

// Isolated spotlight-glow + 3D tilt feature card component
const InteractiveFeatureCard = ({ feature, index, animate }) => {
    const cardRef = useRef(null);
    const [tiltStyle, setTiltStyle] = useState({});

    // Mouse coordinates tracker for spotlight glow
    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        
        // Calculate mouse relative coordinates
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Set CSS variables for spotlight gradient
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Subtle 3D perspective tilt
        const normX = (x / rect.width) - 0.5;
        const normY = (y / rect.height) - 0.5;
        const rotX = -normY * 12;
        const rotY = normX * 12;

        setTiltStyle({
            transform: `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`
        });
    };

    const handleMouseLeave = () => {
        setTiltStyle({
            transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'transform 0.4s ease'
        });
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`glow-card-interactive reveal-hidden ${animate ? 'reveal-visible' : ''}`}
            style={{
                borderRadius: '24px',
                padding: '2.5rem',
                cursor: 'pointer',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.15s ease-out',
                animationDelay: `${index * 100}ms`,
                ...tiltStyle
            }}
        >
            {/* Background spotlight overlays */}
            <div className="glow-card-spotlight"></div>
            <div className="glow-card-border-glow"></div>

            {/* Content overlaying the glow */}
            <div style={{ position: 'relative', zIndex: 5 }} className="tilt-card-inner">
                
                {/* Glowing neon card icon */}
                <div className="feature-card-icon" style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'rgba(134, 64, 239, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    border: '1px solid rgba(134, 64, 239, 0.15)',
                    transition: 'all 0.3s ease',
                    marginBottom: '1.75rem',
                    boxShadow: '0 0 15px rgba(134, 64, 239, 0.05)'
                }}>
                    {feature.icon}
                </div>

                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '800',
                    marginBottom: '0.85rem',
                    color: 'var(--text-main)',
                    letterSpacing: '-0.3px'
                }}>
                    {feature.title}
                </h3>

                <p style={{
                    color: 'var(--text-muted)',
                    lineHeight: '1.65',
                    fontSize: '0.925rem'
                }}>
                    {feature.desc}
                </p>
            </div>
        </div>
    );
};

const Features = () => {
    const [animate, setAnimate] = useState(false);
    const sectionRef = useRef(null);

    const featureList = [
        {
            title: "Hyper Optimized",
            desc: "Engineered from the ground up for maximum FPS and lowest latency. Enjoy Minecraft like never before.",
            icon: <Zap size={24} />
        },
        {
            title: "Premium Cosmetics",
            desc: "Stand out with exclusive, high-quality capes, wings, and cosmetics built directly into the client.",
            icon: <Sparkles size={24} />
        },
        {
            title: "Clean Interface",
            desc: "A stunning, professional UI that doesn't get in your way. Customize everything to your liking.",
            icon: <Paintbrush size={24} />
        },
        {
            title: "Built-in Share",
            desc: "Seamlessly share your gameplay directly from the client without tanking your performance.",
            icon: <MonitorPlay size={24} />
        },
        {
            title: "Advanced Anticheat",
            desc: "Play on our partnered servers with the confidence of our state-of-the-art anticheat integration.",
            icon: <Shield size={24} />
        },
        {
            title: "Constant Updates",
            desc: "Our dedicated team works around the clock to bring you the latest features and optimizations.",
            icon: <Rocket size={24} />
        }
    ];

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className="section" 
            id="features" 
            style={{ backgroundColor: 'var(--bg-darker)', position: 'relative', overflow: 'hidden' }}
        >
            {/* Background spotlight decoration */}
            <div style={{
                position: 'absolute',
                top: '20%', left: '50%', transform: 'translateX(-50%)',
                width: '600px', height: '300px',
                background: 'var(--primary)',
                filter: 'blur(160px)', opacity: 0.05,
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* Section Header with dynamic fade reveal */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} className={`reveal-hidden ${animate ? 'reveal-visible' : ''}`}>
                    <h2 style={{ 
                        fontSize: 'clamp(2rem, 5vw, 2.75rem)', 
                        fontWeight: '900', 
                        marginBottom: '1.25rem', 
                        letterSpacing: '-1px' 
                    }}>
                        Why Choose <span className="text-gradient">Astra Client?</span>
                    </h2>
                    <p style={{ 
                        color: 'var(--text-muted)', 
                        fontSize: '1.05rem', 
                        maxWidth: '600px', 
                        margin: '0 auto', 
                        lineHeight: '1.7',
                        padding: '0 1rem'
                    }}>
                        We've stripped away the bloat and focused intensely on what matters: pure, unadulterated performance wrapped in a premium design.
                    </p>
                </div>

                {/* Staggered dynamic cards layout */}
                <div className="features-grid">
                    {featureList.map((feature, idx) => (
                        <InteractiveFeatureCard 
                            key={idx} 
                            feature={feature} 
                            index={idx}
                            animate={animate}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
