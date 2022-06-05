// import './exemplos/exemplo-app';
// import './exemplos/tipo-retorno-funcao';
// import './exemplos/tipo-retorno-void';
// import './exemplos/tipo-variavel-personalizado';
let button = document.getElementById("button");
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;

let devePrintar = true;
let frase = "O valor é: ";

if (button) {
  button.addEventListener('click', function () {
    console.log("Testando se funciona");
    if (input1 && input2){

      somarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase);

      let result1 = somarNumerosVarPersonalizado(input1.value, input2.value);

      console.log(`Resultado (${'somarNumerosVarPersonalizado'}): ${result1}`);

      somarNumerosRetornoVoid(Number(input1.value), Number(input2.value));

      let result2 = somarNumerosRetornoFuncao(Number(input1.value), Number(input2.value));

      console.log(`Resultado (${'somarNumerosRetornoFuncao'}): ${result2}`);
    }
  });
}

enum Profissao {
    Atriz,
    Padeiro,
    Desenvolvedor,
    Professor,
    Estudante
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

interface Estudante extends Pessoa{
  materiais: string[]
}

const pessoa1: Pessoa = {
    nome: 'joao',
    idade: 21,
    profissao: Profissao.Padeiro
};

const pessoa2: Pessoa = {
    nome: 'maria',
    idade: 35,
    profissao: Profissao.Atriz
};

const pessoa3: Pessoa = {
    nome: 'marcos',
    idade: 35,
    profissao: Profissao.Professor
};

const pessoa4: Pessoa  = {
    nome: "jose",
    idade: 27,
    profissao: Profissao.Desenvolvedor
}

const pessoa5: Estudante = {
  nome: "Edson",
  idade: 40,
  profissao: Profissao.Estudante,
  materiais: ['Caderno', 'Livros']
}

listar(pessoa5.materiais);

let valorAny: any;
valorAny = 45;
valorAny = false;
valorAny = 'String';

let valorString: string = "Testando";
let valorString2 = valorString;
valorString = valorAny;

cancatenaString(valorString, valorString2);

let valorUnknown: unknown; 
valorUnknown = 15;
valorUnknown = 'Teste';
let nomeString: string;

let valorTipoAny: any; 
valorTipoAny = false;
valorTipoAny = 50
nomeString = valorTipoAny; 


if (typeof valorUnknown === 'string') {
    nomeString = valorUnknown; 
}


let resultAoQuadrado = somarETratar(2, 3, aoQuadrado);

console.log(`Resultado (aoQuadrado): ${resultAoQuadrado}`);

geradorDeErro('Um erro ocorreu!', 500); 




function somarNumeros(numero1: number, numero2: number, devePrintar: boolean, frase: string) {
  let resultado = numero1 + numero2;
  if (devePrintar) {
    console.log(`${frase} ${resultado}`);
  }
  return resultado;
}

function somarNumerosRetornoFuncao(valor1: number, valor2: number): number {
  return +valor1 + +valor2;
}

function somarNumerosRetornoVoid(valor1: number, valor2: number): void {
  let result = valor1 + valor2;
  console.log(`Resultado (${'somarNumerosRetornoVoid'}): ${result}`);

}

type valor = number | string;

function somarNumerosVarPersonalizado(valor1: valor, valor2: valor) {
  if (typeof valor1 === 'string' || typeof valor2 === 'string') {
    return valor1.toString() + valor2.toString();
  }
  return +valor1 + +valor2;
}

function aoQuadrado(valor: number) {
    return valor ** 2;
}

function somarETratar(valor1: number, valor2: number, callback: (valor: number) => number): number {
  let soma = valor1 + valor2;
  return callback(soma);
}

function geradorDeErro(mensagem: string, codigoDeErro: number): never {
  console.log(mensagem, codigoDeErro);
    throw {message: mensagem, errorCode: codigoDeErro }; 
}

function cancatenaString(value1: string, value2: string) {
  console.log(`${value1} - ${value2}`);
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('Lista de Materiais - ', item);
    }    
}