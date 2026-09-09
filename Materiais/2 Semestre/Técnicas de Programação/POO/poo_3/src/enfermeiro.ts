import Pessoa from "./pessoa"

export default class Enfermeiro extends Pessoa {
    private cre: string
    constructor(nome: string, cpf: string, cre: string) {
        super(nome, cpf)
        this.cre = cre
    }
    getCre(){return this.cre}
    setCre(cre: string){this.cre = cre}
}