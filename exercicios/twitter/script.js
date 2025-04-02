document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("post-form");
    const comentarioInput = document.getElementById("comentario");
    const feed = document.getElementById("feed");

    let posts = []; // Array para armazenar as postagens

    postForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const texto = comentarioInput.value.trim();
        if (texto === "") return;

        const imagemGato = await fetchCatImage(); // Pega imagem da API

        const novoPost = {
            data: new Date().toLocaleString(),
            nomeUsuario: "Usuário Exemplo",
            avatar: "https://i.pravatar.cc/50", // Avatar aleatório
            texto: texto,
            imagem: imagemGato,
            likes: 0
        };

        posts.unshift(novoPost); // Adiciona ao início do array
        comentarioInput.value = ""; // Limpa o campo
        renderFeed(); // Atualiza o feed
    });

    async function fetchCatImage() {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");
            const data = await response.json();
            return data[0].url;
        } catch (error) {
            console.error("Erro ao buscar imagem de gato:", error);
            return "https://via.placeholder.com/150"; // Imagem de fallback
        }
    }

    function renderFeed() {
        feed.innerHTML = ""; // Limpa o feed

        posts.forEach((post, index) => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");

            postElement.innerHTML = `
                <div class="post-header">
                    <img src="${post.avatar}" alt="Avatar" class="avatar">
                    <strong>${post.nomeUsuario}</strong>
                    <span class="post-date">${post.data}</span>
                </div>
                <p>${post.texto}</p>
                <img src="${post.imagem}" alt="Imagem de gato">
                <div class="like-button">
                    <button class="like-btn" data-index="${index}">❤️ ${post.likes}</button>
                </div>
            `;

            feed.appendChild(postElement);
        });

        // Adiciona evento de like aos botões
        document.querySelectorAll(".like-btn").forEach((btn) => {
            btn.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                posts[index].likes++;
                renderFeed(); // Atualiza o feed para refletir os likes
            });
        });
    }
});
