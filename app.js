const nomes = [];

// Função para adicionar nome à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo'); // Corrigido para usar o ID correto do HTML
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    nomes.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Atualiza a lista visível na página
    input.value = ""; // Limpa o campo de texto
    input.focus(); // Foca novamente no campo de texto
}

// Função para atualizar a lista exibida
function atualizarLista() {
    const lista = document.getElementById('listaAmigos'); // Corrigido para usar o ID correto do HTML
    lista.innerHTML = ""; // Limpa a lista antes de recriá-la

    nomes.forEach((nome, index) => {
        const item = document.createElement('li');
        item.textContent = `${index + 1}. ${nome}`;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (nomes.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    // Sorteio aleatório
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = nomes[indiceSorteado];

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo Secreto: ${amigoSorteado}</li>`;
}
