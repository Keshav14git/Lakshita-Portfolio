import type { ReactNode } from 'react';
import { motion } from 'framer-motion';


interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
}

const Section = ({ id, children, className = '' }: SectionProps) => {
    return (
        <section id={id} className={`min-h-screen flex flex-col justify-center py-20 px-6 md:px-24 max-w-[1200px] mx-auto ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
