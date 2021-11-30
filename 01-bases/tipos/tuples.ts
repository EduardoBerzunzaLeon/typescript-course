(() => {
  const hero: [string, number, boolean] = ["Dr Strange", 100, true]; // Tuple
  hero[0] = "Ironman";
  hero[1] = 50;
  //   hero[2] = 123; -> error

  console.log(hero);
})();
