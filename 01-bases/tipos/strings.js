"use strict";
(() => {
    var _a;
    const batman = "Batman";
    const volcanNegro = `Héroe: Volcan Negro`;
    const abc = 123;
    //   Cuando se hace un ${} y se imprime por ejemplo el abc lo que sucede internamente es que
    // javascript invoca el toString() de la constante
    console.log(`I'm ${batman}, ${abc}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No está presente");
})();
