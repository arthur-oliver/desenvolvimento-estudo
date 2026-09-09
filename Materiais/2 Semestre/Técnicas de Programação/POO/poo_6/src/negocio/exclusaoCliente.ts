import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Cadastro from "./cadastro";

export default class ExclusaoCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício da exclusão do cliente`);

        let cpf = this.entrada.receberTexto(`Por favor informe o número do cpf do cliente: `)

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getCpf.getValor === cpf) {
                this.clientes.splice(i, 1)
                console.log(`\nCliente excluído com sucesso :)\n`);
                return
            }
        }

        console.log(`\nCliente não encontrado.\n`);
    }
}