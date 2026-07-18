const inputCep = document.querySelector('#cep')

inputCep.addEventListener('change', (evt)=>{
    const numCep = evt.target.value.replace(/\D/g, '')

    if (numCep.length !== 8){
        alert('CEP INVALIDO!!!')
        return
    }

    buscarDadosCep(numCep)
})

const buscarDadosCep = async (cep) => {
    try{
        const response = await fetch('https://viacep.com.br/ws/01001000/json/')

        const dadosEndereco = await response.json()

        exibeDados(dadosEndereco)
        console.log(dadosEndereco)
    }catch(erro){
        console.log('ERRO APRESENTADO: ', erro.message)
    }
}

const campos = {
    logradouro: document.querySelector('#logradouro'),
    bairro: document.querySelector('#bairro'),
    localidade: document.querySelector('#localidade'),
    uf: document.querySelector('#uf'),
}

const exibeDados = (objDados)=>{
    const divEndereco = document.querySelector('#div-dados-endereco')
    divEndereco.classList.remove('oculto')

    document.classList.remove('oculto')
    for(let chave in objDados){
        campos[chave].value = objDados[chave]
        campos[chave].disabled = objDados[chave]
    }
}