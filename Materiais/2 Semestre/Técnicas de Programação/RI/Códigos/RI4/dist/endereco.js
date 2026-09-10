"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    estado;
    cidade;
    logradouro;
    numero;
    constructor(estado, cidade, logradouro, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.logradouro = logradouro;
        this.numero = numero;
    }
    getEstado() {
        return this.estado;
    }
    getCidade() {
        return this.cidade;
    }
    getLogradouro() {
        return this.logradouro;
    }
    getNumero() {
        return this.numero;
    }
    getEstadoCaixaAlta() {
        return this.estado.toUpperCase();
    }
    getEstadoCaixaBaixa() {
        return this.estado.toLowerCase();
    }
    getCidadeCaixaAlta() {
        return this.cidade.toUpperCase();
    }
    getCidadeCaixaBaixa() {
        return this.cidade.toLowerCase();
    }
    getLogradouroCaixaAlta() {
        return this.logradouro.toUpperCase();
    }
    getLogradouroCaixaBaixa() {
        return this.logradouro.toLowerCase();
    }
}
exports.Endereco = Endereco;
//# sourceMappingURL=endereco.js.map