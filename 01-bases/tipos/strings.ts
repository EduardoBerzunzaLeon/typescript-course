(() => {
  const batman: string = "Batman";
  const volcanNegro: string = `Héroe: Volcan Negro`;
  const abc = 123;

  //   Cuando se hace un ${} y se imprime por ejemplo el abc lo que sucede internamente es que
  // javascript invoca el toString() de la constante
  console.log(`I'm ${batman}, ${abc}`);
  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || "No está presente");
})();
