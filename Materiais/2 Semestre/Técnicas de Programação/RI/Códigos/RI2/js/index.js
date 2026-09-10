"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./cliente");
let telefone = new cliente_1.TelefoneCelular('11', '999999999');
let endereco = new cliente_1.Endereco('SP', 'São Paulo', 'Av Paulista', '987');
let cliente = new cliente_1.Cliente('Arthur', telefone, 'arthurteste@gmail.com', endereco);
console.log(cliente.getDescricao());
// outros clientes
let telefone2 = new cliente_1.TelefoneCelular('21', '988888888');
let endereco2 = new cliente_1.Endereco('RJ', 'Rio de Janeiro', 'Av Brasil', '100');
let cliente2 = new cliente_1.Cliente('Carlos', telefone2, 'carlos@gmail.com', endereco2);
let telefone3 = new cliente_1.TelefoneCelular('31', '977777777');
let endereco3 = new cliente_1.Endereco('MG', 'Belo Horizonte', 'Av Amazonas', '200');
let cliente3 = new cliente_1.Cliente('Bruno', telefone3, 'bruno@gmail.com', endereco3);
// lista de clientes
let clientes = [
    cliente,
    cliente2,
    cliente3
];
// ordenar clientes
let clientesOrdenados = (0, cliente_1.ordenarClientes)(clientes);
// imprimir relatorio dos clientes ordenados
console.log("CLIENTES ORDENADOS");
for (let cliente of clientesOrdenados) {
    console.log(cliente.getDescricao());
}
