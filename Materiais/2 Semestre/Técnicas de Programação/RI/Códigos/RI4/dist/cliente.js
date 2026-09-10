"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    #cpf;
    nome;
    endereco;
    telefones;
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }
    getCpf() {
        return this.#cpf;
    }
    getNome() {
        return this.nome;
    }
    getEndereco() {
        return this.endereco;
    }
    getTelefones() {
        return this.telefones;
    }
    getNomeCaixaAlta() {
        return this.nome.toUpperCase();
    }
    getNomeCaixaBaixa() {
        return this.nome.toLowerCase();
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
    removerTelefone(telefone) {
        this.telefones.delete(telefone);
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map