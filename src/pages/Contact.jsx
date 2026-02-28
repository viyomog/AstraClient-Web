import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <span className="text-[var(--primary)] font-bold tracking-widest uppercase text-sm">Support</span>
                <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-4">Get in <span className="text-[var(--primary)]">Touch</span></h1>
                <p className="text-[var(--text-1)] text-xl max-w-2xl mx-auto">
                    Whether you have a technical issue, want to partner with us, or just want to chat with the community, we're here for you.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
                <motion.a
                    href="mailto:contactastraclient@gmail.com"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="group relative overflow-hidden bg-[var(--bg-1)] p-10 rounded-3xl border border-[rgba(255,255,255,0.05)] hover:border-[var(--primary)] transition-all cursor-pointer flex flex-col items-center text-center h-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(239,68,68,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="w-20 h-20 rounded-2xl bg-[var(--bg-2)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-6 z-10 group-hover:scale-110 transition-transform duration-500">
                        <Mail className="text-[var(--primary)]" size={36} />
                    </div>

                    <h3 className="text-3xl font-bold mb-3 text-white z-10">Email Us</h3>
                    <p className="text-[var(--text-1)] mb-8 flex-grow text-lg z-10">
                        For business inquiries, direct support, or partnership opportunities.
                    </p>

                    <div className="flex items-center gap-2 text-[var(--primary)] font-bold text-lg group-hover:gap-4 transition-all z-10">
                        contactastraclient@gmail.com <ArrowRight size={20} />
                    </div>
                </motion.a>

                <motion.a
                    href="https://discord.gg/5AEp4bgund"
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="group relative overflow-hidden bg-[var(--bg-1)] p-10 rounded-3xl border border-[rgba(255,255,255,0.05)] hover:border-[#5865F2] transition-all cursor-pointer flex flex-col items-center text-center h-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(88,101,242,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="w-20 h-20 rounded-2xl bg-[var(--bg-2)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-6 z-10 group-hover:scale-110 transition-transform duration-500">
                        <MessageSquare className="text-[#5865F2]" size={36} />
                    </div>

                    <h3 className="text-3xl font-bold mb-3 text-white z-10">Discord</h3>
                    <p className="text-[var(--text-1)] mb-8 flex-grow text-lg z-10">
                        Join thousands of players in our active community for instant help and updates.
                    </p>

                    <div className="flex items-center gap-2 text-[#5865F2] font-bold text-lg group-hover:gap-4 transition-all z-10">
                        Join Server <ArrowRight size={20} />
                    </div>
                </motion.a>
            </div>
        </div>
    );
}
