import React from "react";
import { operatingSteps } from "../scripts/operatingSteps";
import OperatingStepsCard from "../components/OperatingStepsCard";

function HowWeOperate() {
  return (
    <div className="py-20 px-10 flex flex-col justify-center items-center gap-5">
      <h2 className="text-black font-bold text-4xl capitalize text-center max-w-[1000px]">
        A diverse team of{" "}
        <span className="text-[#FF734F] capitalize">Passionate</span> UX nerds
        who are here to help your{" "}
        <span className="text-[#FF734F] capitalize">startup Succeed</span>
      </h2>

      <p className="text-black text-center max-w-[850px]">
        From ideation to expansion, TDP understands the unique demands of your
        startup—providing you with optimized design strategies and fast
        turnarounds for an affordable monthly subscription.
      </p>

      <div className="mt-10 w-full flex items-start justify-center gap-12">
        {operatingSteps.map((data) => (
          <OperatingStepsCard key={data.title} {...data} />
        ))}
      </div>
    </div>
  );
}

export default HowWeOperate;
