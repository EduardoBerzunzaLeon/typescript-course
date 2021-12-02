(() => {
  abstract class Mutante {
    //? no se puede crear una instancia de una clase abstracta
    //? Sirve para crear otras clases o para asegurar que la otra clase use cosas de la clase abstracta
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    public salvarMundo() {
      return "Mundo a salvo!";
    }
  }
  class Villian extends Mutante {
    public conquistarMundo() {
      return "Mundo conquistado!";
    }
  }

  //   const wolverine: Xmen = new Xmen("Wolverine", "Logan");
  //   const magneto: Villian = new Villian("Magneto", "Magnus");

  const printName = (character: Mutante) => {
    console.log(character.realName);
  };

  //   printName(magneto);
})();
