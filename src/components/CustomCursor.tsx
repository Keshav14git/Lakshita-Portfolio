import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        // Robust hover detection using event delegation
        const handleMouseOver = (e: MouseEvent) => {
            let target = e.target as HTMLElement;
            let isHoverable = false;

            // Traverse up to find interactive elements
            for (let i = 0; i < 5; i++) {
                if (!target || target === document.body) break;

                const tagName = target.tagName;
                const role = target.getAttribute('role');
                const hasCursorPointer = window.getComputedStyle(target).cursor === 'pointer';
                const hasClass = target.classList.contains('cursor-pointer');

                if (
                    tagName === 'A' ||
                    tagName === 'BUTTON' ||
                    tagName === 'INPUT' ||
                    tagName === 'TEXTAREA' ||
                    tagName === 'SELECT' ||
                    role === 'button' ||
                    hasClass ||
                    hasCursorPointer
                ) {
                    isHoverable = true;
                    break;
                }

                target = target.parentElement as HTMLElement;
            }

            setIsHovered(isHoverable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver); // Global listener

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            {/* Main Diamond Shape */}
            <motion.div
                animate={{
                    scale: isClicked ? 0.8 : isHovered ? 1.5 : 1,
                    rotate: isHovered ? 45 : 0, // Diamond to Square on hover
                }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center justify-center"
            >
                <div className="w-4 h-4 bg-white transform rotate-45" />

                {/* Outer Ring (Visible on Hover) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1.8 : 0.5,
                        rotate: isHovered ? 90 : 0
                    }}
                    className="absolute inset-0 border border-white transform rotate-45"
                />
            </motion.div>
        </motion.div>
    );
};

export default CustomCursor;
