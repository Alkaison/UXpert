import React from "react";
import Navbar from "../components/Navbar";
import HeroContent from "../components/HeroContent";
import Customers from "../components/Customers";

function Hero() {
  return (
    <div className="bg-[#E0EAF3]">
      <Navbar />
      <HeroContent />
      <Customers />
    </div>
  );
}

export default Hero;
