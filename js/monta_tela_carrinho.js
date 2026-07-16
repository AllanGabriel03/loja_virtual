import { listItens, removeItem } from "./carrinho.js";

const montaTelaCarrinho = () => {
  const sectionItensCarrinho = document.querySelector("#itens-carrinho");

  console.log(sectionItensCarrinho);

  sectionItensCarrinho.innerHTML = "";

  listItens().forEach((elem, i) => {
    const sectionItem = document.createElement('section')
    sectionItem.setAttribute('class', 'item')
    sectionItem.innerHTML = `<img src='${elem.caminho_da_imagem}' alt=${elem.descricao_produto} class='img-item'/> 
    <p class='descricao'>${elem.descricao_produto}</p> 
    <p class='vlr-unitario'>${elem.valor_unitario}</p> 
    <input type="number" name='quant${i}' id='quant${i}' class="input-item" value=${elem.quantidade}> 
    <p class="tot-item">${elem.valor_unitario * 1}</p>`

    const imgRemover = document.createElement('img')
    imgRemover.setAttribute('src','../imagens/icones/x.png')
    imgRemover.setAttribute('alt', 'Remover')
    imgRemover.setAttribute('class', 'img-remover')

    imgRemover.addEventListener('click',()=>{
        if(confirm(`Deseja remover ${elem.descricao_produto} da sua lista? `)){
            removerItemCarrinho(i)
        }
        
    })
    
    sectionItem.appendChild(imgRemover)
    
    sectionItensCarrinho.appendChild(sectionItem)
});
}

const removerItemCarrinho = (pos) => {
removeItem(pos)

montaTelaCarrinho()
}

montaTelaCarrinho();
