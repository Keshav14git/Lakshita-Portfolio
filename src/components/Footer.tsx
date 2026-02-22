import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { contact } from '../data/portfolioData';

interface FooterProps {
    show: boolean;
    onScrollTop: () => void;
}

const Footer: React.FC<FooterProps> = ({ show, onScrollTop }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Clean phone number for WhatsApp
    const whatsappNumber = contact.phone.replace(/[^0-9]/g, '');

    const iconClasses = "text-white/40 hover:text-white transition-all hover:scale-110 duration-300";

    return (
        <AnimatePresence>
            {show && (
                <>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        /* MOBILE VIEW MARKER: The classes below ensure a "normal and basic" footer on mobile.
                           Desktop (md:): Fixed md:h-12 and flex-row prevents height shifts on hover. */
                        className="fixed bottom-0 md:bottom-8 left-0 right-0 mx-auto z-50 flex flex-col md:flex-row items-center gap-3 md:gap-5 p-2.5 md:p-1 px-6 bg-black/99 md:bg-black/40 backdrop-blur-lg md:backdrop-blur-md rounded-none md:rounded-full border-t md:border border-white/10 shadow-2xl w-full md:w-fit md:h-12"
                    >
                        {/* Social & Contact Icons */}
                        <div className="flex items-center gap-4 md:gap-5 md:ml-4 h-full">
                            <a
                                href={`https://github.com/${contact.github}`}
                                target="_blank"
                                rel="noreferrer"
                                className={iconClasses}
                                title="GitHub"
                            >
                                <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a
                                href={`https://linkedin.com/in/${contact.linkedin}`}
                                target="_blank"
                                rel="noreferrer"
                                className={iconClasses}
                                title="LinkedIn"
                            >
                                <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a
                                href={`https://leetcode.com/${contact.leetcode}`}
                                target="_blank"
                                rel="noreferrer"
                                className={iconClasses}
                                title="LeetCode"
                            >
                                <SiLeetcode className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a
                                href={`tel:${contact.phone}`}
                                className={iconClasses}
                                title="Call Me"
                            >
                                <FaPhoneAlt className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            </a>
                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#25D366]/60 hover:text-[#25D366] transition-all hover:scale-110 duration-300"
                                title="WhatsApp"
                            >
                                <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                        </div>

                        {/* Separator - Hidden on mobile */}
                        <div className="hidden md:block w-px h-6 bg-white/10 shrink-0"></div>

                        {/* Pill Button - Added fixed md:h-10 and normalized font sizes to prevent height jitter on hover */}
                        <motion.button
                            onClick={onScrollTop}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/5 text-white px-5 md:px-6 py-2 md:py-0 md:h-10 rounded-full flex items-center justify-center min-w-[120px] md:min-w-[160px] transition-all duration-300 group overflow-hidden"
                        >
                            <AnimatePresence mode='wait'>
                                {isHovered ? (
                                    <motion.div
                                        key="backToTop"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest"
                                    >
                                        <span>Upward</span>
                                        <FaArrowUp size={8} className="md:size-3" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="copyright"
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-[8px] md:text-[10px] font-bold tracking-tight md:tracking-wide whitespace-nowrap uppercase opacity-60"
                                    >
                                        &copy; {new Date().getFullYear()} L. Ashwani
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Footer;
