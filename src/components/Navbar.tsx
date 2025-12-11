import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex justify-between items-center px-6 md:px-12 max-w-[1400px] mx-auto">
                <a href="#" className="text-accent font-bold text-xl md:text-2xl">
                    &lt;Laksh /&gt;
                </a>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-textPrimary hover:text-accent transition-colors text-sm font-medium"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <span className="text-accent mr-1">0{index + 1}.</span> {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile menu button placeholder - can be expanded */}
                <div className="md:hidden text-accent">
                    {/* Simple hamburger icon could go here */}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
