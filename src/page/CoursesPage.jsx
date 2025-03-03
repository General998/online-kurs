import { Fragment, useState } from "react";
import {
  CoursesCard,
  HomeCertificatet,
  HomeFooter,
  HomeTestimonials,
  Title,
} from "../components/index";
import { useFetch } from "../hook/useFetch";
import { Icons } from "../components/Icons";
function CoursesPage() {
  const [url, setUrl] = useState("http://localhost:3000/HomeCourses");
  const { data } = useFetch(url);
  const types = [];
  const [showCard, setShowCard] = useState();
  const [showType, setShowType] = useState([]);
  const [show, setShow] = useState(false);

  {
    data &&
      data.map((e) => {
        types.includes(e.type) ? [...types] : types.push(e.type);
      });
  }

  return (
    <div>
      <div className="container pt-[80px] pb-[120px] flex flex-col gap-[60px]">
        <Title
          secondaryTitle={"Enjoy your studying!"}
          primaryTitle={"Our online courses"}
        ></Title>
        <div className="flex justify-between">
          {data && (
            <button
              onClick={() => {
                setShow(false);
              }}
              className="light-btn relative "
            >
              All{" "}
              <span className="relative -top-2 text-xs ">{data.length} </span>{" "}
            </button>
          )}
          {data &&
            types.map((e, index) => (
              <button
                className="light-btn relative "
                onClick={() => {
                  setShowType(e);
                  setShow(true);
                }}
                key={index}
              >
                {e}
                <span className="relative -top-2 text-xs">
                  {data &&
                    data.filter((ar) => {
                      return e == ar.type;
                    }).length}
                </span>
              </button>
            ))}
          <div action="" className="relative flex">
            <input
              type="text"
              className="pr-9 pl-4 border rounded"
              placeholder="Search course..."
            />
            <div className="absolute top-1/3 right-4">
              <Icons.search />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[32px]">
          {show
            ? data &&
              data
                .filter((crs) => showType == crs.type)
                .map((e) => <CoursesCard card={e} />)
            : data &&
              data.filter((crs) => true).map((e) => <CoursesCard card={e} />)}
        </div>
        <button className="light-btn max-w-fit m-auto">
          <Icons.loading className="primary-btn-icon" /> Load more
        </button>
      </div>
      <div className="bg-[#F4F5F6]">
        <div className="container pt-[80px] pb-[100px]">
          <HomeTestimonials />
        </div>
      </div>
      <div className="container">
        <HomeCertificatet />
      </div>
      <div className="bg-[#FEDECF]">
        <div className="container pt-[80px] pb-[100px]">
          <HomeFooter />
        </div>
      </div>
    </div>
  );
}
export default CoursesPage;
