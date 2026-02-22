import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../components/Layout';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.12
        }
    }
};

const Hero: React.FC = () => {
    const { scrollToPanel } = useScroll();
    return (
        <section className="w-full min-h-screen flex items-center relative overflow-hidden z-0">
            {/* Asymmetrical Background Elements (Desktop Only) */}
            <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-gray-50 to-white -skew-x-12 transform origin-top-right"></div>
            <div className="hidden lg:block absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            {/* Mobile Background Image */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 lg:hidden z-0"
            >
                <img
                    src="/profile.png"
                    alt="Background"
                    className="w-full h-full object-cover object-top"
                />
            </motion.div>



            <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 py-12 md:py-32 lg:py-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                    {/* Left Column - Main Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="flex flex-col space-y-4 md:space-y-6 text-right lg:text-left mt-[45vh] lg:mt-0"
                    >
                        {/* Name */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                            }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white/90 lg:text-black drop-shadow-md lg:drop-shadow-sm">Lakshita Ashwani</h2>
                        </motion.div>

                        {/* Title */}
                        <motion.div
                            variants={fadeIn}
                            className="flex justify-end lg:justify-start"
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md lg:bg-black text-white rounded-full border border-white/20 lg:border-transparent">
                                <span className="text-[10px] md:text-base font-bold uppercase tracking-widest">Fullstack Developer</span>
                            </div>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] } }
                            }}
                            className="text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/70 lg:text-black lg:bg-none drop-shadow-lg lg:drop-shadow-sm"
                        >
                            Engineering{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-white lg:text-black">responsive</span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="absolute bottom-2 left-0 h-3 bg-white/20 lg:bg-black/10 -z-0"
                                ></motion.span>
                            </span>
                            , scalable web applications
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={fadeIn}
                            className="text-sm md:text-xl text-white/80 lg:text-black/60 font-medium leading-relaxed max-w-xl ml-auto lg:ml-0 shadow-sm lg:shadow-none bg-black/20 backdrop-blur-sm lg:bg-transparent p-3 rounded-lg lg:p-0 border border-white/10 lg:border-none"
                        >
                            MERN Full Stack Developer crafting modern, performant web products with clean architecture and strong CS fundamentals.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeIn}
                            className="flex flex-col sm:flex-row gap-4 pt-4 justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 w-fit bg-white/10 backdrop-blur-md border border-white/20 text-white lg:bg-black lg:text-white rounded-xl text-sm font-semibold shadow-lg hover:bg-white/20 lg:hover:bg-gray-900 transition-all hover:-translate-y-0.5"
                                onClick={() => scrollToPanel(4)}
                            >
                                Get in Touch
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Profile Image with Organic Blobs (Desktop Only) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        {/* Organic Blob Shapes Container */}
                        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
                            {/* Large circular blob - dark brown (left) */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                style={{
                                    borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%'
                                }}
                                className="absolute top-[15%] left-0 w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-[#6B5D52]"
                            ></motion.div>

                            {/* Medium circular blob - tan/beige (top right) */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, duration: 1 }}
                                style={{
                                    borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%'
                                }}
                                className="absolute top-0 right-[5%] w-[180px] h-[180px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] bg-[#C4A68A]"
                            ></motion.div>

                            {/* Large circular blob - light beige (bottom center) */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 1 }}
                                style={{
                                    borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%'
                                }}
                                className="absolute bottom-0 left-[20%] w-[180px] h-[180px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] bg-[#D4BCA8]"
                            ></motion.div>

                            {/* Profile Image - centered among blobs */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-20 w-[180px] h-[180px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px]"
                            >
                                <img
                                    src="/profile.png"
                                    alt="Lakshita Ashwani"
                                    style={{ objectPosition: 'center 15%' }}
                                    className="w-full h-full object-cover rounded-full shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
