import React from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="h-[80px] px-16 flex justify-between items-center">
      <div className="h-16 w-16  cursor-pointer">
        <a href="/" className="flex items-center gap-0 font-lobster">
          <img src={logo} alt="UXpert" className="h-16 w-16" />{" "}
          <span className="text-2xl font-bold text-[#F24E1E] tracking-wider">
            UX<span className="text-[#1D1D1D] font-montserrat">pert</span>
          </span>
        </a>
      </div>

      <ul className="flex items-center gap-[36px] text-black font-bold tracking-wide">
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300">
          HOW IT WORKS
        </li>
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300">
          ABOUT
        </li>
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300">
          WORK
        </li>
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300">
          PRICING
        </li>
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300">
          BLOG
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
