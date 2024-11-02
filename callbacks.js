// Calbacks, são funções que recebem outras funções como argumento

function exibirNome(nome) {
    console.log(`Olá ${nome}, seu cadastro foi concluído!`) // Uma função de mensagem para ser usada como callback
}

function exibirCadastro(callback) {
    const nome = 'Rafa' // definindo o nome
    console.log('Processando seu cadastro...')
    setTimeout(() => { // Demorando 2 segundos para executar para simular um carregamento
        console.log('Seu cadastro foi processado com sucesso!')
        callback(nome) // Chamando a função 'exibirNome' como callback a variavel nome definida
    }, 2000)
}

exibirCadastro(exibirNome) // Passando como argumento