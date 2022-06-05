let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let somaSaldo = 0;

function somarAoSaldo(soma: number) {

    if (campoSaldo) {
        somaSaldo += soma
        campoSaldo.innerHTML = somaSaldo.toString();
        limparCampoSoma();
    }  
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        somaSaldo = 0;
        campoSaldo.innerHTML = somaSaldo.toString();
    }  
}

botaoAtualizar!.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar!.addEventListener('click', function () {
    limparSaldo();
});
