import { Cliente } from "./cliente.js";
import { Endereco } from "./endereco.js";
import { Telefone } from "./telefone.js";
export declare class Empresa {
    #private;
    endereco: Endereco;
    nomeFantasia: string;
    razaoSocial: string;
    clientes: Set<Cliente>;
    telefones: Set<Telefone>;
    constructor(razaoSocial: string, nomeFantasia: string, cnpj: number, endereco: Endereco);
    getCnpj(): number;
    getEndereco(): Endereco;
    getNomeFantasia(): string;
    getRazaoSocial(): string;
    getClientes(): Set<Cliente>;
    getTelefones(): Set<Telefone>;
    getNomeFantasiaCaixaAlta(): string;
    getNomeFantasiaCaixaBaixa(): string;
    getRazaoSocialCaixaAlta(): string;
    getRazaoSocialCaixaBaixa(): string;
    adicionarCliente(cliente: Cliente): void;
    removerCliente(cliente: Cliente): void;
    adicionarTelefone(telefone: Telefone): void;
    removerTelefone(telefone: Telefone): void;
    detalhe(): string;
}
//# sourceMappingURL=empresa.d.ts.map