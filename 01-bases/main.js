"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => text.length > 3 ? true : false;
    Validations.validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText("Eduardo"));
//# sourceMappingURL=main.js.map