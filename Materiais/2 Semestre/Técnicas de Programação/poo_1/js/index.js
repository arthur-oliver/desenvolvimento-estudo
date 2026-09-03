"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_1 = __importDefault(require("./empresa"));
let emp = new empresa_1.default('Casas Bahia');
console.log(`Nome da empresa: ${emp.nome}`);
