"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefone = void 0;
class Telefone {
    ddd;
    numero;
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    getDdd() {
        return this.ddd;
    }
    getNumero() {
        return this.numero;
    }
}
exports.Telefone = Telefone;
//# sourceMappingURL=telefone.js.map