import React from "react";

function Tip({ tip, active, position }) {
  return (
    <div
      className={`w-[450px] h-[120px] text-white font-bold tracking-wider pl-7 pr-9 py-5 rounded-[32px] ${
        position % 2 === 0 ? "rounded-br-[0]" : "rounded-bl-[0]"
      }`}
      style={{ backgroundColor: active ? "#FF734F" : "#000000" }}
    >
      {tip}
    </div>
  );
}

export default Tip;
