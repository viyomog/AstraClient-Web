import React from 'react';

const TermsPage = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-darker)', color: '#cbd5e1' }}>
            <div className="container" style={{ maxWidth: '900px', paddingBottom: '8rem' }}>

                {/* Header */}
                <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '900', color: '#fff', marginBottom: '1rem' }}>
                        Terms of <span style={{ color: 'var(--primary)' }}>Service</span>
                    </h1>
                    <p style={{ color: '#94a3b8' }}>Last Updated: March 01, 2026</p>
                </header>

                {/* Content */}
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '24px', padding: '3rem', lineHeight: '1.7' }}>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>1. Acceptance of Terms</h2>
                        <p>
                            By downloading, installing, or using Astra Client, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the software.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>2. License and Use</h2>
                        <p>
                            Astra Client grants you a personal, non-exclusive, non-transferable license to use the software for personal, non-commercial Minecraft gameplay. You may not:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                            <li>Modify, reverse engineer, or decompile the software.</li>
                            <li>Distribute the software through unofficial channels.</li>
                            <li>Use the software for any illegal activities or to violate server rules.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>3. Disclaimer of Warranty</h2>
                        <p>
                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND. Astra Client is not responsible for any damage to your hardware, data loss, or server-side bans resulting from the use of this software.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>4. Third Party Integration</h2>
                        <p>
                            Astra Client is not affiliated with Microsoft or Mojang AB. You must own a legitimate copy of Minecraft to use our client. Any use of Microsoft services through the client is subject to Microsoft's own Terms of Use and Privacy Policy.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>5. Updates and Changes</h2>
                        <p>
                            We reserve the right to update these terms at any time. Continued use of the software after changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>6. Contact</h2>
                        <p>
                            Questions about these terms should be sent to <strong>support@astraclient.in</strong>.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default TermsPage;
