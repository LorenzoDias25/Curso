function alterarTexto(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

alterarTexto('h1', "Hora do desafio");

function alertClick(){
  console.log("O botão foi clicado");
}