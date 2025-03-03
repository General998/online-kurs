import { NavLink } from "react-router";
import { Icons } from "../components/Icons";
import "../style/header.scss";
import { useRef, useEffect } from "react";
function Header() {
  let headerLineRef = useRef(0);
  return (
    <div className="container" ref={headerLineRef}>
      <div className="flex items-center gap-[20px]  mt-[20px]">
        <NavLink to="/" type="button" className="logo-icon">
          <Icons.logo></Icons.logo>
        </NavLink>
        <nav className=" flex items-center justify-between grow">
          <div>
            <NavLink className="primary-btn" to="/about">
              About Us
            </NavLink>
            <NavLink className="primary-btn" to="/courses">
              Courses
            </NavLink>
            <NavLink className="primary-btn" to="/events">
              Events
            </NavLink>
            <NavLink className="primary-btn" to="/blog">
              Blog
            </NavLink>
            <NavLink className="primary-btn" to="/contacts">
              Contact
            </NavLink>
          </div>
          <div className="flex items-center ">
            <NavLink className="primary-btn" to="№">
              Get Consultatsiya
            </NavLink>
            <NavLink
              to="/signIn"
              className="primary-btn flex items-center gap-[8px]"
            >
              <Icons.user className="primary-btn-icon"></Icons.user>
              <p>Log in / Register</p>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;
