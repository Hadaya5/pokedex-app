import { createContext, Dispatch, SetStateAction, useState } from "react";
import "./App.css";
import PokedexApp from "./components/PokedexApp";

export interface Pokemon {
  name: string;
  sprite: string;
  ability: string;
  type: string;
  height: number;
  weight: number;
}

interface PokedexContext {
  pokemon: Pokemon | null;
  setPokemon: Dispatch<SetStateAction<Pokemon | null>>;
}

export const PokedexContext = createContext<PokedexContext>({
  pokemon: {
    name: "",
    sprite: "",
    ability: "",
    type: "",
    height: 0,
    weight: 0,
  },
  setPokemon: () => {},
});

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>({
    name: "bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    ability: "overgrow",
    type: "grass",
    height: 7,
    weight: 69,
  });
  return (
    <PokedexContext.Provider value={{ pokemon, setPokemon }}>
      <PokedexApp />;
    </PokedexContext.Provider>
  );
}

export default App;
