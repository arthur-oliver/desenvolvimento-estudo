//Criando padrão para ser utilizado em outro módulo

const boasVindas = (mensagem) =>{
    return `Esta é a mensagem: ${mensagem}` //crase usa outra estrutura para concatenar (sem +)
}

exports.funcao = boasVindas