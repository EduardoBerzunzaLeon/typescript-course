"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    },
};
conducirBatimovil(batimovil);
const guason = {
    reir: true,
    comer: true,
    llorar: false,
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
reir(guason);
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
var Gender;
(function (Gender) {
    Gender["m"] = "Male";
    Gender["f"] = "Female";
})(Gender || (Gender = {}));
var MaritalStatus;
(function (MaritalStatus) {
    MaritalStatus["s"] = "single";
    MaritalStatus["d"] = "divorced";
    MaritalStatus["m"] = "married";
})(MaritalStatus || (MaritalStatus = {}));
class Persona {
    constructor(name, age, gender, maritalStatus) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }
    printBio() {
        console.log("Print bio");
    }
}
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Súper velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Súper velocidad", "Súper fuerza"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: "Eduardo",
        age: 28,
        address: {
            id: 125,
            zip: "KY2 SUD",
            city: "Ottawa",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: "Fatima",
        age: 28,
        address: {
            city: "Mexico",
            zip: "24030",
            id: 15,
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    const addNumbersFunction = (a, b) => {
        return a + b;
    };
    addNumbersFunction(10, 5);
})();
//# sourceMappingURL=main.js.map