import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, Sliders, Layers, Info, Terminal, Activity } from 'lucide-react';

// Data-sets for different test environments
const benchmarkData = {
    lobby: {
        title: "Mega Lobby Test (500+ Players)",
        description: "Simulating a crowded lobby with player model spam, custom skins, name tags, and continuous chat packets. Designed to test CPU and memory allocation limits.",
        frametimes: [
            { tick: 0, astra: 11, vanilla: 28, competitor: 19 },
            { tick: 1, astra: 9, vanilla: 42, competitor: 25 },
            { tick: 2, astra: 12, vanilla: 16, competitor: 15 },
            { tick: 3, astra: 10, vanilla: 35, competitor: 28 },
            { tick: 4, astra: 8, vanilla: 48, competitor: 32 },
            { tick: 5, astra: 11, vanilla: 22, competitor: 18 },
            { tick: 6, astra: 9, vanilla: 39, competitor: 22 },
            { tick: 7, astra: 10, vanilla: 45, competitor: 31 },
            { tick: 8, astra: 11, vanilla: 18, competitor: 17 },
            { tick: 9, astra: 8, vanilla: 34, competitor: 24 }
        ],
        cpu: { astra: 32, vanilla: 78, competitor: 54 },
        ram: { astra: 1240, vanilla: 2860, competitor: 1980 },
        stability: 99.4,
        variance: 1.2,
        gain: 145
    },
    shaders: {
        title: "High-End Shaders (Ultra Settings)",
        description: "GPU and rendering-heavy pipeline. Real-time shadows, god-rays, water reflections, and 32-chunk render distance with high-resolution textures.",
        frametimes: [
            { tick: 0, astra: 14, vanilla: 35, competitor: 22 },
            { tick: 1, astra: 15, vanilla: 55, competitor: 28 },
            { tick: 2, astra: 13, vanilla: 32, competitor: 20 },
            { tick: 3, astra: 16, vanilla: 48, competitor: 26 },
            { tick: 4, astra: 14, vanilla: 64, competitor: 34 },
            { tick: 5, astra: 15, vanilla: 38, competitor: 23 },
            { tick: 6, astra: 13, vanilla: 49, competitor: 27 },
            { tick: 7, astra: 16, vanilla: 59, competitor: 36 },
            { tick: 8, astra: 14, vanilla: 34, competitor: 21 },
            { tick: 9, astra: 15, vanilla: 46, competitor: 29 }
        ],
        cpu: { astra: 45, vanilla: 85, competitor: 68 },
        ram: { astra: 1820, vanilla: 4120, competitor: 2950 },
        stability: 98.9,
        variance: 1.5,
        gain: 162
    },
    anarchy: {
        title: "Anarchy Server Entity Spam",
        description: "Thousands of dropped items, active redstone clocks, constant explosions, and chunk loading stresses. Tests multi-threading performance and rendering optimization.",
        frametimes: [
            { tick: 0, astra: 10, vanilla: 52, competitor: 31 },
            { tick: 1, astra: 12, vanilla: 78, competitor: 45 },
            { tick: 2, astra: 9, vanilla: 42, competitor: 28 },
            { tick: 3, astra: 11, vanilla: 94, competitor: 52 },
            { tick: 4, astra: 10, vanilla: 65, competitor: 39 },
            { tick: 5, astra: 13, vanilla: 81, competitor: 48 },
            { tick: 6, astra: 8, vanilla: 59, competitor: 33 },
            { tick: 7, astra: 11, vanilla: 88, competitor: 54 },
            { tick: 8, astra: 9, vanilla: 48, competitor: 29 },
            { tick: 9, astra: 10, vanilla: 72, competitor: 42 }
        ],
        cpu: { astra: 28, vanilla: 95, competitor: 62 },
        ram: { astra: 1450, vanilla: 3420, competitor: 2260 },
        stability: 99.6,
        variance: 0.9,
        gain: 198
    }
};

// Custom counting component for sexy telemetry updates
const CountingNumber = ({ value, duration = 1, decimal = false, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseFloat(value);
        if (start === end) return;

        let totalMiliseconds = duration * 1000;
        let incrementTime = 30;
        let step = (end / totalMiliseconds) * incrementTime;

        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                clearInterval(timer);
                setCount(end);
            } else {
                setCount(start);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value, duration]);

    return (
        <span>
            {decimal ? count.toFixed(1) : Math.floor(count)}
            {suffix}
        </span>
    );
};

