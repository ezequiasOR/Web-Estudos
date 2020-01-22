const express = require('express')
const app = express()
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({ extended: true }))

app.post('/usuarios', (req, res) => {
   console.log(req.body)
   res.send('<h1>Parabéns. Usuário Inlcuido!</h1>')
})

app.post('/usuarios/:id', (req, res) => {
   console.log(req.params.id)
   console.log(req.body)
   res.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

app.listen(3003)
