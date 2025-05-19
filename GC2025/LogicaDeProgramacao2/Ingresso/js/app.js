function comprar(){
  let tipo = document.getElementById('tipo-ingresso');
  let qtd = document.getElementById('qtd').value;

  if (tipo.value == 'pista'){
    comprarPista(qtd);
  } else if(tipo.value == 'superior') {
    comprarSuperior(qtd);
  } else {
    comprarInferior(qtd);
  }
}

function comprarPista(qtd){
  let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

  if (qtd > qtdPista || qtd == 0){
    alert("Quantidade inválida !!!");
  } else {
    qtdPista -= qtd;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert("Compra realizada com sucesso !");
  }
}

function comprarSuperior(qtd){
  let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

  if (qtd > qtdSuperior || qtd == 0){
    alert("Quantidade inválida !!!");
  } else {
    qtdSuperior -= qtd;
    document.getElementById('qtd-superior').textContent = qtdSuperior;
    alert("Compra realizada com sucesso !");
  }
}

function comprarInferior(qtd){
  let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

  if (qtd > qtdInferior || qtd == 0){
    alert("Quantidade inválida !!!");
  } else {
    qtdInferior -= qtd;
    document.getElementById('qtd-inferior').textContent = qtdInferior;
    alert("Compra realizada com sucesso !");
  }
}