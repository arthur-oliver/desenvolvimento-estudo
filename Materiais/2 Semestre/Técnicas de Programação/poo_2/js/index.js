"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const endereco_1 = __importDefault(require("./endereco"));
let end0 = new endereco_1.default(`Av. Andromeda`);
let end1 = new endereco_1.default(`Av. Andromeda`);
let end2 = new endereco_1.default(`Av. Andromeda`);
end0.setRua(''); //utilizando set (modifica o nome da rua em 'nome rua')
console.log(end0.getRua()); //utilizando get (verificação)
