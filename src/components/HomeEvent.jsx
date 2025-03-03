import Title from "./Title";
import { useFetch } from "../hook/useFetch";
import { Fragment, useState } from "react";
import { NavLink } from "react-router";

function HomeEvent() {
  const [url, setUrl] = useState("http://localhost:3000/HomeEvent");
  const { data } = useFetch(url);
  const [hid, setHid] = useState();

  return (
    <div className="flex flex-col gap-[60px] ">
      <Title
        primaryTitle={"Lectures & workshops"}
        secondaryTitle={"Our Events"}
      />
      <div className="flex flex-col gap-6 mt-10">
        {data &&
          data.map((item, i) => (
            <div
              className="bg-white rounded-s py-[21px] pt-[32px] px-[40px] flex flex-col justify-stretch hover:shadow-2xl"
              key={i}
            >
              <div className=" flex gap-10 items-center justify-between mb-[20px]">
                <div className="text-bgPrimary flex items-center gap-5">
                  <h2 className="lato-black text-5xl ">
                    {item.day < 10 ? `0${item.day}` : item.day}
                  </h2>
                  <div className="flex flex-col">
                    <p className="">{item.months}</p>
                    <p className="">
                      {item.timeStart}-{item.timeEnd}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="lato-bold text-xl">{item.title}</p>
                  <p className="text-[#787A80]">{item.type}</p>
                </div>

                <button
                  className="secondary-btn "
                  onClick={() => (hid == i ? setHid() : setHid(i))}
                >
                  View more
                </button>
              </div>
              <div className={hid != i ? "hidden-content " : "show-content "}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur quibusdam, omnis tempora rem illum atque sapiente
                placeat officia ipsa ratione nostrum eos? Pariatur ipsam labore
                hic aut, sint quasi sed eaque. Eveniet cumque iure beatae facere
                veritatis sint tempora, fugiat distinctio quisquam minus quod
                tenetur, enim est deserunt cupiditate soluta delectus dolor.
                Tempora, quam, autem sequi accusantium molestiae fugit
                aspernatur natus, consequuntur odio quis maiores nulla quidem
                ullam esse! Similique maiores fugit quod eius doloribus optio
                cupiditate ipsam iste, voluptatibus ab enim consectetur, ea
                veritatis quia quis tempora, repellat magnam exercitationem quos
                consequuntur reiciendis! Magnam voluptate ipsum debitis totam
                error?
              </div>
            </div>
          ))}
      </div>
      <div
        className="flex justify-center
        items-center gap-5"
      >
        <h2 className="text-3xl lato-bold">Do you want more?</h2>
        <NavLink to={"events"} className="primary-btn">
          Explore all events
        </NavLink>
      </div>
    </div>
  );
}
export default HomeEvent;
