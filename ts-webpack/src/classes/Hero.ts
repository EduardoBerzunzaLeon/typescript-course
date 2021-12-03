import powers from "../data/powers";
export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power(): string {
    return (
      powers.find((power) => power.id === this.powerId)?.desc || "not found"
      //   powers.find((power) => power.id === this.powerId)!.desc || "not found" el ! le dice a javascript que confie en nosotros y qu elo pase
    );
  }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}
export class Hero5 {}

export const PI = 3.1415;
