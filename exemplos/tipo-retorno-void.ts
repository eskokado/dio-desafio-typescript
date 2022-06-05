let button = document.getElementById("button");
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;

function somarNumeros(valor1: number, valor2: number): void {
  let result = valor1 + valor2;
  console.log(`Resultado: ${result}`);

}


if (button) {
  button.addEventListener('click', function () {
    if (input1 && input2){
      somarNumeros(Number(input1.value), Number(input2.value));
    }
  });
}
