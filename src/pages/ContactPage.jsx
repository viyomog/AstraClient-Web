import React from 'react';
import { Mail, Disc as Discord, ArrowRight, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-darker)' }}>

            {/* Header Section */}
            <section style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative' }} className="animate-fade-in-up">
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: 'min(500px, 90vw)', height: '150px',
                    background: 'var(--primary)',
                    filter: 'blur(150px)', opacity: 0.15,
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{
                        color: 'var(--primary-hover)',
                        fontWeight: '800',
                        fontSize: '0.8rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '1.25rem',
                        background: 'rgba(134, 64, 239, 0.08)',
                        padding: '0.4rem 1.2rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(134, 64, 239, 0.2)'
                    }}>
                        Get in Touch
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px' }}>
                        Contact <span className="text-gradient">Astra</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                        Need help with your client? Found a bug? Or just want to say hi? We're always here to listen.
                    </p>
                </div>
            </section>

            {/* Main Content Split */}
            <section className="container animate-fade-in-up delay-100" style={{ paddingBottom: '8rem' }}>
                <div className="responsive-grid-split" style={{ alignItems: 'start' }}>

                    {/* Left Side: Contact Methods & Socials */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        {/* Primary Discord Card */}
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(88, 101, 242, 0.1) 0%, rgba(88, 101, 242, 0.04) 100%)',
                            border: '1px solid rgba(88, 101, 242, 0.25)',
                            borderRadius: '24px',
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.25rem',
                            transition: 'transform 0.3s ease',
                            boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px', background: '#5865F2',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                                boxShadow: '0 8px 16px rgba(88, 101, 242, 0.3)'
                            }}>
                                <Discord size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff' }}>Join the Community</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>
                                The fastest way to get support is through our official Discord server. Our staff and community members are active 24/7.
                            </p>
                            <a
                                href="https://discord.gg/5AEp4bgund"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    color: '#5865F2', fontWeight: '700', marginTop: '0.5rem', textDecoration: 'none',
                                    transition: 'gap 0.2s'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.gap = '0.75rem'; }}
                                onMouseOut={(e) => { e.currentTarget.style.gap = '0.5rem'; }}
                            >
                                Open Discord <ArrowRight size={16} />
                            </a>
                        </div>

                        {/* Secondary Business Email Card */}
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border)',
                            borderRadius: '24px',
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.25rem',
                            transition: 'transform 0.3s ease',
                            boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)',
                                border: '1px solid rgba(255,255,255,0.06)'
                            }}>
                                <Mail size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff' }}>Business Inquiries</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>
                                For partnerships, sponsorships, or general developer requests, please reach out via email.
                            </p>
                            <a
                                href="mailto:support@astraclient.in"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    color: 'var(--text-main)', fontWeight: '700', marginTop: '0.5rem', textDecoration: 'none',
                                    transition: 'gap 0.2s'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.gap = '0.75rem'; }}
                                onMouseOut={(e) => { e.currentTarget.style.gap = '0.5rem'; }}
                            >
                                support@astraclient.in <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Direct Message Form */}
                    <div className="glass-panel" style={{
                        borderRadius: '24px',
                        padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 3vw, 2.5rem)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative glow inside form */}
                        <div style={{
                            position: 'absolute', top: '-100px', right: '-100px',
                            width: '200px', height: '200px', background: 'var(--primary)',
                            filter: 'blur(100px)', opacity: 0.1, pointerEvents: 'none'
                        }}></div>

                        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.5rem' }}>Send a Message</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>Fill out the form below and we'll get back to you.</p>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="form-grid-2">
                                <div className="form-input-group">
                                    <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.5px' }}>Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Steve"
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-input-group">
                                    <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.5px' }}>Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="steve@minecraft.net"
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="form-input-group">
                                <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.5px' }}>Subject</label>
                                <select
                                    className="form-input"
                                    style={{
                                        cursor: 'pointer',
                                        appearance: 'none',
                                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2394a3b8\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1.2rem center',
                                        backgroundSize: '1.2rem',
                                        paddingRight: '3rem'
                                    }}
                                >
                                    <option value="support" style={{ background: '#0a0d14' }}>General Support</option>
                                    <option value="bug" style={{ background: '#0a0d14' }}>Bug Report</option>
                                    <option value="business" style={{ background: '#0a0d14' }}>Business Inquiry</option>
                                    <option value="other" style={{ background: '#0a0d14' }}>Other</option>
                                </select>
                            </div>

                            <div className="form-input-group">
                                <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.5px' }}>Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="How can we help you today?"
                                    className="form-input"
                                    style={{ resize: 'vertical' }}
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="btn btn-primary"
                                style={{
                                    padding: '1.1rem',
                                    borderRadius: '12px',
                                    fontSize: '1.05rem',
                                    fontWeight: '700',
                                    marginTop: '0.5rem',
                                    gap: '0.5rem'
                                }}
                            >
                                <Send size={16} /> Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactPage;
