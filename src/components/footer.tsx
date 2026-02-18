export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by <a href="#" className="font-medium underline underline-offset-4">PhotoCuller Team</a>.
                    Copyright &copy; {new Date().getFullYear()}. All rights reserved.
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
