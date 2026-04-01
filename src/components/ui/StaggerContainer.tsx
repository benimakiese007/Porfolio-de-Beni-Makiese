"use client"

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    staggerChildren?: number;
    once?: boolean;
}

export const StaggerContainer = ({
    children,
    className = "",
    delay = 0,
    staggerChildren = 0.1,
    once = true,
}: StaggerContainerProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.2 });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delay,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className={className}
        >
            {/* 
        This expects children to be motion elements or components that handle variants.
        However, for simplicity, we can wrap each child if they aren't motion components.
      */}
            {Array.isArray(children) ? (
                children.map((child, i) => (
                    <motion.div key={i} variants={item}>
                        {child}
                    </motion.div>
                ))
            ) : (
                <motion.div variants={item}>{children}</motion.div>
            )}
        </motion.div>
    );
};
