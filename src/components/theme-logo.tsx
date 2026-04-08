// ThemeLogo component for SnapCuller branding

interface ThemeLogoProps {
    className?: string
    alt?: string
}

export function ThemeLogo({ className = "h-8 w-auto", alt = "SnapCuller Logo" }: ThemeLogoProps) {
    // Since the SVG uses the brand gradient, it works beautifully across all themes

    return (
        <img
            src="/logo-resmi.svg"
            alt={alt}
            className={className}
        />
    )
}
