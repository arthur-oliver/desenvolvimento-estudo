"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medico_1 = __importDefault(require("./medico"));
const enfermeiro_1 = __importDefault(require("./enfermeiro"));
//HERANÇA: usar informações de "Pessoa" para reaproveitamento de códigos em "Medico/Enfermeiro".
//POLIMORFISMO: a capacidade de uma classe pai ("Pessoa") apontar para classes filhas e executar o método específico para cada ("Medico/Enfermeiro").
const informacoes = (pessoa) => {
    console.log(`Nome da pessoa: ${pessoa.getNome()}`);
    console.log(`CPF da pessoa: ${pessoa.getCpf()}`);
    if (pessoa instanceof medico_1.default) {
        console.log(`CRM do medico: ${pessoa.getCrm}`);
    }
    if (pessoa instanceof enfermeiro_1.default)
        console.log(`CRE do enfermeiro: ${pessoa.getCre}`);
};
let md = new medico_1.default("Arthur", "123.456.789-00", "123456");
let en = new enfermeiro_1.default("Joana", "123.447.789-00", "654321");
console.log(informacoes(md));
console.log(informacoes(en));
//PARA TESTAR: TERMINAL CMD
// TSC
//NODE ./DESTINO/INDEX.JS
//# sourceMappingURL=index.js.map