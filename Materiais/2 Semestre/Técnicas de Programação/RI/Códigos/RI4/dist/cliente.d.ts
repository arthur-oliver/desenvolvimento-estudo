import { Endereco } from "./endereco.js";
import { Telefone } from "./telefone.js";
export declare class Cliente {
    #private;
    nome: string;
    endereco: Endereco;
    telefones: Set<Telefone>;
    constructor(nome: string, cpf: number, endereco: Endereco);
    getCpf(): number;
    getNome(): string;
    getEndereco(): Endereco;
    getTelefones(): Set<Telefone>;
    getNomeCaixaAlta(): string;
    getNomeCaixaBaixa(): string;
    adicionarTelefone(telefone: Telefone): void;
    removerTelefone(telefone: Telefone): void;
}
//# sourceMappingURL=cliente.d.ts.map