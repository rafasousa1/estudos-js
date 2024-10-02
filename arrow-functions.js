// São um jeito mais novo e mais elegante de se escrever uma função
// É especialmente usada para funções ANÔNIMAS e CURTAS 
// Não utiliza 'function' no começa e se utiliza '=>' depois dos parâmetros
// Elas não são criadas soltas, precisamos salvar elas em uma VARIÁVEL ou passar como parâmetro para outra função

const soma = (a,b) => a + b // Se for apenas uma função de uma única linha fazendo assim é melhor
console.log(`Soma = ${soma(5,5)}`) // 10 

const dobro = num => num * 2 // Quando se tem apenas UM parãmetro não precisa nem colocar chaves
console.log(`Dobro = ${dobro(6)}`)

const ola = () => console.log("Olá Mundo!") // Quando não tiver nenhum parãmetro deixar os parâmetros vazios
ola()

const multiplica = (a,b) => { // Exemplo arrow function em um bloco de código
    let resultado = a * b
    return resultado
}

console.log(multiplica(5,5))