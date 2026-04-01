"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

type TextRevealProps = {
    children: string;
    className?: string;
    delay?: number;
    duration?: number;
    type?: "chars" | "words";
};

export const TextReveal = ({
    children,
    className,
    delay = 0,
    duration = 0.5,
    type = "words",
}: TextRevealProps) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: type === "chars" ? 0.03 : 0.1,
                delayChildren: delay,
            },
        },
    };

    const childVariants: Record<string, Variant> = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration,
            },
        },
    };

    if (type === "chars") {
        return (
            <motion.span
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className={className}
            >
                {children.split("").map((char, index) => (
                    <motion.span key={index} variants={childVariants} className="inline-block">
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.span>
        );
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className={className}
        >
            {children.split(" ").map((word, index) => (
                <motion.span
                    key={index}
                    variants={childVariants}
                    className="inline-block mr-[0.2em]"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};
