import { Cliente } from "./cliente.js"
import { Endereco } from "./endereco.js"
import { Telefone } from "./telefone.js"

export class Empresa {
    #cnpj: number
    endereco: Endereco
    nomeFantasia: string
    razaoSocial: string
    clientes: Set<Cliente>
    telefones: Set<Telefone>

    constructor(razaoSocial: string, nomeFantasia: string, cnpj: number, endereco: Endereco) {
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set<Cliente>()
        this.telefones = new Set<Telefone>()
    }

    getCnpj(): number {
        return this.#cnpj
    }

    getEndereco(): Endereco {
        return this.endereco
    }

    getNomeFantasia(): string {
        return this.nomeFantasia
    }

    getRazaoSocial(): string {
        return this.razaoSocial
    }

    getClientes(): Set<Cliente> {
        return this.clientes
    }

    getTelefones(): Set<Telefone> {
        return this.telefones
    }

    getNomeFantasiaCaixaAlta(): string {
        return this.nomeFantasia.toUpperCase()
    }

    getNomeFantasiaCaixaBaixa(): string {
        return this.nomeFantasia.toLowerCase()
    }

    getRazaoSocialCaixaAlta(): string {
        return this.razaoSocial.toUpperCase()
    }

    getRazaoSocialCaixaBaixa(): string {
        return this.razaoSocial.toLowerCase()
    }

    adicionarCliente(cliente: Cliente): void {
        this.clientes.add(cliente)
    }

    removerCliente(cliente: Cliente): void {
        this.clientes.delete(cliente)
    }

    adicionarTelefone(telefone: Telefone): void {
        this.telefones.add(telefone)
    }

    removerTelefone(telefone: Telefone): void {
        this.telefones.delete(telefone)
    }

    detalhe(): string {
        let descricao = ""

        descricao += "Razão Social: " + this.razaoSocial + "\n"
        descricao += "Nome fantasia: " + this.nomeFantasia + "\n\n"

        this.clientes.forEach(cliente => {
            descricao += "Nome: " + cliente.getNome() + "\n"
            descricao += "Estado: " + cliente.getEndereco().getEstado()
            descricao += " cidade: " + cliente.getEndereco().getCidade()
            descricao += " rua: " + cliente.getEndereco().getLogradouro()
            descricao += " numero: " + cliente.getEndereco().getNumero() + "\n"

            cliente.getTelefones().forEach(telefone => {
                descricao += "ddd: " + telefone.getDdd()
                descricao += " numero: " + telefone.getNumero() + "\n"
            })

            descricao += "\n"
        })

        return descricao
    }
}