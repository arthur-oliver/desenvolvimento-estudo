export default abstract class Pessoa {
    protected nome: string;
    protected cpf: string;
    constructor(nome: string, cpf: string);
    setNome(nome: string): void;
    getNome(): string;
    getCpf(): string;
}
