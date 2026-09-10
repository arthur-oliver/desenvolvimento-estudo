import { Cliente } from "./cliente.js"
import { Empresa } from "./empresa.js"
import { Endereco } from "./endereco.js"
import { Telefone } from "./telefone.js"

let enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Av Andrômeda", 100)

let empresa = new Empresa("ABC LTDA", "Mercado Online", 12345678000199, enderecoEmpresa)

empresa.adicionarTelefone(new Telefone(11, 99999999))
empresa.adicionarTelefone(new Telefone(12, 88888888))

let enderecoCliente1 = new Endereco("SP", "São José dos Campos", "Av Andrômeda", 987)
let cliente1 = new Cliente("João", 11111111111, enderecoCliente1)

cliente1.adicionarTelefone(new Telefone(11, 99999999))
cliente1.adicionarTelefone(new Telefone(11, 98888888))

empresa.adicionarCliente(cliente1)

let enderecoCliente2 = new Endereco("SP", "São José dos Campos", "Av Andrômeda", 412)
let cliente2 = new Cliente("Gabriel", 22222222222, enderecoCliente2)

cliente2.adicionarTelefone(new Telefone(12, 88888888))
cliente2.adicionarTelefone(new Telefone(12, 87777777))

empresa.adicionarCliente(cliente2)

let enderecoCliente3 = new Endereco("SP", "São José dos Campos", "Av São João", 789)
let cliente3 = new Cliente("Barbara", 33333333333, enderecoCliente3)

cliente3.adicionarTelefone(new Telefone(13, 77777777))
cliente3.adicionarTelefone(new Telefone(13, 76666666))

empresa.adicionarCliente(cliente3)

let enderecoCliente4 = new Endereco("SP", "São José dos Campos", "Av Andrômeda", 452)
let cliente4 = new Cliente("Márcia", 44444444444, enderecoCliente4)

cliente4.adicionarTelefone(new Telefone(14, 66666666))
cliente4.adicionarTelefone(new Telefone(14, 65555555))

empresa.adicionarCliente(cliente4)

let enderecoCliente5 = new Endereco("SP", "São José dos Campos", "Rua das Flores", 321)
let cliente5 = new Cliente("Pedro", 55555555555, enderecoCliente5)

cliente5.adicionarTelefone(new Telefone(15, 55555555))
cliente5.adicionarTelefone(new Telefone(15, 54444444))

empresa.adicionarCliente(cliente5)

console.log(empresa.detalhe())