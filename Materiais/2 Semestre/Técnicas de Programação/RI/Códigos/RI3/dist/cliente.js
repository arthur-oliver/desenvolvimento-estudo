"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    cpf;
    nome;
    endereco;
    telefones;
    constructor(cpf, nome, endereco) {
        this.cpf = cpf;
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = [];
    }
    getCpf() {
        return this.cpf;
    }
    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }
    removerTelefone(telefone) {
        let indice = this.telefones.indexOf(telefone);
        if (indice >= 0) {
            this.telefones.splice(indice, 1);
        }
    }
    detalhe() {
        let texto = "";
        texto += `Nome: ${this.nome}\n`;
        texto += `${this.endereco.detalhe()}\n`;
        for (let i = 0; i < this.telefones.length; i++) {
            texto += `${this.telefones[i].detalhe()}\n`;
        }
        return texto;
    }
}
exports.default = Cliente;
//# sourceMappingURL=cliente.js.map