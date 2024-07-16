"use client";
import React from "react";

import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import Image from "next/image";

import WAVE_IMAGE from "@/images/wave.svg"


const Header = () => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        <div
            className="dark:bg-background pb-32 md:h-[400vh] w-full relative pt-16 md:pt-20 overflow-clip"
            ref={ref}
        >
            <GoogleGeminiEffect
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]}
            />
            <div className="absolute bottom-0 left-0 md:hidden">
                <Image
                    src={WAVE_IMAGE}
                    width={500}
                    height={500}
                    alt="Wave image"
                />
            </div>
        </div>
    );
}
export default Header;