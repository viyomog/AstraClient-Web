import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import viyomPhoto from '../assets/viyomog.jpeg';
import rajdeepPhoto from '../assets/rajdeep.jpg';
import somayPhoto from '../assets/somay.jpeg';
import dikshitPhoto from '../assets/dikshit.jpg';

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
        author: "Rajdeep Singh",
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
    },
    4: {
        title: "Custom Capes System Explained",
        date: "January 25, 2026",
        author: "Rajdeep Singh",
        readTime: "3 min read",
        tag: "Features",
        content: `
      <h2>Look Good, Play Better</h2>
      <p>In standard Minecraft, capes are exclusive items reserved for Minecon attendees or Mojang employees. At Astra, we believe customization should be for everyone.</p>

      <h2>How It Works</h2>
      <p>Our custom cosmetics engine overrides the default player renderer. When you equip a cape in the Astra Launcher, it is instantly visible to:</p>
      <ul>
        <li>You (obviously)</li>
        <li>Other Astra Client users</li>
        <li>Users of compatible cosmetic mods</li>
      </ul>

      <h2>Features</h2>
      <h3>High Definition Support</h3>
      <p>Unlike standard capes which are pixelated, Astra supports HD textures properly. Upload your high-resolution designs and see every detail in-game.</p>

      <h3>Elytra Compatibility</h3>
      <p>We've fixed the common bug where capes conflict with Elytras. When you wear an Elytra, your cape texturing is automatically applied to the wings, keeping your style consistent even while flying.</p>

      <h3>Animated Cosmetics (Coming Soon)</h3>
      <p>We are currently testing support for animated .gif capes and wings. Stay tuned for updates on our Discord!</p>
    `
    },
    5: {
        title: "What's Next: 2026 Roadmap",
        date: "January 28, 2026",
        author: "Viyom Paliwal",
        readTime: "4 min read",
        tag: "Roadmap",
        content: `
      <h2>The Journey Has Just Begun</h2>
      <p>Astra Client V1 was just the foundation. We have massive plans for 2026 to revolutionize how you play Minecraft.</p>

      <h2>Upcoming Features</h2>

      <h3>1. FPS Boost 2.0 (Vulkan Support)</h3>
      <p>We are experimenting with a Vulkan-based rendering pipeline. Early tests show a further 30% performance increase over our current OpenGL setup. This will be a game-changer for integrated graphics users.</p>

      <h3>2. Voice Chat Integration</h3>
      <p>Why use Discord to talk to people next to you? We are integrating Proximity Voice Chat directly into the client. No extra mod installation needed—just join a server and start talking.</p>

      <h3>3. The Astra Partner Program</h3>
      <p>We want to support creators. Soon, streamers and YouTubers will be able to apply for the Partner Program to get exclusive cosmetics, a verified badge, and revenue sharing opportunities.</p>

      <h3>4. Astra Store</h3>
      <p>A marketplace for premium capes, wings, and hats created by the community. Artists will be able to sell their designs directly to players.</p>
    `
    },
    6: {
        title: "Our Dream",
        date: "January 30, 2026",
        author: "Viyom Paliwal",
        readTime: "5 min read",
        tag: "Community",
        content: `
      <h2>To The Indian Gaming Community,</h2>
      <p>We started Astra Client with a simple frustration: Why does every good Minecraft client require a high-end PC? Why are Indian gamers with budget laptops left behind?</p>

      <h2>Breaking the Hardware Barrier</h2>
      <p>Our dream is simple: <strong>Minecraft should be playable for everyone.</strong> It shouldn't matter if you have an RTX 4090 or an integrated Intel HD card. You deserve smooth frames, beautiful graphics, and a fair competitive experience.</p>

      <h2>A Unified Platform</h2>
      <p>We want to build more than just a launcher. We are building a home for Indian Minecrafters. A place where:</p>
      <ul>
        <li>PvP players can find competitive matches.</li>
        <li>Survival players can find beautiful, optimized SMPs.</li>
        <li>Creators can find an audience.</li>
      </ul>

      <h2>This Is Your Client</h2>
      <p>Astra is closed source to protect our unique technology, but our ears are open. Every feature we add comes from your suggestions. We are building this <em>with</em> you, not just for you.</p>

      <p>Thank you for trusting us. Let's make 2026 the year of Astra.</p>
      <p><strong>- Viyom & The Astra Team</strong></p>
    `
    },
    7: {
        title: "The Hidden Cost of Free Clients",
        date: "February 09, 2026",
        author: "Viyom Paliwal",
        readTime: "7 min read",
        tag: "Security",
        content: `
      <h2>If You Aren't Paying, You Are The Product</h2>
      <p>The Minecraft client market is flooded with free options. Many of them promise better FPS, cool cosmetics, and powerful mods. But have you ever asked yourself: <em>How do they make money?</em></p>
      <p>Hosting servers costs money. Developing software takes time. If a client is free and has no premium features, cosmetics store, or partner program, they are likely monitizing <strong>you</strong>.</p>

      <h2>The Data Collection Problem</h2>
      <p>We have analyzed several popular "free" clients and found alarming behavior:</p>
      <ul>
        <li><strong>Session Stealing:</strong> Some clients log your session ID, allowing them to log into your account without your password.</li>
        <li><strong>Hardware Scanning:</strong> Collecting your HWID, IP address, and installed programs to build a profile on you.</li>
        <li><strong>Background Mining:</strong> Using your GPU to mine crypto while you play (often disguised as "high CPU usage").</li>
      </ul>

      <h2>How Astra Protects You</h2>
      <p>We built Astra Client with a privacy-first architecture.</p>

      <h3>1. Zero Data Collection</h3>
      <p>We do not collect personal data. Your session tokens never leave your computer. We use the official Microsoft authentication flow, so we never see your password.</p>

      <h3>2. Transparent Monetization</h3>
      <p>We are honest about how we make money. We sell premium cosmetics and have a partner program. That's it. We don't need to sell your data because our business model is sustainable without it.</p>

      <h3>3. Open Standards</h3>
      <p>While our core optimization engine is closed source, we use open-source libraries like Fabric and Sodium. This ensures that the base of our client is built on trusted, community-verified code.</p>

      <h2>Stay Safe</h2>
      <p>Be careful what you install. Verify the developers. Check the community trust. Your account security is worth more than a few extra frames.</p>
    `
    },
    8: {
        title: "Community Spotlight: January 2026",
        date: "February 02, 2026",
        author: "Somay Yadav",
        readTime: "4 min read",
        tag: "Community",
        content: `
      <h2>What a Month!</h2>
      <p>January has been incredible for the Astra community. We've seen some mind-blowing builds, hilarious clips, and artwork that belongs in a museum. Here are our top picks.</p>

      <h2>Build of the Month</h2>
      <p><strong>Builder:</strong> BuilderBob_99</p>
      <p>This cyberpunk city build took over 100 hours, and it shows. The use of neon blocks combined with our custom shaders makes it pop.</p>
      
      <h2>Clip of the Month</h2>
      <p><strong>Player:</strong> PvP_God_2000</p>
      <p>A 1v4 clutch in Bedwars? With 1 heart left? Absolutely insane. Check out the clip on our Discord in the #highlights channel.</p>

      <h2>Fan Art</h2>
      <p>A huge shoutout to <strong>ArtisticCreeper</strong> for the amazing drawing of the Astra mascot. We might just make it an official sticker!</p>

      <p>Want to be featured next month? Join our Discord and post your creations in #community-showcase!</p>
    `
    },
    9: {
        title: "Patch Notes v1.2: Squashing Bugs",
        date: "February 05, 2026",
        author: "Dikshit Kumar",
        readTime: "3 min read",
        tag: "Update",
        content: `
      <h2>Quick Fix Update</h2>
      <p>We heard your feedback. Some users were experiencing crashes on startup with Intel integrated graphics. This patch addresses that and more.</p>

      <h2>Changelog</h2>
      <ul>
        <li><strong>Fixed:</strong> Crash on startup for Intel UHD 630 users.</li>
        <li><strong>Fixed:</strong> Cape textures sometimes loading as black squares.</li>
        <li><strong>Improved:</strong> Font rendering is now sharper on 1080p displays.</li>
        <li><strong>Polished:</strong> The settings menu now has smoother transition animations.</li>
        <li><strong>Added:</strong> New "Eco Mode" in launcher to reduce CPU usage when idle.</li>
      </ul>

      <p>The update should download automatically when you restart the launcher. Happy gaming!</p>
    `
    },
    10: {
        title: "Five Settings to Boost FPS Now",
        date: "February 08, 2026",
        author: "Viyom Paliwal",
        readTime: "6 min read",
        tag: "Guide",
        content: `
      <h2>Lagging? Try This.</h2>
      <p>Even with Astra Client's optimizations, sometimes you need to tweak a few settings to get the best performance on older hardware. Here are the top 5 settings to change.</p>

      <h3>1. Render Distance</h3>
      <p><strong>Recommendation:</strong> 8-10 chunks.</p>
      <p>This has the biggest impact on FPS. Dropping from 16 to 10 can double your frame rate.</p>

      <h3>2. Simulation Distance</h3>
      <p><strong>Recommendation:</strong> 5 chunks.</p>
      <p>This controls how far away mobs and redstone are active. Lowering this reduces CPU load significantly.</p>

      <h3>3. Graphics</h3>
      <p><strong>Recommendation:</strong> Fast.</p>
      <p>This simplifies leaf textures (removes transparency) and disables some minor visual effects.</p>

      <h3>4. Smooth Lighting</h3>
      <p><strong>Recommendation:</strong> Minimum or Off.</p>
      <p>Calculates lighting shadows. Turning this off makes the game look "flatter" but gives a massive FPS boost.</p>

      <h3>5. Entity Shadows</h3>
      <p><strong>Recommendation:</strong> OFF.</p>
      <p>The little round shadow under mobs/players actually takes a surprising amount of processing power to render. Turn it off.</p>

      <p>Applying these settings should help you get that silky smooth 60+ FPS experience!</p>
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
                        <div className="w-10 h-10 rounded-full bg-[var(--bg-2)] flex items-center justify-center border border-[rgba(255,255,255,0.1)] overflow-hidden">
                            {post.author === "Viyom Paliwal" && <img src={viyomPhoto} alt={post.author} className="w-full h-full object-cover" />}
                            {post.author === "Rajdeep Singh" && <img src={rajdeepPhoto} alt={post.author} className="w-full h-full object-cover" />}
                            {post.author === "Somay Yadav" && <img src={somayPhoto} alt={post.author} className="w-full h-full object-cover" />}
                            {post.author === "Dikshit Kumar" && <img src={dikshitPhoto} alt={post.author} className="w-full h-full object-cover" />}
                            {!["Viyom Paliwal", "Rajdeep Singh", "Somay Yadav", "Dikshit Kumar"].includes(post.author) && (
                                <User size={20} className="text-[var(--text-1)]" />
                            )}
                        </div>
                        <div>
                            <p className="font-bold text-white">{post.author}</p>
                            <p className="text-xs text-[var(--text-1)]">
                                {post.author === "Viyom Paliwal" && "Founder & Lead Developer"}
                                {post.author === "Rajdeep Singh" && "UI Designer"}
                                {post.author === "Somay Yadav" && "Community Manager"}
                                {post.author === "Dikshit Kumar" && "QA Tester"}
                            </p>
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
