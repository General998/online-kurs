import { useState } from "react";
function CoursesCard({ card }) {
  function colors(type) {
    if (type == "Management") {
      return "bg-[#5A87FC]";
    } else if (type == "Marketing") {
      return "bg-[#03CEA4]";
    } else if (type == "HR & Recruting") {
      return "bg-[#F89828]";
    } else {
      return "bg-[#F52F6E]";
    }
  }

  return (
    <div className="flex shadow-xl hover:shadow-2xl ">
      <img className="shrink-0 w-[214px] h-[214px]" src={card.link} alt="" />
      <div className="flex flex-col p-8 gap-2 items-start">
        <p
          className={
            "lato-regular text-sm  text-white py-[1px] px-[8px] rounded " +
            colors(card.type)
          }
        >
          {card.type}
        </p>
        <h5 className="lato-bold text-xl">{card.direction}</h5>
        <p className="lato-black text-lg text-bgPrimary">
          {card.value}
          <span className="text-regular lato-regular text-[#787A80]">
            {" | " + card.lastName}
          </span>
        </p>
      </div>
    </div>
  );
}
export default CoursesCard;
