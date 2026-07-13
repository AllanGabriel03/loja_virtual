// IMPORTANDO O ARRAY DOS PRODUTOS
import { produtos } from "./produtos.js";

// PEGANDO ELEMENTO DO DOM
const section_cards = document.querySelector('#cards');

// FUNÇÃO PARA CARREGAR TODOS OS PRODUTOS (Carregamento Inicial)
const listarProdutos = () => {
    // Chama a função de montar cards passando o array completo
    montandoCards(produtos);
}

// FILTRANDO AS SEÇÕES COM A COLEÇÃO map
const listarSecoes = () => {
    const secoesFiltrada = new Map();

    produtos.forEach((elem) => {
        secoesFiltrada.set(elem.id_secao, elem);
    });

    const secoesMenu = Array.from(secoesFiltrada.values());
    return secoesMenu;
}

// MONTANDO OS LINKS DAS SEÇÕES NO NAV
const montarSecoes = () => {
    const ulMenu = document.querySelector('#menu-secoes');
    ulMenu.innerHTML = '';

    // --- 1. CRIANDO A CATEGORIA "TODOS" MANUALMENTE ---
    const liTodos = document.createElement('li');
    const aTodos = document.createElement('a');
    aTodos.setAttribute('href', '#');
    aTodos.setAttribute('class', 'lnk-secao');
    aTodos.innerHTML = 'Todos';

    // Se clicar em 'Todos', renderiza o array de produtos inteiro
    aTodos.addEventListener('click', () => {
        montandoCards(produtos); 
    });

    liTodos.appendChild(aTodos);
    ulMenu.appendChild(liTodos);
    // ---------------------------------------------------

    // --- 2. PERCORRENDO E MONTANDO AS SEÇÕES DINÂMICAS ---
    listarSecoes().forEach((elem) => {
        const liSecao = document.createElement('li');
        const aSecao = document.createElement('a');
        aSecao.setAttribute('href', '#');
        aSecao.setAttribute('class', 'lnk-secao');
        aSecao.innerHTML = elem.nome_secao;

        aSecao.addEventListener('click', () => {
            montandoCards(produtosFiltrados(elem.id_secao));
        });

        liSecao.appendChild(aSecao);
        ulMenu.appendChild(liSecao);
    });
}

// FILTRANDO PRODUTOS POR SEÇÃO
const produtosFiltrados = (idSecao) => {
    return produtos.filter(elem => elem.id_secao === idSecao);
}

const inputPesquisa = document.querySelector("#pesquisa")

inputPesquisa.addEventListener('input', (evt) =>{
    let txtInput = evt.target.values.toLowerCase()

    montandoCards(produtos.filter(elem => elem.descricao_produto.toLowerCase().includes(txtInput)))
})

// MONTANDO CARDS
const montandoCards = (objProdutos) => {
    section_cards.innerHTML = '';

    objProdutos.forEach((elem) => {
        const divCard = document.createElement('div');
        divCard.setAttribute('class', 'card');

        const imgProduto = document.createElement('img');
        imgProduto.setAttribute('src', elem.caminho_da_imagem);
        imgProduto.setAttribute('alt', elem.descricao_produto);
        imgProduto.setAttribute('class', 'img_card');

        const h2Titulo = document.createElement('h2');
        h2Titulo.innerHTML = elem.descricao_produto;

        const h3Valor = document.createElement('h3');
        h3Valor.setAttribute('class', 'valor_card');
        // Correção aqui: Adicionado o acento grave (crase) para o Template Literal funcionar
        h3Valor.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`;

        const btnCard = document.createElement('button');
        btnCard.setAttribute('class', 'btn_card');
        btnCard.innerHTML = 'Adicionar';

        divCard.appendChild(imgProduto);
        divCard.appendChild(h2Titulo);
        divCard.appendChild(h3Valor);
        divCard.appendChild(btnCard);

        section_cards.appendChild(divCard);
    });
}

// INICIANDO A APLICAÇÃO
listarProdutos(); // Renderiza todos os produtos ao abrir a página
montarSecoes();   // Monta o menu de navegação