import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

const blogContent = {
    1: {
        title: "How Astra Client Boosts Your FPS",
        date: "January 12, 2026",
        author: "Viyom Paliwal",
        readTime: "5 min read",
        tag: "Performance",
        content: `
      <h2>The Performance Problem</h2>
      <p>Minecraft is written in Java, a language that relies heavily on a virtual machine (JVM). While flexible, the default game engine is notoriously unoptimized for modern hardware. It generates garbage data frequently, leading to stuttering (GC lag), and often fails to utilize multi-core processors effectively.</p>

      <h2>Our Solution: The Astra Engine</h2>
      <p>Astra Client isn't just a wrapper; it's a carefully curated environment designed to squeeze every frame out of your system. Here is how we do it:</p>

      <h3>1. Custom JVM Arguments</h3>
      <p>We don't just launch the game; we inject highly tuned JVM arguments tailored to the amount of RAM you allocate. These arguments optimize garbage collection, reducing the "lag spikes" that occur when the game clears unused memory.</p>

      <h3>2. The Sodium & Lithium Stack</h3>
      <p>At the core of our rendering engine lies the powerful trio of Sodium, Lithium, and Indium. These are not just mods; they are complete rewrites of Minecraft's rendering pipeline. 
      <ul>
        <li><strong>Sodium:</strong> Replaces the rendering engine, shifting work from the CPU to the GPU. This typically doubles or triples FPS on most systems.</li>
        <li><strong>Lithium:</strong> Optimizes game physics and chunk loading, making the server-side (internal server) run smoother.</li>
        <li><strong>Starlight:</strong> Rewrites the lighting engine, making chunk generation nearly instant.</li>
      </ul>
      </p>

      <h3>3. Asset Caching</h3>
      <p>Astra Client aggressively caches game assets. Instead of requesting textures and sounds repeatedly, we verify their integrity and keep them ready in memory. This drastically reduces load times and disk usage.</p>

      <h2>Benchmark Results</h2>
      <p>In our internal testing on a mid-range PC (i5-12400F, RTX 3060):</p>
      <ul>
        <li><strong>Vanilla 1.21:</strong> 140 FPS (Avg)</li>
        <li><strong>OptiFine 1.21:</strong> 210 FPS (Avg)</li>
        <li><strong>Astra Client 1.21:</strong> 480 FPS (Avg)</li>
      </ul>
      <p>The difference is night and day. By stripping away bloat and focusing on efficient rendering, Astra Client delivers the competitive edge you need.</p>
    `
    },
    2: {
        title: "Why We Built a Custom UI",
        date: "January 03, 2026",
        author: "Viyom Paliwal",
        readTime: "4 min read",
        tag: "Design",
        content: `
      <h2>Beyond the Dirt Background</h2>
      <p>For over a decade, Minecraft players have stared at the same grey buttons and dirt background. While nostalgic, it's clunky, unintuitive, and frankly, ugly by modern standards.</p>

      <h2>The Astra Design Philosophy</h2>
      <p>We believe your launcher should feel like a premium piece of software, not a relic from 2011. Our customized user interface is built on three pillars:</p>

      <h3>1. Accessibility & Flow</h3>
      <p>Everything you need is one click away. Want to change your skin? It's on the main menu. Need to toggle a mod? No need to restart; just open the slide-out mod manager. We've redesigned the UX to minimize clicks and maximize playtime.</p>

      <h3>2. Immersion</h3>
      <p>We use glassmorphism (translucent blur effects) and smooth animations to keep you immersed. The UI floats over the game world rather than blocking it out completely. When you pause the game, you can still see the action knowing exactly what's happening around you.</p>

      <h3>3. Personalization</h3>
      <p>Astra Client is yours. You can drag and drop HUD elements like FPS counters, armor status, and keystrokes anywhere on the screen. Change the accent color, adjust the opacity, and make the client truly unique to your setup.</p>

      <h2>Technical Implementation</h2>
      <p>We render our UI using a high-performance web-based layer integrated directly into the game window. This allows us to use modern animation libraries (like Framer Motion) that simply aren't possible with standard Java Swing or Minecraft's raw GUI rendering.</p>
    `
    },
    3: {
        title: "Fabric vs Forge: Our Choice",
        date: "December 25, 2025",
        author: "Viyom Paliwal",
        readTime: "6 min read",
        tag: "Technical",
        content: `
      <h2>The Mod Loader War</h2>
      <p>The Minecraft community has long been divided between Forge and Fabric. Both have their merits, but for a performance-focused client like Astra, the choice was clear.</p>

      <h2>Why We Chose Fabric</h2>
      
      <h3>1. Lightweight Architecture</h3>
      <p>Fabric is incredibly minimal. It doesn't modify the vanilla game code heavily, which means it loads extremely fast. A heavily modded Fabric instance can launch in seconds, whereas Forge can take minutes to load the same number of mods.</p>

      <h3>2. Mixins</h3>
      <p>Fabric's "Mixin" system allows developers to inject code into Minecraft safely and compatibly. This is crucial for optimization mods like Sodium, which need to rewrite rendering logic without breaking other mods that might touch the same files.</p>

      <h3>3. Update Speed</h3>
      <p>Because Fabric is lightweight, it updates almost instantly when a new Minecraft version drops. Forge often takes weeks or months to catch up. We want Astra users to play the latest snapshots and updates on day one.</p>

      <h2>What Improved?</h2>
      <p>By sticking to Fabric, we ensure:</p>
      <ul>
        <li><strong>Faster Startup Times:</strong> From desktop to main menu in under 10 seconds.</li>
        <li><strong>Lower RAM Usage:</strong> Fabric uses significantly less overhead than Forge.</li>
        <li><strong>Better Compatibility:</strong> Fewer conflicts between performance mods.</li>
      </ul>
      <p>While Forge has a massive library of legacy mods, Fabric is the future of modern, high-performance Minecraft modding.</p>
    `
    }
};

export default function BlogPost() {
    const { id } = useParams();
    const post = blogContent[id];

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center px-6">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <Link to="/blog" className="text-[var(--primary)] hover:underline">Return to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-24 px-6">
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
            >
                <Link to="/blog" className="inline-flex items-center gap-2 text-[var(--text-1)] hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} />
                    Back to Articles
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-[var(--text-1)] mb-6">
                        <span className="bg-[rgba(239,68,68,0.1)] text-[var(--primary)] px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs">
                            {post.tag}
                        </span>
                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{post.title}</h1>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--bg-2)] flex items-center justify-center border border-[rgba(255,255,255,0.1)]">
                            <User size={20} className="text-[var(--text-1)]" />
                        </div>
                        <div>
                            <p className="font-bold text-white">{post.author}</p>
                            <p className="text-xs text-[var(--text-1)]">Lead Developer</p>
                        </div>
                    </div>
                </header>

                <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[var(--primary)] prose-strong:text-white prose-li:text-[var(--text-1)] text-[var(--text-1)]"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.1)]">
                    <p className="text-center text-[var(--text-1)] italic">
                        Want to experience this optimization yourself? <Link to="/download" className="text-[var(--primary)] font-bold hover:underline">Download Astra Client</Link> today.
                    </p>
                </div>
            </motion.article>
        </div>
    );
}
