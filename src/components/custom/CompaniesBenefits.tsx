import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Clipboard, Columns, File, Signal, Waves } from "lucide-react";

const items = [
    {
        title: "Expertise at no cost",
        description: "Access to skilled project managers who volunteer their expertise to help streamline your projects and improve operational efficiency.",
        icon: <div className="flex items-center justify-center size-8 rounded-full bg-blue-400">
            <Clipboard className="text-blue-800 h-4 w-4" />
        </div>,
    },
    {
        title: "Customized support",
        description: "Tailored project management solutions to meet your specific business needs, ensuring optimal results.",
        icon: <div className="flex items-center justify-center size-8 rounded-full bg-green-400">
            <File className="text-green-800 h-4 w-4" />
        </div>,
    },
    {
        title: "Increased productivity",
        description: "Our project managers focus on enhancing your workflow, leading to better time management and increased productivity.",
        icon: <div className="flex items-center justify-center size-8 rounded-full bg-pink-400">
            <Signal className="text-pink-800 h-4 w-4" />
        </div>,
    },
    {
        title: "Goal achievement",
        description:
            "With dedicated support, you can focus on your core business activities while we help you achieve your project goals.",
        icon: <div className="flex items-center justify-center size-8 rounded-full bg-purple-400">
            <Columns className="text-purple-800 h-4 w-4" />
        </div>,
    },
    {
        title: "Fresh perspective",
        description: "Benefit from the innovative ideas and fresh perspectives that emerging project managers bring to the table.",
        icon: <div className="flex items-center justify-center size-8 rounded-full bg-yellow-400">
            <Waves className="text-yellow-800 h-4 w-4" />
        </div>,
    },
];

const CompaniesBenefits = () => {
    return <div className="pb-28 max-w-6xl mx-auto">
        <h1 className="text-4xl text-center py-2">Our Partner Companies</h1>
        <BentoGrid className=" mt-10">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    className={`flex items-center justify-center ${i === 3 ? "md:col-span-2" : ""}`}
                />
            ))}
        </BentoGrid>
    </div>;
};

export default CompaniesBenefits;
