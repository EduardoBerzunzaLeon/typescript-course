function printToConsole(constructor: Function): void {
  console.log(constructor); //? solo se ejecuta al momento de la traspilación, una unica vez
}

// * Factory constructor
const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

// ? Bloquear el prototipo de una clase
const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// ? method decorator
function CheckValidPokemonId(): Function {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = (id: number): Function | void => {
      if (id < 1 || id > 800) {
        return console.error("El id del pokemon debe estar entre 1 y 800");
      } else {
        return originalMethod(id);
      }
    };

    // descriptor.value = () => console.log("Hola mundo"); //? sobreescribe el metodo
  };
}

// ? property decorator
function Readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    //   ? retorna una property descriptor
    const descriptor: PropertyDescriptor = {
      get() {
        return "Eduardo";
      },
      set(this, value) {
        Object.defineProperty(this, propertyKey, {
          value,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

// @printToConsole //? retornan el constructor de la clase
@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {
  @Readonly()
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}

  @CheckValidPokemonId()
  public savePokemonToDB(id: number): void {
    console.log(`Pokemon guardado en DB ${id}`);
  }
}
