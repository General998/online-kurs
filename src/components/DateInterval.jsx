import { useEffect, useRef, useState } from "react";

export function dateInterval(day) {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [secods, setSeconds] = useState("00");

  let interval = useRef();
  const starTime = () => {
    const countDownTime = new Date(day).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      console.log(now);

      const distance = countDownTime - now;
      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minut = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
      } else {
        setDays(day);
        setHours(hour);
        setMinutes(minut);
        setSeconds(second);
      }
    }, 1000);
  };
  useEffect(() => {
    starTime();
    return () => {
      clearInterval(interval.current);
    };
  });
  let showDateInterval = {
    showDays: days,
    showHour: hours,
    showMinutes: minutes,
    showSeconds: secods,
  };
  return { showDateInterval };
}
export default dateInterval;
