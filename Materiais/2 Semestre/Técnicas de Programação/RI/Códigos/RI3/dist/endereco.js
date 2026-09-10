"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Endereco {
    estado;
    cidade;
    rua;
    numero;
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    detalhe() {
        return `Estado: ${this.estado} cidade: ${this.cidade} rua: ${this.rua} numero: ${this.numero}`;
    }
}
exports.default = Endereco;
//# sourceMappingURL=endereco.js.map