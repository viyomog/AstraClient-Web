import { Github, Twitter, Linkedin, Code, Layers, Coffee, Bug, Palette, Figma, Users, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import viyomPhoto from '../assets/viyomog.jpeg';
import dikshitPhoto from '../assets/dikshit.jpg';
import rajdeepPhoto from '../assets/rajdeep.jpg';
import somayPhoto from '../assets/somay.jpeg';

const teamMembers = [
    {
        name: "Viyom Paliwal",
        role: "Founder & Lead Developer",
        title: "FULL STACK DEVELOPER",
        description: "Viyom is a dedicated software engineer with a passion for gaming and performance optimization. He started AstraClient with a vision to provide the Indian gaming community with a premium, optimized, and localized Minecraft experience.",
        image: viyomPhoto,
        badges: [
            { icon: <Code size={14} />, text: "React & Electron" },
            { icon: <Layers size={14} />, text: "Node.js Check" },
            { icon: <Coffee size={14} />, text: "Java Logic" }
        ],
        socials: [
            { href: "https://github.com/viyomog", icon: <Github size={20} />, label: "GitHub" },
            { href: "https://x.com/ViyomOg", icon: <Twitter size={20} />, label: "Twitter" },
            { href: "https://www.linkedin.com/in/viyompaliwal/", icon: <Linkedin size={20} />, label: "LinkedIn" }
        ]
    },
    {
        name: "Dikshit Kumar",
        role: "Software Tester",
        title: "QUALITY ASSURANCE",
        description: "The firewall against bugs. Dikshit pushes AstraClient to its limits, ensuring every release is stable, optimized, and ready for the competitive gaming stage. His rigorous testing guarantees a flawless experience.",
        image: dikshitPhoto,
        badges: [
            { icon: <Bug size={14} />, text: "Bug Hunter" },
            { icon: <Code size={14} />, text: "Automation" }
        ],
        socials: [
            { href: "https://github.com/otakurush11", icon: <Github size={20} />, label: "GitHub" },
            { href: "https://x.com/otakurush11", icon: <Twitter size={20} />, label: "Twitter" },
            { href: "https://www.linkedin.com/in/dikshit-kumar-252026352/", icon: <Linkedin size={20} />, label: "LinkedIn" }
        ]
    },
    {
        name: "Rajdeep Singh",
        role: "UI Designer",
        title: "CREATIVE LEAD",
        description: "The architect of aesthetics. Rajdeep blends form and function to create AstraClient's signature visual identity. From pixel-perfect layouts to fluid animations, he ensures the launcher feels as premium as it performs.",
        image: rajdeepPhoto,
        badges: [
            { icon: <Palette size={14} />, text: "UI/UX Design" },
            { icon: <Figma size={14} />, text: "Figma Wizard" }
        ],
        socials: [] // Add socials if provided later
    },
    {
        name: "Somay Yadav",
        role: "Community Manager",
        title: "COMMUNITY LEAD",
        description: "The voice of the community. Somay ensures every player is heard and every concern addressed. He bridges the gap between the developers and the users, fostering a welcoming and active environment.",
        image: somayPhoto,
        badges: [
            { icon: <Users size={14} />, text: "Community Lead" },
            { icon: <MessageCircle size={14} />, text: "Support" }
        ],
        socials: [] // Add socials if provided later
    }
];

export default function Team() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Meet the <span className="text-[var(--primary)]">Team</span></h1>
                <p className="text-[var(--text-1)] text-lg max-w-2xl mx-auto">
                    The passionate minds behind India's First Custom Minecraft Launcher.
                </p>
            </motion.div>

            <div className="space-y-16">
                {teamMembers.map((member, index) => (
                    <TeamCard key={index} member={member} index={index} />
                ))}
            </div>
        </div>
    );
}

function TeamCard({ member, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`grid md:grid-cols-2 gap-12 items-center bg-[var(--bg-1)] border border-[rgba(255,255,255,0.05)] rounded-3xl p-8 md:p-12 hover:border-[var(--primary)] transition-colors shadow-2xl relative overflow-hidden group ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
        >
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--primary)] opacity-[0.05] rounded-full blur-[100px] pointer-events-none group-hover:opacity-[0.1] transition-opacity" />

            {/* Content Section - Push to right if index is odd (for zig-zag layout) */}
            <div className={`text-center md:text-left ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="inline-block px-3 py-1 bg-[rgba(239,68,68,0.1)] text-[var(--primary)] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                    {member.role}
                </div>
                <h2 className="text-4xl font-bold mb-2 text-white">{member.name}</h2>
                <p className="text-[var(--text-1)] mb-6 text-sm font-mono tracking-wide">{member.title}</p>

                <p className="text-[var(--text-1)] mb-8 leading-relaxed">
                    {member.description}
                </p>

                <div className={`flex flex-wrap gap-4 mb-8 justify-center md:justify-start`}>
                    {member.badges.map((badge, i) => (
                        <Badge key={i} icon={badge.icon} text={badge.text} />
                    ))}
                </div>

                <div className={`flex gap-4 justify-center md:justify-start`}>
                    {member.socials.map((social, i) => (
                        <SocialLink key={i} href={social.href} icon={social.icon} label={social.label} />
                    ))}
                </div>
            </div>

            {/* Image Section - Push to left if index is odd */}
            <div className={`relative ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <div className="aspect-square rounded-2xl bg-[var(--bg-2)] overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
}

function Badge({ icon, text }) {
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-2)] border border-[rgba(255,255,255,0.1)] rounded-lg text-xs font-medium text-[var(--accent)]">
            {icon}
            <span>{text}</span>
        </div>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[var(--bg-2)] rounded-full hover:bg-[var(--primary)] hover:text-white transition-all transform hover:-translate-y-1"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
