import { useState, useEffect } from "react";
import { Title } from "./index";
import { Icons } from "./Icons.jsx";
import { NavLink } from "react-router";
import { useFetch } from "../hook/useFetch.jsx";
function HomeAbout() {
  const [url, setUrl] = useState("http://localhost:3000/WhoWeAre");
  const { data } = useFetch(url);

  return (
    <div className="flex justify-between gap-[135px]">
      <img src="../../public/image.png" alt="" />
      <div
        className=" flex flex-col gap-10 items-start
       "
      >
        <Title
          secondaryTitle={"Who we are"}
          primaryTitle={"Why Createx?"}
          btnTitle={"btn"}
        ></Title>
        <ul className="mt-[40px] flex gap-3 flex-col">
          {data &&
            data.map((list, index) => {
              return (
                <li key={index} className="flex gap-2">
                  <div className="mt-1">
                    <Icons.checked />
                  </div>
                  <p className="text-base">{list.text}</p>
                </li>
              );
            })}
        </ul>
        <NavLink to={"/about"} className="secondary-btn ">
          More about us
        </NavLink>
      </div>
    </div>
  );
}
export default HomeAbout;
