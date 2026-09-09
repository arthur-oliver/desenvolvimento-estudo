"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estrutura_1 = __importDefault(require("./estrutura"));
const comida_1 = __importDefault(require("./comida"));
let estrutura = new estrutura_1.default(); //any representa qualquer objeto e envia para 'T' em 'Estrutura' - exemplo: Comida
let cm = new comida_1.default();
cm.nome = `lasanha`;
cm.sabor = 9;
let cm1 = new comida_1.default();
cm1.nome = `parmegiana`;
cm1.sabor = 10;
estrutura.lista.push(cm);
estrutura.lista.push(cm1);
estrutura.lista.forEach(elemento => {
    console.log(`Nome: ${elemento.nome} nível: ${elemento.sabor}`);
});
//# sourceMappingURL=index.js.map