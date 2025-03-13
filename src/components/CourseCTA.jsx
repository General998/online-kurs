import { dateInterval } from "../components/DateInterval.jsx";
import {useEffect} from "react";
function CourseCTA(){
    const { showDateInterval } = dateInterval("March 8, 2026 00:00:00");
    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
    },[]);
return (<div className="bg-[#FEDECF] px-[60px] py-10 ">
    <div className="flex justify-between ">
        <h2 className="text-[32px] lato-black ">
            20% discount for early birds!
        </h2>
        <ul className="flex gap-4 w-fit ">
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
    </div>
    <div className="flex justify-between mt-8 gap-7 items-end">
        <div className="flex flex-col gap-1 w-full">
            <p>Full name</p>
            <input className="h-11 px-4" type="text" name="" id="" placeholder="Your full name"/>
        </div>
        <div className="flex flex-col gap-1 w-full">
            <p>Email</p>
            <input type="text" className="h-11 px-4" name="" id="" placeholder="Your working email"/>
        </div>
        <div className="flex flex-col gap-1 w-full">
            <p>Phone</p>
            <input type="text" className="h-11 px-4" name="" id="" placeholder="Your phone number"/>
        </div>

        <button className="secondary-btn h-11 flex items-center ">Join the course</button>
    </div>

</div>)
}
export  default  CourseCTA
