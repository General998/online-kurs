import Listings from "./Listings.jsx";
import {CardTitle} from "./index.js";
import {useFetch} from "../hook/useFetch.jsx";
import {useState} from "react";
function CourseAbout(){
    const [url, setUrl] = useState("http://localhost:3000/courseMainSteps");

    let { data} = useFetch(url);

    return (
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
                                    <Listings key={index}>{list.text}</Listings>

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
    )
}
export default CourseAbout;