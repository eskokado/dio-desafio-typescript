"use strict";
let valorAny;
valorAny = 45;
valorAny = false;
valorAny = 'String';
let valorString = "Testando";
let valorString2 = valorString;
valorString = valorAny;
function cancatenaString(value1, value2) {
    console.log(`${value1} - ${value2}`);
}
cancatenaString(valorString, valorString2);
