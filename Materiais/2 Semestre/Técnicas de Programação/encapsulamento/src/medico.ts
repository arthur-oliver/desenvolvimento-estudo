import Pessoa from "./pessoa";

export default class Medico extends Pessoa { //externds = herança do objeto
    private crm : string
    constructor(nome: string, cpf: string, crm: string) {
        super(nome, cpf) //super = herança do construtor
        this.crm = crm
    }

    detalhes(){
        return `Nome: ${this.nome} - cpf: ${this.cpf} - crm: ${this.crm}`
    }

    getCrm(){return this.crm}
    setCrm(crm: string){this.crm = crm}
}