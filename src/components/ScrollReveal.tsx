"use client"

import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    width?: "fit-content" | "100%";
    mode?: "default" | "blur" | "scale" | "slide-cornor";
}

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    width = "fit-content",
    mode = "default",
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const variants = {
        default: {
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
        },
        blur: {
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
        },
        "slide-cornor": {
            hidden: { opacity: 0, x: -50, y: 50 },
            visible: { opacity: 1, x: 0, y: 0 },
        },
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={variants[mode]}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
