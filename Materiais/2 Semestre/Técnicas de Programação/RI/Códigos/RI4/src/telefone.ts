export class Telefone {
    ddd: number
    numero: number

    constructor(ddd: number, numero: number) {
        this.ddd = ddd
        this.numero = numero
    }

    getDdd(): number {
        return this.ddd
    }

    getNumero(): number {
        return this.numero
    }
}