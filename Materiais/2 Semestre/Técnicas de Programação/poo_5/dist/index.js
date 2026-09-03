"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boleto_1 = __importDefault(require("./boleto"));
const cartao_1 = __importDefault(require("./cartao"));
let boleto = new boleto_1.default();
console.log(`Pagamento à vista boleto: ${boleto.fazerPagamento(1000)}`);
let cartao = new cartao_1.default();
console.log(`Pagamento à vista cartao: ${cartao.fazerPagamento(1000)}`);
console.log(`Pagamento parcelado cartao: ${cartao.fazerPagamentoParcelado(1000, 12)}`);
//# sourceMappingURL=index.js.map