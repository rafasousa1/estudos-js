let pessoa = {
    nome: "Rafael",
    idade: 17,
    dizerOla() { // Podemos escrever meio que funções no meio do objeto deste jeito
        console.log("Olá mundo!, meu nome é " + this.nome) // Referenciando nome de uma variável no objeto
    }
}

console.log(pessoa)
pessoa.dizerOla()