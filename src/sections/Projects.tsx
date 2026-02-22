import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion';
import { FaGithub, FaReact, FaDatabase, FaExternalLinkAlt } from 'react-icons/fa';
import InteractiveGrid from '../components/InteractiveGrid';

interface Project {
    id: number;
    title: string;
    tagline: string;
    description: string;
    tech: string[];
    repo: string;
    color: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Personal Portfolio",
        tagline: "High-Performance Portfolio",
        description: "Architected a high-performance, SEO-optimized portfolio with a Bento-grid UI and 3D hover effects, achieving a 100/100 Lighthouse score.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        repo: "#",
        color: "#6B5D52" // Hero Blob 1
    },
    {
        id: 2,
        title: "NeuroTask",
        tagline: "Full Stack Task Manager",
        description: "Built a robust MERN productivity app with CRUD operations, secure authentication, and modular REST APIs for seamless task workflows.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        repo: "#",
        color: "#C4A68A" // Hero Blob 2
    },
    {
        id: 3,
        title: "ByteByer",
        tagline: "E-Commerce Prototype",
        description: "Developed a functional online store featuring a product catalog, shopping cart, and admin dashboard using React Context for state management.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        repo: "#",
        color: "#D4BCA8" // Hero Blob 3
    }
];

interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    link: string;
    color: string;
    image: string;
}

const certificates: Certificate[] = [
    {
        id: 1,
        title: "React.js",
        issuer: "Scaler",
        date: "2024",
        link: "#",
        color: "#61DAFB", // React Cyan
        image: "/1.jpeg"
    },
    {
        id: 2,
        title: "SQL-SkillUp",
        issuer: "Geeks for Geeks",
        date: "2024",
        link: "#",
        color: "#2F8D46", // GFG Green
        image: "/2.png"
    }
];


