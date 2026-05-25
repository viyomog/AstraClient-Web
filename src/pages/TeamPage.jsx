import React from 'react';
import { Github, Twitter, Linkedin, Code2, Server, Coffee, ShieldCheck, Cpu, Layout, Brush, Users, MessageSquare } from 'lucide-react';

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

const DetailedStaffCard = ({ data, reversed }) => {
    return (
        <div className={`staff-card ${reversed ? 'reversed' : ''}`}>

            {/* Background Accent Glow */}
            <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(500px, 90vw)', height: 'min(500px, 90vw)',
                background: data.accent,
                filter: 'blur(200px)', opacity: 0.08,
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            {/* Left Content (Text) */}
            <div style={{ flex: '1', width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="staff-card-text-content">

                {/* Role Tag */}
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

                {/* Name & Sub-Role */}
                <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-main)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                    {data.name}
                </h2>

                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '2rem', textTransform: 'uppercase' }}>
                    {data.subRole}
                </h3>

                {/* Bio Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '520px' }}>
                    {data.description}
                </p>

                {/* Skill Badges */}
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                    {data.skills.map((skill, i) => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: '0.4rem',
                            padding: '0.5rem 1rem',
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '10px',
                            color: '#e2e8f0',
                            fontWeight: '600',
                            fontSize: '0.85rem'
                        }}>
                            <span style={{ color: data.accent, display: 'inline-flex', alignItems: 'center' }}>{skill.icon}</span> {skill.name}
                        </div>
                    ))}
                </div>

                {/* Social links */}
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                    {data.socials.map((social, i) => (
                        <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" style={{
                            color: 'var(--text-muted)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            width: '42px', height: '42px', borderRadius: '12px',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'all 0.25s ease'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.background = data.accent;
                                e.currentTarget.style.borderColor = data.accent;
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = `0 8px 16px ${data.bg} `;
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.color = 'var(--text-muted)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Right Side: Minecraft Head 3D Model inside clean glass box */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1, width: '100%', maxWidth: '320px' }}>
                <div className="staff-card-avatar-box">
                    {/* Glowing highlight inside avatar container */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0, left: 0, right: 0, height: '40%',
                        background: `linear-gradient(to top, ${data.bg}, transparent)`,
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}></div>

                    <img
                        src={`https://mc-heads.net/body/${data.mcUsername}/512.png`}
                        alt={data.name}
                        className="staff-card-avatar-img"
                        style={{ zIndex: 1 }}
                        onError={(e) => {
                            e.target.src = 'https://mc-heads.net/body/Steve/512.png';
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

const TeamPage = () => {
    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-darker)' }}>

            {/* Header Section */}
            <section style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative' }} className="animate-fade-in-up">
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: 'min(400px, 80vw)', height: '150px',
                    background: 'var(--primary)',
                    filter: 'blur(120px)', opacity: 0.15,
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px' }}>
                        Meet the <span className="text-gradient">Team</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                        The passionate individuals crafting the ultimate Minecraft launch experience.
                    </p>
                </div>
            </section>

            {/* Main Content Area - All members get detailed responsive cards */}
            <section className="container animate-fade-in-up delay-100" style={{ paddingBottom: '6rem' }}>
                {teamRoster.map((member, idx) => (
                    <DetailedStaffCard key={idx} data={member} reversed={idx % 2 !== 0} />
                ))}
            </section>

        </div>
    );
};

export default TeamPage;
