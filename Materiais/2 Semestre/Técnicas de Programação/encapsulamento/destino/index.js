"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
const medico_1 = __importDefault(require("./medico"));
const enfermeiro_1 = __importDefault(require("./enfermeiro"));
const informacoes = (pessoa) => {
    console.log(`Nome da pessoa: ${pessoa.getNome()}`);
    console.log(`CPF da pessoa: ${pessoa.getCpf()}`);
    if (pessoa instanceof medico_1.default) {
        console.log(`CRM do medico: ${pessoa.getCrm}`);
    }
    if (pessoa instanceof enfermeiro_1.default)
        console.log(`CRM do enfermeiro: ${pessoa.getCre}`);
};
let ps = new pessoa_1.default("Arthur", "536.456.789-00");
ps.setNome("Arthur Óliver");
console.log(`Nome da pessoa é: ${ps.getNome()}`);
console.log(`CPF da pessoa é: ${ps.getCpf()}`);
let md = new medico_1.default("Arthur", "123.456.789-00", "123456");
let en = new enfermeiro_1.default("Joana", "123.447.789-00", "654321");
console.log(informacoes(md));
console.log(informacoes(en));
//# sourceMappingURL=index.js.map