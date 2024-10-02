const arr = [
    "1",
    ["2", 50, true],
    [
        ["3","1","Olá"],
        ["3","2","Olá"],
    ],
    []
]

// Cada par de colchetes referencia um nível mais interno do array
console.log(arr[0])       // Saída: '1'
console.log(arr[1])       // Saída: [ '2', 50, true ]
console.log(arr[1][0])    // Saída: '2'
console.log(arr[1][1])    // Saída: 50
console.log(arr[2])       // Saída: [ [ '3',1','Olá' ], [ '3','2','Olá' ] ]
console.log(arr[2][1])    // Saída: [ '3', '1', Olá' ]
console.log(arr[2][1][1]) // Saída: '1'

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"], // 0
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"], // 1
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"], // 2
  ]

// console.table(matriz) // Exibe o valor em uma tabela
// matriz[0].push(["A"]) // Adicionando ítem na posição 0

// ITERAR SOBRE ARRAYS
for(let i = 0; i < matriz.length; i++) {
    // ITERAR SOBRE CADA ELEMENTO DA MATRIZ
    for(let j = 0; j < matriz[i].length; j++) {
        const elemento = matriz[i][j]
        console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
}