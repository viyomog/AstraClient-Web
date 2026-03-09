import React from 'react';
import { Zap, Sparkles, Paintbrush, MonitorPlay, Shield, Rocket } from 'lucide-react';

const Features = () => {
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

    return (
        <section className="section" id="features" style={{ backgroundColor: 'var(--bg-darker)', position: 'relative' }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                        Why Choose <span style={{
                            background: 'linear-gradient(135deg, var(--primary), #d946ef)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            textShadow: '0 0 40px rgba(134, 64, 239, 0.4)'
                        }}>Astra Client?</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
                        We've stripped away the bloat and focused intensely on what matters: pure, unadulterated performance wrapped in a premium design.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '2rem'
                }}>
                    {featureList.map((feature, idx) => (
                        <div key={idx} className="feature-card" style={{
                            position: 'relative',
                            overflow: 'hidden',
                            background: 'rgba(10, 13, 20, 0.4)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.03)',
                            borderRadius: '24px',
                            padding: '3rem 2.5rem',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 10px 30px -10px rgba(0,0,0,0.5)',
                            cursor: 'pointer'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                e.currentTarget.style.border = '1px solid rgba(134, 64, 239, 0.3)';
                                e.currentTarget.style.boxShadow = 'inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px -10px rgba(134, 64, 239, 0.15)';
                                e.currentTarget.querySelector('.icon-container').style.transform = 'scale(1.1)';
                                e.currentTarget.querySelector('.icon-container').style.background = 'rgba(134, 64, 239, 0.2)';
                                e.currentTarget.querySelector('.icon-container').style.boxShadow = '0 0 20px rgba(134, 64, 239, 0.4)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.03)';
                                e.currentTarget.style.boxShadow = 'inset 0 1px 1px rgba(255,255,255,0.05), 0 10px 30px -10px rgba(0,0,0,0.5)';
                                e.currentTarget.querySelector('.icon-container').style.transform = 'scale(1)';
                                e.currentTarget.querySelector('.icon-container').style.background = 'rgba(134, 64, 239, 0.05)';
                                e.currentTarget.querySelector('.icon-container').style.boxShadow = 'none';
                            }}
                        >
                            {/* Ambient Top Glow */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '60%',
                                height: '1px',
                                background: 'radial-gradient(ellipse at center, rgba(134, 64, 239, 0.6) 0%, transparent 70%)',
                                opacity: 0.5
                            }}></div>

                            <div className="icon-container" style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                background: 'rgba(134, 64, 239, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                marginBottom: '2rem',
                                border: '1px solid rgba(134, 64, 239, 0.1)',
                                transition: 'all 0.4s ease'
                            }}>
                                {feature.icon}
                            </div>

                            <h3 style={{
                                fontSize: '1.35rem',
                                fontWeight: '700',
                                marginBottom: '1rem',
                                color: 'var(--text-main)',
                                letterSpacing: '-0.5px'
                            }}>
                                {feature.title}
                            </h3>

                            <p style={{
                                color: 'var(--text-muted)',
                                lineHeight: '1.7',
                                fontSize: '0.95rem'
                            }}>
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
