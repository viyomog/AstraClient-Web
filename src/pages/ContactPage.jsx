import React from 'react';
import { Mail, MessageSquare, Twitter, Disc as Discord, ArrowRight } from 'lucide-react';

const ContactPage = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-darker)' }}>

            {/* Header Section */}
            <section style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '500px', height: '150px',
                    background: 'var(--primary)',
                    filter: 'blur(150px)', opacity: 0.15,
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{
                        color: 'var(--primary)',
                        fontWeight: '800',
                        fontSize: '0.85rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '1rem',
                        background: 'rgba(134, 64, 239, 0.1)',
                        padding: '0.4rem 1rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(134, 64, 239, 0.2)'
                    }}>
                        Get in Touch
                    </span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px' }}>
                        Contact <span style={{ color: 'var(--primary)' }}>Astra</span>
                    </h1>
                    <p style={{ color: '#94a3b8', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto', fontWeight: '400' }}>
                        Need help with your client? Found a bug? Or just want to say hi? We're always here to listen.
                    </p>
                </div>
            </section>

            {/* Main Content Split */}
            <section className="container" style={{ paddingBottom: '8rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>

                    {/* Left Side: Contact Methods & Socials */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        {/* Primary Discord Card */}
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(88, 101, 242, 0.1) 0%, rgba(88, 101, 242, 0.05) 100%)',
                            border: '1px solid rgba(88, 101, 242, 0.3)',
                            borderRadius: '24px',
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <div style={{
                                width: '50px', height: '50px', borderRadius: '12px', background: '#5865F2',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                                boxShadow: '0 10px 20px rgba(88, 101, 242, 0.3)'
                            }}>
                                <Discord size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff' }}>Join the Community</h3>
                            <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '1.05rem' }}>
                                The fastest way to get support is through our official Discord server. Our staff and community members are active 24/7.
                            </p>
                            <a
                                href="https://discord.gg/5AEp4bgund"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    color: '#5865F2', fontWeight: '700', marginTop: '0.5rem', textDecoration: 'none'
                                }}
                            >
                                Open Discord <ArrowRight size={16} />
                            </a>
                        </div>

                        {/* Secondary Business Email Card */}
                        <div style={{
                            background: 'var(--bg-card)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '24px',
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <div style={{
                                width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <Mail size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff' }}>Business Inquiries</h3>
                            <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '1.05rem' }}>
                                For partnerships, sponsorships, or serious business inquiries, please reach out via email.
                            </p>
                            <a
                                href="mailto:support@astraclient.in"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    color: 'var(--text-main)', fontWeight: '700', marginTop: '0.5rem', textDecoration: 'none'
                                }}
                            >
                                support@astraclient.in <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Direct Message Form */}
                    <div style={{
                        background: 'var(--bg-card)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '24px',
                        padding: '3rem 2.5rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative glow inside form */}
                        <div style={{
                            position: 'absolute', top: '-100px', right: '-100px',
                            width: '200px', height: '200px', background: 'var(--primary)',
                            filter: 'blur(100px)', opacity: 0.1, pointerEvents: 'none'
                        }}></div>

                        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>Send a Message</h2>
                        <p style={{ color: '#94a3b8', marginBottom: '2.5rem' }}>Fill out the form below and we'll get back to you.</p>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: '600' }}>Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Steve"
                                        style={{
                                            background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                                            padding: '1rem 1.2rem', borderRadius: '12px', color: '#fff', fontSize: '1rem',
                                            outline: 'none', transition: 'border 0.2s ease'
                                        }}
                                        onFocus={(e) => e.target.style.border = '1px solid var(--primary)'}
                                        onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: '600' }}>Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="steve@minecraft.net"
                                        style={{
                                            background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                                            padding: '1rem 1.2rem', borderRadius: '12px', color: '#fff', fontSize: '1rem',
                                            outline: 'none', transition: 'border 0.2s ease'
                                        }}
                                        onFocus={(e) => e.target.style.border = '1px solid var(--primary)'}
                                        onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: '600' }}>Subject</label>
                                <select
                                    style={{
                                        background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '1rem 1.2rem', borderRadius: '12px', color: '#fff', fontSize: '1rem',
                                        outline: 'none', cursor: 'pointer', appearance: 'none'
                                    }}
                                >
                                    <option value="support">General Support</option>
                                    <option value="bug">Bug Report</option>
                                    <option value="business">Business Inquiry</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: '600' }}>Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="How can we help you today?"
                                    style={{
                                        background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '1rem 1.2rem', borderRadius: '12px', color: '#fff', fontSize: '1rem',
                                        outline: 'none', resize: 'vertical', fontFamily: 'inherit'
                                    }}
                                    onFocus={(e) => e.target.style.border = '1px solid var(--primary)'}
                                    onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                style={{
                                    background: 'linear-gradient(135deg, var(--primary) 0%, #b485f8 100%)',
                                    color: '#fff', border: 'none', padding: '1.2rem', borderRadius: '12px',
                                    fontSize: '1.1rem', fontWeight: '700', cursor: 'pointer',
                                    boxShadow: '0 10px 20px rgba(134, 64, 239, 0.3)',
                                    marginTop: '1rem', transition: 'all 0.2s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 15px 25px rgba(134, 64, 239, 0.4)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 10px 20px rgba(134, 64, 239, 0.3)';
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactPage;
