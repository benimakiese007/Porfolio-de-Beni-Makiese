"use client"
import { motion } from "framer-motion";
import { BarChart3, Database, Laptop, Settings } from "lucide-react";
import { useTranslation } from "@/i18n";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const icons = [BarChart3, Database, Laptop, Settings];

export function Skills() {
    const { t } = useTranslation();

    return (
        <section id="skills" className="py-32">
            <div className="container px-4 mx-auto">
                <ScrollReveal className="text-center mb-24 mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter mb-6">
                        {t.skills.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light">
                        {t.skills.subtitle}
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {t.skills.items.map((service, index) => {
                        const Icon = icons[index];
                        return (
                            <ScrollReveal
                                key={index}
                                delay={index * 0.15}
                                width="100%"
                            >
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="relative p-10 rounded-[2.5rem] bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 group overflow-hidden h-full shadow-lg hover:shadow-primary/5"
                                >
                                    {/* Decorative background element */}
                                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

                                    <motion.div
                                        whileHover={{ rotate: 12, scale: 1.1 }}
                                        className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 transition-colors duration-500 ease-out"
                                    >
                                        <Icon className="w-8 h-8" />
                                    </motion.div>

                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed font-light">
                                        {service.description}
                                    </p>

                                    <div className="mt-8 flex items-center text-xs font-bold tracking-widest uppercase text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                        En savoir plus
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="ml-2 w-8 h-[1px] bg-primary"
                                        />
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
