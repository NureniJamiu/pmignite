"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import LinearGradient from "../magicui/linear-gradient";
import Image, { StaticImageData } from "next/image";

import TEAM_ONE from "@/images/penocrat.jpg";
import TEAM_TWO from "@/images/demola.jpg";
import TEAM_THREE from "@/images/maleeq.jpg";

const Teams = () => {
    return (
        <div className="relative w-full rounded-t bg-background md:p-20 md:shadow-xl md:pt-28 md:pb-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-5">
                <div className="text-center">
                    <span className="md:text-xl">Our Team</span>
                    <h1 className="dark:text-slate-300 text-4xl md:text-5xl my-1 md:my-3">Meet our Team</h1>
                </div>

                <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 md:px-8">
                    <Card title="Nureni Jamiu O." image={TEAM_ONE}>
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-emerald-900"
                        />
                    </Card>
                    <Card title="Fagbemi Ademola" image={TEAM_TWO}>
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-indigo-600"
                        />
                        {/* Radial gradient for the cute fade */}
                        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                    </Card>
                    <Card title="Mustaphar Abdul-Maleeq" image={TEAM_THREE}>
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-sky-600"
                            colors={[[125, 211, 252]]}
                        />
                    </Card>
                </div>
            </div>
            <LinearGradient />
        </div>
    );
}

const Card = ({
    title,
    image,
    children,
}: {
    title: string;
    image: StaticImageData;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative w-full h-full z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
                    <Image src={image} alt="Team image" layout="fill"
                        objectFit="cover" />
                </div>
                <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
export default Teams;