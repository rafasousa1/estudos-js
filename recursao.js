// FUNÇÕES RECURSIVAS
// Uma função que chama ela mesma e vai se executando
// Diferente dos loops as funções seguem o padrão de pilhas


function dividir(num) {
    console.log(num) // Printa na tela o número selecionado
    if (num %2 == 0) {
        dividir(num / 2) // Se for par vai chamar a função para dividir por 2 até que não tenha mais como
    } else {
        return num // Se não só retorna o número
    }
}

dividir(3)

// Sempre precisamos de uma forma da função parar de chamar ela mesma se não fica INFINITO

function fatorial(num) {
    if (num == 0) {
        return 1
    } else if (num == 1) {
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))