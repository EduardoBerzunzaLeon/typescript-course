import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("Charmander");

// (Pokemon.prototype as any).customName = "Pikachu"; //? throw error "custonName": Object is not extensible

// charmander.savePokemonToDB(3);

console.log(charmander);
