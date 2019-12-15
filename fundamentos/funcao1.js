// Função sem retorno 

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)

// Função com retorno
function soma(a = 1, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())