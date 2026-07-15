import { listItens, removeItem } from "./carrinho.js";

const montaTelaCarrinho = () => {
  const sectionItensCarrinho = document.querySelector("#itens-carrinho");

  sectionItensCarrinho.innerHTML = "";

  listItens().forEach((elem, i) => {
    const sectionItem = document.createElement("section");
    sectionItem.setAttribute("class", "item");
    sectionItem.innerHTML = `
    <img src='${elem.caminho_da_imagem}' alt=${elem.descricao_produto}class='img-item'/> 
        <p class='descricao'>${elem.descricao_produto}</p> 
        <p class='vlr-unitario'>${elem.valor_unitario}</p> 
        <input type="number" name='quant${i}' id='quant${i}' class="input-item" value=${1}> 
        <p class="tot-item">${elem.valor_unitario * 1}</p>`;

    const imgRemover = document.createElement("img");
    imgRemover.setAttribute("src", "../imagens/lixeira.png");
    imgRemover.setAttribute("alt", "Remover");
    imgRemover.setAttribute("class", "img-remover");

    imgRemover.addEventListener("click", () => {
      if(confirm("Tem certeza que deseja remover este item do carrinho?")) {
        removeItem(i);
      }
    });

    sectionItem.appendChild(imgRemover);

    sectionItensCarrinho.appendChild(sectionItem);
  });
};

const removerItem = (pos) => {
    removeItem(pos);

    montaTelaCarrinho();
}

montaTelaCarrinho();
