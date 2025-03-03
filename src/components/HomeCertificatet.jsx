import Title from "./Title";
import { useFetch } from "../hook/useFetch";
import { useState } from "react";
function HomeCertificatet() {
  const [url, setUrl] = useState("http://localhost:3000/certificate");
  const { data } = useFetch(url);
  return (
    <div className="flex gap-[20px] items-center justify-between relative">
      <div className="flex flex-col justify-between">
        <Title
          primaryTitle={"Your expertise will be confirmed"}
          secondaryTitle={"Createx Certificate"}
          btnTitle={"none"}
        ></Title>
        {data && data.map((item, i) => <p key={i}>{item.text}</p>)}
        <div className="flex items-center justify-between ">
          {data &&
            data.map((item, i) =>
              item.logos.map((logo, i) => <img key={i} src={logo} alt="" />)
            )}
        </div>
      </div>
      {data &&
        data.map((item, i) => (
          <img className="relative top-[44px]" src={item.img} alt="" />
        ))}
    </div>
  );
}
export default HomeCertificatet;
