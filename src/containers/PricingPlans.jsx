import React, { useState } from "react";
import { plansDetails } from "../scripts/planDetails";
import PlansDurationSelector from "../components/PlansDurationSelector";
import PlanCard from "../components/PlanCard";

// Percent of Discount
const discountRate = {
  monthly: 0,
  quarterly: 10,
  yearly: 15,
};

function PricingPlans() {
  const [currentPlanDuration, setCurrentPlanDuration] = useState("monthly");

  const handleCurrentPlanDurationUpdate = (value) => {
    setCurrentPlanDuration(value);
  };

  return (
    <div className="p-10 flex flex-col justify-start items-center gap-5">
      <PlansDurationSelector
        currentPlanDuration={currentPlanDuration}
        handleCurrentPlanDurationUpdate={handleCurrentPlanDurationUpdate}
      />

      {/* Plans Container */}
      <div className="flex gap-10 flex-wrap">
        {plansDetails.map((data) => (
          <PlanCard
            key={data.planName}
            {...data}
            discountRate={discountRate[currentPlanDuration]}
          />
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;
