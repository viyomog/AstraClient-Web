import { motion } from 'framer-motion';
import { Palette, Zap, Box, Shield, Layers, Monitor } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: <Palette size={32} />,
            title: "Custom UI & Themes",
            desc: "Forget the boring default look. AstraClient brings a fully customizable, modern, and sleek interface that you can personalize to match your style.",
            color: "text-purple-400"
        },
        {
            icon: <Zap size={32} />,
            title: "FPS Boost & Performance",
            desc: "Our optimized engine reduces memory usage and renders frames faster. Experience smoother gameplay even on lower-end hardware.",
            color: "text-yellow-400"
        },
        {
            icon: <Box size={32} />,
            title: "Easy Mod Management",
            desc: "Drag, drop, play. Managing mods has never been easier. Enable or disable mods instantly without restarting the launcher.",
            color: "text-blue-400"
        },
        {
            icon: <Shield size={32} />,
            title: "Clean & Safe",
            desc: "No bloatware, no malware, no tracking. AstraClient is built with a private, secure codebase verified for your peace of mind.",
            color: "text-green-400"
        },
        {
            icon: <Layers size={32} />,
            title: "Fabric Support",
            desc: "Built on the lightweight Fabric loader, ensuring compatibility with the latest mods and updates while maintaining peak performance.",
            color: "text-pink-400"
        },
        {
            icon: <Monitor size={32} />,
            title: "Modern HUD",
            desc: "In-game overlays for FPS, coordinates, and armor status that look beautiful and don't clutter your screen.",
            color: "text-cyan-400"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 max-w-3xl"
            >
                <span className="text-[var(--primary)] font-bold tracking-widest uppercase text-sm">Why Choose Astra?</span>
                <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6">Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-orange-500">Performance</span></h1>
                <p className="text-[var(--text-1)] text-lg leading-relaxed">
                    AstraClient isn't just a launcher; it's a complete upgrade for your Minecraft experience.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative bg-[var(--bg-1)] border border-[rgba(255,255,255,0.05)] rounded-3xl p-8 hover:border-[var(--primary)] transition-all hover:-translate-y-2 overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 p-32 bg-current opacity-[0.03] blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none transition-opacity group-hover:opacity-[0.08] ${f.color}`} />

                        <div className={`w-14 h-14 rounded-2xl bg-[var(--bg-2)] flex items-center justify-center mb-6 ${f.color} shadow-lg group-hover:scale-110 transition-transform`}>
                            {f.icon}
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-white">{f.title}</h3>
                        <p className="text-[var(--text-1)] leading-relaxed relative z-10">
                            {f.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
