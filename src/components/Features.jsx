import React from 'react';
import { Zap, Sparkles, Paintbrush, MonitorPlay, Shield, Rocket, Brain, Users } from 'lucide-react';
import { motion } from 'framer-motion';

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
        },
        {
            title: "Astra AI Companion",
            desc: "Get instant Minecraft knowledge, recipe info, and building advice on the fly without tabbing out of the game.",
            icon: <Brain size={24} />
        },
        {
            title: "Seamless Accounts",
            desc: "Effortlessly manage and switch between multiple Microsoft and Mojang profiles with a single click.",
            icon: <Users size={24} />
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 15 }
        }
    };

    return (
        <section className="section" id="features" style={{ backgroundColor: 'var(--bg-darker)', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                        Why Choose <span style={{
                            background: 'linear-gradient(135deg, var(--primary), #d946ef)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            textShadow: '0 0 40px rgba(134, 64, 239, 0.3)'
                        }}>Astra Client?</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', padding: '0 1rem' }}>
                        We've stripped away the bloat and focused intensely on what matters: pure, unadulterated performance wrapped in a premium design.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid-responsive"
                >
                    {featureList.map((feature, idx) => (
                        <motion.div 
                            key={idx} 
                            variants={cardVariants}
                            whileHover={{ 
                                y: -8, 
                                scale: 1.02, 
                                borderColor: 'rgba(134, 64, 239, 0.4)',
                                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.08), 0 20px 45px rgba(134, 64, 239, 0.12)'
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                background: 'rgba(10, 13, 20, 0.45)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.03)',
                                borderRadius: '24px',
                                padding: '3rem 2.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                cursor: 'pointer'
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
                                transition: 'all 0.3s ease'
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
                                fontSize: '0.95rem',
                                marginTop: 'auto'
                            }}>
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Features;
