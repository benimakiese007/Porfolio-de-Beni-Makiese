"use client"

import { Download, ArrowDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { useRef } from "react";

export function Hero() {
    const { t } = useTranslation();
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            <HeroBackground />

            <div className="container px-4 z-10">
                <div className="max-w-[90rem] mx-auto text-center">
                    <h1 className="text-[10vw] md:text-[11rem] leading-[0.85] font-black font-heading tracking-tighter mb-8 select-none">
                        <AnimatedText
                            text="BENI"
                            className="block text-foreground"
                        />
                        <AnimatedText
                            text="LEMA MAKIESE"
                            className="block text-foreground"
                            delay={0.2}
                        />
                    </h1>

                    <div className="mb-12">
                        <AnimatedText
                            text={t.hero.subtitle}
                            className="text-xl md:text-3xl font-light tracking-widest text-primary uppercase"
                            delay={0.5}
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        {t.hero.description}
                    </motion.p>

                    <StaggerContainer delay={1} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <MagneticButton>
                            <a
                                href="#about"
                                className={buttonVariants({ size: "lg", className: "rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20" })}
                            >
                                {t.hero.cta}
                                <ArrowDown className="ml-2 h-4 w-4" />
                            </a>
                        </MagneticButton>

                        <MagneticButton>
                            <a
                                href="/cv-beni.pdf"
                                download
                                className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-8 h-12 text-base group" })}
                            >
                                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                                {t.hero.downloadCv}
                            </a>
                        </MagneticButton>
                    </StaggerContainer>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
                />
            </motion.div>
        </section>
    );
}
