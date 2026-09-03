export default abstract class Pessoa { //abstract = não pode ser instanciada, só herdada (usada só como  modelo  para copiar atributos e métodos)
    protected nome : string
    protected cpf : string
    constructor(nome: string, cpf: string) {
        this.nome = nome
        this.cpf = cpf
    }
    setNome(nome: string){
        this.nome = nome
    }
    getNome(){
        return this.nome.toUpperCase() //encapsulamento para tratamento de dados(quando "pegar" deixa o nome maiúsculo)
    }
    getCpf(){
        return this.cpf
    }
}