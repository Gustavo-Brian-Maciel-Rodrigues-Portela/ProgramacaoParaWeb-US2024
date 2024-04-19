let produtos = [];

function criarProduto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function adicionarProduto(p) {
    produtos.push(p);
}

function listarProdutos() {
    return produtos;
}

function removerProduto(id) {
    produtos = produtos.filter((p) => {
        let x = p.id != id;
        return x;
    });
}

function editarProduto(id, qtd) {
    produtos = produtos.find(p => p.id === id);
    if(produtos) {
        produtos.qtd = qtd;
    }
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
};