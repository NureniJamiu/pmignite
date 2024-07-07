import React from "react";
import CompaniesBenefits from "./CompaniesBenefits";
import PmBenefits from "./PmBenefits";

const WhatWeOffer = () => {
    return <div className="border-t border-slate-400">
        <h4 className="text-gray-300 text-center text-lg mt-28">What we offer</h4>
        <CompaniesBenefits />
        <PmBenefits />
    </div>;
};

export default WhatWeOffer;
