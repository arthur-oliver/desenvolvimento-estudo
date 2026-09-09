import Pessoa from "./pessoa";
export default class Medico extends Pessoa {
    private crm;
    constructor(nome: string, cpf: string, crm: string);
    detalhes(): string;
    getCrm(): string;
    setCrm(crm: string): void;
}
