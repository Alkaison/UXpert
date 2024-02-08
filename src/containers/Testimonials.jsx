import React from "react";
import testimonialImg1 from "../assets/testimonial-img-1.png";
import testimonialImg2 from "../assets/testimonial-img-2.png";
import testimonialImg3 from "../assets/testimonial-img-3.png";
import TestimonialSlider from "../components/TestimonialSlider";

function Testimonials() {
  return (
    <div className="pt-20 pb-12 flex flex-col items-center gap-14 bg-[#292526]">
      <h3 className="max-w-[1000px] capitalize font-bold text-4xl text-white text-center">
        How <span className="text-[#FF734F]">accessible</span> UX design is
        changing the <span className="text-[#FF734F]">businesses</span> for the
        better
      </h3>

      <div className="max-w-[1100px] px-16 flex flex-col gap-10">
        <img
          src={testimonialImg1}
          alt="Product Design UI Sample 1"
          className="w-full"
        />
        <img
          src={testimonialImg2}
          alt="Product Design UI Sample 2"
          className="w-full"
        />
        <img
          src={testimonialImg3}
          alt="Product Design UI Sample 3"
          className="w-full"
        />
      </div>

      <TestimonialSlider />
    </div>
  );
}

export default Testimonials;
