import { motion } from 'framer-motion';
import { Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: "How Astra Client Boosts Your FPS",
            preview: "We've optimized Minecraft's performance from the ground up, rewriting key components for ultimate speed.",
            date: "Jan 12, 2026",
            tag: "Performance",
            color: "bg-green-500"
        },
        {
            id: 2,
            title: "Why We Built a Custom UI",
            preview: "The default Minecraft launcher is functional but basic. We wanted to create an experience that feels... premium.",
            date: "Jan 03, 2026",
            tag: "Design",
            color: "bg-purple-500"
        },
        {
            id: 3,
            title: "Fabric vs Forge: Our Choice",
            preview: "Why we chose the Fabric Loader for AstraClient and why it's the future of lightweight, performant modding.",
            date: "Dec 25, 2025",
            tag: "Technical",
            color: "bg-blue-500"
        },
        {
            id: 4,
            title: "Custom Capes System Explained",
            preview: "Ever wanted unique cosmetics? Here's how our cape system integrates seamlessly with your account.",
            date: "Jan 25, 2026",
            tag: "Features",
            color: "bg-yellow-500"
        },
        {
            id: 5,
            title: "What's Next: 2026 Roadmap",
            preview: "FPS Boost 2.0, Voice Chat, and more. A sneak peek into the future of Astra Client.",
            date: "Jan 28, 2026",
            tag: "Roadmap",
            color: "bg-red-500"
        },
        {
            id: 6,
            title: "Our Dream",
            preview: "A letter to the Indian Gaming Community. Why we started, where we are going, and why you matter.",
            date: "Jan 30, 2026",
            tag: "Community",
            color: "bg-orange-500"
        },
        {
            id: 7,
            title: "The Hidden Cost of Free Clients",
            preview: "If you aren't paying for the product, you might be the product. How Astra Client protects your data in an era of spyware.",
            date: "Feb 09, 2026",
            tag: "Security",
            color: "bg-pink-500"
        },
        {
            id: 8,
            title: "Community Spotlight: January 2026",
            preview: "Highlighting the craziest builds, funniest clips, and best fan art from our Discord community this month.",
            date: "Feb 02, 2026",
            tag: "Community",
            color: "bg-orange-500"
        },
        {
            id: 9,
            title: "Patch Notes v1.2: Squashing Bugs",
            preview: "We've fixed the random crash on startup, improved font rendering, and polished the settings UI.",
            date: "Feb 05, 2026",
            tag: "Update",
            color: "bg-blue-500"
        },
        {
            id: 10,
            title: "Five Settings to Boost FPS Now",
            preview: "Struggling with lag? Here are the 5 most impactful video settings you need to change in Astra Client right now.",
            date: "Feb 08, 2026",
            tag: "Guide",
            color: "bg-green-500"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <span className="text-[var(--primary)] font-bold tracking-widest uppercase text-sm">Dev Logs</span>
                <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4">Inside <span className="text-[var(--primary)]">Astra</span></h1>
                <p className="text-[var(--text-1)] text-lg">Updates, technical deep dives, and behind-the-scenes stories.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post, i) => (
                    <Link key={post.id} to={`/blog/${post.id}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[var(--bg-1)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 hover:bg-[var(--bg-2)] transition-colors cursor-pointer group relative overflow-hidden h-full"
                        >
                            {/* Gradient Background on Hover */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-center justify-between mb-6">
                                <span className={`px-3 py-1 bg-[var(--bg-0)] rounded-full text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2`}>
                                    <span className={`w-2 h-2 rounded-full ${post.color}`} />
                                    {post.tag}
                                </span>
                                <span className="text-[var(--text-1)] text-xs flex items-center gap-1">
                                    <Clock size={14} />
                                    {post.date}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">{post.title}</h2>
                            <p className="text-[var(--text-1)] leading-relaxed mb-6">{post.preview}</p>

                            <span className="text-[var(--primary)] text-sm font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                Read Article &rarr;
                            </span>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
