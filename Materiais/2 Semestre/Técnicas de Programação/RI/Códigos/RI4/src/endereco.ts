export class Endereco {
    estado: string
    cidade: string
    logradouro: string
    numero: number

    constructor(estado: string, cidade: string, logradouro: string, numero: number) {
        this.estado = estado
        this.cidade = cidade
        this.logradouro = logradouro
        this.numero = numero
    }

    getEstado(): string {
        return this.estado
    }

    getCidade(): string {
        return this.cidade
    }

    getLogradouro(): string {
        return this.logradouro
    }

    getNumero(): number {
        return this.numero
    }

    getEstadoCaixaAlta(): string {
        return this.estado.toUpperCase()
    }

    getEstadoCaixaBaixa(): string {
        return this.estado.toLowerCase()
    }

    getCidadeCaixaAlta(): string {
        return this.cidade.toUpperCase()
    }

    getCidadeCaixaBaixa(): string {
        return this.cidade.toLowerCase()
    }

    getLogradouroCaixaAlta(): string {
        return this.logradouro.toUpperCase()
    }

    getLogradouroCaixaBaixa(): string {
        return this.logradouro.toLowerCase()
    }
}