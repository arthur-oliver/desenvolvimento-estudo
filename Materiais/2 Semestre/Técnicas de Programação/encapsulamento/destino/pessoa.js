"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    cpf;
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome.toUpperCase(); //encapsulamento para tratamento de dados(quando "pegar" deixa o nome maiúsculo)
    }
    getCpf() {
        return this.cpf;
    }
}
exports.default = Pessoa;
//# sourceMappingURL=pessoa.js.map