(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      //   console.log("Contructor Avenger llamado!");
    }

    protected getFullname(): string {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    //? como el constructor no existe, se llama el de su padre
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      //   console.log("Constructor Xmen llamado");
    }

    get fullName(): string {
      //? necesita retornar algo y no recibe parametros
      return `${this.name} -  ${this.realName}`;
    }

    set fullName(name: string) {
      //? necesita recibir solo 1 parametro y no regresa nada
      if (name.length < 3) {
        throw new Error("El nombre debe ser mayor de 3 letras");
      }
      this.name = name;
    }

    public getFullnameDesdeXmen(): void {
      console.log(super.getFullname());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  //   wolverine.fullName = "Ed";
  //   console.log(wolverine.fullName);
  //   wolverine.getFullnameDesdeXmen();
})();
