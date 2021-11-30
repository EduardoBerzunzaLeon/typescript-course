"use strict";
(() => {
    const hero = ["Dr Strange", 100, true]; // Tuple
    hero[0] = "Ironman";
    hero[1] = 50;
    //   hero[2] = 123; -> error
    console.log(hero);
})();
