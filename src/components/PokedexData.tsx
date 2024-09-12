import { useContext } from "react";
import { PokedexContext } from "../App";
import { toCapitalCase } from "../utils/toCapitalCase";
import clsx from "clsx";

export default function PokedexData() {
  const { pokemon } = useContext(PokedexContext);
  const bold = "font-semibold";
  if (pokemon === null) {
    return;
  }
  return (
    <div className="flex items-center flex-col h-[18.75rem] w-64 bg-red-600 rounded-lg border-4 border-black mt-[6.5rem]">
      <div className="flex flex-col justify-between h-56 w-44 px-2 py-2 bg-sky-200 rounded-md mt-8">
        <p className={clsx("text-center text-xl", bold)}>
          {toCapitalCase(pokemon.name)}
        </p>
        <p>
          <span className={bold}>Type: </span>
          {toCapitalCase(pokemon.type)}
        </p>
        <p>
          <span className={bold}>Ability: </span>
          {toCapitalCase(pokemon.ability)}
        </p>
        <p>
          <span className={bold}>Height: </span>
          {pokemon.height}
        </p>
        <p>
          <span className={bold}>Weight: </span>
          {pokemon.weight}
        </p>
      </div>
    </div>
  );
}
