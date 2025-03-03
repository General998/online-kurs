import { data } from "autoprefixer";
import { useEffect, useState } from "react";
export function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url);
    const fetchData = async () => {
      const req = await fetch(url);
      const data = await req.json();
      setData(data);
    };
    fetchData();
  }, [url]);
  return { data };
}
export default useFetch;
