import React from "react";
import Image from "next/image";

import LOGO from "@/images/logo.png";
import { RedoDot } from "lucide-react";

const Navbar = () => {
    return <div className="sticky left-0 top-2 w-full z-50 px-5">
        <nav className="flex items-center justify-between md:max-w-6xl mx-auto text-white border-gray-700 rounded-xl px-2 md:px-2 border bg-background">
            <div className="relative w-16 h-14 md:w-20 md:h-16">
                <Image
                    src={LOGO}
                    alt="PMIgnite Logo"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <button className="inline-flex gap-2 py-2 md:py-3 animate-shimmer items-center justify-center text-sm md:text-base rounded-lg md:rounded-xl border border-slate-800 bg-background bg-[length:200%_100%] px-6 md:font-medium text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Join waitlist
                <RedoDot className="hidden md:inline-flex" />
            </button>
        </nav>
    </div>;
};

export default Navbar;
