(() => {
  //? Diferencia entre interface y type, el interface puede extenderse el type no
  //? se usa mas el interface cuando son peticiones http y type cuando son cosas que sabemos
  //? no van a cambiar como redux
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Súper velocidad", "Viajar en el tiempo"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: ["Súper velocidad", "Súper fuerza"],
    getName() {
      return this.name;
    },
  };
})();
