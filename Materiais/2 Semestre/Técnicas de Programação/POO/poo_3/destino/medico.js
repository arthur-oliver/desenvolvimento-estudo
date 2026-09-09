"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
class Medico extends pessoa_1.default {
    crm;
    constructor(nome, cpf, crm) {
        super(nome, cpf); //super = herança do construtor
        this.crm = crm;
    }
    detalhes() {
        return `Nome: ${this.nome} - cpf: ${this.cpf} - crm: ${this.crm}`;
    }
    getCrm() { return this.crm; }
    setCrm(crm) { this.crm = crm; }
}
exports.default = Medico;
//# sourceMappingURL=medico.js.map