const RippleWavesPattern = ({ color, isSelected }: { color: string, isSelected: boolean }) => {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
            <svg width="100%" height="100%" className="absolute inset-0">
                {/* Concentric bold rings emanating from bottom-right */}
                {[1, 2, 3, 4, 5].map((i) => (
                    <motion.circle
                        key={i}
                        cx="100%"
                        cy="100%"
                        initial={{ r: i * 50, strokeOpacity: 0.15 }}
                        fill="none"
                        stroke={color}
                        strokeWidth="10"
                        animate={{
                            r: isSelected ? [i * 50, i * 50 + 20, i * 50] : i * 50,
                            strokeOpacity: isSelected ? [0.15, 0.3, 0.15] : 0.15,
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
                {/* Center Pulse (Origin) */}
                <motion.circle
                    cx="100%"
                    cy="100%"
                    r={20}
                    initial={{ scale: 1 }}
                    fill={color}
                    fillOpacity="0.2"
                    animate={{ scale: isSelected ? [1, 1.5, 1] : 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </svg>
        </div>
    );
};

const CardPattern = ({ isSelected }: { isSelected: boolean }) => {
    // Premium Dark Theme Color
    const premiumDark = "#4b3839";

    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Unified Pattern for All Cards */}
            <RippleWavesPattern color={premiumDark} isSelected={isSelected} />
        </div>
    );
};

const Projects: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [selectedCertImage, setSelectedCertImage] = useState<string | null>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const mouseXSpring = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const mouseYSpring = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const background = useMotionTemplate`radial-gradient(600px circle at ${mouseXSpring}px ${mouseYSpring}px, rgba(196, 166, 138, 0.25), transparent 80%)`;

    return (
        <section
            onMouseMove={handleMouseMove}
            className="w-full min-h-screen py-24 px-6 bg-white relative overflow-hidden scroll-mt-[96px]"
        >
            {/* Certificate Lightbox Modal */}
            <AnimatePresence>
                {selectedCertImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCertImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
                    >
                        <motion.img
                            src={selectedCertImage}
                            alt="Certificate"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={() => setSelectedCertImage(null)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Background Decor - Inverted Triangle */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-[#c4a68a]/05 pointer-events-none z-0"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[115%] h-[95%] bg-[#d4bca8]/03 pointer-events-none z-0"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />

            {/* Interactive Dot Grid - Overlay with Difference Blend Mode */}
            <div className="absolute inset-0 pointer-events-none z-20 mix-blend-difference">
                <InteractiveGrid
                    colors={['#FFFFFF']} // Pure White dots
                    opacity={1}         // Full opacity for clean difference blend
                    size={0}            // Invisible base size
                />
            </div>

            {/* Mouse Spotlight Effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background
                }}
            />
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-12 md:mb-20 relative z-30">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#6b5d52]/80"
                >
                    My Work
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-3 text-sm font-mono tracking-widest text-black/50 uppercase"
                >
                    Precision in Execution, Excellence in Design
                </motion.p>
            </div>

            {/* Projects Grid Container */}
            <div className="max-w-7xl mx-auto h-[350px] hidden md:flex items-center gap-4">
                {projects.map((project) => {
                    const isSelected = hoveredId === project.id;
                    const textColor = project.id === 1 ? 'text-white' : project.id === 2 ? 'text-[#4b3839]' : 'text-black';
                    const subtextColor = project.id === 1 ? 'text-white/80' : 'text-black/60';
                    const badgeBg = project.id === 1 ? 'bg-white/20' : 'bg-black/5';

                    return (
                        <motion.div
                            key={project.id}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            animate={{
                                width: isSelected ? '50%' : hoveredId === null ? '33.33%' : '25%',
                                opacity: hoveredId === null || isSelected ? 1 : 0.6,
                                scale: isSelected ? 1.01 : 1,
                            }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className={`h-full relative overflow-hidden rounded-2xl group cursor-pointer border border-black/10 hover:border-black/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_25px_50px_-12px_rgba(107,93,82,0.25)] hover:-translate-y-2 transition-all duration-300 ring-1 ring-white/50 ring-inset ${textColor}`}
                            style={{
                                backgroundColor: isSelected ? project.color : 'white',
                                transition: 'background-color 0.5s ease'
                            }}
                        >
                            {/* Decorative Background Pattern */}
                            <CardPattern isSelected={isSelected} />

                            {/* Project Title (Visible when not detail view) */}
                            <AnimatePresence mode="wait">
                                {!isSelected ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-black"
                                    >
                                        <span className="text-4xl font-black uppercase text-black/5 absolute -rotate-90 origin-center whitespace-nowrap">
                                            PROJECT 0{project.id}
                                        </span>
                                        <h3 className="text-xl font-bold text-black/70 uppercase tracking-widest text-center">
                                            {project.title}
                                        </h3>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        className="absolute inset-0 p-10 flex flex-col justify-between"
                                    >
                                        <div className="space-y-4">
                                            <span className={`text-[10px] font-mono uppercase tracking-[0.4em] ${subtextColor}`}>
                                                Project Case Study
                                            </span>
                                            <h3 className="text-4xl font-black uppercase leading-none tracking-tight">
                                                {project.title}
                                            </h3>
                                            <p className={`text-sm ${subtextColor} max-w-sm font-medium leading-relaxed`}>
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.tech.map(t => (
                                                    <span key={t} className={`px-2.5 py-1 ${badgeBg} rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border ${project.id === 1 ? 'border-black/30' : 'border-black/5'}`}>
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-6">
                                            <a href={project.repo} className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity`}>
                                                Repository <FaGithub />
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>

            {/* Mobile view (Stack) */}
            <div className="md:hidden space-y-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        className="w-full bg-white border border-black/10 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-white/50 ring-inset"
                    >
                        <span className="text-xs font-mono text-black/40 uppercase mb-2 block">Project 0{project.id}</span>
                        <h3 className="text-xl font-bold uppercase mb-3">{project.title}</h3>
                        <p className="text-sm text-black/60 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6 text-[10px]">
                            {project.tech.map(t => <span key={t} className="px-2 py-0.5 bg-black/5 rounded">{t}</span>)}
                        </div>
                        <div className="flex gap-4">
                            <a href={project.repo} className="text-black/80"><FaGithub size={20} /></a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Certificates Section */}
            <div className="max-w-4xl mx-auto mt-20 md:mt-32 relative z-30">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center text-sm font-bold font-mono uppercase tracking-[0.3em] text-black/80 mb-10"
                >
                    Certifications
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            onClick={() => setSelectedCertImage(cert.image)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -5,
                                scale: 1.02,
                                backgroundColor: cert.color
                            }}
                            transition={{ duration: 0.3 }}
                            className="group relative flex items-center gap-6 p-6 rounded-xl border border-black/5 bg-white/40 backdrop-blur-sm transition-colors duration-300 cursor-pointer"
                        >
                            {/* Icon Box */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow-sm border border-black/5 group-hover:bg-white/20 group-hover:border-transparent transition-all duration-300">
                                {cert.id === 1 ? (
                                    <FaReact className="text-2xl text-[#61DAFB] group-hover:text-white transition-colors duration-300" />
                                ) : (
                                    <FaDatabase className="text-xl text-[#2F8D46] group-hover:text-white transition-colors duration-300" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h4 className="text-lg font-bold uppercase tracking-tight text-black/80 group-hover:text-white transition-colors duration-300">
                                    {cert.title}
                                </h4>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider group-hover:text-white/80 transition-colors duration-300">
                                        {cert.issuer}
                                    </span>
                                    <span className="text-[10px] font-bold text-black/30 border border-black/5 px-2 py-0.5 rounded-full group-hover:text-white/90 group-hover:border-white/20 transition-all duration-300">
                                        {cert.date}
                                    </span>
                                </div>
                            </div>

                            {/* Hover Shine Effect */}
                            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out" />
                            </div>

                            {/* View Icon (Fade in) */}
                            <button
                                className="absolute top-4 right-4 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 text-black/20 group-hover:text-white/80 hover:scale-110"
                                aria-label="View Certificate"
                            >
                                <FaExternalLinkAlt />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Projects;
