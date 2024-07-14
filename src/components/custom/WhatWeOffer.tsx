import React from "react";
import CompaniesBenefits from "./CompaniesBenefits";
import PmBenefits from "./PmBenefits";
import LinearGradient from "../magicui/linear-gradient";

const WhatWeOffer = () => {
    return <div className="relative border-t">
        <h4 className="text-gray-300 text-center text-base md:text-lg mt-28">What we offer</h4>
        <CompaniesBenefits />
        <PmBenefits />
        <LinearGradient />
    </div>;
};

export default WhatWeOffer;
