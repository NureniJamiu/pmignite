import { TrendingUp } from "lucide-react";
import React from "react";
import LinearGradient from "../magicui/linear-gradient";

import MISSION_IMAGE from "@/images/mission.svg";
import Image from "next/image";

const Mission = () => {
    return <div className="relative w-full rounded-t bg-background p-5 md:p-20 md:shadow-xl md:pt-28 pb-48 overflow-hidden">
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row max-w-6xl mx-auto">
            <div className="md:flex-1">
                <div className="flex items-center justify-center md:justify-normal gap-3">
                    <div className="hidden md:flex items-center justify-center size-8 rounded-full p-1.5 bg-indigo-300">
                        <TrendingUp className=" text-indigo-700" />
                    </div>
                    <span className="dark:text-slate-300 ">Our mission</span>
                </div>
                <div>
                    <h1 className="text-center md:text-left dark:text-slate-300 text-3xl font-semibold md:font-medium md:text-5xl my-3">What drives us</h1>
                    <p className="dark:text-slate-400 max-w-xl md:text-lg pt-3 md:pt-0">Our mission is to bridge the gap between emerging project management talent and
                        growth-oriented start-ups/companies. By connecting inexperienced project managers
                        with organizations in need of strategic guidance, we aim to foster mutual growth,
                        enhance productivity, and cultivate a new generation of skilled project managers.</p>
                </div>
            </div>
            <div className="md:flex-1">
                <Image
                    src={MISSION_IMAGE}
                    alt="Mission Image"
                    width={700}
                    height={600}
                    className="md:absolute -bottom-36 -right-52"
                />
            </div>
        </div>
        <LinearGradient />
    </div>;
};

export default Mission;
