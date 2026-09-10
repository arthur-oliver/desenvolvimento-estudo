import {Cliente, Endereco, TelefoneCelular, ordenarClientes} from "./cliente"


let telefone = new TelefoneCelular('11', '999999999')

let endereco = new Endereco(
    'SP',
    'São Paulo',
    'Av Paulista',
    '987'
)

let cliente = new Cliente(
    'Arthur',
    telefone,
    'arthurteste@gmail.com',
    endereco
)

console.log(cliente.getDescricao())


// outros clientes
let telefone2 = new TelefoneCelular('21', '988888888')

let endereco2 = new Endereco(
    'RJ',
    'Rio de Janeiro',
    'Av Brasil',
    '100'
)

let cliente2 = new Cliente(
    'Carlos',
    telefone2,
    'carlos@gmail.com',
    endereco2
)


let telefone3 = new TelefoneCelular('31', '977777777')

let endereco3 = new Endereco(
    'MG',
    'Belo Horizonte',
    'Av Amazonas',
    '200'
)

let cliente3 = new Cliente(
    'Bruno',
    telefone3,
    'bruno@gmail.com',
    endereco3
)


// lista de clientes
let clientes: Cliente[] = [
    cliente,
    cliente2,
    cliente3
]


// ordenar clientes
let clientesOrdenados = ordenarClientes(clientes)


// imprimir relatorio dos clientes ordenados
console.log("CLIENTES ORDENADOS")

for (let cliente of clientesOrdenados) {
    console.log(cliente.getDescricao())
}