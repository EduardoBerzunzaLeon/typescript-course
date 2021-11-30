"use strict";
(() => {
    function callBatman() {
        return; // interpreta como return undefined
        // return 1;
    }
    const callSuperman = () => {
        // return null;
        return;
    };
    const a = callBatman(); // a es undefined, pero regresa void
    console.log(a);
})();
