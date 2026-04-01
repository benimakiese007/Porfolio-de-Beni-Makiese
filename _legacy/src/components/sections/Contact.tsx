"use client"
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
    const { t } = useTranslation();

    const contactLinks = [
        {
            href: "mailto:benimakiese1234@gmail.com",
            icon: Mail,
            label: t.contact.email,
            color: "bg-primary/10 text-primary"
        },
        {
            href: "tel:+243990924254",
            icon: Phone,
            label: t.contact.phone,
            color: "bg-primary/10 text-primary"
        },
        {
            href: "https://www.linkedin.com/in/benimakiese007",
            icon: Linkedin,
            label: t.contact.linkedin,
            color: "bg-primary/10 text-primary",
            external: true
        }
    ];

    return (
        <section id="contact" className="py-48 relative overflow-hidden">
            {/* Premium Decorative background */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10"
            />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container px-4 mx-auto text-center">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal>
                        <AnimatedText
                            text={t.contact.title}
                            className="text-5xl md:text-8xl font-black font-heading mb-10 tracking-tighter leading-[0.9]"
                        />
                    </ScrollReveal>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-20 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        {t.contact.subtitle}
                    </motion.p>

                    <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {contactLinks.map((link, index) => (
                            <ScrollReveal
                                key={index}
                                delay={0.5 + index * 0.15}
                                width="100%"
                            >
                                <MagneticButton className="h-full">
                                    <a
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        className="group h-full flex flex-col items-center justify-center p-10 rounded-[2.5rem] bg-background/50 border border-border/50 hover:border-primary transition-all duration-500 shadow-xl shadow-transparent hover:shadow-primary/5"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 12 }}
                                            className={`p-5 rounded-2xl ${link.color} mb-6 transition-all duration-500 ease-out`}
                                        >
                                            <link.icon className="h-8 w-8" />
                                        </motion.div>
                                        <span className="text-lg font-bold group-hover:text-primary transition-colors duration-300 mb-4 block">
                                            {link.label}
                                        </span>
                                        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                            <ArrowRight className="h-5 w-5 opacity-40 group-hover:opacity-100 group-hover:text-primary-foreground group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                    </a>
                                </MagneticButton>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>
    );
}
