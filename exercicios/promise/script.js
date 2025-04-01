document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("alvo");
    const button = document.getElementById("buscador");
    const body = document.body;

    button.addEventListener("click", async function () {
        const query = input.value.trim();
        if (!query) return;
        
        const url = `https://api.github.com/search/users?q=${query}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            
            let resultSection = document.getElementById("resultados");
            if (!resultSection) {
                resultSection = document.createElement("div");
                resultSection.id = "resultados";
                body.appendChild(resultSection);
            }
            resultSection.innerHTML = "";
            
            if (data.items && data.items.length > 0) {
                const list = document.createElement("ul");
                data.items.forEach(user => {
                    const listItem = document.createElement("li");
                    listItem.innerHTML = `<a href="${user.html_url}" target="_blank">${user.login}</a>`;
                    list.appendChild(listItem);
                });
                resultSection.appendChild(list);
            } else {
                resultSection.innerHTML = "<p>Não foram encontrados usuários para esta pesquisa.</p>";
            }
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    });
});
