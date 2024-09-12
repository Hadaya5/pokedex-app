import { useContext } from "react";
import { PokedexContext, Pokemon } from "../App";

interface CardProps {
  cardData: Pokemon;
}

export default function Card({ cardData: { sprite, ...args } }: CardProps) {
  const { setPokemon } = useContext(PokedexContext);

  return (
    <button
      onClick={() =>
        setPokemon({
          ...args,
          sprite: sprite,
        })
      }
      className="rounded-md mr-3 mt-3 border-2 w-32 h-32 border-gray-500 bg-slate-50 flex justify-center items-center"
    >
      <img className="h-32 w-32" src={sprite} alt="Pokemon sprite" />
    </button>
  );
}
