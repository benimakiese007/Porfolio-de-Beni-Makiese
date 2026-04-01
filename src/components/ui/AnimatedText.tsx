"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
    text: string;
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    once?: boolean;
    repeatDelay?: number;
    delay?: number;
    animation?: {
        hidden: any;
        visible: any;
    };
}

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
        },
    },
};

export const AnimatedText = ({
    text,
    el: Wrapper = "p",
    className,
    once,
    repeatDelay,
    delay,
    animation = defaultAnimations,
}: AnimatedTextProps) => {
    const controls = useRef(null);
    const isInView = useInView(controls, { once: once ?? true, amount: 0.5 });

    return (
        <Wrapper className={className}>
            <span className="sr-only">{text}</span>
            <motion.span
                ref={controls}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ staggerChildren: 0.05, delayChildren: delay ?? 0.3 }}
                aria-hidden
            >
                {text.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block whitespace-nowrap">
                        {word.split("").map((char, charIndex) => (
                            <motion.span
                                key={charIndex}
                                variants={animation}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                        <span className="inline-block">&nbsp;</span>
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
};
