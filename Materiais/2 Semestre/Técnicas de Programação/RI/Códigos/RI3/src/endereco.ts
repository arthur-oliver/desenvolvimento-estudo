export default class Endereco {
    estado: string
    cidade: string
    rua: string
    numero: string

    constructor(estado: string, cidade: string, rua: string, numero: string) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    detalhe(): string {
        return `Estado: ${this.estado} cidade: ${this.cidade} rua: ${this.rua} numero: ${this.numero}`
    }
}