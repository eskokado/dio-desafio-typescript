"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    Profissao[Profissao["Professor"] = 3] = "Professor";
    Profissao[Profissao["Estudante"] = 4] = "Estudante";
})(Profissao || (Profissao = {}));
const pessoa1 = {
    nome: 'joao',
    idade: 21,
    profissao: Profissao.Padeiro
};
const pessoa2 = {
    nome: 'maria',
    idade: 35,
    profissao: Profissao.Atriz
};
const pessoa3 = {
    nome: 'marcos',
    idade: 35,
    profissao: Profissao.Professor
};
const pessoa4 = {
    nome: "jose",
    idade: 27,
    profissao: Profissao.Desenvolvedor
};
const pessoa5 = {
    nome: "Edson",
    idade: 40,
    profissao: Profissao.Estudante,
    materiais: ['Caderno', 'Livros']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(pessoa5.materiais);
