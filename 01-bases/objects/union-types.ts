(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCurstomVariable: string | number | Hero = "Eduardo";
  console.log(typeof myCurstomVariable);

  myCurstomVariable = 20;
  console.log(typeof myCurstomVariable);

  myCurstomVariable = {
    name: "Bruce",
    age: 43,
    powers: [1],
  };
  console.log(typeof myCurstomVariable);
})();
