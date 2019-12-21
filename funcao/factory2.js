function criarProduto(nome, preco) {
   return {
      nome,                // nome == nome: nome
      preco,               // preco == preco: preco
      desconto: 0.1
   }
}

console.log(criarProduto('Notebook', 3499.90))
console.log(criarProduto('iPad', 1199.49))
