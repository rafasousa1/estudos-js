// MONTAR UM BLOCO DE CÓDIGO QUE VAI SER USADO MAIS VEZES DURANTE O PROGRAMA

function OlaMundo() {
    console.log("Olá, Mundo!")
}

OlaMundo() // Chamando a função depois de executar

////////////////////// PARÂMETROS //////////////////////

// Entrada da função, como se fosse a variável da função e que é executada quando chama a função

function soma(n1, n2) {
    console.log(n1 + n2)
}

soma(4,4)


function Ola(nome = "Rafa") { // Definindo um parâmetro padrão caso ele não seja mencionado OBS: SEMPRE NO FINAL
    console.log("Olá, " + nome + "!")
}

Ola("Rafael")
Ola() // Aqui executa o valor padrão "Olá, Rafa!"



function crirarUser(nome, email, senha) {
    const usuario = {
        nome,
        email, // Passando os objetos assim o JS entende que é igual a 'email: email'
        senha
    }

    console.log(usuario)
}

crirarUser("Rafael", "rafa@gmail.com", 1234) // A ordem dos parâmetros influencia na execução da função

////////////////////// RETURN ////////////////////// 

// A saída que a função devolve no final, e sempre quando é chamada a função acaba

function calcularMedia(a, b, c) {
   const media = (a + b + c) / 3
   return media // Quando o valor é retornado, ele pode ser armazenado em uma função e pode se trabalhar com valores fora da função
}

console.log(calcularMedia(10,10,10))

function criarProduto(nome, preco) {
    const produto = {
        nome, // nome: nome
        preco
    }

    return produto
}

console.log(criarProduto("Teclado", 120)) // Só da pra fazer assim com o return

function calcularArea(base, altura) {
    return base * altura // O return pode ser usado para passar direto sem precisar criar variável
}

console.log(calcularArea(5,2))

function maiordeIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maiordeIdade(13))