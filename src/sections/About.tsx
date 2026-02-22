import React from 'react';
import { motion, type Variants } from 'framer-motion';

const lineDraw: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0]
        }
    }
};

const maskedReveal: Variants = {
    hidden: { y: "100%" },
    visible: {
        y: "0%",
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
};

const typingContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.015 }
    }
};

const typingChar: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0 } }
};

const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }
    }
};

const educationStagger: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const About: React.FC = () => {
    const skills = [
        "OPERATING SYSTEMS", "DATABASE MANAGEMENT SYSTEMS", "DATA STRUCTURES AND ALGORITHMS",
        "COMPUTER NETWORKS", "COMPUTER ORGANIZATION AND ARCHITECTURE",
        "COMPUTER GRAPHICS", "INFORMATION SECURITY SYSTEMS", "THEORY OF COMPUTATION", "MACHINE LEARNING",
        "ARTIFICIAL INTELLIGENCE", "DATA MINING AND DATA WAREHOUSING", "DATA MINING"
    ];

    return (
        <section className="w-full min-h-screen bg-white text-black relative z-10 py-16 md:py-24 lg:pb-24 overflow-hidden">

            {/* Background Rhombus Shape */}
            <div
                className="hidden md:block absolute top-0 right-0 h-full w-full bg-[#c4a68a] opacity-20 pointer-events-none z-0"
                style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 25% 100%)" }}
            />

            {/* Main Content Container with Blend Mode */}
            <div className="max-w-7xl w-full mx-auto relative z-10 px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">

                    {/* Left Column - Sticky Intro & Bio */}
                    <div className="lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center">

                            {/* Title - Positioned at the top independently */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative lg:absolute lg:top-20 left-0 mb-8 lg:mb-0"

                            >
                                <h6 className="text-[3rem] md:text-5xl lg:text-[4rem] font-bold uppercase tracking-tighter text-[#6b5d52]/50 leading-none select-none">About</h6>

                            </motion.div>

                            {/* Bio Content - Vertically Centered */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative z-10"
                            >
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-6">
                                    <div className="overflow-hidden">
                                        <motion.div
                                            variants={maskedReveal}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            I'm Lakshita
                                        </motion.div>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.div
                                            variants={maskedReveal}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                                        >
                                            Ashwani.
                                        </motion.div>
                                    </div>
                                </h2>

                                <h3 className="text-2xl md:text-3xl font-medium leading-tight tracking-tight text-black/80 mb-6">
                                    Analyzing complexity to<br /> <span className="text-black/40">engineer clarity.</span>
                                </h3>

                                <motion.p
                                    variants={typingContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="text-lg text-black/60 leading-relaxed max-w-md"
                                >
                                    {Array.from("I bridge the gap between heavy backend logic and fluid frontend interactivity. My approach is rooted in component purity, system efficiency, and a relentless focus on performance.").map((char, index) => (
                                        <motion.span key={index} variants={typingChar}>
                                            {char}
                                        </motion.span>
                                    ))}
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column - Scrollable Education & Skills */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-24 py-24 lg:py-0 lg:pl-24">

                        {/* 01. Education Timeline */}
                        <div className="space-y-8 relative">
                            <motion.div
                                variants={lineDraw}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="absolute -top-12 left-0 w-full h-[1px] bg-black/10"
                            />
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-xs font-bold uppercase tracking-widest text-black/40">01</span>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-black">Education</h4>
                            </div>

                            <motion.div
                                className="space-y-12 pl-4 border-l border-black/5 relative"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <motion.div
                                    variants={educationStagger}
                                    className="relative pl-8"
                                >
                                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-black rounded-full ring-4 ring-white"></div>
                                    <h5 className="text-2xl font-bold mb-1">JECRC University</h5>
                                    <h5 className="text-lg text-black/60">B.Tech in Computer Science & Engineering</h5>
                                    <p className="text-lg text-black/60">CGPA: 8.4</p> <p className="text-xs font-mono text-black/40 mb-2 block">(2022– 2026)</p>

                                </motion.div>

                                <motion.div
                                    variants={educationStagger}
                                    className="relative pl-8"
                                >
                                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black rounded-full ring-4 ring-white"></div>
                                    <h5 className="text-2xl font-bold mb-1">DAV Public School</h5>
                                    <p className="text-lg text-black/60">Senior Secondary (CBSE) — 79% </p> <p className="text-xs font-mono text-black/40 mb-2 block">(2020– 2021)</p>
                                    <p className="text-lg text-black/60">Secondary (CBSE) — 82.4% </p> <p className="text-xs font-mono text-black/40 mb-2 block">(2019– 2020)</p>
                                </motion.div>
                            </motion.div>
                        </div>


                        {/* 02. Tech Stack Marquee */}
                        <div className="relative">
                            <motion.div
                                variants={lineDraw}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="absolute -top-12 left-0 w-full h-[1px] bg-black/10"
                            />
                            <div className="pt-4">
                                <div className="flex items-baseline gap-4 mb-8">
                                    <span className="text-xs font-bold uppercase tracking-widest text-black/40">02</span>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-black">Area of Interests</h4>
                                </div>

                                <div className="relative overflow-hidden w-full">
                                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
                                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>

                                    <motion.div
                                        className="flex gap-8 whitespace-nowrap"
                                        animate={{ x: [0, -1035] }}
                                        transition={{
                                            repeat: Infinity,
                                            ease: "linear",
                                            duration: 20
                                        }}
                                    >
                                        {[...skills, ...skills, ...skills].map((skill, index) => (
                                            <span
                                                key={`${skill}-${index}`}
                                                className="text-2xl font-bold text-[#4b3839] select-none uppercase tracking-tighter"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
