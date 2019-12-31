const alunos = [
   { nome: 'João', nota: 7.3, bolsista: false },
   { nome: 'Maria', nota: 9.2, bolsista: true },
   { nome: 'Pedro', nota: 9.8, bolsista: false },
   { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas
const todosBolsistas = (acumulador, atual) => acumulador && atual
let resultado = alunos.map(a => a.bolsista).reduce(todosBolsistas)
console.log(`Todos os alunos são bolsistas: ${resultado}`)

// Desafio 2: Algum aluno é bolsista?
const algumBolsita = (acumulador, atual) => acumulador || atual
resultado = alunos.map(a => a.bolsista).reduce(algumBolsita)
console.log(`Algum aluno é bolsista: ${resultado}`)
