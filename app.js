const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);

        const lista = document.getElementById("listaAmigos");
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    }

    input.value = "";
    input.focus();
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length < 1) {
        alert("Adicione pelo menos um nome para fazer o sorteio.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    const li = document.createElement("li");
    li.textContent = `O amigo sorteado é: ${sorteado}`;
    resultado.appendChild(li);
}
