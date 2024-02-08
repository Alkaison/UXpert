import React from "react";
import personIcon from "../assets/testimonial-person-icon.png";
import leftArrow from "../assets/arrow-left-side.svg";
import rightArrow from "../assets/arrow-right-side.svg";
import startQuote from "../assets/quote-start.svg";
import endQuote from "../assets/quote-end.svg";

function TestimonialSlider() {
  return (
    <div className="max-w-[1000px] flex flex-col items-center justify-center">
      <div className="mb-8 flex items-center justify-center gap-4 relative">
        <img
          src={startQuote}
          alt="Start Quote Mark"
          className="absolute w-[50px] h-[50px] top-[-16px] left-4"
        />
        <img
          src={endQuote}
          alt="End Quote Mark"
          className="absolute w-[50px] h-[50px] bottom-[-24px] right-5"
        />

        <button type="button" className="w-[50px] h-[50px] text-2xl">
          <img src={leftArrow} alt="Left Arrow" className="w-full" />
        </button>

        <p className="max-w-[700px] text-white text-center font-bold text-3xl">
          TDP helped identify the main pain points and designed a new UX that is
          accessible and easy to understand. The redesign pushed us forward on
          our mission to be able to verify 100% of IDs in real-time, and we
          raised over $100M in funding.
        </p>

        <button type="button" className="w-[50px] h-[50px] text-2xl">
          <img src={rightArrow} alt="Right Arrow" className="w-full" />
        </button>
      </div>

      <div className="mb-6 flex items-center text-white gap-4">
        <img src={personIcon} alt="Person Icon" className="w-[50px] h-[50px]" />

        <div>
          <p className="text-[#FF734F] font-bold uppercase text-lg">
            Erick Desoto
          </p>
          <p className="text-sm">VP of Product at Socure</p>
        </div>
      </div>

      <button
        type="button"
        className="h-12 px-8 mt-2 text-white uppercase text-sm font-bold tracking-wider bg-[#F86642] rounded-lg flex items-center hover:bg-[#F6F6F6] hover:text-[#F86642] duration-150 border-2 border-[#F86642] hover:border-[#F86642] active:scale-95 transition-all"
      >
        see our case studies
      </button>
    </div>
  );
}

export default TestimonialSlider;
