let valor: unknown; 
valor = 15;
valor = 'Teste';
let nome: string;

let valorTipoAny: any; 
valorTipoAny = false;
valorTipoAny = 50
nome = valorTipoAny; 


if (typeof valor === 'string') {
    nome = valor; 
}

function geradorDeErro(mensagem: string, codigoDeErro: number): never {
  console.log(mensagem, codigoDeErro);
    throw {message: mensagem, errorCode: codigoDeErro }; 
}

geradorDeErro('Um erro ocorreu!', 500); 