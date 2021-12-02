(() => {
  // ? la interfaz principal va arriba
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string; //? No es una buena practica
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Eduardo",
    age: 28,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Fatima",
    age: 28,
    address: {
      city: "Mexico",
      zip: "24030",
      id: 15,
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
})();
