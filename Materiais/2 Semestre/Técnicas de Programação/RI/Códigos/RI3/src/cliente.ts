import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private cpf: string
    nome: string
    endereco: Endereco
    telefones: Telefone[]

    constructor(cpf: string, nome: string, endereco: Endereco) {
        this.cpf = cpf
        this.nome = nome
        this.endereco = endereco
        this.telefones = []
    }

    getCpf(): string {
        return this.cpf
    }

    adicionarTelefone(telefone: Telefone): void {
        this.telefones.push(telefone)
    }

    removerTelefone(telefone: Telefone): void {
        let indice = this.telefones.indexOf(telefone)

        if (indice >= 0) {
            this.telefones.splice(indice, 1)
        }
    }

    detalhe(): string {
        let texto = ""

        texto += `Nome: ${this.nome}\n`
        texto += `${this.endereco.detalhe()}\n`

        for (let i = 0; i < this.telefones.length; i++) {
            texto += `${this.telefones[i].detalhe()}\n`
        }

        return texto
    }
}