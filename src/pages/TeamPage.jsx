import React from 'react';
import { Github, Twitter, Linkedin, Code2, Server, Coffee, ShieldCheck, Cpu, Layout, Brush, Users, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Actual Astra Client Team Roster Data
const teamRoster = [
    {
        tag: "FOUNDER & LEAD DEVELOPER",
        name: "Viyom Paliwal",
        subRole: "FULL STACK DEVELOPER",
        description: "Viyom is a dedicated software engineer with a passion for gaming and performance optimization. He started AstraClient with a vision to provide the Indian gaming community with a premium, optimized, and localized Minecraft experience.",
        skills: [
            { name: "React & Electron", icon: <Code2 size={16} /> },
            { name: "Node.js Check", icon: <Server size={16} /> },
            { name: "Java Logic", icon: <Coffee size={16} /> }
        ],
        socials: [
            { icon: <Github size={20} />, link: "https://github.com/viyomog" },
            { icon: <Twitter size={20} />, link: "https://x.com/ViyomOg" },
            { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/viyompaliwal/" }
        ],
        mcUsername: "ViyomOG",
        accent: "#ef4444", // Red
        bg: "rgba(220, 38, 38, 0.1)"
    },
    {
        tag: "MANAGER",
        name: "Rajdeep Singh",
        subRole: "CREATIVE LEAD",
        description: "The architect of aesthetics. Rajdeep blends form and function to create AstraClient's signature visual identity. From pixel-perfect layouts to fluid animations, he ensures the launcher feels as premium as it performs.",
        skills: [
            { name: "UI/UX Design", icon: <Layout size={16} /> },
            { name: "Figma Wizard", icon: <Brush size={16} /> }
        ],
        socials: [
            { icon: <Twitter size={20} />, link: "#" },
            { icon: <Linkedin size={20} />, link: "#" }
        ],
        mcUsername: "pxychoOG",
        accent: "#f59e0b", // Amber
        bg: "rgba(245, 158, 11, 0.1)"
    },
    {
        tag: "SOFTWARE TESTER",
        name: "Dikshit Kumar",
        subRole: "QUALITY ASSURANCE",
        description: "The firewall against bugs. Dikshit pushes AstraClient to its limits, ensuring every release is stable, optimized, and ready for the competitive gaming stage. His rigorous testing guarantees a flawless experience.",
        skills: [
            { name: "Bug Hunter", icon: <ShieldCheck size={16} /> },
            { name: "Automation", icon: <Cpu size={16} /> }
        ],
        socials: [
            { icon: <Github size={20} />, link: "https://github.com/otakurush11" },
            { icon: <Twitter size={20} />, link: "https://x.com/otakurush11" },
            { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/dikshit-kumar-252026352/" }
        ],
        mcUsername: "Famada_",
        accent: "#10b981", // Emerald
        bg: "rgba(16, 185, 129, 0.1)"
    },
    {
        tag: "COMMUNITY MANAGER",
        name: "Somay Yadav",
        subRole: "COMMUNITY LEAD",
        description: "The voice of the community. Somay ensures every player is heard and every concern addressed. He bridges the gap between the developers and the users, fostering a welcoming and active environment.",
        skills: [
            { name: "Community Lead", icon: <Users size={16} /> },
            { name: "Support", icon: <MessageSquare size={16} /> }
        ],
        socials: [
            { icon: <Twitter size={20} />, link: "#" }
        ],
        mcUsername: "PoBoi0425",
        accent: "#8b5cf6", // Purple
        bg: "rgba(139, 92, 246, 0.1)"
    }
];

// Reusable Massive Detailed Staff Card Component
const DetailedStaffCard = ({ data, reversed }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className={`staff-card ${reversed ? 'reversed' : ''}`}
            style={{
                background: 'linear-gradient(180deg, #10131a 0%, #0a0d14 100%)',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.03)',
                padding: 'clamp(1.5rem, 5vw, 4rem)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                marginBottom: '4rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >

            {/* Subtle background glow adapted to their role accent color */}
            <div style={{
                position: 'absolute',
                top: reversed ? '0%' : '100%', left: reversed ? '100%' : '0%',
                transform: 'translate(-50%, -50%)',
                width: 'min(90vw, 600px)', height: 'min(90vw, 600px)',
                background: data.accent,
                filter: 'blur(220px)', opacity: 0.08,
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            {/* Left Content (Text) */}
            <div className="staff-card-content" style={{ flex: '1', minWidth: '280px', zIndex: 1 }}>

                {/* Tag */}
                <span style={{
                    display: 'inline-block',
                    padding: '0.4rem 1.2rem',
                    background: data.bg,
                    color: data.accent,
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    letterSpacing: '1px',
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase',
                    border: `1px solid rgba(255,255,255,0.02)`
                }}>
                    {data.tag}
                </span>

                {/* Identifiers */}
                <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', fontWeight: '800', marginBottom: '0.4rem', color: 'var(--text-main)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                    {data.name}
                </h2>

                <h3 style={{ fontSize: '0.85rem', fontWeight: '600', color: '#94a3b8', letterSpacing: '2px', marginBottom: '2rem', textTransform: 'uppercase' }}>
                    {data.subRole}
                </h3>

                {/* Description Text */}
                <p style={{ color: '#94a3b8', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.7', marginBottom: '2rem', maxWidth: '500px' }}>
                    {data.description}
                </p>

                {/* Skill Pills */}
                <div className="staff-card-skills" style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                    {data.skills.map((skill, i) => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: data.bg,
                            border: `1px solid rgba(255, 255, 255, 0.02)`,
                            borderRadius: '10px',
                            color: data.accent,
                            fontWeight: '600',
                            fontSize: '0.85rem'
                        }}>
                            {skill.icon} {skill.name}
                        </div>
                    ))}
                </div>

                {/* Socials Menu */}
                <div className="staff-card-socials" style={{ display: 'flex', gap: '1.5rem' }}>
                    {data.socials.map((social, i) => (
                        <motion.a 
                            key={i} 
                            href={social.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            whileHover={{ 
                                scale: 1.1, 
                                color: '#fff',
                                backgroundColor: data.accent,
                                boxShadow: `0 8px 20px ${data.bg}`
                            }}
                            style={{
                                color: '#64748b', 
                                transition: 'color 0.2s, background-color 0.2s',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: '38px', height: '38px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Right Side: 3D Model inside clean glass box */}
            <div style={{ flex: '1', minWidth: '280px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>

                {/* The vertical rounded container */}
                <motion.div 
                    whileHover={{ y: -8 }}
                    style={{
                        width: '100%',
                        maxWidth: '280px',
                        aspectRatio: '3/4.2',
                        background: `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.2) 100%)`,
                        backgroundColor: 'rgba(15, 18, 25, 0.8)',
                        borderRadius: '30px',
                        border: `1px solid rgba(255,255,255,0.05)`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: `0 20px 40px rgba(0,0,0,0.5), inset 0 0 0 1px ${data.bg}`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* The massive 3D standing model */}
                    <motion.img
                        src={`https://mc-heads.net/body/${data.mcUsername}/512.png`}
                        alt={data.name}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            height: '110%',
                            objectFit: 'contain',
                            imageRendering: 'pixelated',
                            filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.8))',
                            transformOrigin: 'bottom center'
                        }}
                        onError={(e) => {
                            e.target.src = 'https://mc-heads.net/body/Steve/512.png';
                        }}
                    />
                </motion.div >

            </div >
        </motion.div >
    );
};

const TeamPage = () => {
    return (
        <div style={{ paddingTop: 'clamp(100px, 15vh, 140px)', minHeight: '100vh', backgroundColor: 'var(--bg-darker)', paddingBottom: '4rem', overflow: 'hidden' }}>

            {/* Header Section */}
            <section style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '300px', height: '150px',
                    background: 'var(--primary)',
                    filter: 'blur(120px)', opacity: 0.15,
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-1px' }}
                    >
                        Meet the <span style={{ color: 'var(--primary)' }}>Team</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', maxWidth: '600px', margin: '0 auto', padding: '0 1rem' }}
                    >
                        The passionate individuals crafting the ultimate Minecraft launch experience.
                    </motion.p>
                </div>
            </section>

            {/* Main Content Area - All members get massive detailed cards */}
            <section className="container">
                {teamRoster.map((member, idx) => (
                    <DetailedStaffCard key={idx} data={member} reversed={idx % 2 !== 0} />
                ))}
            </section>

        </div>
    );
};

export default TeamPage;
