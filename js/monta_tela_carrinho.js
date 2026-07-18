import { listItens, removeItem, atualizarQuantidade } from "./carrinho.js";

const montaTelaCarrinho = () => {
  const sectionItensCarrinho = document.querySelector('#itens-carrinho');


  sectionItensCarrinho.innerHTML = '';

  let valorTotalCarrinho = 0
  listItens().forEach((elem, i) => {
    const totalItem = elem.valor_unitario * elem.quantidade;
    valorTotalCarrinho += totalItem;

    const sectionItem = document.createElement('section')
    sectionItem.setAttribute('class', 'item')
    sectionItem.innerHTML = `<img src='${elem.caminho_da_imagem}' alt=${elem.descricao_produto} class='img-item'/> 
    <p class='descricao'>${elem.descricao_produto}</p> 
    <p class='vlr-unitario'>${elem.valor_unitario}</p> 
    <input type="number" name='quant${i}' id='quant${i}' class="input-item" value=${elem.quantidade}> 
    <p class="tot-item">${elem.valor_unitario * 1}</p>`

    const inputQuantidade = sectionItem.querySelector(`#quant${i}`)
    inputQuantidade.addEventListener('change', (evt) => {
        let novaQuantidade = parseInt(evt.target.value)

        if (!novaQuantidade || novaQuantidade < 1) {
            novaQuantidade = 1
            evt.target.value = 1
        }

        atualizarQuantidade(i, novaQuantidade)
        montaTelaCarrinho() // remonta a tela com os valores atualizados
    })

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

montaTelaCarrinho()
