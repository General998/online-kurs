import { Title, CardTitle } from "../components";
import { Icons } from "../components/Icons.jsx";
import { NavLink } from "react-router";
import { useState } from "react";
import { useFetch } from "../hook/useFetch.jsx";
function CoursePage() {
  const [url, setUrl] = useState("http://localhost:3000/WhoWeAre");
  const { data } = useFetch(url);
  return (
    <div>
      <div className="bg-[#FEDECF]">
        <div className="container py-[120px] ">
          <Title
            secondaryTitle={"COURSE"}
            primaryTitle={
              "User Experience. Principles of Human-Centered Design"
            }
          />
        </div>
      </div>
      <div>
        <div className="container">
          <div>
            <h1 className="lato-black text-[46px]">About the course</h1>
            <p>
              Bibendum vulputate adipiscing venenatis at est, a eu tincidunt.
              Leo aenean congue in sagittis, felis maecenas amet varius at.
              Pellentesque euismod in faucibus at elementum. Tellus maecenas
              libero est tempus sit cras at malesuada diam. Consequat senectus
              dictumst non hac dignissim montes, pretium, egestas molestie. Sed
              magna aliquet ornare nibh vel lectus diam eget pretium. Lorem
              risus nunc tincidunt tortor, mi nulla pellentesque
            </p>
            <h3 className="text-[28px]">You will learn:</h3>
            <ul className="mt-[40px] flex gap-3 flex-col">
              {data &&
                data.map((list, index) => {
                  return (
                    <li key={index} className="flex gap-2">
                      <div className="mt-1">
                        <Icons.checked />
                      </div>
                      <p className="text-base">{list.text}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className=" border shadow">
            <CardTitle>
              <h1>hello</h1>
            </CardTitle>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoursePage;
