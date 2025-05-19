let totalGeral = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").innerHTML = "R$ 0";

function adicionar() {
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  if (verificaQuant(quantidade)) {
    
    let preco = quantidade * valorUnitario;
    let carinho = document.getElementById("lista-produtos");
    mudarTexto(preco, quantidade);
    carinho.innerHTML =
      carinho.innerHTML +
      `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$1400</span>
        </section>`;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById("quantidade").value = 0;
  } else {
    alert("Quantidade inválida !!!");
  }
}

function verificaQuant(quantidade) {
  if (quantidade <= 0) {
    return false;
  } else {
    return true;
  }
}

function limpar() {
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").innerHTML = "R$ 0";
}

// Hora da pratica 

function mudarTexto(preco,quantidade) {
  let teste = document.getElementById("teste");
  let final = preco * quantidade;
  teste.textContent = `Preço: ${preco} Quantidade: ${quantidade} Total: R$ ${final}`;
}

function separarString(){
  
}