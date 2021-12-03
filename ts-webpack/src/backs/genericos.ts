// import { Hero as HeroClass } from "./classes/Hero";
// import { Hero } from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero";
// import powers, { Power } from "./data/powers";

import { printObject, genericFunction } from "../generics/generics";
import { Villain, Hero } from "../interfaces";
// import { Hero } from "./interfaces/hero";
// import { Villain } from "./interfaces/villain";

// const Hero = 123;

// const ironman = new Hero("Tony Stark", 1, 33);
// console.log(ironman);

// console.log(ironman.power);

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// printObject("Hola mundo");
// const name: string = "Eduardo";

// console.log(genericFunction(1234).toFixed(2));
// console.log(genericFunction(name).toUpperCase());
// console.log(genericFunction(new Date()).getDate());
// console.log(genericFunction(new Date()).toFixed(2)); //? al hacerlo generico devuelve de tipo del argumento

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericFunction<Hero>(deadpool).name);
console.log(genericFunction<Villain>(deadpool).dangerLevel);
