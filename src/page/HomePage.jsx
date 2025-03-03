import {
  HomeBanner,
  HomeAbout,
  HomeCourses,
  HomeBackground,
  HomeBenefits,
  HomeEvent,
  HomeCertificatet,
  HomeTeam,
  HomeTestimonials,
  HomeBlog,
  HomeFooter,
} from "../components";
function HomePage() {
  return (
    <>
      <div className="bg-[#FFDAD5]">
        <div className="container pt-[80px] pb-[80px]">
          <HomeBanner />
        </div>
      </div>
      <div className="container pt-[80px] pb-[80px]">
        <div className="flex flex-col gap-[180px]">
          <HomeAbout />
          <HomeBenefits />
          <HomeCourses />
        </div>
      </div>
      <div className="bg-[#FFDAD5]">
        <div className="container pt-[80px] pb-[80px]">
          <HomeEvent />
        </div>
      </div>
      <div className="container flex flex-col gap-[180px] ">
        <HomeCertificatet />
      </div>
      <div className=" bg-[#F4F5F6] ">
        <div className=" container flex flex-col gap-[180px]">
          <HomeTeam />
          <HomeTestimonials />
        </div>
      </div>
      <div className=" ">
        <div className=" container flex flex-col gap-[180px]">
          <HomeBlog />
        </div>
      </div>
      <div className=" bg-[#FEDECF]">
        <div className=" container flex flex-col gap-[180px]">
          <HomeFooter />
        </div>
      </div>
    </>
  );
}
export default HomePage;
