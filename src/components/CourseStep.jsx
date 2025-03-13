import {Title} from "./index.js";
import {useState} from "react";
import {useFetch} from "../hook/useFetch.jsx";
function CourseStep() {
    const [url, setUrl] = useState("http://localhost:3000/courseMainSteps");

    const { data } = useFetch(url);

    return (<div>
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
                        <p className="lato-bold">{e.title}</p>
                        <p className="text-[#787A80]">{e.text}</p>
                    </li>
                ))}
        </ul>
    </div>)
}
export default CourseStep;