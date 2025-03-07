import { Title, CardTitle } from "../components";
import { Icons } from "../components/Icons.jsx";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { useFetch } from "../hook/useFetch.jsx";
import { dateInterval } from "../components/DateInterval.jsx";
function CoursePage() {
  const [url, setUrl] = useState("http://localhost:3000/courseMainSteps");
  const { data } = useFetch(url);
  const { showDateInterval } = dateInterval("March 8, 2025 00:00:00");

  let { data: date } = useFetch("http://localhost:3000/date");

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div className="py-[120px]">
      <div className="bg-[#FEDECF]">
        <div className="container py-[120px]  ">
          <Title
            secondaryTitle={"COURSE"}
            primaryTitle={
              "User Experience. Principles of Human-Centered Design"
            }
          />
        </div>
      </div>
      <div>
        <div className="container flex flex-col gap-[180px]">
          <div className="flex gap-20  pt-[120px]">
            <div className="w-1/2 flex flex-col gap-10">
              <h1 className="lato-black text-[46px]">About the course</h1>
              <p>
                Bibendum vulputate adipiscing venenatis at est, a eu tincidunt.
                Leo aenean congue in sagittis, felis maecenas amet varius at.
                Pellentesque euismod in faucibus at elementum. Tellus maecenas
                libero est tempus sit cras at malesuada diam. Consequat senectus
                dictumst non hac dignissim montes, pretium, egestas molestie.
                Sed magna aliquet ornare nibh vel lectus diam eget pretium.
                Lorem risus nunc tincidunt tortor, mi nulla pellentesque
              </p>
              <div>
                <h3 className="text-[28px]">You will learn:</h3>
                <ul className="mt-[40px] flex gap-3 flex-col">
                  {data &&
                    data.map((list, index) => {
                      return (
                        <li
                          key={index}
                          className="grid grid-cols-12  min-w-full "
                        >
                          <div className="inline max-w-fit pt-[3px]">
                            <Icons.checked className="mt-1" />
                          </div>
                          <p className="col-span-11 text-base flex">
                            {list.text}
                          </p>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className=" shadow flex flex-col justify-between relative px-8 py-10">
              <div className="flex flex-col gap-8">
                <CardTitle
                  title={"Dates"}
                  titleValue={"Sept 7 – Nov 2"}
                  context={
                    "Metus turpis sit lorem lacus, in elit tellus lacus."
                  }
                ></CardTitle>
                <CardTitle
                  title={"Duration"}
                  titleValue={"2 months – 8 lessons"}
                  context={
                    "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut."
                  }
                ></CardTitle>
                <CardTitle
                  title={"Price"}
                  titleValue={"$120 per month"}
                  context={
                    "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis."
                  }
                ></CardTitle>
              </div>
              <div className="secondary-btn">Join the course</div>
            </div>
          </div>
          <div className="flex justify-between items-stretch gap-32">
            <div className="bg-[#FFCF2D] min-w-fit h-[580px] relative ]">
              <img
                src="../../public/curator/image.png"
                className=" px-4 relative -top-5"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-8">
              <Title
                primaryTitle={"Course curator"}
                secondaryTitle={"Cody Fisher"}
                btnTitle={" "}
              />
              <p>Senior UX designer in IT Product Company</p>
              <ul className="text-[#424551] text-base  lato-bold flex flex-col ">
                <li className="grid  grid-cols-9  ">
                  <Icons.star className="fill-[#FF3F3A] " />
                  <p className="col-span-8 ">4.9 rate</p>
                </li>
                <li className="grid  grid-cols-9  ">
                  <Icons.video className="fill-[#FF3F3A]" />
                  <p className="col-span-8 ">4 courses</p>
                </li>
                <li className="grid  grid-cols-9  ">
                  <Icons.user className="fill-[#FF3F3A]" />
                  <p className="col-span-8 ">350 students</p>
                </li>
              </ul>
              <p>
                Mattis adipiscing aliquam eu proin metus a iaculis faucibus.
                Tempus curabitur venenatis, vulputate venenatis fermentum ante.
                Nisl, amet id semper semper quis commodo, consequat. Massa
                rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam.
                Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo
                platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam
                vel aliquam tristique sollicitudin interdum quam.{" "}
              </p>
              <div className="flex items-center gap-6 ">
                <Icons.fecebook className="fill-[#787A80] -hover:fill-[#FF3F3A]" />
                <Icons.ve className="fill-[#787A80] hover:fill-[#FF3F3A]" />
                <Icons.twitter className="fill-[#787A80] hover:fill-[#FF3F3A]" />
                <Icons.in className="fill-[#787A80] hover:fill-[#FF3F3A] " />
              </div>
            </div>
          </div>
          <div>
            <Title
              primaryTitle={"Online learning process"}
              secondaryTitle={"Main steps"}
            />
            <ul>
              {data &&
                data.map((e) => (
                  <li className="group select-none">
                    <h1
                      className="inline w-fit text-4xl 
                      p-2 rounded-full lato-black border-[16px] text-[#D9D9D9] border-transparent
                    group-hover:text-[#FF3F3A] group-hover:bg-  [#FFB3B1] group-hover:border-[#FFE8E8] cursor-default"
                    >
                      {e.number}
                    </h1>
                    <p>{e.title}</p>
                    <p>{e.text}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div className="bg-[#FEDECF] px-[60px] py-10">
            <div className="flex justify-between">
              <h2 className="text-[32px] lato-black">
                20% discount for early birds!
              </h2>
              <ul className="flex gap-4">
                <li className="text-center">
                  <h5 className="lato-bold text-xl">
                    {showDateInterval && showDateInterval.showDays}
                  </h5>
                  <span>Days </span>{" "}
                </li>
                <li className="text-center">
                  <h5 className="lato-bold text-xl">
                    {showDateInterval && showDateInterval.showHour}
                  </h5>
                  <span>Hours</span>{" "}
                </li>
                <li className="text-center">
                  <h5 className="lato-bold text-xl">
                    {showDateInterval && showDateInterval.showMinutes}
                  </h5>
                  <span>Mins</span>
                </li>
                <li className="text-center">
                  <h5 className="lato-bold text-xl">
                    {" "}
                    {showDateInterval && showDateInterval.showSeconds}{" "}
                  </h5>
                  <span className="text-xs">Sec</span>
                </li>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoursePage;
