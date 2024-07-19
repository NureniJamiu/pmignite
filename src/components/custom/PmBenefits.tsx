import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Blocks, LayoutList, Network, Rocket } from "lucide-react";
import LinearGradient from "../magicui/linear-gradient";

const items = [
    {
        title: "Real-world projects",
        description: "Access to skilled project managers who volunteer their expertise to help streamline your projects and improve operational efficiency.",
        className: "md:col-span-2",
        icon: <div className="flex items-center justify-center size-8 rounded-full bg-blue-400">
            <LayoutList className="text-blue-800 h-4 w-4" />
        </div>,
    },
    {
        title: "Professional growth",
        description: "Tailored project management solutions to meet your specific business needs, ensuring optimal results.",
        className: "md:col-span-1",
        icon: <div className="flex items-center justify-center size-8 rounded-full bg-green-400"><Rocket className="h-4 w-4 text-green-800" /></div>,
    },
    {
        title: "Networking opportunities",
        description: "Our project managers focus on enhancing your workflow, leading to better time management and increased productivity.",
        className: "md:col-span-1",
        icon: <div className="flex items-center justify-center size-8 rounded-full bg-pink-400"><Network className="h-4 w-4 text-pink-800" /></div>,
    },
    {
        title: "Skill development",
        description:
            "With dedicated support, you can focus on your core business activities while we help you achieve your project goals.",
        className: "md:col-span-2",
        icon: <div className="flex items-center justify-center size-8 rounded-full bg-purple-400"><Blocks className="h-4 w-4 text-purple-800" /></div>,
    },
];

const PmBenefits = () => {
    return <div className="relative md:py-28 border-t py-10 md:border-none">
        <div className="max-w-6xl mx-auto px-5">
            <h4 className=" text-gray-300 text-center text-base md:text-lg md:pb-2 ">What we promise</h4>
            <h1 className="text-3xl md:text-4xl text-center py-1 md:py-2">Our Project Managers</h1>
            <BentoGrid className=" mt-10">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        className={`flex items-center justify-center dark:bg-background ${item.className}`}
                    />
                ))}
            </BentoGrid>
        </div>
        <LinearGradient from="#00000000" to="rgba(120,119,198,0.3)" />
    </div>;
};

export default PmBenefits;
