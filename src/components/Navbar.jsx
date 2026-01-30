import { Link, useLocation } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Features', path: '/features' },
        { name: 'Blog', path: '/blog' },
        { name: 'Team', path: '/team' },
        { name: 'Download', path: '/download' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="relative z-50 w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
            <Link to="/" className="flex items-center gap-3 group">
                <motion.img
                    whileHover={{ rotate: 10 }}
                    src="/logo.ico"
                    alt="Astra Logo"
                    className="w-10 h-10 drop-shadow-lg"
                />
                <span className="font-bold text-xl tracking-wide group-hover:text-[var(--primary)] transition-colors">
                    AstraClient
                </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`font-medium transition-colors hover:text-[var(--primary)] ${location.pathname === link.path ? 'text-[var(--primary)]' : 'text-[var(--text-1)]'
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
                <a
                    href="https://github.com/viyomog/AstraClient"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                >
                    <Github size={20} />
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 text-[var(--text-1)]"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 left-0 right-0 bg-[var(--bg-1)] border-b border-[rgba(255,255,255,0.1)] p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-medium ${location.pathname === link.path ? 'text-[var(--primary)]' : 'text-[var(--text-1)]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
