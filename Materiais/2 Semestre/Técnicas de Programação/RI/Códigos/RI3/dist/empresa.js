"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    cnpj;
    razaoSocial;
    nomeFantasia;
    endereco;
    telefones;
    clientes;
    constructor(cnpj, razaoSocial, nomeFantasia, endereco) {
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.endereco = endereco;
        this.telefones = [];
        this.clientes = [];
    }
    getCnpj() {
        return this.cnpj;
    }
    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }
    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }
    detalhe() {
        let texto = "";
        texto += `Razão Social: ${this.razaoSocial}\n`;
        texto += `Nome fantasia: ${this.nomeFantasia}\n`;
        texto += `----------------\n`;
        for (let i = 0; i < this.clientes.length; i++) {
            texto += `\n${this.clientes[i].detalhe()}`;
        }
        return texto;
    }
}
exports.default = Empresa;
//# sourceMappingURL=empresa.js.map