import React from "react";
import Navbar from "../components/Navbar";
import HeroContent from "../components/HeroContent";
import Customers from "../components/Customers";

function Hero() {
  return (
    <>
      <div className="bg-[#E0EAF3] flex justify-center">
        <div className="max-w-[1280px] w-full px-6">
          <Navbar />
          <HeroContent />
        </div>
      </div>

      <Customers />
    </>
  );
}

export default Hero;
