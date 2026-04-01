"use client"
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-32 bg-secondary/5 relative overflow-hidden">
            {/* Background elements - Animated blob */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.03] -skew-x-12 transform origin-top-right -z-10"
            />

            <div className="container px-4 mx-auto text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal className="mb-8">
                        <span className="text-xs font-black tracking-[0.3em] uppercase text-primary/60">
                            {t.about.title}
                        </span>
                    </ScrollReveal>

                    <h2 className="text-2xl md:text-4xl leading-tight font-light text-foreground mb-12">
                        {t.about.intro.split('<highlight>')[0]}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-primary font-medium italic underline decoration-primary/30 underline-offset-8"
                        >
                            {t.about.intro.includes('<highlight>')
                                ? t.about.intro.split('<highlight>')[1]?.split('</highlight>')[0]
                                : ''}
                        </motion.span>
                        {t.about.intro.includes('</highlight>')
                            ? t.about.intro.split('</highlight>')[1]
                            : ''}
                    </h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        viewport={{ once: true }}
                        className="h-[2px] bg-primary/30 mx-auto mb-12 rounded-full"
                    />

                    <AnimatedText
                        text={t.about.description}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-20 max-w-2xl mx-auto"
                        delay={0.3}
                    />

                    {/* Section Formation */}
                    <div className="pt-20 border-t border-border/30">
                        <ScrollReveal delay={0.2}>
                            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground mb-12 flex items-center justify-center gap-4">
                                <span className="w-8 h-[1px] bg-border" />
                                <span className="flex items-center gap-2">{t.about.education}</span>
                                <span className="w-8 h-[1px] bg-border" />
                            </h3>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <ScrollReveal delay={0.3} width="100%">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-xl"
                                >
                                    <div className="w-1 h-full bg-primary/20 absolute left-0 top-0 bottom-0 rounded-full group-hover:bg-primary transition-colors duration-500" />
                                    <p className="text-foreground font-bold text-lg mb-2 group-hover:text-primary transition-colors">{t.about.degree1}</p>
                                    <p className="text-muted-foreground font-light">
                                        {t.about.degree1School}
                                    </p>
                                    <span className="inline-block mt-4 px-3 py-1 bg-primary/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                                        {t.about.degree1Status}
                                    </span>
                                </motion.div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4} width="100%">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden h-full shadow-sm hover:shadow-xl"
                                >
                                    <div className="w-1 h-full bg-secondary/20 absolute left-0 top-0 bottom-0 rounded-full group-hover:bg-secondary transition-colors duration-500" />
                                    <p className="text-foreground font-bold text-lg mb-2 group-hover:text-primary transition-colors">{t.about.degree2}</p>
                                    <p className="text-muted-foreground font-light">
                                        {t.about.degree2School}
                                    </p>
                                    <span className="inline-block mt-4 px-3 py-1 bg-secondary/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-secondary-foreground">
                                        {t.about.degree2Mention}
                                    </span>
                                </motion.div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
