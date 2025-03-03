import Title from "./Title";
import { Icons } from "./Icons";
function HomeFooter() {
  return (
    <div className=" relative pt-[60px] pb-[180px] m-auto flex flex-col gap-[60px] items-stretch  w-full ">
      <Title
        primaryTitle={"Subscribe to the Createx School announcements"}
        secondaryTitle={"Don’t miss anything"}
      />
      <div className="flex gap-6 items-stretch justify-center">
        <input type="text" className="w-[420px]" />
        <button className="secondary-btn ">Subscribe</button>
      </div>
      <div className="absolute flex justify-between w-full bottom-0  ">
        <Icons.HomeFooter />
        <Icons.HomeFooter />
      </div>
    </div>
  );
}
export default HomeFooter;
