import React from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div
      className="h-[80px] flex justify-between items-center"
      role="navigation"
    >
      <div className="h-16 cursor-pointer">
        <a href="/" className="flex items-center gap-0 font-lobster">
          <img src={logo} alt="UXpert" className="h-16 w-16" />{" "}
          <span className="text-2xl font-bold text-[#F24E1E] tracking-wider">
            UX<span className="text-[#1D1D1D] font-montserrat">pert</span>
          </span>
        </a>
      </div>

      <ul className="flex items-center gap-[36px] text-black font-bold tracking-wide">
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300">
          <a href="#operations">HOW IT WORKS</a>
        </li>
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300">
          <a href="#about">ABOUT</a>
        </li>
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300">
          <a href="#work">WORK</a>
        </li>
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300">
          <a href="#pricing">PRICING</a>
        </li>
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300">
          <a href="#faq">FAQ&apos;s</a>
        </li>
      </ul>

      <button
        type="button"
        className="h-11 px-6 text-white font-bold tracking-wider bg-[#F86642] rounded-lg flex items-center hover:bg-[#F6F6F6] hover:text-[#F86642] duration-150 border-2 border-[#E0EAF3] hover:border-[#F86642] active:scale-95 transition-all"
      >
        GET STARTED
      </button>
    </div>
  );
}

export default Navbar;
