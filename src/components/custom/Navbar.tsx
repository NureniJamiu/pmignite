import React from "react";
import Image from "next/image";

import LOGO from "@/images/logo.png";
import { MenuIcon, RedoDot } from "lucide-react";
import DialogButton from "./Dialog";
import SheetButton from "./SheetButton";

const Navbar = () => {
    return <div className="sticky left-0 top-2 w-full z-50 px-5">
        <nav className="flex items-center justify-between md:max-w-6xl mx-auto text-white border-gray-700 rounded-xl px-2 md:px-2 border bg-background">
            <div className="relative w-16 h-14 md:w-20 md:h-16 cursor-pointer">
                <Image
                    src={LOGO}
                    alt="PMIgnite Logo"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className="hidden md:inline-flex">
                <DialogButton />
            </div>
            <div className="md:hidden size-10 border p-2 rounded-lg cursor-pointer">
                <SheetButton />
            </div>
        </nav>
    </div>;
};

export default Navbar;
