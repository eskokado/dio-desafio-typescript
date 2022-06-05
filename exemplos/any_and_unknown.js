"use strict";
let valor;
valor = 15;
valor = 'Teste';
let nome;
let valorTipoAny;
valorTipoAny = false;
valorTipoAny = 50;
nome = valorTipoAny;
if (typeof valor === 'string') {
    nome = valor;
}
function geradorDeErro(mensagem, codigoDeErro) {
    console.log(mensagem, codigoDeErro);
    throw { message: mensagem, errorCode: codigoDeErro };
}
geradorDeErro('Um erro ocorreu!', 500);
