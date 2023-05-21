import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


export default function Tag() {
  const [tag, setTag] = useState('car');
  const {gif, loading, fetchData} = useGif(tag);

  return (
  <div className="w-1/2 bg-blue-400 rounded-lg border border-black
  flex flex-col items-center gap-y-5 mt-[15px]">
    <h1 className="mt-[15px] text-3xl underline font-bold uppercase ">A Random {tag} Gif</h1>
    {loading ? <Spinner /> : <img src={gif} alt="gif" width="450px"/>}
    <input type="text" onChange={(e) => setTag(e.target.value)} value={tag} className="text-lg w-10/12 py-2 rounded-lg mb-[3px] text-center"/>
    <button onClick={() => fetchData()} className="text-lg bg-yellow-100 w-10/12 py-2 rounded-lg mb-[20px] font-bold">
      Genterate
    </button>
  </div>
  );
}
