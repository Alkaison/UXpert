import React from "react";
import Tip from "../components/Tip";
import { faqTips } from "../scripts/tips";

function Tips() {
  return (
    <div className="my-20 bg-[#F6F6F6] flex flex-col items-center justify-center gap-16">
      <h3 className="text-4xl font-bold capitalize">
        How to know if <span className="text-[#FF734F]">TDP</span> is right for
        your <span className="text-[#FF734F]">startup</span>
      </h3>

      <div className="w-[75%] justify-center items-center flex flex-wrap gap-10">
        {faqTips.map((data, index) => (
          <Tip
            key={index}
            position={index + 1}
            tip={data.tip}
            active={data.active}
          />
        ))}
      </div>
    </div>
  );
}

export default Tips;
