import React from "react";
import Question from "../components/Question";
import { faqQuestions } from "../scripts/questions";

function Questions() {
  return (
    <div className="my-20 bg-[#F6F6F6] flex justify-center" id="faq">
      <div className="w-full max-w-[1280px] px-6 flex flex-col items-center justify-center gap-16">
        <h3 className="mt-12 text-4xl font-bold capitalize">
          Our most <span className="text-[#FF734F]">frequently</span> asked
          questions
        </h3>

        <div className="w-[75%] flex flex-col gap-10">
          {faqQuestions.map((faq, index) => (
            <Question key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
