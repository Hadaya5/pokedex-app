import { Pokemon } from "../App";
import Card from "./Card";

interface ShowCardsProps {
  pokemonDataList: Pokemon[] | undefined;
}

export default function ShowCards({ pokemonDataList }: ShowCardsProps) {
  return (
    <div className="flex flex-wrap justify-center mx-5 mt-5 overflow-y-scroll h-80">
      {pokemonDataList &&
        pokemonDataList.map((pokemon) => {
          return <Card key={pokemon.name} cardData={pokemon} />;
        })}
    </div>
  );
}
