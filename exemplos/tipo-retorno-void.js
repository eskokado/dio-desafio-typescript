"use strict";
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function somarNumeros(valor1, valor2) {
    let result = valor1 + valor2;
    console.log(`Resultado: ${result}`);
}
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            somarNumeros(Number(input1.value), Number(input2.value));
        }
    });
}
