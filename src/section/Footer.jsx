import { Icons } from "../components/Icons";
import { NavLink } from "react-router";
import "../style/footer.scss";
import { Fragment } from "react";
function Footer() {
  return (
    <Fragment>
      <div className="bg-[#1E212C] py-[60px]">
        <div className="container relative">
          <ul className="">
            <li>
              <div className="mb-[6px]">
                <Icons.logo fill={"white"} />
              </div>
              <NavLink className="text-slate-500">
                Createx Online School is a leader in online studying. We have
                lots of courses and programs from the main market experts.
                We provide relevant approaches to online learning, internships
                and employment in the largest companies in the country.
              </NavLink>
              <div className="flex justify-between items-center absolute bottom-0 w-full">
                <NavLink href="">
                  <Icons.fecebook
                    className={"fill-slate-500 hover:fill-white"}
                  />
                </NavLink>
                <NavLink href="">
                  <Icons.twitter
                    className={"fill-slate-500 hover:fill-white"}
                  />
                </NavLink>
                <NavLink href="">
                  <Icons.youtoobe
                    className={"fill-slate-500 hover:fill-white"}
                  />
                </NavLink>
                <NavLink href="">
                  <Icons.telegram
                    className={"fill-slate-500 !hover:fill-white"}
                  />
                </NavLink>
                <NavLink href="">
                  <Icons.instagram
                    className={"fill-slate-500 hover:!fill-white"}
                  />
                </NavLink>
                <NavLink href="">
                  <Icons.in className={"fill-slate-500 hover:fill-white"} />
                </NavLink>
              </div>
            </li>
            <li>
              <h6 className="h6-text text-w">SITE MAP</h6>
              <NavLink className="text-slate-500 hover:text-white" to={"about"}>
                About Us
              </NavLink>
              <NavLink
                className="text-slate-500 hover:text-white"
                to={"courses"}
              >
                Courses
              </NavLink>
              <NavLink
                className="text-slate-500 hover:text-white"
                to={"events"}
              >
                Events
              </NavLink>
              <NavLink className="text-slate-500 hover:text-white" to={"blog"}>
                Blog
              </NavLink>
              <NavLink
                className="text-slate-500 hover:text-white"
                to={"contacts"}
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <h6 className="h6-text text-w">COURSES</h6>
              <NavLink className="text-slate-500 hover:text-white" to={"about"}>
                Marketing
              </NavLink>
              <NavLink
                className="text-slate-500 hover:text-white"
                to={"courses"}
              >
                Management
              </NavLink>
              <NavLink
                className="text-slate-500 hover:text-white"
                to={"events"}
              >
                HR & Recruting
              </NavLink>
              <NavLink className="text-slate-500 hover:text-white" to={"blog"}>
                Design
              </NavLink>
              <NavLink
                className="text-slate-500 hover:text-white"
                to={"contacts"}
              >
                Development
              </NavLink>
            </li>
            <li>
              <h6 className="h6-text text-w">CONTACT US</h6>
              <NavLink className="text-slate-500 hover:text-white" to={"about"}>
                +998(94)239-48-98
              </NavLink>
              <NavLink
                className="text-slate-500 hover:text-white"
                to={"courses"}
              >
                Management
              </NavLink>
              <NavLink
                className="text-slate-500 hover:text-white"
                to={"events"}
              >
                HR & Recruting
              </NavLink>
              <NavLink className="text-slate-500 hover:text-white" to={"blog"}>
                Design
              </NavLink>
              <NavLink
                className="text-slate-500 hover:text-white"
                to={"contacts"}
              >
                Development
              </NavLink>
            </li>
            <li>
              <h6 className="h6-text ">SIGN UP TO OUR NEWSLETTER</h6>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Email address"
                  className="bg-[#393C46] w-full text-yellow-50 py-2 px-3"
                />
                <button className="absolute right-[15px] h-full ">
                  <Icons.arrowNext className="fill-white " />
                </button>
              </div>
              <NavLink className="text-slate-500">
                *Subscribe to our newsletter to receive communications and early
                updates from Createx SEO Agency.
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="!bg-[#292C37]">
        <div className="container">
          <div className="max-w-full text-white  flex justify-between items-center">
            <NavLink className="w-full grow flex items-center">
              © All rights reserved. <Icons.heart /> Made with by Createx Studio
            </NavLink>
            <NavLink className="w-[510px] max-w-fit">GO TO TOP</NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Footer;
