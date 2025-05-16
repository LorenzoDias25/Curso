function alterarTexto(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

alterarTexto('h1', "Hora do desafio");

function buttonClick(){
  console.log("O botão foi clicado");
}

function alertClick(){
  alert("Eu amo JS");
}

function verificarClick(){
  var cidade = prompt("Digite o nome de uma cidade do Brasil: ");
  alert("Estive em " + cidade + " e lembrei de você !");
}

function somaClick(){
  var n1 = prompt("Digite um número: ");
  var n2 = prompt("Digite outro número: ");

  alert("A soma de " + n1 + " + " + n2 + " é: " + (parseInt(n1) + parseInt(n2)));
}