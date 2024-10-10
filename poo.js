// CLASSES E FUNÇÕES

// Uma classe é uma estrutura que serve como um molde para criar objetos, definindo atributos (informações) e métodos (comportamento) que os objetos terão


class Produto {
    // Todos os atributos colocamos dentro do método 'CONSTRUCTOR' -> a função que é chamada quando executamos a classe
    constructor() { 
        this.marca = ''
        this.id = 0 // O 'this' é pra dizer que dentro dessa classe ira colocar informacoes sobre com o '.cor, .altura etc'
        this.valor = 0
    }
    // Fora irá executar funções quando o objeto for chamado
    adiconar() {
        console.log("Produto adicionado")
    }

    excluir() {
        console.log("Produto removido")
    }
}

// CHAMAR A FUNÇÃO E INSTANCIAR O OBJETO
const produto = new Produto()
produto.adiconar()
produto.excluir()