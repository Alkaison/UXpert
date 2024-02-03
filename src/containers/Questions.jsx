import React from "react";
import Question from "../components/Question";
import { faqQuestions } from "../scripts/questions";

function Questions() {
  return (
    <div className="my-20 bg-[#F6F6F6] flex flex-col items-center justify-center gap-16">
      <h3 className="text-4xl font-bold capitalize">
        Our most <span className="text-[#FF734F]">frequently</span> asked
        questions
      </h3>

      <div className="w-[75%] flex flex-col gap-10">
        {faqQuestions.map((faq) => (
          <Question question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default Questions;
