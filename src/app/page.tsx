import Header from "@/components/custom/Header";
import Mission from "@/components/custom/Mission";
import Navbar from "@/components/custom/Navbar";
import Testimonials from "@/components/custom/Testimonials";
import Vision from "@/components/custom/Vision";
import WhatWeOffer from "@/components/custom/WhatWeOffer";

export default function Home() {
  return (
    <main className="relative bg-background w-full">
      <Navbar />
      <Header />
      <Mission />
      <Vision />
      <WhatWeOffer />
      <Testimonials />
    </main>
  );
}
