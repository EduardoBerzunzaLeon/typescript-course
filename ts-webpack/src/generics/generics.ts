// Definite que tipo de salida va tener dependiendo de la entrada o chequeo de tipado
export const printObject = (argument: any): void => {
  console.log(argument);
};

// El estandar dice que inicializa con <T> es por Type
export function genericFunction<T>(argument: T): T {
  return argument;
}

export const genericFunctionArrow = <T>(argument: T): T => argument;
