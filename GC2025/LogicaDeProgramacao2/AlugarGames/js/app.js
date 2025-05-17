function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(".dashboard__item__img");
  let botao = gameClicado.querySelector(".dashboard__item__button");

  if (imagem.classList.contains("dashboard__item__img--rented")) {
    if (confimarDevolucao()) {
      imagem.classList.remove("dashboard__item__img--rented");
      botao.classList.remove("dashboard__item__button--return");
      botao.textContent = "Alugar";
    }
  } else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.textContent = "Devolver";
    botao.classList.add("dashboard__item__button--return");
  }
}

function confimarDevolucao() {
  let text = prompt("Digite S para confimar ou N para cancelar");

  if (text.charAt(0) == "S") {
    return true;
  } else {
    return false;
  }
}
