import React, { useEffect, useRef } from 'react';

interface InteractiveGridProps {
    colors: string[];
    opacity?: number;
    size?: number; // Added size prop
}

const InteractiveGrid: React.FC<InteractiveGridProps> = ({ colors, opacity = 0.1, size = 1.5 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let dots: Dot[] = [];

        const spacing = 30;
        const mouseRadius = 200;
        const speed = 0.08; // Smoothness factor

        class Dot {
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            color: string;
            size: number;
            baseSize: number;

            constructor(x: number, y: number, color: string) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.color = color;
                this.baseSize = size;
                this.size = size;
            }

            update(mouseX: number, mouseY: number) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = mouseRadius;

                let targetSize = this.baseSize;
                let targetX = this.baseX;
                let targetY = this.baseY;

                if (distance < maxDistance) {
                    // "Rise" Effect: Scale up based on proximity
                    // Closer = Larger
                    const proximity = (maxDistance - distance) / maxDistance;
                    targetSize = this.baseSize + (proximity * 4); // Max rise size reduced to 4

                    // "Magnetic" Effect: Move slightly towards mouse
                    // But constrained to avoid clustering too much
                    const force = proximity * 20; // pull strength
                    const angle = Math.atan2(dy, dx);
                    targetX = this.baseX + Math.cos(angle) * force;
                    targetY = this.baseY + Math.sin(angle) * force;
                }

                // Smooth Animation (Lerp)
                this.size += (targetSize - this.size) * speed;
                this.x += (targetX - this.x) * speed;
                this.y += (targetY - this.y) * speed;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const init = () => {
            dots = [];
            const width = canvas.width;
            const height = canvas.height;

            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    dots.push(new Dot(x, y, color));
                }
            }
        };

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
                init();
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Apply global opacity
            ctx.globalAlpha = opacity;

            dots.forEach(dot => {
                dot.update(mouseRef.current.x, mouseRef.current.y);
                dot.draw(ctx);
            });

            ctx.globalAlpha = 1.0;
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Get mouse position relative to canvas
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        window.addEventListener('resize', resize);
        // We attach mouse events to the parent section or window if needed, 
        // but here attaching to canvas wrapper or passing coords is better.
        // Actually, since the canvas is background, events might be blocked by content.
        // We will add a listener to the window or parent component via refs? 
        // For simplicity, let's look at where it's mounted.
        // If it's `pointer-events-none` (which it usually is for backgrounds), it won't get events.
        // So we need to listen on the window or use the props passed from parent if we want it to react to mouse anywhere in the section.
        // BUT, the parent `Projects` section already tracks mouse!
        // We can just bind to the canvas parent if we remove pointer-events-none from a wrapper, 
        // OR we just use the mouse handler from the parent. 
        // However, self-contained is nice.
        // Let's assume the component will be placed such that we can use a parent listener or global.
        // For "pointer-events-none" background, we must listen to `window` or the parent container.
        // Since `Projects.tsx` has `onMouseMove`, let's rely on that or just add a window listener for simplicity within the component 
        // effectively making it "aware" of mouse if it's over the element's rect.

        // Let's attach to the parent element of the canvas for more confined scope if possible,
        // but since `canvas` might be behind content, we'll need to listen to the section.
        // A simple way is to add the event listener to the `window` but check bounds, 
        // OR simply expect the parent to pass mouse coordinates.
        // Refactoring to accept mousePos prop might be cleaner, but let's stick to self-contained efficient logical.
        // I will add event listeners to the `canvas.parentElement` if accessible, or `window` and check Y offset.
        // Actually, easiest is to just listen to `mousemove` on `window` and check if we are in the viewport of the canvas.

        // BETTER: The user wants it "Safe".
        // Let's add the event listener to the canvas, but make the canvas `pointer-events-auto`? 
        // No, that blocks clicks on projects.
        // So the canvas MUST be `pointer-events-none`.
        // Thus we MUST listen on window or document.

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [colors, opacity]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default InteractiveGrid;
