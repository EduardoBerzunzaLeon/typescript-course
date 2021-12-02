(() => {
  class Apocalipsis {
    static intance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.intance) {
        Apocalipsis.intance = new Apocalipsis("Soy apocalipsis el único");
      }
      return Apocalipsis.intance;
    }

    public changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();

  apocalipsis1.changeName("Xavier");

  //   const apocalipsis = new Apocalipsis("Soy Apocalipsis... el único");
  //   const apocalipsis2 = new Apocalipsis("Soy Apocalipsis2... el único");
  //   const apocalipsis3 = new Apocalipsis("Soy Apocalipsis3... el único");

  console.log(apocalipsis1, apocalipsis2);
  //   console.log(apocalipsis, apocalipsis2, apocalipsis3);
})();
