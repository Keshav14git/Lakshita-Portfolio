import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 max-w-[1200px] mx-auto pt-20">
            <motion.p
                className="text-accent font-mono mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                Hi, my name is
            </motion.p>

            <motion.h1
                className="text-5xl md:text-7xl font-bold text-textPrimary mb-4 uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Lakshita Ashwani
            </motion.h1>

            <motion.h2
                className="text-3xl md:text-5xl font-bold text-textSecondary mb-6 uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                MERN Stack Full Stack Developer
            </motion.h2>

            <motion.p
                className="text-textSecondary max-w-[600px] text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                Building scalable, dynamic web applications with end-to-end expertise.
            </motion.p>

            <motion.div
                className="flex gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <a
                    href="https://linkedin.com/in/lakshita-ashwani-b3b038250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-textPrimary hover:text-accent transition-colors"
                >
                    <FaLinkedin size={24} /> <span className="hidden md:inline">LinkedIn</span>
                </a>
                <a
                    href="https://leetcode.com/lakshitaashwani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-textPrimary hover:text-accent transition-colors"
                >
                    <SiLeetcode size={24} /> <span className="hidden md:inline">LeetCode</span>
                </a>
            </motion.div>

            <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <a
                    href="#projects"
                    className="inline-block border border-accent text-accent px-8 py-4 rounded hover:bg-accent/10 transition-colors duration-300 font-mono"
                >
                    Explore My Work
                </a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent text-primary px-8 py-4 rounded hover:bg-accent/80 transition-colors duration-300 font-mono font-bold"
                >
                    Resume
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
