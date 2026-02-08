import { motion } from 'framer-motion';
import { Download, Zap, Shield, Layout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
    const [latestVersion, setLatestVersion] = useState('v1.0.0');

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
        { icon: <Zap size={24} />, title: "Optimized Performance", desc: "Built for speed with automatic FPS boosting technology." },
        { icon: <Layout size={24} />, title: "Modern UI", desc: "Sleek, dark-themed interface designed for gamers." },
        { icon: <Shield size={24} />, title: "Secure & Safe", desc: "Codebase is private but verified secure. All Rights Reserved." }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-48 text-center px-6 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(239,68,68,0.15)] via-transparent to-transparent pointer-events-none blur-3xl" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-5xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] text-[var(--primary)] text-sm font-semibold tracking-wider uppercase">
                        <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                        {latestVersion} Now Available
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                        India's First <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-orange-500">Custom Minecraft Launcher</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[var(--text-1)] mb-12 max-w-2xl mx-auto leading-relaxed">
                        Experience the next generation of Minecraft gaming. Boost your FPS, manage mods effortlessly, and play with style.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            to="/download"
                            className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-[var(--primary)] to-orange-600 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all transform hover:-translate-y-1"
                        >
                            <Download size={20} className="group-hover:animate-bounce" />
                            Download Now
                        </Link>

                        <a
                            href="https://discord.gg/5AEp4bgund"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-[var(--bg-2)] border border-[rgba(255,255,255,0.1)] hover:bg-[var(--bg-1)] transition-all"
                        >
                            Join Community
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-[var(--bg-1)] relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-[var(--bg-0)] border border-[rgba(255,255,255,0.05)] hover:border-[var(--primary)] transition-all group hover:shadow-2xl"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[var(--bg-2)] flex items-center justify-center mb-6 text-[var(--primary)] group-hover:scale-110 transition-transform shadow-inner">
                                    {f.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">{f.title}</h3>
                                <p className="text-[var(--text-1)] leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
