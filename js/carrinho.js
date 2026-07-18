const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

const fObjItem = (objProduto) => {
    const item = {
        id_produto: objProduto.id_produto, 
        descricao_produto: objProduto.descricao_produto,
        caminho_da_imagem: objProduto.caminho_da_imagem,
        valor_unitario: objProduto.valor_unitario,
        quantidade : 1
    }
    return item
}

const addItem = (objItem) => {
    const itemExistente = itensCarrinho.find(elem => elem.id_produto === objItem.id_produto)

    if (itemExistente) {
        itemExistente.quantidade += 1
    } else {
        itensCarrinho.push(fObjItem(objItem))
    }

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}

const atualizarQuantidade = (pos, novaQuantidade) => {
    const itens = listItens()
    itens[pos].quantidade = novaQuantidade
    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}
const listItens = ()=>{
    const itensSelecionados = JSON.parse(localStorage.getItem('itensSessao')) || []

    return itensSelecionados
}

const removeItem = (pos) => {
    itensCarrinho.splice(pos, 1)
    
    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}



export{addItem, listItens, removeItem, atualizarQuantidade}