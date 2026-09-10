import { Endereco } from "./endereco.js"
import { Telefone } from "./telefone.js"

export class Cliente {
    #cpf: number
    nome: string
    endereco: Endereco
    telefones: Set<Telefone>

    constructor(nome: string, cpf: number, endereco: Endereco) {
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = new Set<Telefone>()
    }

    getCpf(): number {
        return this.#cpf
    }

    getNome(): string {
        return this.nome
    }

    getEndereco(): Endereco {
        return this.endereco
    }

    getTelefones(): Set<Telefone> {
        return this.telefones
    }

    getNomeCaixaAlta(): string {
        return this.nome.toUpperCase()
    }

    getNomeCaixaBaixa(): string {
        return this.nome.toLowerCase()
    }

    adicionarTelefone(telefone: Telefone): void {
        this.telefones.add(telefone)
    }

    removerTelefone(telefone: Telefone): void {
        this.telefones.delete(telefone)
    }
}