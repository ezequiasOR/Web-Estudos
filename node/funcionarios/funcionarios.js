const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = funcionario => funcionario.pais === 'China'
const mulheres = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionario, funcAtual) => {
   return funcAtual.salario < funcionario.salario ? funcAtual : funcionario
}

axios.get(url).then(response => {
   const funcionarios = response.data
   //console.log(funcionarios)
   
   // Mulher chinesa com menor salario
   const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
   console.log(func)
})
