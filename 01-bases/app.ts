(() => {
  //IIFE
  const a: number = 10; // Le pone tipo 10 por que es una constante y no se puede cambiar
  console.log(a);
})();

function sayHello(msg: string) {
  console.log(msg);
}
