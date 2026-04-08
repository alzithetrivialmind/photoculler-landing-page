import React, { type ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { NoiseTexture } from "@/components/noise-texture"
import { CustomCursor } from "@/components/custom-cursor"


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (!target) return;

            const href = target.getAttribute('href');
            if (href?.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    lenis.scrollTo(element as HTMLElement, { offset: 0 });
                }
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            lenis.destroy();
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary dark:selection:text-primary overflow-x-hidden">
            {/* Background Gradient Blobs */}
            <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[140px] animate-blob mix-blend-screen filter opacity-30 dark:opacity-50" />
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[140px] animate-blob animation-delay-2000 mix-blend-screen filter opacity-30 dark:opacity-50" />
                <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-primary/2 dark:bg-primary/5 rounded-full blur-[140px] animate-blob animation-delay-4000 mix-blend-screen filter opacity-20 dark:opacity-50" />
            </div>

            <ScrollProgress />
            <NoiseTexture />
            <CustomCursor />
            <Navbar />

            <main className="relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
