import Empresa from "./empresa"
import Cliente from "./cliente"
import Telefone from "./telefone"
import Endereco from "./endereco"

// Empresa

let enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Av Andrômeda", "100")

let empresa = new Empresa("12345678000199", "ABC LTDA", "Mercado Online", enderecoEmpresa)

empresa.adicionarTelefone(new Telefone("11111111", "99999999"))
empresa.adicionarTelefone(new Telefone("22222222", "88888888"))

// Cliente João

let enderecoJoao = new Endereco("SP", "São José dos Campos", "Av Andrômeda", "987")

let joao = new Cliente("11111111111", "João", enderecoJoao)

joao.adicionarTelefone(new Telefone("99999999", "99999999"))
joao.adicionarTelefone(new Telefone("99999999", "99999999"))

empresa.adicionarCliente(joao)

// Cliente Gabriel

let enderecoGabriel = new Endereco("SP", "São José dos Campos", "Av Andrômeda", "412")

let gabriel = new Cliente("22222222222", "Gabriel", enderecoGabriel)

gabriel.adicionarTelefone(new Telefone("88888888", "88888888"))
gabriel.adicionarTelefone(new Telefone("88888888", "88888888"))

empresa.adicionarCliente(gabriel)

// Cliente Barbara

let enderecoBarbara = new Endereco("SP", "São José dos Campos", "Av São João", "789")

let barbara = new Cliente("33333333333", "Barbara", enderecoBarbara)

barbara.adicionarTelefone(new Telefone("77777777", "77777777"))
barbara.adicionarTelefone(new Telefone("77777777", "77777777"))

empresa.adicionarCliente(barbara)

// Cliente Márcia

let enderecoMarcia = new Endereco("SP", "São José dos Campos", "Av Andrômeda", "452")

let marcia = new Cliente("44444444444", "Márcia", enderecoMarcia)

marcia.adicionarTelefone(new Telefone("66666666", "66666666"))
marcia.adicionarTelefone(new Telefone("66666666", "66666666"))

empresa.adicionarCliente(marcia)

// Cliente Pedro

let enderecoPedro = new Endereco("SP", "São José dos Campos", "Rua das Flores", "321")

let pedro = new Cliente("55555555555", "Pedro", enderecoPedro)

pedro.adicionarTelefone(new Telefone("55555555", "55555555"))
pedro.adicionarTelefone(new Telefone("55555555", "55555555"))

empresa.adicionarCliente(pedro)

// Exibir

console.log(empresa.detalhe())