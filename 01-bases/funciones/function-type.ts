(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = (): string => `El mundo está salvado!`;

  let myFunction: (y: number, z: number) => number;

  //*   myFunction = 10;
  //*  console.log(myFunction);

  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  //?  myFunction = greet;
  //?  console.log(myFunction("Eduardo"));

  //?   myFunction = saveTheWorld;
  //?  console.log(myFunction());
})();
