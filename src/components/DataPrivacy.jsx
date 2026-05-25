import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const DataPrivacy = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-card)', padding: '6rem 0', borderTop: '1px solid var(--border)' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
                <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    background: 'rgba(134, 64, 239, 0.1)', 
                    color: 'var(--primary)', 
                    marginBottom: '2rem',
                    border: '1px solid rgba(134, 64, 239, 0.25)',
                    boxShadow: '0 0 20px rgba(134, 64, 239, 0.1)'
                }}>
                    <ShieldCheck size={32} />
                </div>
                
                <h2 style={{ 
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
                    fontWeight: '800', 
                    marginBottom: '1.25rem', 
                    color: 'var(--text-main)',
                    letterSpacing: '-0.5px'
                }}>
                    Transparent Data Usage
                </h2>
                
                <p style={{ 
                    color: 'var(--text-muted)', 
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', 
                    lineHeight: '1.8', 
                    marginBottom: '2.5rem' 
                }}>
                    Astra Client requests access to your Microsoft account solely to authenticate your ownership of Minecraft Java Edition. This allows you to securely log in and play on servers without us ever seeing your password. We also collect minimal, anonymous hardware data and crash reports exclusively to improve client performance and fix bugs.
                </p>
                
                <Link to="/privacy" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 2.2rem', textDecoration: 'none', borderRadius: '12px', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
                    Read our full Privacy Policy
                </Link>
            </div>
        </section>
    );
};

export default DataPrivacy;
