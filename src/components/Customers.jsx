import React from "react";
import brandA16z from "../assets/brand-a16z.svg";
import brandAccel from "../assets/brand-accel.svg";
import brandSequioia from "../assets/brand-sequioia.svg";
import brandYCombinator from "../assets/brand-y_combinator.svg";

function Customers() {
  return (
    <div className="h-[350px] flex items-center justify-center flex-col gap-[50px] bg-[#292526]">
      <h2 className="text-white text-[36px] font-bold">
        We helped our customers raise{" "}
        <span className="text-[#FF734F]">$1B+</span>
      </h2>

      <div className="flex items-center gap-3">
        <img
          src={brandYCombinator}
          alt="Brand A16z Logo"
          className="w-[250px] h-[100px]"
        />

        <div className="w-[1px] h-[60px] bg-[#FF734F]"></div>

        <img
          src={brandSequioia}
          alt="Brand A16z Logo"
          className="w-[250px] h-[100px]"
        />

        <div className="w-[1px] h-[60px] bg-[#FF734F]"></div>

        <img
          src={brandAccel}
          alt="Brand A16z Logo"
          className="w-[250px] h-[100px]"
        />

        <div className="w-[1px] h-[60px] bg-[#FF734F]"></div>

        <img
          src={brandA16z}
          alt="Brand A16z Logo"
          className="w-[250px] h-[100px]"
        />
      </div>
    </div>
  );
}

export default Customers;
