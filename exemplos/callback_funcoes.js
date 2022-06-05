"use strict";
function aoQuadrado(valor) {
    return valor ** 2;
}
function somarETratar(valor1, valor2, callback) {
    let soma = valor1 + valor2;
    return callback(soma);
}
let result = somarETratar(2, 3, aoQuadrado);
console.log(`Restultado: ${result}`);
