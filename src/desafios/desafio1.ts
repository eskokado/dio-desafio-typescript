const funcionario = {
    codigo: 20,
    nome: 'João'
};

const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'jose'
}

interface Funcionario {
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 30;
funcionarioObj.nome = 'Mario';

const funcionarioObj2: Funcionario = {
    codigo: 40,
    nome: 'Joaquim'
}