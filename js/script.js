async function carregarProdutos() {
    try {
        const response = await fetch("data/produtos.json");
        
        if (!response.ok) {
            throw new Error("Ocorreu um erro ao buscar os produtos.");
        }

        const produtos = await response.json();
        mostrarProdutos(produtos);

    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

function mostrarProdutos(produtos) {
    const tbody = document.getElementById("product-list");
    tbody.innerHTML = "";
    produtos.forEach(produto => {
        tbody.appendChild(criarLinhaProduto(produto));
    });
}

function criarLinhaProduto(produto) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${produto.descricao}</td>
        <td>
            <img src="${produto.foto}" class="img-thumbnail" width="80" alt="${produto.nome}">
        </td>
        <td>${produto.quantidade}</td>
        <td>${Number(produto.preco).toFixed(2)}</td>
        <td>
            <button class="btn btn-sm action-btn btn-outline-warning">
                <i class="material-icons">edit</i>
            </button>
        </td>
        <td>
            <button class="btn btn-sm action-btn btn-outline-danger">
                <i class="material-icons">delete</i>
            </button>
        </td>
    `;
    return tr;
}

document.addEventListener("DOMContentLoaded", carregarProdutos);