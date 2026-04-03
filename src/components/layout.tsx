import React, { type ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"


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
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200 overflow-x-hidden">
            {/* Background Gradient Blobs */}
            <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-blob mix-blend-multiply filter opacity-50 dark:opacity-20" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-multiply filter opacity-50 dark:opacity-20" />
                <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[128px] animate-blob animation-delay-4000 mix-blend-multiply filter opacity-50 dark:opacity-20" />
            </div>

            <ScrollProgress />
            <Navbar />

            <main className="relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
