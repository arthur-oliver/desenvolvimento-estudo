export default class Empresa{
    private razaoSocial!: string
    private cnpj!: string
    private nomeFantasia!: string

    //// Sobrecarga de construtor: permite diferentes estruturas de criação do objeto.
    constructor(razaoSocial: string, cnpj: string, nomeFantasia: string)
    constructor(razaoSocial: string, cnpj: string)
    constructor()
    constructor(razaoSocial?: string, cnpj?: string, nomeFantasia?: string){
        if (razaoSocial !== undefined && cnpj !== undefined && nomeFantasia !== undefined){
            this.razaoSocial = razaoSocial
            this.cnpj = cnpj
            this.nomeFantasia = nomeFantasia
        }
        if (razaoSocial !== undefined && cnpj !== undefined && nomeFantasia === undefined){
            this.razaoSocial = razaoSocial
            this.cnpj = cnpj
        }
    }
}