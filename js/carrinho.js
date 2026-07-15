const itensCarrinho = JSON.parse(localStorage.getItem('itensSessão')) || []

const addItem = (objItem)=>{
    itensCarrinho.push(objItem)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}

const listItens = ()=>{
    const itensSelecionados = JSON.parse(localStorage.getItem('itensSessao'))

    return itensSelecionados
}

const removeItem = (pos) => {
    itensCarrinho.splice(pos, 1)
    
    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}



export{addItem, listItens, removeItem}