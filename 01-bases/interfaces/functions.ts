(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  const addNumbersFunction: addTwoNumbers = (a: number, b: number) => {
    return a + b;
  };

  addNumbersFunction(10, 5);
})();
