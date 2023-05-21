import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import useGif from "../hooks/useGif";

export default function Random() {
  const {gif, loading, fetchData} = useGif();

  return (
  <div className="w-1/2 bg-green-400 rounded-lg border border-black
  flex flex-col items-center gap-y-5 mt-[15px]">
    <h1 className="mt-[15px] text-3xl underline font-bold uppercase ">A Random Gif</h1>
    {loading ? <Spinner /> : <img src={gif} alt="gif" width="450px"/>}
    <button onClick={() => fetchData()} className="text-lg bg-yellow-100 w-10/12 py-2 rounded-lg mb-[20px] font-bold">
      Genterate
    </button>
  </div>
  );
}
