import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
    return (
        <div style={{ paddingTop: 'clamp(100px, 15vh, 140px)', minHeight: '100vh', backgroundColor: 'var(--bg-darker)', color: '#cbd5e1', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '900px', paddingBottom: '6rem' }}>

                {/* Header */}
                <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ fontSize: 'clamp(2.2rem, 6vw, 3rem)', fontWeight: '900', color: '#fff', marginBottom: '1rem' }}
                    >
                        Privacy <span style={{ color: 'var(--primary)' }}>Policy</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        style={{ color: '#94a3b8' }}
                    >
                        Last Updated: March 01, 2026
                    </motion.p>
                </header>

                {/* Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '24px', padding: 'clamp(1.5rem, 5vw, 3rem)', lineHeight: '1.7' }}
                >

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '700' }}>1. Information We Collect</h2>
                        <p>
                            We value your privacy. Astra Client collects minimal data to improve your experience:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                            <li><strong>Hardware Data:</strong> Anonymous information about your CPU/GPU to optimize performance.</li>
                            <li><strong>Crash Reports:</strong> Technical logs sent manually or automatically to fix bugs.</li>
                            <li><strong>Session Tokens:</strong> Secure Microsoft OAuth tokens required to verify your Minecraft account (we do not see or store your password).</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '700' }}>2. How We Use Data</h2>
                        <p>
                            Collected data is used solely for:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                            <li>Performance tuning and optimization.</li>
                            <li>Critical bug fixing and stability improvements.</li>
                            <li>Verifying cosmetic ownership (e.g., capes).</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '700' }}>3. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your information. We never sell, trade, or share your personal data with third parties for marketing purposes.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '700' }}>4. Third Party Services</h2>
                        <p>
                            Astra Client interacts with services like Microsoft Azure and GitHub for authentication and updates. Please refer to their respective privacy policies for how they handle your data.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '700' }}>5. Your Rights</h2>
                        <p>
                            You have the right to request the deletion of any data associated with your linked account. Contact us at <strong>support@astraclient.in</strong> for assistance.
                        </p>
                    </section>

                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPage;
