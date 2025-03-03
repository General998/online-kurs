import { Icons } from "./Icons";
import { data, NavLink } from "react-router";
import { useState, useEffect, Fragment } from "react";
import { useFetch } from "../hook/useFetch";
function HomeBanner() {
  const [url, setUrl] = useState("http://localhost:3000/headerBanner");
  const { data } = useFetch(url);
  return (
    <div className="flex flex-col justify-between gap-[120px] ">
      <div className="flex justify-between ">
        <div className="flex flex-col  pt-4 gap-6 items-start">
          <div className="flex items-center  ">
            <span className=" bg-bgPrimary w-[52px] h-[52px] flex rounded-full items-center justify-center box-content  border-[16px] border-[#FEC8C1]">
              <Icons.bannerPley />
            </span>
            <p className="lato-bold text-[14px]">Play showreel</p>
          </div>
          <h1 className="lato-black text-[64px] w-[496px]">
            Enjoy studying with Createx Online Courses
          </h1>
          <div className="flex gap-6 mt-10 ">
            <NavLink to="about" className="secondary-btn inline-block">
              about Us
            </NavLink>

            <NavLink to="courses" className="secondary-btn inline-block">
              Explore courses
            </NavLink>
          </div>
        </div>
        <Icons.banner />
      </div>
      <ul className="flex items-center justify-between">
        {data &&
          data.map((event, index) => {
            return (
              <Fragment key={index}>
                {index != 0 && (
                  <li className="inline-block border  w-2 h-2 bg-bgPrimary rounded-full"></li>
                )}
                <li className="flex gap-3 items-center">
                  <span className="lato-black text-[46px]">{event.value}</span>
                  <h3 className="lato-regular">{event.name}</h3>
                </li>
              </Fragment>
            );
          })}
      </ul>
    </div>
  );
}
export default HomeBanner;
