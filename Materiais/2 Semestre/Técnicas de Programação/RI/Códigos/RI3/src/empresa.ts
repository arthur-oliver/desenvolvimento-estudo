import Endereco from "./endereco"
import Telefone from "./telefone"
import Cliente from "./cliente"

export default class Empresa {
    private cnpj: string
    razaoSocial: string
    nomeFantasia: string
    endereco: Endereco
    telefones: Telefone[]
    clientes: Cliente[]

    constructor(cnpj: string, razaoSocial: string, nomeFantasia: string, endereco: Endereco) {
        this.cnpj = cnpj
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.endereco = endereco
        this.telefones = []
        this.clientes = []
    }

    getCnpj(): string {
        return this.cnpj
    }

    adicionarTelefone(telefone: Telefone): void {
        this.telefones.push(telefone)
    }

    adicionarCliente(cliente: Cliente): void {
        this.clientes.push(cliente)
    }

    detalhe(): string {
        let texto = ""

        texto += `Razão Social: ${this.razaoSocial}\n`
        texto += `Nome fantasia: ${this.nomeFantasia}\n`
        texto += `----------------\n`

        for (let i = 0; i < this.clientes.length; i++) {
            texto += `\n${this.clientes[i].detalhe()}`
        }

        return texto
    }
}