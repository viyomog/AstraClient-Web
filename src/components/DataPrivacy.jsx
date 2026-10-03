import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const DataPrivacy = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-card)', padding: '5rem 0', borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="container" 
                style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}
            >
                <motion.div 
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        width: '64px', 
                        height: '64px', 
                        borderRadius: '50%', 
                        background: 'rgba(124, 58, 237, 0.1)', 
                        color: 'var(--primary)', 
                        marginBottom: '1.5rem',
                        boxShadow: '0 0 25px rgba(124, 58, 237, 0.15)'
                    }}
                >
                    <ShieldCheck size={32} />
                </motion.div>
                
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-main)' }}>
                    Transparent Data Usage
                </h2>
                
                <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', marginBottom: '2rem' }}>
                    Astra Client was engineered to request access to your Microsoft account solely to authenticate your ownership of Minecraft Java Edition. This allowed players to securely log in and connect to servers without passwords ever being viewed or stored. Minimal anonymous data and technical reports were used solely to analyze client stability.
                </p>
                
                <Link to="/privacy" style={{ textDecoration: 'none' }}>
                    <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-outline" 
                        style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '0.5rem', 
                            padding: '0.75rem 2rem', 
                            borderRadius: '8px', 
                            border: '1px solid var(--primary)', 
                            color: 'var(--primary)',
                            background: 'transparent'
                        }}
                    >
                        Read our full Privacy Policy
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
};

export default DataPrivacy;
