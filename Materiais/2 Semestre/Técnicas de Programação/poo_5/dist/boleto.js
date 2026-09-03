"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pagamento_1 = __importDefault(require("./pagamento"));
class Boleto extends pagamento_1.default {
    fazerPagamento(valor) {
        return `Efetuando pagamento no valor: ${valor}`;
    }
}
exports.default = Boleto;
//# sourceMappingURL=boleto.js.map