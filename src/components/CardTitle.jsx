import { Fragment } from "react";
import "../style/cardTitle.scss";
function CardTitle({ title, titleValue, context }) {
  return (
    <div className="">
      <p className="text-[#1E212C] lato-bold uppercase text-sm mb-1">{title}</p>
      <h4 className="text-[#FF3F3A] lato-bold text-2xl">{titleValue}</h4>
      <p className="text-[#787A80]  text-sm mt-2">{context}</p>
    </div>
  );
}

export default CardTitle;
