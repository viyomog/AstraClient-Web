import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Package, Activity, ChevronRight, BarChart3 } from 'lucide-react';

export default function AdminStats() {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [totalDownloads, setTotalDownloads] = useState(0);

    useEffect(() => {
        fetch('https://api.github.com/repos/viyomog/AstraClient/releases')
            .then(res => res.json())
            .then(data => {
                let total = 0;
                data.forEach(release => {
                    release.assets.forEach(asset => {
                        total += asset.download_count;
                    });
                });
                setTotalDownloads(total);
                setStats(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch stats', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary)]"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[rgba(239,68,68,0.1)] rounded-xl text-[var(--primary)]">
                        <Activity size={24} />
                    </div>
                    <h1 className="text-3xl font-extrabold">Download <span className="text-[var(--primary)]">Intelligence</span></h1>
                </div>
                <p className="text-[var(--text-1)]">Real-time distribution and reach metrics for Astra Client.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <StatCard
                    icon={<Download className="text-blue-500" />}
                    label="Total Downloads"
                    value={totalDownloads.toLocaleString()}
                    subtext="Across all releases"
                />
                <StatCard
                    icon={<Package className="text-green-500" />}
                    label="Releases"
                    value={stats?.length || 0}
                    subtext="Managed versions"
                />
                <StatCard
                    icon={<BarChart3 className="text-purple-500" />}
                    label="Latest Version"
                    value={stats?.[0]?.tag_name || 'N/A'}
                    subtext="Current stable build"
                />
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                    <ChevronRight size={20} className="text-[var(--primary)]" />
                    Release Breakdown
                </h2>
                {stats?.map((release, i) => (
                    <motion.div
                        key={release.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-[var(--bg-1)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 hover:bg-[var(--bg-2)] transition-all group"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                                    {release.name || release.tag_name}
                                </h3>
                                <p className="text-xs text-[var(--text-1)] mt-1">Published on {new Date(release.published_at).toLocaleDateString()}</p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {release.assets.map(asset => (
                                    <div key={asset.id} className="bg-[var(--bg-0)] px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.05)]">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Download size={14} className="text-[var(--text-1)]" />
                                            <span className="text-xs font-semibold text-white">{asset.name}</span>
                                        </div>
                                        <p className="text-lg font-bold text-[var(--primary)]">{asset.download_count.toLocaleString()}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, subtext }) {
    return (
        <div className="p-6 bg-[var(--bg-1)] border border-[rgba(255,255,255,0.05)] rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {icon}
            </div>
            <p className="text-[var(--text-1)] text-sm font-medium mb-1">{label}</p>
            <h3 className="text-3xl font-extrabold text-white mb-2">{value}</h3>
            <p className="text-[var(--text-1)] text-xs">{subtext}</p>
        </div>
    );
}