const BenchmarksPage = () => {
    const [activeTest, setActiveTest] = useState('lobby');
    const [isScanning, setIsScanning] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const currentData = benchmarkData[activeTest];

    // Trigger scanning simulation when active test profile changes
    useEffect(() => {
        setIsScanning(true);
        const timer = setTimeout(() => {
            setIsScanning(false);
        }, 750);
        return () => clearTimeout(timer);
    }, [activeTest]);

    // Chart Dimensions
    const chartWidth = 700;
    const chartHeight = 250;
    const padding = 40;

    // Helper to calculate SVG points for Line Charts
    const getSvgPoints = (key) => {
        const points = currentData.frametimes.map((item, index) => {
            const x = padding + (index * (chartWidth - padding * 2)) / (currentData.frametimes.length - 1);
            const y = chartHeight - padding - (item[key] * (chartHeight - padding * 2)) / 100;
            return { x, y };
        });

        const dAttr = points.reduce((acc, point, index) => {
            return acc + `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
        }, "");

        return { dAttr, points };
    };

    const astraPoints = getSvgPoints('astra');
    const vanillaPoints = getSvgPoints('vanilla');
    const competitorPoints = getSvgPoints('competitor');

    // Handle mouse movement for interactive tooltip guide
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate closest data point index based on mouse X
        const innerWidth = chartWidth - padding * 2;
        const relativeX = mouseX - padding;
        const pct = Math.max(0, Math.min(1, relativeX / innerWidth));
        const idx = Math.round(pct * (currentData.frametimes.length - 1));

        setHoveredIdx(idx);
        setMousePos({ x: mouseX, y: mouseY });
    };

    const handleMouseLeave = () => {
        setHoveredIdx(null);
    };

    return (
        <div style={{ paddingTop: 'clamp(100px, 15vh, 140px)', minHeight: '100vh', backgroundColor: 'var(--bg-darker)', paddingBottom: '6rem', overflow: 'hidden' }}>

            {/* Background Glows */}
            <div style={{
                position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '60vw', height: '300px', background: 'var(--primary)',
                filter: 'blur(150px)', opacity: 0.1, pointerEvents: 'none', zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>

                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span style={{
                        color: 'var(--primary)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px',
                        textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem',
                        background: 'rgba(134, 64, 239, 0.1)', padding: '0.4rem 1.2rem', borderRadius: '50px',
                        border: '1px solid rgba(134, 64, 239, 0.2)'
                    }}>
                        Telemetry Data
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)', fontWeight: '900', letterSpacing: '-1.5px', marginBottom: '1rem' }}>
                        Performance <span className="text-gradient">Benchmarks</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
                        Verified frame analysis and hardware load testing comparison statistics. Verified on Intel Core i7-13700K & RTX 4070.
                    </p>
                </motion.div>

                {/* Stress Test Environment Selector Toggles */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap',
                        padding: '0.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                        borderRadius: '16px', maxWidth: '650px', margin: '0 auto 3rem auto'
                    }}
                >
                    {Object.keys(benchmarkData).map((key) => (
                        <button
                            key={key}
                            onClick={() => {
                                if (!isScanning) {
                                    setActiveTest(key);
                                    setHoveredIdx(null);
                                }
                            }}
                            style={{
                                border: 'none',
                                outline: 'none',
                                background: activeTest === key ? 'linear-gradient(135deg, var(--primary) 0%, #a855f7 100%)' : 'transparent',
                                color: activeTest === key ? '#fff' : 'var(--text-muted)',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '12px',
                                fontSize: '0.95rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                flex: '1',
                                minWidth: '150px',
                                boxShadow: activeTest === key ? '0 10px 20px rgba(134, 64, 239, 0.3)' : 'none'
                            }}
                        >
                            {key === 'lobby' && <Layers size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />}
                            {key === 'shaders' && <Sliders size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />}
                            {key === 'anarchy' && <Cpu size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />}
                            {key === 'lobby' ? 'Mega Lobby' : key === 'shaders' ? 'Ultra Shaders' : 'Anarchy Spam'}
                        </button>
                    ))}
                </motion.div>

                {/* Telemetry Count Up Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                    
                    {/* Environment Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="glass-panel" 
                        style={{ padding: '2.5rem 2rem', borderRadius: '24px', position: 'relative' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                            <Info size={20} />
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Active Profile</h3>
                        </div>
                        <h4 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff', marginBottom: '0.5rem' }}>{currentData.title}</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>{currentData.description}</p>
                    </motion.div>

                    {/* Stability Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-panel" 
                        style={{ padding: '2.5rem 2rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: 'rgba(16, 185, 129, 0.05)', filter: 'blur(30px)', borderRadius: '50%' }}></div>
                        <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Astra Stability</h4>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', color: '#10b981' }}>
                            <span style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-1.5px' }}>
                                <CountingNumber key={activeTest + 'stab'} value={currentData.stability} suffix="%" decimal={true} />
                            </span>
                            <span style={{ fontSize: '0.95rem', fontWeight: '700' }}>
                                ±<CountingNumber key={activeTest + 'var'} value={currentData.variance} suffix="ms" decimal={true} /> Var
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Frames are rendered consistently without micro-stuttering freeze periods.</p>
                    </motion.div>

                    {/* Avg Gain Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="glass-panel" 
                        style={{ padding: '2.5rem 2rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: 'rgba(134, 64, 239, 0.05)', filter: 'blur(30px)', borderRadius: '50%' }}></div>
                        <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Average FPS Gain</h4>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', color: 'var(--primary)' }}>
                            <span style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-1.5px' }}>
                                +<CountingNumber key={activeTest + 'gain'} value={currentData.gain} suffix="%" />
                            </span>
                            <span style={{ fontSize: '0.95rem', fontWeight: '700' }}>vs Vanilla</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Measured average frame-rate multiplier under stress load configurations.</p>
                    </motion.div>
                </div>

                {/* Dashboard Chart Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 550px), 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>

                    {/* Chart 1: Frametime Line Chart */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-panel" 
                        style={{ padding: '2.5rem 2rem', borderRadius: '28px', overflow: 'hidden', position: 'relative' }}
                    >
                        {/* Interactive Scan Overlay */}
                        <AnimatePresence>
                            {isScanning && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                        background: 'rgba(6, 8, 12, 0.85)', backdropFilter: 'blur(4px)',
                                        zIndex: 15, display: 'flex', flexDirection: 'column', alignItems: 'center',
                                        justifyContent: 'center', gap: '1rem', color: 'var(--primary)'
                                    }}
                                >
                                    <Activity size={32} className="scrolling-line" style={{ animationDuration: '0.5s' }} />
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                        <Terminal size={16} />
                                        <span>TELEMETRY SWEEP IN PROGRESS...</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="laser-line"></div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '0.2rem' }}>Frametime Consistency (ms)</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Hover over chart to inspect exact frametimes.</p>
                            </div>
                            
                            {/* Legend */}
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', fontWeight: '600' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10b981' }}>
                                    <span style={{ width: '12px', height: '3px', background: '#10b981', display: 'inline-block', borderRadius: '10px' }}></span> Astra
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a855f7' }}>
                                    <span style={{ width: '12px', height: '3px', background: '#a855f7', display: 'inline-block', borderRadius: '10px' }}></span> Client X
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#ef4444' }}>
                                    <span style={{ width: '12px', height: '3px', background: '#ef4444', display: 'inline-block', borderRadius: '10px' }}></span> Vanilla
                                </span>
                            </div>
                        </div>

                        {/* Interactive SVG Chart Container */}
                        <div style={{ position: 'relative', width: '100%', overflowX: 'auto' }}>
                            <svg 
                                width={chartWidth} 
                                height={chartHeight} 
                                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{ display: 'block', overflow: 'visible', cursor: 'crosshair', margin: '0 auto' }}
                            >
                                {/* Grid Y axis lines */}
                                {[20, 40, 60, 80].map((val) => {
                                    const y = chartHeight - padding - (val * (chartHeight - padding * 2)) / 100;
                                    return (
                                        <g key={val}>
                                            <line x1={padding} y1={y} x2={chartWidth - padding} y2={y} stroke="rgba(255,255,255,0.03)" strokeDasharray="3,3" />
                                            <text x={padding - 10} y={y + 4} textAnchor="end" fill="rgba(255,255,255,0.25)" style={{ fontSize: '0.75rem', fontFamily: 'monospace' }}>{val}ms</text>
                                        </g>
                                    );
                                })}

                                {/* Chart Paths */}
                                <AnimatePresence mode="wait">
                                    <g key={activeTest}>
                                        {/* Vanilla Line (Red) */}
                                        <motion.path 
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 0.8 }}
                                            d={vanillaPoints.dAttr} 
                                            fill="none" 
                                            stroke="#ef4444" 
                                            strokeWidth="2.5" 
                                            strokeLinecap="round"
                                        />
                                        {/* Competitor Line (Purple) */}
                                        <motion.path 
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 0.8 }}
                                            d={competitorPoints.dAttr} 
                                            fill="none" 
                                            stroke="#a855f7" 
                                            strokeWidth="2.5" 
                                            strokeLinecap="round"
                                        />
                                        {/* Astra Line (Green) */}
                                        <motion.path 
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 0.8 }}
                                            d={astraPoints.dAttr} 
                                            fill="none" 
                                            stroke="#10b981" 
                                            strokeWidth="4" 
                                            strokeLinecap="round"
                                        />
                                        
                                        {/* Interactive Hover Vertical Guide and dots */}
                                        {hoveredIdx !== null && (
                                            <>
                                                {/* Vertical guide line */}
                                                <line 
                                                    x1={astraPoints.points[hoveredIdx].x} 
                                                    y1={padding} 
                                                    x2={astraPoints.points[hoveredIdx].x} 
                                                    y2={chartHeight - padding} 
                                                    stroke="rgba(134, 64, 239, 0.3)" 
                                                    strokeWidth="2" 
                                                    strokeDasharray="4,4"
                                                />
                                                {/* Glow dots on line intersections */}
                                                <circle cx={astraPoints.points[hoveredIdx].x} cy={astraPoints.points[hoveredIdx].y} r="8" fill="rgba(16, 185, 129, 0.2)" />
                                                <circle cx={astraPoints.points[hoveredIdx].x} cy={astraPoints.points[hoveredIdx].y} r="4.5" fill="#10b981" stroke="#06080c" strokeWidth="2" />
                                                
                                                <circle cx={competitorPoints.points[hoveredIdx].x} cy={competitorPoints.points[hoveredIdx].y} r="8" fill="rgba(168, 85, 247, 0.2)" />
                                                <circle cx={competitorPoints.points[hoveredIdx].x} cy={competitorPoints.points[hoveredIdx].y} r="4.5" fill="#a855f7" stroke="#06080c" strokeWidth="2" />
                                                
                                                <circle cx={vanillaPoints.points[hoveredIdx].x} cy={vanillaPoints.points[hoveredIdx].y} r="8" fill="rgba(239, 68, 68, 0.2)" />
                                                <circle cx={vanillaPoints.points[hoveredIdx].x} cy={vanillaPoints.points[hoveredIdx].y} r="4.5" fill="#ef4444" stroke="#06080c" strokeWidth="2" />
                                            </>
                                        )}
                                    </g>
                                </AnimatePresence>

                                {/* Bottom X Axis (Tick labels) */}
                                <line x1={padding} y1={chartHeight - padding} x2={chartWidth - padding} y2={chartHeight - padding} stroke="rgba(255,255,255,0.08)" />
                                {currentData.frametimes.map((item, index) => {
                                    const x = padding + (index * (chartWidth - padding * 2)) / (currentData.frametimes.length - 1);
                                    return (
                                        <text key={index} x={x} y={chartHeight - padding + 22} textAnchor="middle" fill="rgba(255,255,255,0.3)" style={{ fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: '500' }}>
                                            T{item.tick + 1}
                                        </text>
                                    );
                                })}
                            </svg>

                            {/* Floating Tooltip Widget on hover */}
                            {hoveredIdx !== null && (
                                <div style={{
                                    position: 'absolute',
                                    left: `${mousePos.x + 15}px`,
                                    top: `${mousePos.y - 110}px`,
                                    background: 'rgba(10, 13, 20, 0.9)',
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(134, 64, 239, 0.25)',
                                    borderRadius: '16px',
                                    padding: '0.85rem 1.1rem',
                                    pointerEvents: 'none',
                                    boxShadow: '0 12px 30px rgba(134, 64, 239, 0.15)',
                                    zIndex: 20,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.4rem'
                                }}>
                                    <div style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Deltas (Sample {hoveredIdx + 1})</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2.5rem', fontSize: '0.85rem' }}>
                                        <span style={{ color: '#10b981', fontWeight: '700' }}>Astra Client:</span>
                                        <span style={{ color: '#fff', fontWeight: '800' }}>{currentData.frametimes[hoveredIdx].astra} ms</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2.5rem', fontSize: '0.85rem' }}>
                                        <span style={{ color: '#a855f7', fontWeight: '700' }}>Competitors:</span>
                                        <span style={{ color: '#fff', fontWeight: '800' }}>{currentData.frametimes[hoveredIdx].competitor} ms</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2.5rem', fontSize: '0.85rem' }}>
                                        <span style={{ color: '#ef4444', fontWeight: '700' }}>Vanilla MC:</span>
                                        <span style={{ color: '#fff', fontWeight: '800' }}>{currentData.frametimes[hoveredIdx].vanilla} ms</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Chart 2: CPU & RAM Overhead comparisons */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="glass-panel" 
                        style={{ padding: '2.5rem 2rem', borderRadius: '28px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
                    >
                        <AnimatePresence>
                            {isScanning && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                        background: 'rgba(6, 8, 12, 0.85)', backdropFilter: 'blur(4px)',
                                        zIndex: 15, display: 'flex', flexDirection: 'column', alignItems: 'center',
                                        justifyContent: 'center', gap: '1rem', color: 'var(--primary)'
                                    }}
                                >
                                    <Activity size={32} className="scrolling-line" style={{ animationDuration: '0.5s' }} />
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                        <Terminal size={16} />
                                        <span>PROFILING SYSTEM LOAD...</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '0.2rem' }}>Resource Utilization Metrics</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '2rem' }}>System memory footprint and logical processor thread consumption.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1, justifyContent: 'center' }}>
                            {/* CPU Overhead Bars */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                                    <span style={{ fontWeight: '600' }}>Average CPU Usage % (Lower is better)</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {/* Astra Bar */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ width: '100px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Astra Client</span>
                                        <div style={{ flex: 1, height: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${currentData.cpu.astra}%` }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                style={{ height: '100%', background: 'linear-gradient(90deg, #10b981, #34d399)', borderRadius: '6px' }}
                                            />
                                        </div>
                                        <span style={{ width: '40px', fontSize: '0.85rem', fontWeight: '700', textAlign: 'right', color: '#10b981' }}>{currentData.cpu.astra}%</span>
                                    </div>
                                    {/* Competitor Bar */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ width: '100px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Competitors</span>
                                        <div style={{ flex: 1, height: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${currentData.cpu.competitor}%` }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                style={{ height: '100%', background: 'linear-gradient(90deg, #a855f7, #c084fc)', borderRadius: '6px' }}
                                            />
                                        </div>
                                        <span style={{ width: '40px', fontSize: '0.85rem', fontWeight: '700', textAlign: 'right', color: '#a855f7' }}>{currentData.cpu.competitor}%</span>
                                    </div>
                                    {/* Vanilla Bar */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ width: '100px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Vanilla MC</span>
                                        <div style={{ flex: 1, height: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${currentData.cpu.vanilla}%` }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                style={{ height: '100%', background: 'linear-gradient(90deg, #ef4444, #f87171)', borderRadius: '6px' }}
                                            />
                                        </div>
                                        <span style={{ width: '40px', fontSize: '0.85rem', fontWeight: '700', textAlign: 'right', color: '#ef4444' }}>{currentData.cpu.vanilla}%</span>
                                    </div>
                                </div>
                            </div>

                            {/* RAM Overhead Bars */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                                    <span style={{ fontWeight: '600' }}>Memory Allocation (RAM footprint)</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {/* Astra Bar */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ width: '100px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Astra Client</span>
                                        <div style={{ flex: 1, height: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(currentData.ram.astra / 5000) * 100}%` }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                style={{ height: '100%', background: 'linear-gradient(90deg, #10b981, #34d399)', borderRadius: '6px' }}
                                            />
                                        </div>
                                        <span style={{ width: '65px', fontSize: '0.85rem', fontWeight: '700', textAlign: 'right', color: '#10b981' }}>{(currentData.ram.astra / 1024).toFixed(2)} GB</span>
                                    </div>
                                    {/* Competitor Bar */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ width: '100px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Competitors</span>
                                        <div style={{ flex: 1, height: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(currentData.ram.competitor / 5000) * 100}%` }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                style={{ height: '100%', background: 'linear-gradient(90deg, #a855f7, #c084fc)', borderRadius: '6px' }}
                                            />
                                        </div>
                                        <span style={{ width: '65px', fontSize: '0.85rem', fontWeight: '700', textAlign: 'right', color: '#a855f7' }}>{(currentData.ram.competitor / 1024).toFixed(2)} GB</span>
                                    </div>
                                    {/* Vanilla Bar */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ width: '100px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Vanilla MC</span>
                                        <div style={{ flex: 1, height: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(currentData.ram.vanilla / 5000) * 100}%` }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                style={{ height: '100%', background: 'linear-gradient(90deg, #ef4444, #f87171)', borderRadius: '6px' }}
                                            />
                                        </div>
                                        <span style={{ width: '65px', fontSize: '0.85rem', fontWeight: '700', textAlign: 'right', color: '#ef4444' }}>{(currentData.ram.vanilla / 1024).toFixed(2)} GB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Garbage Collection (Live Sawtooth Graph) */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="glass-panel" 
                    style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', borderRadius: '28px' }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '800', color: '#fff' }}>Memory Garbage Collection Optimization</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
                            Traditional Java applications collect discarded heap memory in blocks, causing the CPU to freeze threads. Astra resolves this with continuous, background delta collection.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        
                        {/* Oscilloscope Graphs */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {/* Vanilla GC Graph */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                                    <span style={{ color: '#ef4444', fontWeight: '700' }}>Vanilla Java GC Pattern</span>
                                    <span style={{ color: 'rgba(239, 68, 68, 0.7)', fontSize: '0.8rem', fontWeight: '600' }}>⚠️ 150ms micro-stutter freezes</span>
                                </div>
                                <div style={{ position: 'relative', width: '100%', height: '80px', background: 'rgba(239, 68, 68, 0.02)', border: '1px solid rgba(239, 68, 68, 0.1)', borderRadius: '12px', overflow: 'hidden' }}>
                                    <svg width="100%" height="80" style={{ display: 'block', overflow: 'visible' }}>
                                        {/* Seamless looping sliding sawtooth pattern */}
                                        <g className="sawtooth-animate">
                                            <path 
                                                d="M -50 70 L 0 10 L 0 70 L 50 10 L 50 70 L 100 10 L 100 70 L 150 10 L 150 70 L 200 10 L 200 70 L 250 10 L 250 70 L 300 10 L 300 70 L 350 10 L 350 70 L 400 10 L 400 70 L 450 10 L 450 70 L 500 10 L 500 70 L 550 10 L 550 70 L 600 10 L 600 70 L 650 10 L 650 70 L 700 10 L 700 70 L 750 10 L 750 70 L 800 10 L 800 70 L 850 10 L 850 70"
                                                fill="none"
                                                stroke="#ef4444"
                                                strokeWidth="2.5"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>

                            {/* Astra Optimized GC Graph */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                                    <span style={{ color: '#10b981', fontWeight: '700' }}>Astra Delta GC Ring-Buffer</span>
                                    <span style={{ color: 'rgba(16, 185, 129, 0.7)', fontSize: '0.8rem', fontWeight: '600' }}>✅ 0ms stutter (smooth thread cleanup)</span>
                                </div>
                                <div style={{ position: 'relative', width: '100%', height: '80px', background: 'rgba(16, 185, 129, 0.02)', border: '1px solid rgba(16, 185, 129, 0.15)', borderRadius: '12px', overflow: 'hidden' }}>
                                    <svg width="100%" height="80" style={{ display: 'block', overflow: 'visible' }}>
                                        {/* Seamless looping sliding wave pattern */}
                                        <g className="wave-animate">
                                            <path 
                                                d="M -100 35 Q -75 25 -50 35 T 0 35 T 50 35 T 100 35 T 150 35 T 200 35 T 250 35 T 300 35 T 350 35 T 400 35 T 450 35 T 500 35 T 550 35 T 600 35 T 650 35 T 700 35 T 750 35 T 800 35 T 850 35 T 900 35"
                                                fill="none"
                                                stroke="#10b981"
                                                strokeWidth="4"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Explanatory description card */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(134,64,239,0.08)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '0.2rem' }}>Automatic Garbage Collection Suppression</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                        By using a custom Z Garbage Collector (ZGC) JVM layer pre-configured in our Electron execution launcher, we prevent Java from pausing the main render loop to wipe memory tables.
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(134,64,239,0.08)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Cpu size={20} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '0.2rem' }}>Dynamic Thread Allocation</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                        Our launcher isolates Minecraft's rendering threads onto your high-performance CPU cores while delegating background resource generation and network assets to efficiency threads.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default BenchmarksPage;
