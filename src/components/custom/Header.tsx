"use client";
import React from "react";

import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import Image from "next/image";

import WAVE_IMAGE from "@/images/wave.png"
import { Button } from "../ui/button";
import DialogButton from "./Dialog";


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
            className="dark:bg-background h-[90vh] md:h-[400vh] w-full relative pt-16 md:pt-20 overflow-clip"
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
            <div className="relative mt-10 w-full px-16 z-50 flex flex-col items-center justify-center gap-2 md:hidden text-center">
                {/* <Button type="submit" className="w-full bg-background border text-gray-400 rounded-2xl py-6 shadow-lg">Join waitlist</Button> */}
                <div className="w-full">
                    <DialogButton className="py-6 rounded-2xl" />
                </div>

                <Button type="submit" className="w-full bg-blue-400 shadow-lg rounded-2xl py-6 font-semibold text-white hover:bg-blue-500" disabled>Get started</Button>
            </div>
            <div className="absolute -bottom-1 left-0 md:hidden w-full">
                <Image
                    src={WAVE_IMAGE}
                    width={500}
                    height={500}
                    className="h-52"
                    alt="Wave image"
                />
            </div>
        </div>
    );
}
export default Header;