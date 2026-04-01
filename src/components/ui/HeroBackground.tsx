"use client"

import { motion } from "framer-motion";

export const HeroBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Animated Gradients */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -40, 0],
                    y: [0, 60, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 20, 0],
                    y: [0, -40, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] rounded-full bg-primary/5 blur-[130px]"
            />

            {/* Grid Pattern with fade */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
};
