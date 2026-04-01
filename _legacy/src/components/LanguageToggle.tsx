"use client";

import { useTranslation } from "@/i18n";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
    const { locale, setLocale } = useTranslation();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="w-12 px-0 font-medium"
        >
            {locale === "fr" ? "FR" : "EN"}
        </Button>
    );
}
