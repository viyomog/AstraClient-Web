import { motion } from 'framer-motion';
import { Download, Zap, Shield, Layout, ArrowRight, Star, Cpu, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
    const [latestVersion, setLatestVersion] = useState('v0.4.1');

    useEffect(() => {
        fetch('https://api.github.com/repos/viyomog/AstraClient/releases/latest')
            .then(res => res.json())
            .then(data => {
                if (data.tag_name) {
                    setLatestVersion(data.tag_name);
                }
            })
            .catch(err => console.error('Failed to fetch version', err));
    }, []);

    const features = [
        {
            icon: <Zap size={28} />,
            title: "Performance+",
            desc: "Custom JVM arguments and optimized rendering pipeline for maximum FPS.",
            color: "var(--primary)"
        },
        {
            icon: <Layout size={28} />,
            title: "Custom HUD",
            desc: "A powerful, drag-and-drop editor to build your perfect in-game interface.",
            color: "var(--secondary)"
        },
        {
            icon: <Shield size={28} />,
            title: "Privacy First",
            desc: "Zero data collection policy. Your account and personal info stay on your machine.",
            color: "#10b981"
        }
    ];

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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
        <div className="relative pt-20">
            {/* Hero Section */}
            <section className="relative py-24 md:py-40 px-6 overflow-hidden min-h-[85vh] flex items-center">
                {/* Logo Watermark */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 0.03, scale: 1, rotate: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] pointer-events-none"
                >
                    <img src="/logo.ico" alt="" className="w-full h-full object-contain filter blur-sm" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-7xl mx-auto text-center relative z-10 w-full"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full glass-panel text-[var(--primary)] text-xs font-black tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                        </span>
                        {latestVersion} IS NOW LIVE
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-8xl lg:text-9xl font-heading font-black mb-10 tracking-tighter leading-none relative"
                    >
                        BEYOND <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-glow">LIMITS</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-[var(--text-muted)] mb-14 max-w-2xl mx-auto font-medium"
                    >
                        Experience India's most powerful Minecraft client.
                        Engineered for elite performance and unmatched style.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row justify-center items-center gap-6"
                    >
                        <Link
                            to="/download"
                            className="button-premium px-10 py-5 rounded-2xl font-black text-lg text-white flex items-center gap-3 w-full sm:w-auto justify-center group overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            <Download size={22} className="group-hover:-translate-y-1 transition-transform" />
                            <span className="relative z-10">GET ASTRA NOW</span>
                        </Link>

                        <a
                            href="https://discord.gg/5AEp4bgund"
                            target="_blank"
                            rel="noreferrer"
                            className="glass-panel px-10 py-5 rounded-2xl font-black text-lg text-white flex items-center gap-3 w-full sm:w-auto justify-center transition-all hover:bg-white/5 group"
                        >
                            <MousePointer2 size={22} className="text-[var(--secondary)] group-hover:rotate-12 transition-transform" />
                            JOIN DISCORD
                        </a>
                    </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[var(--secondary)]/10 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
            </section>

            {/* Marquee Banner Section */}
            <section className="py-8 border-y border-white/10 relative z-10 overflow-hidden bg-[var(--bg-deep)] flex">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--primary)]/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--secondary)]/5 to-transparent pointer-events-none blur-sm" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    className="flex whitespace-nowrap items-center w-max opacity-80"
                >
                    {/* Duplicate set for seamless infinite scrolling */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16 md:gap-32 pr-16 md:pr-32 pointer-events-none items-center">
                            <span className="font-heading font-black text-2xl md:text-3xl italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">ELITE FPS</span>
                            <span className="text-[var(--primary)]" ><Zap size={24} /></span>

                            <span className="font-heading font-black text-2xl md:text-3xl italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">ULTRA LOW LATENCY</span>
                            <span className="text-[var(--secondary)]" ><Zap size={24} /></span>

                            <span className="font-heading font-black text-2xl md:text-3xl italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">LAG-FREE GAMING</span>
                            <span className="text-[var(--primary)]" ><Zap size={24} /></span>

                            <span className="font-heading font-black text-2xl md:text-3xl italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">MADE IN INDIA</span>
                            <span className="text-[var(--secondary)]" ><Zap size={24} /></span>

                            <span className="font-heading font-black text-2xl md:text-3xl italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">CUSTOM HUD</span>
                            <span className="text-[var(--primary)]" ><Zap size={24} /></span>

                            <span className="font-heading font-black text-2xl md:text-3xl italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">100% SECURE</span>
                            <span className="text-[var(--secondary)]" ><Zap size={24} /></span>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Features Page Preview */}
            <section className="py-32 px-6 relative">
                <div className="absolute inset-0 bg-[var(--bg-deep)] -skew-y-3 origin-top-left z-0" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <span className="text-[var(--primary)] font-black tracking-[0.2em] uppercase text-xs flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                                Core Architecture
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mt-4 tracking-tighter">
                                ENGINEERED FOR <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-glow text-[1.1em]">PERFECTION</span>
                            </h2>
                        </motion.div>
                        <Link to="/features" className="text-white font-bold flex items-center gap-2 group hover:text-[var(--primary)] transition-colors bg-white/5 px-6 py-3 rounded-xl border border-white/10 glass-panel">
                            View All Features <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-[var(--secondary)]" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.15, type: "spring", stiffness: 200, damping: 20 }}
                                className="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-[var(--primary)]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_var(--primary-glow)]"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                                    <Cpu size={140} />
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6 bg-white/5 border border-white/10"
                                    style={{ color: f.color }}
                                >
                                    {f.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-4 font-heading text-white">{f.title}</h3>
                                <p className="text-[var(--text-muted)] leading-relaxed font-medium">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
