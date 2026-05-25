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

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ 
                        fontSize: 'clamp(2rem, 5vw, 3rem)', 
                        fontWeight: '800', 
                        marginBottom: '1.5rem', 
                        letterSpacing: '-1px' 
                    }}>
                        Why Choose <span style={{
                            background: 'linear-gradient(135deg, var(--primary), #d946ef)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            textShadow: '0 0 40px rgba(134, 64, 239, 0.2)'
                        }}>Astra Client?</span>
                    </h2>
                    <p style={{ 
                        color: 'var(--text-muted)', 
                        fontSize: '1.1rem', 
                        maxWidth: '650px', 
                        margin: '0 auto', 
                        lineHeight: '1.7',
                        padding: '0 1rem'
                    }}>
                        We've stripped away the bloat and focused intensely on what matters: pure, unadulterated performance wrapped in a premium design.
                    </p>
                </div>

                <div className="features-grid">
                    {featureList.map((feature, idx) => (
                        <div key={idx} className="feature-card">
                            <div className="feature-card-icon">
                                {feature.icon}
                            </div>

                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: '700',
                                marginBottom: '1rem',
                                color: 'var(--text-main)',
                                letterSpacing: '-0.5px'
                            }}>
                                {feature.title}
                            </h3>

                            <p style={{
                                color: 'var(--text-muted)',
                                lineHeight: '1.6',
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
