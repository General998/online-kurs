import { useFetch } from "../hook/useFetch";
import { Title } from "./";
import { Icons } from "./Icons";
import { useState, useEffect, Fragment } from "react";
function HomeBenefits() {
  const [url, setUrl] = useState("http://localhost:3000/HomBenefits");
  const { data } = useFetch(url);

  const [show, setShow] = useState([]);
  const [showId, setShowId] = useState();
  useEffect(
    () => {
      data && setShow(data.filter((e, index) => index + 1 == showId));
    },
    [showId],
    [data]
  );
  return (
    <div className="div grid gap-[60px]">
      <Title
        primaryTitle={"That’s how we do it"}
        secondaryTitle={"Our benefits"}
      />
      <div className="grid grid-cols-4" onClick={(e) => setShowId(e.target.id)}>
        <div className="light-btn " id={1}>
          <Icons.star className="primary-btn-icon"></Icons.star>
          Experienced Tutors
        </div>
        <div className="light-btn " id={2}>
          <Icons.like className="primary-btn-icon"></Icons.like>
          Feedback & Support
        </div>
        <div className="light-btn " id={3}>
          <Icons.layout className="primary-btn-icon"></Icons.layout>
          24/7 Online Library
        </div>
        <div className="light-btn " id={4}>
          <Icons.chat className="primary-btn-icon"></Icons.chat>
          Community
        </div>
      </div>
      <div className="flex items-center gap-[135px]">
        {show.map((e) => {
          return (
            <Fragment>
              <div className=" flex flex-col gap-6">
                <h2 className="lato-black text-[32px] text-[#1E212C]">
                  {e.title}
                </h2>
                <p className="text-[#424551]">{e.text}</p>
              </div>
              <img src={e.img} alt="" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
export default HomeBenefits;
