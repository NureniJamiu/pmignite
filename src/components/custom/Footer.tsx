import { Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
    return <div className="bg-background">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4">
            <div className="text-gray-300 text-center">© 2024 PMIgnite. All rights reserved</div>
            <div className="flex items-center justify-between gap-4">
                <Mail size={20} />
                <Twitter size={20} />
                <Linkedin size={20} />
            </div>
        </div>
    </div>;
};

export default Footer;
