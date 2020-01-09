// não aceita repeticao/ não indexada
const times = new Set()
times.add('Flamengo')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Vasco')
times.add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('flamengo'))
console.log(times.has('Flamengo'))
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
