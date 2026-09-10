"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    #cnpj;
    endereco;
    nomeFantasia;
    razaoSocial;
    clientes;
    telefones;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();
    }
    getCnpj() {
        return this.#cnpj;
    }
    getEndereco() {
        return this.endereco;
    }
    getNomeFantasia() {
        return this.nomeFantasia;
    }
    getRazaoSocial() {
        return this.razaoSocial;
    }
    getClientes() {
        return this.clientes;
    }
    getTelefones() {
        return this.telefones;
    }
    getNomeFantasiaCaixaAlta() {
        return this.nomeFantasia.toUpperCase();
    }
    getNomeFantasiaCaixaBaixa() {
        return this.nomeFantasia.toLowerCase();
    }
    getRazaoSocialCaixaAlta() {
        return this.razaoSocial.toUpperCase();
    }
    getRazaoSocialCaixaBaixa() {
        return this.razaoSocial.toLowerCase();
    }
    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }
    removerCliente(cliente) {
        this.clientes.delete(cliente);
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
    removerTelefone(telefone) {
        this.telefones.delete(telefone);
    }
    detalhe() {
        let descricao = "";
        descricao += "Razão Social: " + this.razaoSocial + "\n";
        descricao += "Nome fantasia: " + this.nomeFantasia + "\n\n";
        this.clientes.forEach(cliente => {
            descricao += "Nome: " + cliente.getNome() + "\n";
            descricao += "Estado: " + cliente.getEndereco().getEstado();
            descricao += " cidade: " + cliente.getEndereco().getCidade();
            descricao += " rua: " + cliente.getEndereco().getLogradouro();
            descricao += " numero: " + cliente.getEndereco().getNumero() + "\n";
            cliente.getTelefones().forEach(telefone => {
                descricao += "ddd: " + telefone.getDdd();
                descricao += " numero: " + telefone.getNumero() + "\n";
            });
            descricao += "\n";
        });
        return descricao;
    }
}
exports.Empresa = Empresa;
//# sourceMappingURL=empresa.js.map