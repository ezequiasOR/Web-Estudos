const anime = 'Naruto'

console.log(anime.charAt(4))        // retorna a letra do indice
console.log(anime.charAt(6))        // retorna um espaço vazio
console.log(anime.charCodeAt(3))    // retorna o valor que está armazenado no indice, mas em ASCII
console.log(anime.indexOf('N'))     // retorna o indece que o valor do parametro está

console.log(anime.substring(1))
console.log(anime.substring(1,3))

console.log('Anime: '.concat(anime).concat('!'))
console.log('Anime: ' + anime + '!')
console.log(anime.replace('a', 'A'))

console.log('Ana, Maria, Pedro'.split(', '))
