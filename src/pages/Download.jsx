import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, AlertTriangle } from 'lucide-react';

export default function DownloadPage() {
    const [downloadUrl, setDownloadUrl] = useState('');
    const [version, setVersion] = useState('Checking...');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/repos/viyomog/AstraClient/releases')
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    const latest = data[0];
                    if (latest.assets && latest.assets.length > 0) {
                        const exeAsset = latest.assets.find(a => a.name.endsWith('.exe'));
                        if (exeAsset) {
                            setDownloadUrl(exeAsset.browser_download_url);
                        }
                        setVersion(latest.tag_name);
                    }

                    // Log download counts to console for the user to check privately
                    console.group('--- Astra Client Download Stats ---');
                    let totalDownloads = 0;
                    data.forEach(release => {
                        console.log(`Release: ${release.tag_name}`);
                        release.assets.forEach(asset => {
                            console.log(`  - ${asset.name}: ${asset.download_count} downloads`);
                            totalDownloads += asset.download_count;
                        });
                    });
                    console.log(`TOTAL DOWNLOADS: ${totalDownloads}`);
                    console.groupEnd();
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch release', err);
                setVersion('Unknown');
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 text-center max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block mb-4 text-[var(--text-1)] text-sm tracking-widest uppercase font-semibold">Windows 10/11</span>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-8">Download <span className="text-[var(--primary)]">AstraClient</span></h1>

                <div className="p-8 bg-[var(--bg-1)] border border-[rgba(255,255,255,0.05)] rounded-3xl shadow-2xl mb-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50" />

                    <div className="flex flex-col items-center justify-center py-10">
                        <p className="text-xl font-medium mb-2 text-white">Latest Version: <span className="text-[var(--accent)] font-bold">{version}</span></p>
                        <p className="text-[var(--text-1)] mb-8 text-sm">Compatible with Minecraft Java Edition</p>

                        <a
                            href={downloadUrl || "https://github.com/viyomog/AstraClient/releases"}
                            className={`
                flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-xl shadow-lg transition-all transform hover:-translate-y-1
                ${loading
                                    ? 'bg-gray-700 cursor-wait opacity-75'
                                    : 'bg-gradient-to-r from-orange-600 to-[var(--primary)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] text-white'
                                }
              `}
                        >
                            <Download size={28} />
                            {loading ? 'Fetching Build...' : 'Download Installer (.exe)'}
                        </a>

                        <p className="mt-4 text-xs text-[var(--text-1)] opacity-60">
                            By downloading, you agree to our Terms of Service.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                    <Note icon={<CheckCircle size={20} className="text-green-500" />} title="Safe & Secure" text="Verified by VirusTotal. Codebase is private. All Rights Reserved." />
                    <Note icon={<AlertTriangle size={20} className="text-yellow-500" />} title="Requirements" text="Requires 64-bit Windows 10 or newer. Java 17+ recommended." />
                </div>
            </motion.div>
        </div>
    );
}

function Note({ icon, title, text }) {
    return (
        <div className="flex items-start gap-3 p-4 bg-[var(--bg-1)] rounded-xl border border-[rgba(255,255,255,0.05)]">
            <div className="mt-0.5">{icon}</div>
            <div>
                <h4 className="font-bold text-sm text-white mb-1">{title}</h4>
                <p className="text-xs text-[var(--text-1)] leading-relaxed">{text}</p>
            </div>
        </div>
    );
}
