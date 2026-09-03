"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pagamento_1 = __importDefault(require("./pagamento"));
class Cartao extends pagamento_1.default {
    fazerPagamentoParcelado(valor, parcelas) {
        return `Efetuando pagamento parcelado no cartão no valor ${valor} em ${parcelas} parcelas`;
    }
    fazerPagamento(valor) {
        return `Efetuando pagamento no valor: ${valor}`;
    }
}
exports.default = Cartao;
//# sourceMappingURL=cartao.js.map