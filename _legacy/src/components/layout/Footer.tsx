"use client"
import { useTranslation } from "@/i18n";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="py-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <div className="container px-4 mx-auto">
                <p>&copy; {new Date().getFullYear()} Beni. {t.footer.rights}</p>
                <p className="mt-2 text-xs opacity-50">Designed By PHOENIX</p>
            </div>
        </footer>
    );
}
