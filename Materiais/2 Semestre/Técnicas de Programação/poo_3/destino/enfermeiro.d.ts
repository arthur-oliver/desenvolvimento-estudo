import Pessoa from "./pessoa";
export default class Enfermeiro extends Pessoa {
    private cre;
    constructor(nome: string, cpf: string, cre: string);
    getCre(): string;
    setCre(cre: string): void;
}
