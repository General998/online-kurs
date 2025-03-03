import { Fragment } from "react";
import "../style/cardTitle.scss";
function CardTitle({ children }) {
  return <div className="title-text-content">{children}</div>;
}

export default CardTitle;
