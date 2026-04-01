import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/i18n";
import Script from "next/script";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Beni Lema Makiese - Portfolio Étudiant en Économie",
    description: "Portfolio de Beni Lema Makiese, étudiant en Économie et Développement à l'Université Catholique du Congo. Analyse économique, gestion et projets numériques.",
    keywords: ["Beni Lema Makiese", "Portfolio", "Économie", "Développement", "Analyse financière", "Gestion", "Congo", "Kinshasa"],
    authors: [{ name: "Beni Lema Makiese" }],
    creator: "Beni Lema Makiese",
    metadataBase: new URL("https://beni-portfolio.vercel.app"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        alternateLocale: "en_US",
        url: "/",
        siteName: "Beni Lema Makiese - Portfolio",
        title: "Beni Lema Makiese - Étudiant en Économie",
        description: "Portfolio professionnel présentant mon parcours académique et mes expériences en analyse économique et gestion.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Beni Lema Makiese - Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Beni Lema Makiese - Étudiant en Économie",
        description: "Portfolio professionnel - Analyse économique, gestion et projets numériques.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    manifest: "/manifest.json",
    icons: {
        icon: "/favicon.ico",
        apple: "/icon-192.png",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#171717" },
    ],
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <I18nProvider>
                        <SmoothScroll>
                            {children}
                        </SmoothScroll>
                    </I18nProvider>
                </ThemeProvider>
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Beni Lema Makiese",
                            "url": "https://beni-portfolio.vercel.app",
                            "image": "https://beni-portfolio.vercel.app/og-image.png",
                            "sameAs": [
                                "https://www.linkedin.com/in/benimakiese007",
                                "https://wa.me/243990924254"
                            ],
                            "jobTitle": "Étudiant en Économie",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Indépendant"
                            },
                            "description": "Étudiant en économie passionné par l'analyse et la gestion. Portfolio de Beni Lema Makiese."
                        })
                    }}
                />
                <Script
                    id="register-sw"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            if ('serviceWorker' in navigator) {
                                window.addEventListener('load', function() {
                                    navigator.serviceWorker.register('/sw.js');
                                });
                            }
                        `,
                    }}
                />
            </body>
        </html>
    );
}
