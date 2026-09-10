import Endereco from "./endereco";
import Telefone from "./telefone";
export default class Cliente {
    private cpf;
    nome: string;
    endereco: Endereco;
    telefones: Telefone[];
    constructor(cpf: string, nome: string, endereco: Endereco);
    getCpf(): string;
    adicionarTelefone(telefone: Telefone): void;
    removerTelefone(telefone: Telefone): void;
    detalhe(): string;
}
//# sourceMappingURL=cliente.d.ts.map