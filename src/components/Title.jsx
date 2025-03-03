import { NavLink } from "react-router";
function Title({ primaryTitle, secondaryTitle, btnTitle, link }) {
  return (
    <div className={btnTitle ? "flex justify-between items-center " : " "}>
      <div className={btnTitle ? " " : "flex items-center flex-col gap-2 "}>
        <h6 className="lato-bold uppercase text-<16px>/[24px]">
          {secondaryTitle}
        </h6>
        <h1 className="lato-black text-[46px] leading-[60px]">
          {primaryTitle}
        </h1>
      </div>
      {btnTitle && link && (
        <NavLink to={link} className="secondary-btn inline">
          <p>{btnTitle}</p>
        </NavLink>
      )}
    </div>
  );
}
export default Title;
