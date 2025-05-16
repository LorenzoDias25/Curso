
function sortear(){
  let quant = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);
  let mensagem = document.getElementById('mensagem');

  if (quant = 0){
    mensagem.innerHTML = `<label class="texto__paragrafo">Quantidade não pode ser zero !!!</label>`;
  } else if (quant > (limiteSup - limiteInf) + 1){
    mensagem.innerHTML = `<label class="texto__paragrafo">Quantidade inválida !!!</label>`;
  } else if(limiteInf >= limiteSup){
    mensagem.innerHTML = `<label class="texto__paragrafo">De não pode ser mais ou igual à até !!!</label>`;
  } else {

    let sorteados = [];
    let numero;
    for (let cont = 0; cont < quantidade; cont++){
      numero = gerarNumeroAleatorio(de, ate);

      while (sorteados.includes(numero);){
        numer = gerarNumeroAleatorio(de,ate);
      }

      sorteados.push(numero);
    }

    mensagem.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
  }

}

function gerarNumeroAleatorio(de, ate){
  return Math.floor(Math.random() * (ate - de + 1)) + de;    
}