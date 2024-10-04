// MAP -> Quando é executada retorna um array novo, sem modificar o original
// SEGUINDO A MESMA REGRA DO FOREACH

// O PRIMEIRO PARÂMETRO 'nome' MOSTRA O QUE TEM NA POSIÇÃO 
// O SEGUNDO PARÂMETRO 'index' MOSTRA A POSIÇÃO (SEMPRE COMEÇANDO EM 0)
// O TERCEIRO PARÂMETRO 'array' MOSTRA O ARRAY COMPLETO


let numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

let numerosDobrados = numeros.map(function(num) {
    return (num * 2) // Retornando um array com os números dobrados
})
console.log(numerosDobrados) // [4,  8, 12, 16, 20, 24, 28, 32, 36, 40]

// A PRINCIPAL DIFERENÇA ENTRE FOREACH E MAP É QUE O MAP RETORNA UM ARRAY NOVO E O FOREACH NÃO

let array = [4,4,4]

array.forEach(function(num) {
    console.log(num * 2)
}) /*
    8
    8
    8
    */