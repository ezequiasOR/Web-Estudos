function Pessoa (nome) {
   // atributo privado
   this.nome = nome

   this.getNome = function () {
      return this.nome
   }

   this.falar = function (){
      console.log(`Meu nome é ${this.nome}`)
   }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.getNome())