import { ArrowDown, Apple, Monitor, Zap, Users, Shield } from "lucide-react"
import { useState, useEffect } from "react"
import { detectOS, type OS } from "../utils/os"

export function Hero() {
    const [stats, setStats] = useState<{ total_downloads: number, latest_version: string } | null>(null)
    const [os, setOS] = useState<OS>("win")

    useEffect(() => {
        setOS(detectOS())
        
        fetch('https://snap-culler-proxy.vercel.app/api/stats')
            .then(res => res.json())
            .then(data => {
                if (data && data.total_downloads !== undefined) {
                    setStats(data)
                }
            })
            .catch(err => console.error("Failed to fetch stats", err))
    }, [])

    const displayedDownloads = stats ? stats.total_downloads + 500 : 500
    const versionLabel = stats?.latest_version ? `v${stats.latest_version}` : "v1.1.7"
    
    // Dynamic Download Logic
    const version = stats?.latest_version || "1.1.7"
    const platformName = os === 'mac' ? 'macOS' : 'Windows'
    const fileName = os === 'mac' 
        ? `SnapCuller-${version}.dmg` 
        : `SnapCuller-Setup-${version}.exe`
    const downloadUrl = `https://snap-culler-proxy.vercel.app/${fileName}`
    const PlatformIcon = os === 'mac' ? Apple : Monitor

    return (
        <section className="relative w-full py-16 md:py-32 px-4 flex flex-col items-center justify-center overflow-hidden text-center">
            {/* Version Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6">
                <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                {versionLabel} Released
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground mb-6 leading-tight max-w-4xl">
                Cull Photos at <br />
                <span className="text-primary">Muscle Memory Speed</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed px-2">
                The ultra-lightweight engine to sort thousands of shots instantly. 
                No import lag, ultra-fast viewing, and a workflow that keeps your hands on the keyboard.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-sm sm:max-w-none">
                <a
                    href={downloadUrl}
                    className="flex items-center justify-center h-12 sm:h-14 px-8 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity w-full sm:w-auto min-w-[200px]"
                >
                    <PlatformIcon className="h-5 w-5 mr-3 shrink-0" />
                    Download for {platformName}
                </a>
                <a
                    href="#features"
                    className="flex items-center justify-center h-12 sm:h-14 px-8 rounded-xl bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 transition-colors w-full sm:w-auto"
                >
                    Explore Features
                </a>
            </div>

            {/* Trust Section */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{displayedDownloads.toLocaleString()}+ photogs</span>
                </div>
                <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Local Privacy</span>
                </div>
                <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span>Fast Engine</span>
                </div>
            </div>
        </section>
    )
}
