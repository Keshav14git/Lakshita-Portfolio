import React from "react";
import { motion } from "framer-motion";
import {
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiHtml5,
    SiCss3,
    SiPostman,
    SiNextdotjs,
    SiTailwindcss,
    SiReactrouter,
    SiAxios,
} from "react-icons/si";
import { FaJava, FaCode, FaMobileAlt, FaServer, FaDatabase, FaDesktop, FaNetworkWired, FaHandshake, FaComments, FaLightbulb } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

/* ---------------- Animations ---------------- */



/* ---------------- Component ---------------- */

const skillsData = [
    { icon: FaJava, name: "Java", category: "Language", description: "Enterprise-grade OOP logic", color: "#E76F00" },
    { icon: SiJavascript, name: "JavaScript", category: "Language", description: "Modern ES6+ web logic", color: "#F7DF1E" },
    { icon: SiReact, name: "React.js", category: "Frontend", description: "Component-based UI architecture", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", category: "Frontend", description: "Full-stack React framework", color: "#000000" },
    { icon: SiNodedotjs, name: "Node.js", category: "Backend", description: "Server-side JS environment", color: "#339933" },
    { icon: SiExpress, name: "Express.js", category: "Backend", description: "Minimalist Node.js framework", color: "#000000" },
    { icon: SiMongodb, name: "MongoDB", category: "Database", description: "NoSQL document storage", color: "#47A248" },
    { icon: SiPostgresql, name: "PostgreSQL", category: "Database", description: "Advanced relational DB", color: "#4169E1" },
    { icon: SiTailwindcss, name: "Tailwind", category: "Frontend", description: "Utility-first CSS styling", color: "#06B6D4" },
    { icon: SiHtml5, name: "HTML5", category: "Frontend", description: "Semantic web structure", color: "#E34F26" },
    { icon: SiCss3, name: "CSS3", category: "Frontend", description: "Modern responsive styling", color: "#1572B6" },
    { icon: SiGit, name: "Git", category: "Tools", description: "Version control system", color: "#F05032" },
    { icon: SiGithub, name: "GitHub", category: "Tools", description: "Cloud-based collaboration", color: "#181717" },
    { icon: VscVscode, name: "VS Code", category: "Tools", description: "Modern development IDE", color: "#007ACC" },
    { icon: SiPostman, name: "Postman", category: "Tools", description: "API testing & development", color: "#FF6C37" },
    { icon: SiReactrouter, name: "React Router", category: "Frontend", description: "Dynamic SPA navigation", color: "#CA4245" },
    { icon: SiAxios, name: "Axios", category: "Tools", description: "Promise-based HTTP requests", color: "#5A29E4" },
    { icon: FaMobileAlt, name: "Responsive", category: "Frontend", description: "Multi-viewport optimization", color: "#2563EB" },
    { icon: FaServer, name: "REST APIs", category: "Backend", description: "Standardized web services", color: "#059669" },
    { icon: FaDatabase, name: "Convex", category: "Backend", description: "Real-time sync database", color: "#F5C712" },
    { icon: FaCode, name: "OOP", category: "CS Concept", description: "Object-oriented paradigm", color: "#7C3AED" },
    { icon: FaDatabase, name: "DBMS", category: "CS Concept", description: "Structure & Querying logic", color: "#DB2777" },
    { icon: FaDesktop, name: "OS", category: "CS Concept", description: "System resource management", color: "#0891B2" },
    { icon: FaNetworkWired, name: "Networks", category: "CS Concept", description: "Data communication basics", color: "#EA580C" },
];

const softSkillsData = [
    { icon: FaComments, name: "Communication", category: "Personal", description: "Clear & effective articulation", color: "#10B981" },
    { icon: FaHandshake, name: "Teamwork", category: "Personal", description: "Collaborative project drive", color: "#3B82F6" },
    { icon: FaLightbulb, name: "Problem Solving", category: "Personal", description: "Analytical solution design", color: "#F59E0B" },
];

const Skills: React.FC = () => {
    // Group technical skills by category (for mobile)
    const categories: Record<string, any[]> = skillsData.reduce((acc: any, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    const sortedCategoryNames = ["Language", "Frontend", "Backend", "Database", "Tools", "CS Concept"];

    return (
        <section className="w-full min-h-screen pt-20 md:pt-32 pb-20 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-[#6b5d52]/80">
                    Technical <span className="text-[#6b5d52]/30">Arsenal</span>
                </h2>
                <div className="mt-4 flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-[#6b5d52]/10"></div>
                    <p className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-[#6b5d52]/40 uppercase">
                        Crystallized Skills & Foundations
                    </p>
                    <div className="h-[1px] w-12 bg-[#6b5d52]/10"></div>
                </div>
            </div>

            {/* Desktop View: Unified Grid (Old Layout) */}
            <div className="hidden md:grid max-w-7xl mx-auto grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group bg-[#f9f9f9] border border-black/5 rounded-2xl p-6 hover:bg-white hover:border-black/10 hover:shadow-xl transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-4 text-2xl lg:text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-500" style={{ color: skill.color }}>
                            <skill.icon />
                        </div>
                        <h3 className="text-xs font-black uppercase tracking-widest text-black/80 mb-2">
                            {skill.name}
                        </h3>
                        <p className="text-[10px] font-bold text-black/40 uppercase tracking-tight leading-relaxed">
                            {skill.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Mobile View: Categorized Cards (New Layout) */}
            <div className="md:hidden max-w-7xl mx-auto grid grid-cols-1 gap-8 mb-24">
                {sortedCategoryNames.map((catName, catIndex) => {
                    const skills = categories[catName];
                    if (!skills) return null;

                    return (
                        <motion.div
                            key={catName}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="group bg-[#ececec] border border-black/5 rounded-3xl p-8 flex flex-col hover:bg-white hover:border-black/10 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-sm font-black uppercase tracking-widest text-black/80">
                                    {catName === "CS Concept" ? "CS Fundamentals" : catName}
                                </h3>
                                <div className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold text-black/40">
                                    {skills.length} Items
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <SkillNode key={skill.name} {...skill} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Professional Strengths (Unified for both) */}
            <div className="max-w-4xl mx-auto px-4 md:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#f9f9f9] max-md:bg-[#ececec] border border-black/5 rounded-3xl p-8 flex flex-col hover:bg-white hover:border-black/10 transition-all duration-500"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-sm font-black uppercase tracking-widest text-black/80">
                            Professional Strengths
                        </h3>
                        <div className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold text-black/40">
                            {softSkillsData.length} Items
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {softSkillsData.map((skill) => (
                            <div key={skill.name} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-black/[0.03] hover:border-black/10 transition-all">
                                <div className="text-2xl mb-3" style={{ color: skill.color }}>
                                    <skill.icon />
                                </div>
                                <span className="font-bold text-[11px] uppercase tracking-widest text-black/80 mb-1">{skill.name}</span>
                                <p className="text-[9px] text-black/40 leading-relaxed uppercase font-medium">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SkillNode = ({ icon: Icon, name, color, index }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-white border border-black/[0.03] group/node hover:border-black/10 hover:shadow-sm transition-all duration-300 min-w-0"
        >
            <div
                className="text-xl shrink-0 filter grayscale group-hover/node:grayscale-0 transition-all duration-500"
                style={{ color: color }}
            >
                <Icon />
            </div>
            <div className="flex-1 min-w-0">
                <span className="font-bold text-black/60 text-[10px] sm:text-[11px] uppercase tracking-tighter break-words leading-none block">
                    {name}
                </span>
            </div>
        </motion.div>
    );
};

export default Skills;
