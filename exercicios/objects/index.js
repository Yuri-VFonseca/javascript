/* 

Passos:

1 - Defina um array de objetos para armazenar os livros no estoque.

   * Cada livro deve ser representado por um objeto com propriedades titulo, autor e quantidade.

   

2 - Crie funções para gerenciar o estoque:

  * adicionarLivro(titulo, autor, quantidade) - Adiciona um novo livro ao estoque.

  * removerLivro(titulo) - Remove um livro do estoque pelo título.

  * atualizarQuantidade(titulo, novaQuantidade) - Atualiza a quantidade de um livro no estoque.

  * listarLivros() - Lista todos os livros no estoque.

  

3 - Use condicionais para verificar se um livro já existe antes de adicioná-lo ou removê-lo.

4 - Use laços de repetição para iterar sobre o array de livros quando necessário.

*/

let library = []
function addbook(title, author, quantity) { 
    const existingBook = library.find(book => book.title === title)
    if (existingBook) { 
        console.log(`The book ${title} already exists.`)
    } else { 
    const newbook = {title, author, quantity} 
    library.push(newbook)
    console.log(`Book ${title} added successfully!`)}

}

function removebook(title) {
    const bookIndex = library.findIndex(book => book.title === title)
    if (bookIndex !== -1) { 
        if (quantity >= 0) {
        library.splice(bookIndex, 1)
        console.log(`The book ${title} was removed.`)
    } else {
        console.log("Quantity cannot be negative")
    }
}
    else { 
        console.log(`The book ${title} does not exists in the library.`)
    }
}

function upbook(title, quantity) {
    const updatebook = library.findIndex(book => book.title === title)
    if (updatebook !== -1) { 
        library[updatebook].quantity = quantity
        console.log(`The quantity of the book "${title}" has been updated to ${quantity}`)
    } else { 
        console.log(`The book "${title}" does not exist in the library`)
    }
}

function listbooks() {
    console.log(library)
}

addbook("1984", "George Orwell", 5)
addbook("The Catcher in the Rye", "J.D. Salinger", 3)
addbook("To Kill a Mockingbird", "Harper Lee", 4)
addbook("The Great Gatsby", "F. Scott Fitzgerald", 2)
addbook("Moby Dick", "Herman Melville", 1)
listbooks()