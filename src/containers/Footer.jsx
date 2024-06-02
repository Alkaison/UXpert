import React from "react";
import emailIcon from "../assets/email-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";

function Footer() {
  return (
    <div className="flex justify-center bg-[#1D1D1D] text-white">
      <div className="h-[400px] max-w-[1280px] px-6 w-full flex justify-around items-center">
        <div className="flex flex-col gap-12">
          <h3 className="font-lobster font-bold text-5xl">
            the design project
          </h3>

          <div className="flex gap-6">
            <div className="flex gap-4 items-center cursor-pointer">
              <img src={emailIcon} alt="Email Icon" />{" "}
              <span className="border-[#1D1D1D] hover:text-[#FF734F] border-b hover:border-[#FF734F] transition-all">
                hello@designproject
              </span>
            </div>

            <div className="flex gap-4 items-center cursor-pointer">
              <img src={instagramIcon} alt="Instagram Icon" />{" "}
              <span className="border-[#1D1D1D] hover:text-[#FF734F] border-b hover:border-[#FF734F] transition-all">
                @designproject
              </span>
            </div>

            <div className="flex gap-4 items-center cursor-pointer">
              <img src={linkedinIcon} alt="LinkedIn Icon" />{" "}
              <span className="border-[#1D1D1D] hover:text-[#FF734F] border-b hover:border-[#FF734F] transition-all">
                The Design Project
              </span>
            </div>
          </div>
        </div>

        <div>
          <ul className="text-right flex gap-4 flex-col">
            <li className="hover:text-[#FF734F] cursor-pointer transition-all uppercase font-bold">
              <a href="#operations">HOW IT WORKS</a>
            </li>
            <li className="hover:text-[#FF734F] cursor-pointer transition-all uppercase font-bold">
              <a href="#about">ABOUT US</a>
            </li>
            <li className="hover:text-[#FF734F] cursor-pointer transition-all uppercase font-bold">
              <a href="#work">OUR WORK</a>
            </li>
            <li className="hover:text-[#FF734F] cursor-pointer transition-all uppercase font-bold">
              <a href="#pricing">PRICING</a>
            </li>
            <li className="hover:text-[#FF734F] cursor-pointer transition-all uppercase font-bold">
              <a href="#faq">FAQ's</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
