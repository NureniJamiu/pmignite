import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return <div className="py-10 md:py-28 px-5">
        <div className="max-w-6xl mx-auto md:px-32">
            <div className="text-center mb-10">
                <span className="">Got questions?</span>
                <h1 className="dark:text-slate-300 text-4xl md:font-medium md:text-5xl my-3">Frequently asked questions</h1>
            </div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is PMIgnite?</AccordionTrigger>
                    <AccordionContent>
                        PMIgnite is a non-profit organization that connects emerging project managers with startups and companies in need of project management support, at no cost.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How can my company benefit from PMIgnite's services?</AccordionTrigger>
                    <AccordionContent>
                        Your company can gain access to skilled project managers who volunteer their expertise to help streamline your projects, enhance productivity, and achieve your business goals.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How do I get started as a project manager with PMIgnite?</AccordionTrigger>
                    <AccordionContent>
                        Simply sign up on our website, create your profile, and we'll match you with a company that aligns with your skills and aspirations.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Is there a cost associated with PMIgnite's services?</AccordionTrigger>
                    <AccordionContent>
                        No, PMIgnite provides project management support to companies free of charge. Our goal is to foster mutual growth and success.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>How does PMIgnite match project managers with companies?</AccordionTrigger>
                    <AccordionContent>
                        We carefully review the profiles and needs of both project managers and companies to create optimal matches that benefit both parties.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>What types of projects can project managers expect to work on?</AccordionTrigger>
                    <AccordionContent>
                        Project managers can work on a variety of projects, including product development, marketing campaigns, operational improvements, and more, depending on the company's needs.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>;
};

export default Faq;
