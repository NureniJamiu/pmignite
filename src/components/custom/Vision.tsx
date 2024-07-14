import { Telescope } from "lucide-react";
import React from "react";
import LinearGradient from "../magicui/linear-gradient";

import VISION_IMAGE from "@/images/vision.svg";
import Image from "next/image";

const Vision = () => {
    return <div className="relative w-full bg-background px-5 md:p-20 md:shadow-xl md:pt-36 md:py-48 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row max-w-6xl mx-auto">
            <div className="md:flex-1">
                <Image
                    src={VISION_IMAGE}
                    alt="Mission Image"
                    width={700}
                    height={600}
                    className="md:absolute -bottom-16 -left-48 transform scale-x-[-1]"
                />
            </div>
            <div className="md:flex-1">
                <div className=" flex items-center gap-2 md:gap-3">
                    <div className="flex items-center justify-center size-6 md:size-8 rounded-full p-1 md:p-1.5 bg-green-300">
                        <Telescope className="text-green-700" />
                    </div>
                    <span className="dark:text-slate-300 text-sm md:text-base">Our vision</span>
                </div>
                <div>
                    <h1 className="dark:text-slate-300 text-4xl md:text-5xl my-3">A peak into the future</h1>
                    <p className=" dark:text-slate-400 max-w-xl md:text-lg">We envision a world where every aspiring project manager has the opportunity to
                        gain practical experience and every organization can access the project management
                        expertise they need to thrive. Through our efforts, we aim to create a sustainable
                        ecosystem of growth, learning, and success for both project managers and
                        organizations worldwide.</p>
                </div>
            </div>

        </div>

        <LinearGradient from="#00000000" to="rgba(120,119,198,0.3)" />
    </div>;
};

export default Vision;
