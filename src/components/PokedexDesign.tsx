import { useContext } from "react";
import { PokedexContext } from "../App";
import PokedexData from "./PokedexData";
import clsx from "clsx";

interface LittleBubbleProps {
  bubbleColor: string;
}

function LittleBubble({ bubbleColor }: LittleBubbleProps) {
  return (
    <div className="h-6 w-6 mt-5 mr-2 rounded-full border-2 border-black bg-slate-100">
      <div
        className={clsx(
          bubbleColor,
          "rounded-full h-5 w-5 border-2 border-black"
        )}
      >
        <div className="rounded-full bg-slate-200 h-2 w-2 mt-1 ml-[6px]"></div>
      </div>
    </div>
  );
}

function Bubble() {
  return (
    <div className="grid grid-cols-10 gap-6">
      <div className="flex justify-center col-span-4 mt-3 ml-5 items-center rounded-full border-2 border-black bg-slate-100 h-[56px] w-[56px]">
        <div className="rounded-full bg-blue-500 h-12 w-12 border-2  border-black">
          <div className="rounded-full bg-blue-200 h-4 w-4 ml-2 mt-1"></div>
        </div>
      </div>
      <LittleBubble bubbleColor="bg-red-500" />
      <LittleBubble bubbleColor="bg-yellow-500" />
      <LittleBubble bubbleColor="bg-green-500" />
    </div>
  );
}

export default function PokedexDesign() {
  const { pokemon } = useContext(PokedexContext);

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex items-center flex-col h-[24rem] w-64 bg-red-600 rounded-lg border-4 border-black mt-5">
          <Bubble />
          <span className="border-t-4 border-black w-full mt-4"></span>
          <div className="bg-white h-40 w-40 my-4 rounded-md flex justify-center">
            <img
              src={pokemon!.sprite}
              alt="Pokemon Sprite"
              className="h-40 w-40"
            />
          </div>
          <div className="flex justify-around w-full">
            <div className="bg-slate-100 rounded-full border-slate-700 border-solid border-4 h-12 w-12 mt-3 block"></div>
            <img
              src="./arrow-button.png"
              alt="Arrow Button"
              className="h-20 w-20"
            />
          </div>
        </div>
        <PokedexData />
      </div>
    </>
  );
}
