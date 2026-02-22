import React, { createContext, useContext, useEffect, useRef, useState, useLayoutEffect, type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface ScrollContextType {
    scrollToPanel: (index: number) => void;
    currentPanel: number;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a Layout component');
    }
    return context;
};

interface LayoutProps {
    children: ReactNode;
}

import CustomCursor from './CustomCursor';

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentPanel, setCurrentPanel] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // Force scroll to top on refresh - LayoutEffect runs synchronously before paint
    useLayoutEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        const container = containerRef.current;
        if (container) {
            container.scrollTop = 0;
        }

        window.scrollTo(0, 0);

        // Small delay to ensure scroll reset happens before reveal
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    const isScrollingRef = useRef(false);

    // Track current section based on scroll position
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (isScrollingRef.current) return;

            const sections = container.children;
            const scrollTop = container.scrollTop;

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i] as HTMLElement;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollTop >= sectionTop - sectionHeight / 3 && scrollTop < sectionTop + sectionHeight - sectionHeight / 3) {
                    setCurrentPanel(i);
                    break;
                }
            }
        };

        container.addEventListener('scroll', handleScroll);

        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToPanel = (index: number) => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const sections = container.children;

        if (sections[index]) {
            isScrollingRef.current = true;
            setCurrentPanel(index); // Immediate update
            sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Re-enable scroll listener after animation
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 1000);
        }
    };

    return (
        <ScrollContext.Provider value={{ scrollToPanel, currentPanel }}>
            <div className="relative h-screen overflow-hidden bg-white text-black">
                <CustomCursor />
                <Header currentPanel={currentPanel} scrollToPanel={scrollToPanel} />

                {/* Main Container - Vertical Scroll */}
                <div
                    ref={containerRef}
                    className={`h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar transition-opacity duration-500 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                >
                    {children}
                </div>

                <Footer show={currentPanel === 4} onScrollTop={() => scrollToPanel(0)} />

                {/* CSS for hiding scrollbar */}
                <style>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>
        </ScrollContext.Provider>
    );
};

export default Layout;
