"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
class Enfermeiro extends pessoa_1.default {
    cre;
    constructor(nome, cpf, cre) {
        super(nome, cpf);
        this.cre = cre;
    }
    getCre() { return this.cre; }
    setCre(cre) { this.cre = cre; }
}
exports.default = Enfermeiro;
//# sourceMappingURL=enfermeiro.js.map