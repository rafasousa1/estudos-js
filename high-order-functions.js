// É uma função que recebe outra como parâmetro, ou que retornam uma função como resultado
// Onde será usado?
 
/* function dobrar(num) { // Por exemplo, tendo uma função que dobra o número
    return num * 2
}
*/

/* function triplicar(num) { // Mas se eu quero uma função que triplica eu teria q escrever DENOVO
    return num * 3
}
*/ 

// Então podemos criar uma função que retorna o que será multiplicado

const multiplicar = (multiplicar) => a => a * multiplicar // EM ARROW FUNCTION

function multiplicar(multiplicar) {
    return function (a) { // Ao invés de retornar um número, retorna uma FUNÇÃO ANÔNIMA e que essa função seria a DOBRAR de uma maneira flexível
        return a * multiplicar
    }
}

const dobrar = multiplicar(2) // A função multiplicar é uma HOF pois ao invés de retornar um número retorna uma função
const triplicar = multiplicar(3)

console.log(dobrar(2)) // 2 x 2 = 4 Executando o último return da função
console.log(triplicar(3)) // 3 x 3 = 9