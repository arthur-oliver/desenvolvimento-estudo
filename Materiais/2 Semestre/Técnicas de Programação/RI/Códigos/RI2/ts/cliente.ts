// objeto cliente
export class Cliente {
    private nome: string
    private telefone: TelefoneCelular
    private email: string
    private endereco: Endereco

    constructor(nome: string, telefone: TelefoneCelular, email: string, endereco: Endereco) {
        this.nome = nome
        this.telefone = telefone
        this.email = email
        this.endereco = endereco
    }

    // get
    public getNome(): string {
        return this.nome
    }

    public getTelefone(): TelefoneCelular {
        return this.telefone
    }

    public getEmail(): string {
        return this.email
    }

    public getEndereco(): Endereco {
        return this.endereco
    }

    // set
    public setNome(nome: string) {
        this.nome = nome
    }

    public setTelefone(telefone: TelefoneCelular) {
        this.telefone = telefone
    }

    public setEmail(email: string) {
        this.email = email
    }

    public setEndereco(endereco: Endereco) {
        this.endereco = endereco
    }

    // maiusculo
    public getNomeMaiusculo(): string {
        return this.nome.toUpperCase()
    }

    public getEmailMaiusculo(): string {
        return this.email.toUpperCase()
    }

    public getEnderecoMaiusculo(): string {
        return this.endereco.getDescricao().toUpperCase()
    }

    // minusculo
    public getNomeMinusculo(): string {
        return this.nome.toLowerCase()
    }

    public getEmailMinusculo(): string {
        return this.email.toLowerCase()
    }

    public getEnderecoMinusculo(): string {
        return this.endereco.getDescricao().toLowerCase()
    }

    // descricao
    public getDescricao(): string {
        return "----------------\n" +
               "Informações do Cliente:\n" +
               this.nome + "\n" +
               "----------------\n" +
               "Telefone:\n" +
               "DDD: " + this.telefone.getDdd() + "\n" +
               "Número: " + this.telefone.getNumero() + "\n" +
               "----------------\n" +
               "Endereço:\n" +
               "Rua: " + this.endereco.getRua() + "\n" +
               "Número: " + this.endereco.getNumero() + "\n" +
               "Cidade: " + this.endereco.getCidade() + "\n" +
               "Estado: " + this.endereco.getEstado() + "\n" +
               "----------------"
    }
}


// objeto endereco
export class Endereco {
    private estado: string
    private cidade: string
    private rua: string
    private numero: string

    constructor(estado: string, cidade: string, rua: string, numero: string) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    // get
    public getEstado(): string {
        return this.estado
    }

    public getCidade(): string {
        return this.cidade
    }

    public getRua(): string {
        return this.rua
    }

    public getNumero(): string {
        return this.numero
    }

    // set
    public setEstado(estado: string) {
        this.estado = estado
    }

    public setCidade(cidade: string) {
        this.cidade = cidade
    }

    public setRua(rua: string) {
        this.rua = rua
    }

    public setNumero(numero: string) {
        this.numero = numero
    }

    // maiusculo
    public getEstadoMaiusculo(): string {
        return this.estado.toUpperCase()
    }

    public getCidadeMaiusculo(): string {
        return this.cidade.toUpperCase()
    }

    public getRuaMaiusculo(): string {
        return this.rua.toUpperCase()
    }

    // minusculo
    public getEstadoMinusculo(): string {
        return this.estado.toLowerCase()
    }

    public getCidadeMinusculo(): string {
        return this.cidade.toLowerCase()
    }

    public getRuaMinusculo(): string {
        return this.rua.toLowerCase()
    }

    // descricao
    public getDescricao(): string {
        return "Rua: " + this.rua + "\n" +
               "Número: " + this.numero + "\n" +
               "Cidade: " + this.cidade + "\n" +
               "Estado: " + this.estado
    }
}


// objeto telefone
export class TelefoneCelular {
    private ddd: string
    private numero: string

    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }

    // get
    public getDdd(): string {
        return this.ddd
    }

    public getNumero(): string {
        return this.numero
    }

    // set
    public setDdd(ddd: string) {
        this.ddd = ddd
    }

    public setNumero(numero: string) {
        this.numero = numero
    }

    // descricao
    public getDescricao(): string {
        return "DDD: " + this.ddd + "\n" +
               "Número: " + this.numero
    }
}


// ordenar clientes
export function ordenarClientes(clientes: Cliente[]): Cliente[] {
    return [...clientes].sort((a, b) => {
        return a.getNome().localeCompare(b.getNome())
    })
}