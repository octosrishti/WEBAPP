import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
const Footer = ({active, setActive}) => {
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  return (
    <div className="flex items-center gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-36 flex justify-center items-center gap-2 rounded-full" disabled={active === 1} onClick={()=>prev()}>
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </button>
      <div className="flex items-center gap-2">
        <button className={`${active===1?"bg-blue-500 hover:bg-blue-700 ": "bg-white hover:bg-gray-300"} text-black font-bold py-2 px-4 w-10 flex justify-center items-center rounded`} onClick={()=>setActive(1)}>1</button>
        <button className={`${active===2?"bg-blue-500 hover:bg-blue-700": "bg-white hover:bg-gray-300"} text-black font-bold py-2 px-4 w-10 flex justify-center items-center rounded`} onClick={()=>setActive(2)}>2</button>
       </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-36 flex justify-center items-center gap-2 rounded-full" disabled={active === 5} onClick={()=>next()}>
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </button>
    </div>
  );
}

export default Footer