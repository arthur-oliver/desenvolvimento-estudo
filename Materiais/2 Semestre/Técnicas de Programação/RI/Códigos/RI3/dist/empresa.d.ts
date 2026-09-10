import Endereco from "./endereco";
import Telefone from "./telefone";
import Cliente from "./cliente";
export default class Empresa {
    private cnpj;
    razaoSocial: string;
    nomeFantasia: string;
    endereco: Endereco;
    telefones: Telefone[];
    clientes: Cliente[];
    constructor(cnpj: string, razaoSocial: string, nomeFantasia: string, endereco: Endereco);
    getCnpj(): string;
    adicionarTelefone(telefone: Telefone): void;
    adicionarCliente(cliente: Cliente): void;
    detalhe(): string;
}
//# sourceMappingURL=empresa.d.ts.map