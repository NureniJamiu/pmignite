import React from "react";
import Image from "next/image";

import LOGO from "@/images/logo.png";
import { Milestone, RedoDot } from "lucide-react";

const Navbar = () => {
    return <div className="absolute left-0 top-5 w-full z-50">
        <nav className="flex items-center justify-between max-w-6xl mx-auto text-white  border-gray-700 rounded-xl px-12  ">
            <Image
                src={LOGO}
                alt="PMIgnite Logo"
                width={90}
                height={60}
            />
            <button className="inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-background bg-[length:200%_100%] px-6 font-medium text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Join waitlist
                <RedoDot />
            </button>
        </nav>
    </div>;
};

export default Navbar;
