// É uma função dentro de outra função

function quadradoSoma(a,b) { // OBS: Essa função externa não tem acesso das variáveis da função interna
    function potencia(valor) { // Mas essa função interna tem acesso as variáveis da função externa
        return valor **2 // Criada a função que faz o quadrado de um número
    }
    return potencia(a) + potencia(b) // Chamando a função para os valores iniciais
}

console.log(`Resultado: ${quadradoSoma(2,2)}`) // Fazendo a soma da potência dos números