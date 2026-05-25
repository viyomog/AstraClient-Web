import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on page change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

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

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "Team", path: "/team" },
        { name: "FAQ", path: "/faq" },
        { name: "Contact", path: "/contact" },
        { name: "Privacy", path: "/privacy" }
    ];

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 100,
                padding: scrolled ? '1rem 0' : '1.5rem 0',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                background: scrolled ? 'rgba(6, 8, 12, 0.75)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    
                    {/* Brand Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', textDecoration: 'none' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(10deg) scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(0) scale(1)'}
                        >
                            <img src={logo} alt="Astra Client Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>

                        <span style={{
                            fontSize: '1.5rem',
                            fontWeight: '800',
                            letterSpacing: '-0.04em',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <span style={{
                                background: 'linear-gradient(to right, #ffffff, #e2e8f0)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>Astra</span>
                            <span style={{
                                background: 'linear-gradient(to right, var(--primary), #c084fc)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontWeight: '500',
                                textShadow: '0 0 20px rgba(134, 64, 239, 0.3)'
                            }}>Client</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="nav-links-desktop">
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
                                        fontWeight: '500',
                                        transition: 'all 0.2s ease',
                                        position: 'relative',
                                        padding: '0.25rem 0'
                                    }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--text-main)'}
                                    onMouseOut={(e) => {
                                        if (!isActive) e.target.style.color = 'var(--text-muted)';
                                    }}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span style={{
                                            position: 'absolute',
                                            bottom: 0, left: 0, right: 0,
                                            height: '2px',
                                            background: 'var(--primary)',
                                            borderRadius: '2px',
                                            boxShadow: '0 0 8px var(--primary)'
                                        }} />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Action Button & Hamburger */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <Link to="/download" style={{ textDecoration: 'none' }} className="nav-links-desktop">
                            <button className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem', borderRadius: '8px' }}>
                                Download
                            </button>
                        </Link>

                        <button 
                            className={`navbar-hamburger ${mobileMenuOpen ? 'active' : ''}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Drawer */}
            <div className={`navbar-mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}>
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link 
                            key={link.name} 
                            to={link.path} 
                            style={{
                                color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                                textDecoration: 'none',
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                transition: 'color 0.2s',
                                textShadow: isActive ? '0 0 15px rgba(134, 64, 239, 0.4)' : 'none'
                            }}
                        >
                            {link.name}
                        </Link>
                    );
                })}
                <Link to="/download" style={{ textDecoration: 'none', marginTop: '1.5rem' }}>
                    <button className="btn btn-primary" style={{ padding: '0.8rem 2.2rem', fontSize: '1.1rem', borderRadius: '12px' }}>
                        <Download size={18} style={{ marginRight: '0.5rem' }} /> Download Now
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Navbar;
