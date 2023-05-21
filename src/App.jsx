import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return (
  <div className=" w-full h-screen background relative flex flex-col items-center overflow-x-hidden">
    <h1 className="bg-white rounded-lg text-4xl w-11/12 text-center mt-[40px] 
    font-bold uppercase">
      Random GIFS</h1>
    <div className="w-full flex flex-col items-center" >
      <Random />
      <Tag />
    </div>
  </div>
  );
}
