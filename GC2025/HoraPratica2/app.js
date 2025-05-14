function gerarTextoConsole(texto){
  console.log(texto);
}

gerarTextoConsole("Olá, [nome]!");

function imprimiNome(nome){
  console.log("Olá, " + nome);
}

function retornaDobro(num){
  return parseInt(num) * 2;
}

function mediaTres(n1,n2,n3){
  return (parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3;
}

function comparaDois(n1, n2){
  if (parseInt(n1) > parseInt(n2)){
    return n1;
  } else if (parseInt(n2) > parseInt(n1)){
    return n2;
  } else {
    return 0;
  }
}

function aoQuadrado(num){
  return parseInt(num) * parseInt(num);
}