export default class Telefone {
    ddd: string
    numero: string

    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }

    detalhe(): string {
        return `ddd: ${this.ddd} numero: ${this.numero}`
    }
}