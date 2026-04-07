import { ThemeLogo } from "@/components/theme-logo"

export function Footer() {
    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-2 font-bold text-lg mb-4">
                            <ThemeLogo className="h-6 w-auto" />
                            <span className="tracking-tight">SnapCuller</span>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            The fastest way to review and select your best shots.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-neutral-900 dark:text-white">Product</h4>
                        <ul className="space-y-3 text-sm text-neutral-500 dark:text-neutral-400">
                            <li><a href="/#features" className="hover:text-foreground transition-colors">Features</a></li>
                            <li><a href="/#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                            <li><a href="/#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
                            <li><a href="/docs" className="hover:text-foreground transition-colors">Docs</a></li>
                            <li><a href="/releases" className="hover:text-foreground transition-colors">Releases</a></li>
                            <li><a href="/#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-neutral-900 dark:text-white">Support</h4>
                        <ul className="space-y-3 text-sm text-neutral-500 dark:text-neutral-400">
                            <li><a href="mailto:support@snapculler.com" className="hover:text-foreground transition-colors">Report a Bug</a></li>
                            <li><a href="mailto:support@snapculler.com" className="hover:text-foreground transition-colors">Contact Support</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-neutral-900 dark:text-white">Legal</h4>
                        <ul className="space-y-3 text-sm text-neutral-500 dark:text-neutral-400">
                            <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        &copy; {new Date().getFullYear()} SnapCuller.{" "}
                        <a
                            href="https://www.digisentralsolusi.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            All Rights Reserved — CV Digisentral Solusi
                        </a>
                    </p>
                    <div className="flex items-center gap-4">
                        {/* Social links can be added here in the future */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
