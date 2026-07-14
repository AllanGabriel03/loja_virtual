const itensCarrinho = JSON.parse(localStorage.getItem('itensSessão')) || []

const addItem = (objItem)=>{
    itensCarrinho.push(objItem)

    localStorage.setItem('itensSessao', itensCarrinho)
}

const listItens = ()=>{
    const itensSelecionados = JSON.stringify(localStorage.getItem('itensSessao'))

    return itensCarrinho
}

const montaTelaCarrinho = () => {
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section')
    sectionItem.setAttribute('class', 'item')
    sectionItem.innerHTML = `<img src='${elem.caminho_da_imagem}' alt=${elem.descricao_produto}/> <p class='descricao'>${elem.} </p> <p class='descricao'>`

    sectionItensCarrinho.appendChild(sectionItem)
    });
    
}

export{addItem}