import { Fragment, useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../hook/useFetch";
import { Title, CoursesCard } from "../components";
function HomeCourses() {
  const [url, setUrl] = useState("http://localhost:3000/HomeCourses");
  const { data } = useFetch(url);

  return (
    <div className="div">
      <Title
        primaryTitle={"Featured Courses"}
        secondaryTitle={"Ready to learn?"}
        btnTitle={"View all courses"}
        link={"courses"}
      />

      <div className="grid grid-cols-2 gap-8 mt-[60px]">
        {data &&
          data.map((card, index) => {
            if (index < 6) {
              return (
                <Fragment key={index}>
                  <CoursesCard card={card}></CoursesCard>
                </Fragment>
              );
            }
          })}
      </div>
    </div>
  );
}
export default HomeCourses;
