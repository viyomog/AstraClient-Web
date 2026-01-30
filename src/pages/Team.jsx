import { Github, Twitter, Linkedin, Code, Layers, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import viyomPhoto from '../assets/viyom.jpg';

export default function Team() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Meet the <span className="text-[var(--primary)]">Creator</span></h1>
                <p className="text-[var(--text-1)] text-lg max-w-2xl mx-auto">
                    The passionate mind behind India's First Custom Minecraft Launcher.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center bg-[var(--bg-1)] border border-[rgba(255,255,255,0.05)] rounded-3xl p-8 md:p-12 hover:border-[var(--primary)] transition-colors shadow-2xl relative overflow-hidden group">
                {/* Glow Effect */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--primary)] opacity-[0.05] rounded-full blur-[100px] pointer-events-none group-hover:opacity-[0.1] transition-opacity" />

                <div className="text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-[rgba(239,68,68,0.1)] text-[var(--primary)] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                        Founder & Lead Developer
                    </div>
                    <h2 className="text-4xl font-bold mb-2 text-white">Viyom Paliwal</h2>
                    <p className="text-[var(--text-1)] mb-6 text-sm font-mono tracking-wide">FULL STACK DEVELOPER</p>

                    <p className="text-[var(--text-1)] mb-8 leading-relaxed">
                        Viyom is a dedicated software engineer with a passion for gaming and performance optimization. He started AstraClient with a vision to provide the Indian gaming community with a premium, optimized, and localized Minecraft experience.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <Badge icon={<Code size={14} />} text="React & Electron" />
                        <Badge icon={<Layers size={14} />} text="Node.js Check" />
                        <Badge icon={<Coffee size={14} />} text="Java Logic" />
                    </div>

                    <div className="flex justify-center md:justify-start gap-4">
                        <SocialLink href="https://github.com/viyomog" icon={<Github size={20} />} label="GitHub" />
                        <SocialLink href="https://x.com/ViyomOg" icon={<Twitter size={20} />} label="Twitter" />
                        <SocialLink href="https://www.linkedin.com/in/viyompaliwal/" icon={<Linkedin size={20} />} label="LinkedIn" />
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-square rounded-2xl bg-[var(--bg-2)] overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img
                            src={viyomPhoto}
                            alt="Viyom Paliwal"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Badge({ icon, text }) {
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-2)] border border-[rgba(255,255,255,0.1)] rounded-lg text-xs font-medium text-[var(--accent)]">
            {icon}
            <span>{text}</span>
        </div>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[var(--bg-2)] rounded-full hover:bg-[var(--primary)] hover:text-white transition-all transform hover:-translate-y-1"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
