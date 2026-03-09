import React from 'react';

const PrivacyPage = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-darker)', color: '#cbd5e1' }}>
            <div className="container" style={{ maxWidth: '900px', paddingBottom: '8rem' }}>

                {/* Header */}
                <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '900', color: '#fff', marginBottom: '1rem' }}>
                        Privacy <span style={{ color: 'var(--primary)' }}>Policy</span>
                    </h1>
                    <p style={{ color: '#94a3b8' }}>Last Updated: March 01, 2026</p>
                </header>

                {/* Content */}
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '24px', padding: '3rem', lineHeight: '1.7' }}>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>1. Information We Collect</h2>
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
                        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>2. How We Use Data</h2>
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
                        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>3. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your information. We never sell, trade, or share your personal data with third parties for marketing purposes.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>4. Third Party Services</h2>
                        <p>
                            Astra Client interacts with services like Microsoft Azure and GitHub for authentication and updates. Please refer to their respective privacy policies for how they handle your data.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>5. Your Rights</h2>
                        <p>
                            You have the right to request the deletion of any data associated with your linked account. Contact us at <strong>support@astraclient.in</strong> for assistance.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
