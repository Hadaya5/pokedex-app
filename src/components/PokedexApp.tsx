import { useEffect, useState } from "react";
import { Pokemon } from "../App";
import ShowCards from "./ShowCards";
import PokedexDesign from "./PokedexDesign";
import Loader from "./Loader";

export interface InitialPokemonData {
  url: string;
}

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState<InitialPokemonData[]>();
  const [pokemonDataList, setPokemonDataList] = useState<Pokemon[]>();

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    getPokemonData();
  }, [pokemonList]);

  const getInitialData = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );
    const data = await response.json();
    setPokemonList(data.results);
  };

  const getPokemonData = async () => {
    if (pokemonList) {
      const pokemonData = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return {
            name: data.name,
            type: data.types[0].type.name,
            sprite: data.sprites.front_default,
            ability: data.abilities[0].ability.name,
            height: data.height,
            weight: data.weight,
          };
        })
      );
      setPokemonDataList(pokemonData);
      console.log(pokemonData);
    }
  };

  return (
    <>
      <PokedexDesign />
      {pokemonDataList ? (
        <ShowCards pokemonDataList={pokemonDataList} />
      ) : (
        <Loader />
      )}
    </>
  );
}
