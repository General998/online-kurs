import {Title} from "./index.js";
import Listings from "./Listings.jsx";
import {useEffect, useState} from "react";
import useFetch from "../hook/useFetch.jsx";
function CourseForWhom() {
    const [url, setUrl] = useState("http://localhost:3000/WhoBenefitFromTheCourse");
    let { data: benefit } = useFetch(url);

    return(<div className="grid grid-cols-2  items-start">
        <Title className="" primaryTitle={"Who will benefit from the course:"} btnTitle={" "} secondaryTitle={"For whom?"}/>
        <ul className="mt-[40px] flex gap-3 flex-col">
            {benefit &&
                benefit[0].map((e,index)=>
                    <Listings key={index}>{e}</Listings>)}
        </ul>
    </div>)
}
export default CourseForWhom;