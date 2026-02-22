import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import { contact } from '../data/portfolioData';

interface HeaderProps {
    currentPanel: number;
    scrollToPanel: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPanel, scrollToPanel }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['Hero', 'About', 'Skills', 'Work', 'Contact'];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleMobileNavClick = (idx: number) => {
        scrollToPanel(idx);
        setIsMenuOpen(false);
    };

    return (
        /* Minimal Animated Header */
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    backgroundColor: currentPanel > 0 ? "#4b3839" : "rgba(255, 255, 255, 0)",
                    color: currentPanel > 0 ? "#ffffff" : "#000000",
                    boxShadow: currentPanel > 0 ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between"
            >
                <motion.div
                    layout
                    className="max-w-7xl mx-auto flex items-center justify-between w-full"
                >
                    {/* Logo */}
                    <motion.div
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-2xl font-bold tracking-tighter cursor-pointer z-50 relative"
                        onClick={() => scrollToPanel(0)}
                    >
                        LA.
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.nav
                        layout
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            backgroundColor: currentPanel > 0 ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.8)",
                            borderColor: currentPanel > 0 ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0.05)",
                            boxShadow: currentPanel > 0 ? "none" : "0 10px 15px -3px rgba(0, 0, 0, 0.05)",
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 0.5,
                            layout: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } // Premium fluid easing
                        }}
                        className="hidden md:flex items-center gap-1 backdrop-blur-md rounded-full px-2 py-2 border transition-colors duration-500"
                    >
                        {navItems.map((item, idx) => {
                            const isActive = currentPanel === idx;

                            return (
                                <button
                                    key={idx}
                                    onClick={() => scrollToPanel(idx)}
                                    className="relative px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300"
                                >
                                    <span className={`relative z-10 transition-colors duration-300 ${isActive
                                        ? (currentPanel > 0 ? 'text-black' : 'text-white')
                                        : (currentPanel > 0 ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black')
                                        }`}>
                                        {item}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavBg"
                                            className="absolute inset-0 rounded-full"
                                            initial={false}
                                            animate={{
                                                backgroundColor: currentPanel > 0 ? "#ffffff" : "#000000"
                                            }}
                                            transition={{
                                                layout: { duration: 0.3, ease: "easeInOut" }, // Smooth layout
                                                type: "spring",
                                                stiffness: 140,
                                                damping: 18,
                                                mass: 1,
                                                backgroundColor: { duration: 0.3 }
                                            }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </motion.nav>

                    {/* Social Links (Desktop) */}
                    <AnimatePresence mode='wait'>
                        {currentPanel !== 4 && (
                            <motion.div
                                layout
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10, transition: { duration: 0.3 } }}
                                transition={{ duration: 0.5 }}
                                className="hidden lg:flex items-center gap-4"
                            >
                                <a
                                    href={`https://github.com/${contact.github}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm ${currentPanel > 0
                                        ? 'bg-white/10 text-white hover:bg-white hover:text-black'
                                        : 'bg-white/80 text-black/60 hover:text-black hover:bg-white border border-black/5'
                                        }`}
                                >
                                    <FaGithub size={16} />
                                </a>
                                <a
                                    href={`https://linkedin.com/in/${contact.linkedin}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm ${currentPanel > 0
                                        ? 'bg-white/10 text-white hover:bg-white hover:text-black'
                                        : 'bg-white/80 text-black/60 hover:text-black hover:bg-white border border-black/5'
                                        }`}
                                >
                                    <FaLinkedin size={16} />
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Mobile Menu Button */}
                    <motion.button
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-50 relative ${isMenuOpen
                            ? 'bg-white text-black'
                            : currentPanel > 0
                                ? 'bg-white/10 border-transparent text-white'
                                : 'bg-white/80 border border-black/5 backdrop-blur-md text-black'
                            }`}
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <FaTimes size={18} />
                        ) : (
                            <div className="flex flex-col gap-1.5 items-end">
                                <span className={`w-5 h-0.5 rounded-full ${currentPanel > 0 ? 'bg-white' : 'bg-black'}`}></span>
                                <span className={`w-3 h-0.5 rounded-full ${currentPanel > 0 ? 'bg-white' : 'bg-black'}`}></span>
                            </div>
                        )}
                    </motion.button>
                </motion.div>
            </motion.header>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
                        animate={{ clipPath: "circle(150% at 100% 0%)", opacity: 1 }}
                        exit={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 30, damping: 15 }}
                        className="fixed inset-0 bg-[#4b3839] z-40 flex flex-col items-center justify-center overflow-hidden"
                    >
                        {/* Background Decor */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/20 rounded-full"></div>
                        </div>

                        <nav className="flex flex-col items-start gap-6 md:gap-8 z-10 px-8">
                            {navItems.map((item, idx) => (
                                <motion.button
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * idx + 0.2, duration: 0.5, ease: "easeOut" }}
                                    onClick={() => handleMobileNavClick(idx)}
                                    className="group flex items-baseline gap-4"
                                >
                                    <span className="text-white/20 text-xl md:text-2xl font-mono font-bold group-hover:text-white/40 transition-colors duration-300">
                                        0{idx + 1}
                                    </span>
                                    <span className={`text-5xl md:text-7xl font-black uppercase tracking-tighter transition-all duration-500 ${currentPanel === idx
                                        ? 'text-white translate-x-4'
                                        : 'text-white/40 group-hover:text-white group-hover:translate-x-2'
                                        }`}>
                                        {item}
                                    </span>
                                </motion.button>
                            ))}
                        </nav>

                        {/* Mobile Socials */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex gap-10 mt-16 z-10"
                        >
                            <a
                                href={`https://github.com/${contact.github}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white/30 hover:text-white transition-all hover:scale-125 duration-300"
                            >
                                <FaGithub size={28} />
                            </a>
                            <a
                                href={`https://linkedin.com/in/${contact.linkedin}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white/30 hover:text-white transition-all hover:scale-125 duration-300"
                            >
                                <FaLinkedin size={28} />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
