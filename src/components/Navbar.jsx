import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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
        <nav style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 100,
            padding: '1.2rem 0',
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(6, 8, 12, 0.7)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                {/* Brand Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.1rem', cursor: 'pointer', group: 'logo', textDecoration: 'none' }}>

                    {/* Enlarged Original Logo */}
                    <div style={{
                        width: '64px',
                        height: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <img src={logo} alt="Astra Client Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>

                    {/* Gradient Brand Text */}
                    <span style={{
                        fontSize: '1.6rem',
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
                            textShadow: '0 0 20px rgba(255,255,255,0.1)'
                        }}>Astra</span>
                        <span style={{
                            background: 'linear-gradient(to right, var(--primary), #c084fc)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            fontWeight: '500',
                            textShadow: '0 0 30px rgba(134, 64, 239, 0.3)'
                        }}>Client</span>
                    </span>
                </Link>

                {/* Deskop Navigation Links */}
                <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden md:flex">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} style={{
                            color: 'var(--text-muted)',
                            textDecoration: 'none',
                            fontSize: '1.05rem',
                            fontWeight: '500',
                            transition: 'color 0.2s',
                        }}
                            onMouseOver={(e) => e.target.style.color = 'var(--text-main)'}
                            onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Action Button */}
                <div>
                    <Link to="/download" style={{ textDecoration: 'none' }}>
                        <button className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', borderRadius: '8px' }}>
                            Download Now
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
