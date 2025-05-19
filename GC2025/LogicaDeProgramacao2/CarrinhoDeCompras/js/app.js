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
    //mudarTexto(preco, quantidade);
    //separarString("COMO VOCE, TA");
    separarNumeros("1,2,3,4,5,6,7,8,9,10");
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

function separarString(frase){
  let p1 = frase.split(',')[0];
  let p2 = frase.split(',')[1];

  teste.textContent = `Frase: ${frase} Parte 1: ${p1} Parte 2: ${p2}`;
}

function separarNumeros(frase){
  let numero = frase.split(',');
  console.log("Numeros separados: ");
  numero.forEach(num => {
    console.log(num.trim());
  });

}