"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Telefone {
    ddd;
    numero;
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    detalhe() {
        return `ddd: ${this.ddd} numero: ${this.numero}`;
    }
}
exports.default = Telefone;
//# sourceMappingURL=telefone.js.map