let velocidade = 0

do{
    alert("Você está em " + velocidade + "km/h")
    velocidade -= 20
} while(velocidade > 0) 

alert("Velocidade: " + velocidade + "km\h")

let resposta = ''

do {
    resposta = prompt("Você é de maior? ")
} while(resposta != 'sim') // vai ficar perguntando ate ser sim