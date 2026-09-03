import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Cadastro from "./cadastro";

export default class ModificacaoCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício da modificação do cliente`);

        let cpf = this.entrada.receberTexto(`Por favor informe o número do cpf do cliente: `)

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getCpf.getValor === cpf) {
                let nome = this.entrada.receberTexto(`Por favor informe o novo nome do cliente: `)
                let nomeSocial = this.entrada.receberTexto(`Por favor informe o novo nome social do cliente: `)

                this.clientes[i].nome = nome
                this.clientes[i].nomeSocial = nomeSocial

                console.log(`\nCliente modificado com sucesso :)\n`);
                return
            }
        }

        console.log(`\nCliente não encontrado.\n`);
    }
}