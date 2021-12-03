import { getPokemon } from "../generics/get-pokemon";

getPokemon(1)
  .then((pokemon) => console.log(pokemon.sprites.front_default))
  .catch((err) => console.error(err));
