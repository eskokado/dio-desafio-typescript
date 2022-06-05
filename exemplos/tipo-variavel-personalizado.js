"use strict";
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function somarNumeros(valor1, valor2) {
    if (typeof valor1 === 'string' || typeof valor2 === 'string') {
        return valor1.toString() + valor2.toString();
    }
    return +valor1 + +valor2;
}
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            let result = somarNumeros(input1.value, input2.value);
            console.log(`Resultado: ${result}`);
        }
    });
}
