"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_1 = __importDefault(require("./empresa"));
const cliente_1 = __importDefault(require("./cliente"));
const telefone_1 = __importDefault(require("./telefone"));
const endereco_1 = __importDefault(require("./endereco"));
// Empresa
let enderecoEmpresa = new endereco_1.default("SP", "São José dos Campos", "Av Andrômeda", "100");
let empresa = new empresa_1.default("12345678000199", "ABC LTDA", "Mercado Online", enderecoEmpresa);
empresa.adicionarTelefone(new telefone_1.default("11111111", "99999999"));
empresa.adicionarTelefone(new telefone_1.default("22222222", "88888888"));
// Cliente João
let enderecoJoao = new endereco_1.default("SP", "São José dos Campos", "Av Andrômeda", "987");
let joao = new cliente_1.default("11111111111", "João", enderecoJoao);
joao.adicionarTelefone(new telefone_1.default("99999999", "99999999"));
joao.adicionarTelefone(new telefone_1.default("99999999", "99999999"));
empresa.adicionarCliente(joao);
// Cliente Gabriel
let enderecoGabriel = new endereco_1.default("SP", "São José dos Campos", "Av Andrômeda", "412");
let gabriel = new cliente_1.default("22222222222", "Gabriel", enderecoGabriel);
gabriel.adicionarTelefone(new telefone_1.default("88888888", "88888888"));
gabriel.adicionarTelefone(new telefone_1.default("88888888", "88888888"));
empresa.adicionarCliente(gabriel);
// Cliente Barbara
let enderecoBarbara = new endereco_1.default("SP", "São José dos Campos", "Av São João", "789");
let barbara = new cliente_1.default("33333333333", "Barbara", enderecoBarbara);
barbara.adicionarTelefone(new telefone_1.default("77777777", "77777777"));
barbara.adicionarTelefone(new telefone_1.default("77777777", "77777777"));
empresa.adicionarCliente(barbara);
// Cliente Márcia
let enderecoMarcia = new endereco_1.default("SP", "São José dos Campos", "Av Andrômeda", "452");
let marcia = new cliente_1.default("44444444444", "Márcia", enderecoMarcia);
marcia.adicionarTelefone(new telefone_1.default("66666666", "66666666"));
marcia.adicionarTelefone(new telefone_1.default("66666666", "66666666"));
empresa.adicionarCliente(marcia);
// Cliente Pedro
let enderecoPedro = new endereco_1.default("SP", "São José dos Campos", "Rua das Flores", "321");
let pedro = new cliente_1.default("55555555555", "Pedro", enderecoPedro);
pedro.adicionarTelefone(new telefone_1.default("55555555", "55555555"));
pedro.adicionarTelefone(new telefone_1.default("55555555", "55555555"));
empresa.adicionarCliente(pedro);
// Exibir
console.log(empresa.detalhe());
//# sourceMappingURL=index.js.map