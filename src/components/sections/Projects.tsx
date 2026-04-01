"use client"
import { motion } from "framer-motion";
import { Building2, Store, GraduationCap, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";

const icons = [Building2, Store, GraduationCap];
const gradients = [
    "from-primary/20 via-primary/5 to-transparent",
    "from-secondary/20 via-secondary/5 to-transparent",
    "from-primary/20 via-primary/5 to-transparent"
];
const classNames = ["md:col-span-2", "md:col-span-1", "md:col-span-3"];

export function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="py-32">
            <div className="container px-4 mx-auto">
                <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="max-w-2xl">
                        <AnimatedText
                            text={t.projects.title}
                            className="text-4xl md:text-7xl font-black font-heading tracking-tighter mb-8 leading-[0.9]"
                        />
                        <p className="text-muted-foreground text-xl font-light leading-relaxed">
                            {t.projects.subtitle}
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {t.projects.items.map((project, index) => {
                        const Icon = icons[index];
                        return (
                            <ScrollReveal
                                key={index}
                                delay={index * 0.15}
                                width="100%"
                            >
                                <motion.div
                                    whileHover={{ y: -5, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className={cn(
                                        "group relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-700 h-full shadow-lg",
                                        classNames[index]
                                    )}
                                >
                                    {/* Animated gradient mask */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                                        gradients[index]
                                    )} />

                                    <div className="relative p-10 h-full flex flex-col items-start justify-between min-h-[350px]">
                                        <div className="w-full flex justify-between items-start mb-12">
                                            <motion.div
                                                whileHover={{ rotate: 5, scale: 1.1 }}
                                                className="p-4 rounded-2xl bg-background/80 border border-border/50 group-hover:bg-primary/5 transition-all duration-500 ease-out"
                                            >
                                                <Icon className="w-8 h-8 text-primary" />
                                            </motion.div>
                                            <div className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 overflow-hidden">
                                                <ArrowUpRight className="w-6 h-6 group-hover:text-primary-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <div className="flex items-center gap-2 mb-4">
                                                <motion.div
                                                    animate={{ width: [32, 48, 32] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="h-[1px] bg-primary/30"
                                                />
                                                <span className="text-xs font-black tracking-[0.2em] uppercase text-primary/60">
                                                    {project.subtitle}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-bold mb-6 tracking-tight group-hover:text-primary transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed font-light text-lg">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Interaction reveal */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
