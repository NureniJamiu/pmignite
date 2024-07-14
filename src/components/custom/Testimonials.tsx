import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Rachel Lee",
        username: "Project manager",
        body: "PMIgnite provided me the opportunity to not only hone my skills but also gain valuable industry insight.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "David Kim",
        username: "Project manager",
        body: "I was impressed by PMIgnite's ability to understand my career aspirations and connect me with a company that aligns with my goals.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John Snow",
        username: "CEO, TechCorp",
        body: "We hired a PM through PMIgnite to lead our software development project and I can't over-emphasize how game changing that turned out for us.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane Koslov",
        username: "Director, GreenEarth Inc.",
        body: "We highly recommend PMIgnite for their top-notch project management talents. In just 2 months, we recorded a 20% increase in sales.",
        img: "https://avatar.vercel.sh/jane",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const TestimonialCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const Testimonials = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl py-28">
            <div className="mb-8">
                <h4 className=" text-gray-300 text-center md:text-lg ">Testimonials</h4>
                <h1 className="text-4xl text-center py-2">What people say about us</h1>
            </div>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <TestimonialCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <TestimonialCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
export default Testimonials;