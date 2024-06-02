import React from "react";
import Tip from "../components/Tip";
import { faqTips } from "../scripts/tips";

function Tips() {
  return (
    <div className="bg-[#F6F6F6] flex justify-center">
      <div className="my-20 px-6 w-full max-w-[1280px] flex flex-col items-center justify-center gap-16">
        <h3 className="text-4xl font-bold capitalize">
          How to know if <span className="text-[#FF734F]">TDP</span> is right
          for your <span className="text-[#FF734F]">startup</span>
        </h3>

        <div className="w-full justify-center items-center flex flex-wrap gap-6">
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
    </div>
  );
}

export default Tips;
