import { Title } from "../components";
import { Icons } from "./Icons";
import { useFetch } from "../hook/useFetch";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../style/sasss.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Scrollbar,
  A11y,
} from "swiper/modules";

function HomeTestimonials() {
  const [url, setUrl] = useState("http://localhost:3000/HomeTestimonials");
  const { data } = useFetch(url);
  return (
    <div className="relative flex flex-col gap-[60px]">
      <Title
        primaryTitle={"What our students say"}
        secondaryTitle={"TESTIMONIALS"}
      ></Title>
      <div className="relative mb-160px">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar, A11y, Pagination]}
          spaceBetween={100}
          slidesPerView={1}
          slideToClickedSlide:true
          className="Swiper-testimoial"
          navigation={{
            nextEl: `.swiper-btn-next`,
            prevEl: `.swiper-btn-prev`,
            clickable: true,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data &&
            data.map((item) => (
              <SwiperSlide>
                <div
                  className="mx-[105px] bg-white px-[164px]
                 h-[344px] py-16  flex flex-col gap-6 relative mb-[160px]"
                >
                  <div className="absolute left-[105px]  top-16">
                    <Icons.addOn />
                  </div>
                  <p className="static">{item.text}</p>
                  <div className="flex items-center gap-3 ">
                    <img
                      className="swiper-img rounded-full bg-[#FFCF2D] size-[72px] "
                      src={item.link}
                      alt=""
                    />
                    <p className="lato-bold size-4 w-max  h-max">
                      {item.name}
                      <br />
                      <span className="text-[#787A80] lato-regular ">
                        {item.position}
                      </span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-button absolute top-1/3 z-10 w-full flex justify-between">
          <div className="swiper-btn-prev after:hidden">
            <Icons.arrowPrev />
          </div>
          <div className="swiper-btn-next  after:hidden">
            <Icons.arrowNext />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeTestimonials;
