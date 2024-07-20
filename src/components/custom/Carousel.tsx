import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Card } from "./Teams";
import { StaticImageData } from "next/image";



const Carousell = ({ firstImg, secondImg, thirdImg, fourthImg }: {
    firstImg: StaticImageData,
    secondImg: StaticImageData,
    thirdImg: StaticImageData,
    fourthImg: StaticImageData,
}) => {
    const cards = [
        {
            title: "Nureni Jamiu O.",
            image: firstImg,
            description: "Founder & CTO"
        },
        {
            title: "Fagbemi Ademola Daniel",
            image: secondImg,
            description: "Research Analyst"
        },
        {
            title: "Mustaphar Abdul-Maleeq",
            image: thirdImg,
            description: "Chief Operating Officer (COO)"
        },
        {
            title: "Olajide Jedidiah",
            image: fourthImg,
            description: "Chief Human Resources Officer (CHRO)"
        },
    ]
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                {cards.map((card, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card title={card?.title} description={card?.description} image={card?.image}>
                                <CanvasRevealEffect
                                    animationSpeed={3}
                                    containerClassName="bg-emerald-900"
                                />
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
export default Carousell;