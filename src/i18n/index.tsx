"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import fr from './locales/fr.json';
import en from './locales/en.json';

type Locale = 'fr' | 'en';
type Translations = typeof fr;

interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Translations;
}

const translations: Record<Locale, Translations> = { fr, en };

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('fr');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedLocale = localStorage.getItem('locale') as Locale;
        if (savedLocale && (savedLocale === 'fr' || savedLocale === 'en')) {
            setLocaleState(savedLocale);
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('locale', newLocale);
        document.documentElement.lang = newLocale;
    };

    const value: I18nContextType = {
        locale,
        setLocale,
        t: translations[locale]
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <I18nContext.Provider value={{ locale: 'fr', setLocale: () => { }, t: fr }}>
                {children}
            </I18nContext.Provider>
        );
    }

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within an I18nProvider');
    }
    return context;
}
