import { Github, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full border-t border-[rgba(255,255,255,0.05)] bg-[var(--bg-0)] pt-12 pb-8">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <img src="/logo.ico" alt="Astra Logo" className="w-8 h-8" />
                        <span className="font-bold text-lg">AstraClient</span>
                    </div>
                    <p className="text-[var(--text-1)] text-sm leading-relaxed max-w-xs">
                        India's First Custom Minecraft Launcher. Built for performance, designed for gamers. Experience Minecraft like never before.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-white">Community</h4>
                    <ul className="space-y-2 text-sm text-[var(--text-1)]">
                        <li><a href="https://discord.gg/dndRMztRAT" className="hover:text-[var(--primary)] transition-colors">Discord Server</a></li>
                        <li><a href="https://twitter.com/ViyomOg" className="hover:text-[var(--primary)] transition-colors">Twitter (X)</a></li>
                        <li><a href="https://www.youtube.com/@viyom_og" className="hover:text-[var(--primary)] transition-colors">YouTube Channel</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-white">Resources</h4>
                    <ul className="space-y-2 text-sm text-[var(--text-1)]">
                        <li><a href="/download" className="hover:text-[var(--primary)] transition-colors">Download Client</a></li>
                        <li><a href="/features" className="hover:text-[var(--primary)] transition-colors">Features</a></li>
                        <li><a href="/faq" className="hover:text-[var(--primary)] transition-colors">Help Center</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-white">Legal</h4>
                    <ul className="space-y-2 text-sm text-[var(--text-1)]">
                        <li><a href="/privacy" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-[var(--primary)] transition-colors">Terms of Service</a></li>
                        <li className="opacity-60 text-xs mt-2">Not affiliated with Mojang Studios</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-[rgba(255,255,255,0.05)] text-center text-xs text-[var(--text-1)]">
                <p>© 2026 Astra Development Team.</p>
                <p className="mt-2">Developed with ❤️ by Viyom Paliwal</p>
            </div>
        </footer>
    );
}
