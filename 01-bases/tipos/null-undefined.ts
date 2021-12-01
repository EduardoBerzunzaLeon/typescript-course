(() => {
  //   let nothing: undefined = undefined;
  let isActive: boolean | undefined = undefined;
  //   let isActive: boolean = undefined; // funciona si se quita del tsconfig el strictnullcheck a false, no es recomendable

  console.log(isActive);
})();
