const comidas = ["Arroz", "Feijão", "Batata", "Macarrão", "Cenoura", "Frango", "Berinjela", "Brócolis", "Carne"]

// ADICIONAR ELEMENTOS NO FINAL DO ARRAY ("push")
comidas.push("Banana")
//console.log(comidas)

// ADICIONANDO ELEMENTOS NO COMEÇO DO ARRAY ("unshift")
comidas.unshift("Laranja")
//console.log(comidas)

// REMOVER ELEMENTOS NO FINAL DO ARRAY ("pop")
const elementoFinal = comidas.pop()
//console.log(comidas)
//console.log(elementoFinal)

// REMOVER ELEMENTOS NO COMEÇO DO ARRAY ("shift")
const removerComeco = comidas.shift()
//console.log(comidas)
//console.log(removerComeco)

// Verificar se um elemento existe no array ("includes")
const verificar = comidas.includes("Arroz")
//console.log(verificar)

// Pesquisar pelo índice do elemento ("indexOf")
const indice = comidas.indexOf("Feijão")
//console.log(indice)

// Cortar de um indice inicial ate um final ("slice") 
const cortar = comidas.slice(0,4)
const outros = comidas.slice(-4)
//console.log(cortar)
//console.log(outros)

// Concatenar arrays ou seja juntar 2 arrays ("concat")
const concatenando = comidas.concat(outros, "Uva", 4)
//console.log(concatenando)

// Substituição de elementos ("splice")
const substitui = comidas.splice(0, 1, "Brócolis") // SUBSTITUI ARROZ PARA BROCOLIS
//console.log(comidas)
//console.log(substitui)