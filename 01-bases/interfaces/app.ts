// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

//? Important: Una interfaz puede heredar de otra interfaz
interface Car {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = (auto: Car): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Car = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

conducirBatimovil(batimovil);

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

reir(guason);

// Cree una interfaz para la siguiente funcion

interface CiudadGoticaFn {
  (ciudadanos: string[]): number;
}

const ciudadGotica: CiudadGoticaFn = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
enum Gender {
  m = "Male",
  f = "Female",
}

enum MaritalStatus {
  s = "single",
  d = "divorced",
  m = "married",
}

interface People {
  age: number;
  gender: Gender;
  maritalStatus: MaritalStatus;
  name: string;
  printBio(): void;
}

class Persona implements People {
  constructor(
    public name: string,
    public age: number,
    public gender: Gender,
    public maritalStatus: MaritalStatus
  ) {}

  public printBio(): void {
    console.log("Print bio");
  }
}
