import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get in <span className="text-[var(--primary)]">Touch</span></h1>
                <p className="text-[var(--text-1)] text-lg">
                    Have questions or feedback? We'd love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="bg-[var(--bg-1)] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)]">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Mail className="text-[var(--primary)]" size={20} />
                            Email Us
                        </h3>
                        <p className="text-[var(--text-1)] mb-4 text-sm">
                            For business inquiries or direct support.
                        </p>
                        <a href="mailto:contactastraclient@gmail.com" className="text-[var(--accent)] font-medium hover:underline">
                            contactastraclient@gmail.com
                        </a>
                    </div>

                    <div className="bg-[var(--bg-1)] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)]">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <MessageSquare className="text-[var(--primary)]" size={20} />
                            Discord Community
                        </h3>
                        <p className="text-[var(--text-1)] mb-4 text-sm">
                            Join our active community for instant help and updates.
                        </p>
                        <a
                            href="https://discord.gg/dndRMztRAT"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2] rounded-lg text-white font-bold text-sm hover:bg-[#4752c4] transition-colors"
                        >
                            Join Server
                        </a>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 bg-[var(--bg-1)] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)]"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div>
                        <label className="block text-sm font-medium mb-2 text-[var(--text-1)]">Name</label>
                        <input type="text" className="w-full bg-[var(--bg-0)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:border-[var(--primary)] focus:outline-none transition-colors" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-[var(--text-1)]">Email</label>
                        <input type="email" className="w-full bg-[var(--bg-0)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:border-[var(--primary)] focus:outline-none transition-colors" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-[var(--text-1)]">Message</label>
                        <textarea rows="4" className="w-full bg-[var(--bg-0)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:border-[var(--primary)] focus:outline-none transition-colors" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 bg-[var(--primary)] hover:bg-red-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                        <Send size={18} />
                        Send Message
                    </button>
                </motion.form>
            </div>
        </div>
    );
}
