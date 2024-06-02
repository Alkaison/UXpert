import React, { useState } from "react";
import PlansDurationSelector from "../components/PlansDurationSelector";

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

      <div></div>
    </div>
  );
}

export default PricingPlans;
