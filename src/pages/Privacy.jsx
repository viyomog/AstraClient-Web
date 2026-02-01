export default function Privacy() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto prose prose-invert">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="lead mb-6 text-[var(--text-1)]">
                Your privacy is important to us. This policy outlines how AstraClient collects, uses, and protects your data.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. Data Collection</h3>
            <p className="mb-4 text-[var(--text-1)]">
                AstraClient does not collect personal data such as passwords or payment information. We may collect anonymous usage statistics to improve performance and identify bugs.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. Mojang Authentication</h3>
            <p className="mb-4 text-[var(--text-1)]">
                All authentication is handled directly through Microsofts secure OAuth2 servers. AstraClient never sees or stores your password. Your session tokens are stored locally on your device.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. Local Storage</h3>
            <p className="mb-4 text-[var(--text-1)]">
                Preferences, mod configurations, and screenshots are stored locally on your computer. You have full control over this data.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Services</h3>
            <p className="mb-4 text-[var(--text-1)]">
                We may use services like GitHub API for updates and Modrinth/CurseForge for mod downloads. These services are subject to their own privacy policies.
            </p>

            <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.1)] text-sm text-[var(--text-1)]">
                Last updated: January 2026
            </div>
        </div>
    );
}
