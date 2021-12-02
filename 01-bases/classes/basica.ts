(() => {
  class Avenger {
    //? private name: string;
    //? private team: string; // Si se pone como team: string, automaticamente le pone publica
    //? Es buena practica especificar que tipo es.
    // public realName?: string;
    static avgAge: number = 35; //? Se puede hacer referencia a la clase, no se puede usar static en los parametros
    static getAvgAge() {
      return this.name; //? el this.name en un metodo estatico es el nombre de la clase
    }

    constructor(
      private name: string,
      private team: string,
      //   avgAge: number = 55,
      public realName?: string
    ) {
      //?   Avenger.avgAge = avgAge; modificar un static
      //   this.name = name;
      //   this.team = team;
      //   this.realName = realName;
    }

    private bio(): string {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan");
  //   console.log(antman);
  //   console.log(Avenger.avgAge);
  //   console.log(antman.bio()); //!Sigue funcionando por que javascript no lo restringe
  //   console.log(Avenger.getAvgAge());
})();
