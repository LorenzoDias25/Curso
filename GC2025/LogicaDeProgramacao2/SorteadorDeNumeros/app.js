function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");

  if (botao.classList.contains('container_botao-desabilitado')) {
    botao.classList.remove('container_botao-desabilitado');
    botao.classList.add('container_botao');
  } else {
    botao.classList.remove("container_botao");
    botao.classList.add("container_botao-desabilitado");
  }
}

function sortear() {
  let quant = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let mensagem = document.getElementById("mensagem");

  if (quant == 0) {
    mensagem.innerHTML = '<label class="texto__paragrafo">Quantidade não pode ser zero !!!</label>';
  } else if (de >= ate) {
    mensagem.innerHTML = '<label class="texto__paragrafo">De não pode ser mais ou igual à até !!!</label>';
  } else if (quant > ate - de + 1) {
    mensagem.innerHTML = '<label class="texto__paragrafo">Quantidade inválida !!!</label>';
  } else {

    let sorteados = [];
    let numero;

    for (let cont = 0; cont < quant; cont++) {
      numero = gerarNumeroAleatorio(de, ate);

      while (sorteados.includes(numero)) {
        numero = gerarNumeroAleatorio(de, ate);
      }

      sorteados.push(numero);
    }

    mensagem.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
  }
}



function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById("mensagem").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarStatusBotao();
}

function gerarNumeroAleatorio(de, ate) {
  return Math.floor(Math.random() * (ate - de + 1)) + de;
}
