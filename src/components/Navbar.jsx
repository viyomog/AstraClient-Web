import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect for glass navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "Benchmarks", path: "/benchmarks" },
        { name: "Team", path: "/team" },
        { name: "FAQ", path: "/faq" },
        { name: "Contact", path: "/contact" },
        { name: "Privacy", path: "/privacy" }
    ];

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0,
                    zIndex: 100,
                    padding: scrolled ? '0.8rem 0' : '1.2rem 0',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: scrolled ? 'rgba(6, 8, 12, 0.75)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent'
                }}
            >
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    
                    {/* Brand Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', textDecoration: 'none' }}>
                        <motion.div 
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            style={{
                                width: '48px',
                                height: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img src={logo} alt="Astra Client Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </motion.div>
                        
                        <span style={{
                            fontSize: '1.4rem',
                            fontWeight: '800',
                            letterSpacing: '-0.04em',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <span style={{
                                background: 'linear-gradient(to right, #ffffff, #e2e8f0)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}>Astra</span>
                            <span style={{
                                background: 'linear-gradient(to right, var(--primary), #c084fc)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontWeight: '500',
                            }}>Client</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="md-flex">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link 
                                    key={link.name} 
                                    to={link.path} 
                                    style={{
                                        color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                                        textDecoration: 'none',
                                        fontSize: '1rem',
                                        fontWeight: isActive ? '600' : '500',
                                        transition: 'color 0.2s ease',
                                        position: 'relative',
                                        padding: '0.25rem 0'
                                    }}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activeNavBorder"
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: '2px',
                                                background: 'linear-gradient(to right, var(--primary), #c084fc)',
                                                borderRadius: '2px'
                                            }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Download Button (Desktop) & Hamburger Button (Mobile) */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Link to="/download" className="md-flex" style={{ textDecoration: 'none' }}>
                            <motion.button 
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(134, 64, 239, 0.6)" }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary" 
                                style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem', borderRadius: '8px' }}
                            >
                                <Download size={14} style={{ marginRight: '6px' }} /> Download
                            </motion.button>
                        </Link>

                        {/* Hamburger Button */}
                        <button 
                            className="mobile-menu-btn" 
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>
            </motion.nav>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Dark backdrop overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0, left: 0, right: 0, bottom: 0,
                                background: 'rgba(0, 0, 0, 0.6)',
                                backdropFilter: 'blur(4px)',
                                WebkitBackdropFilter: 'blur(4px)',
                                zIndex: 999
                            }}
                        />

                        {/* Drawer body */}
                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                            className="mobile-drawer"
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff' }}>Menu</span>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        border: 'none', color: '#fff', cursor: 'pointer',
                                        padding: '0.5rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)'
                                    }}
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <Link 
                                            key={link.name} 
                                            to={link.path}
                                            style={{
                                                color: isActive ? '#fff' : 'var(--text-muted)',
                                                textDecoration: 'none',
                                                fontSize: '1.15rem',
                                                fontWeight: isActive ? '600' : '500',
                                                padding: '0.5rem 0',
                                                borderBottom: '1px solid rgba(255,255,255,0.03)',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {link.name}
                                            {isActive && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />}
                                        </Link>
                                    );
                                })}
                            </div>

                            <div style={{ marginTop: 'auto' }}>
                                <Link to="/download" style={{ textDecoration: 'none' }}>
                                    <motion.button 
                                        whileTap={{ scale: 0.95 }}
                                        className="btn btn-primary" 
                                        style={{ width: '100%', padding: '0.9rem', borderRadius: '12px', fontSize: '1rem' }}
                                    >
                                        <Download size={18} style={{ marginRight: '8px' }} /> Download Client
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
