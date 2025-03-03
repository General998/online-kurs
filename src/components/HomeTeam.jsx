import Title from "./Title";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icons } from "./Icons";
import { useFetch } from "../hook/useFetch";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
function HomeTeam() {
  const [url, setUrl] = useState("http://localhost:3000/HomeCourses");
  const { data } = useFetch(url);
  return (
    <div className="pt-[120px]">
      <div className="flex justify-between mb-[60px]">
        <Title
          primaryTitle={"Meet our team"}
          secondaryTitle={"Best tutors are all here"}
          btnTitle={"none"}
        ></Title>
        <div className="button-swipe relative  w-[108px]">
          <div className="swiper-button-prev after:hidden">
            <Icons.arrowPrev />
          </div>
          <div className="swiper-button-next  after:hidden">
            <Icons.arrowNext />
          </div>
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={4}
        slideToClickedSlide:true
        className="Swiper-team"
        navigation={{
          nextEl: `.swiper-button-next`,
          prevEl: `.swiper-button-prev`,
          clickable: true,
        }}
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data &&
          data.map((item) => (
            <SwiperSlide>
              <div className="group absolute h-full w-full hover:bg-gradient-to-t  hover:from-slate-950 transition-all d flex justify-end items-end gap-3 p-3">
                <a rel="stylesheet" href={item.facebookLink}>
                  <Icons.fecebook className="group-hover:fill-white group-hover:hover:fill-red " />
                </a>
                <a rel="stylesheet " href={item.instagramLink}>
                  <Icons.instagram className="group-hover:fill-white group-hover:hover:fill-red " />
                </a>
                <a rel="stylesheet " href={item.telegramLink}>
                  {console.log(item.telegramLink)}
                  <Icons.telegram className="group-hover:fill-white group-hover:hover:fill-red " />
                </a>
              </div>
              <img
                className="swiper-img border bg-[#FFCF2D] "
                src={item.link}
                alt=""
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
export default HomeTeam;
