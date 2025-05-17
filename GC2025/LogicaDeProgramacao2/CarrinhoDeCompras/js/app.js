let totalGeral = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").innerHTML = "R$ 0";

function adicionar() {
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  let preco = quantidade * valorUnitario;
  let carinho = document.getElementById("lista-produtos");
  carinho.innerHTML =
    carinho.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$1400</span>
        </section>`;
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").innerHTML = "R$ 0";
}
