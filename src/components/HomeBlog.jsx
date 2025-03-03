import { Title } from "../components";
import ReactAudioPlayer from "react-audio-player";
import { Icons } from "./Icons";
import { useFetch } from "../hook/useFetch";
import React, { useRef, useState } from "react";
function HomeBlog() {
  const [url, setUrl] = useState("http://localhost:3000/bold");
  const { data } = useFetch(url);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      isPause();
    } else {
      isPlay();
    }
  };

  const isPause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const isPlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="pt-[60px]">
      <Title
        primaryTitle={"Latest posts"}
        secondaryTitle={"Our blog"}
        btnTitle={"Go to blog"}
        link={"blog"}
      ></Title>

      <div className="flex gap-[30px] item-stech mt-[60px] mb-[180px]">
        {data &&
          data.map((item) => (
            <div className="relative flex flex-col gap-3 lato-bold ">
              <audio src={item.file} ref={audioRef} />
              <img src={item.image} alt="" />
              <button
                className="absolute top-3 left-3 py-[1] px-2 bg-white flex items-center gap-1 rounded"
                onClick={handlePlayPause}
              >
                <Icons.audio />
                Podcast
              </button>
              <div className="flex items-center gap-2 text-[#787A80] w-full">
                <p>{item.type}</p>
                <span> | </span>
                <Icons.calendar />
                <p>{item.data}</p>
                <span> | </span>
                <Icons.oclok />
                <p>{item.time}</p>
              </div>
              <h3 className=" text-xl">{item.title}</h3>
              <p className="text-base">{item.text}</p>
              <button className="flex gap-3 items-center">
                Listen <Icons.arrowNext fill={"red"} />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
export default HomeBlog;
