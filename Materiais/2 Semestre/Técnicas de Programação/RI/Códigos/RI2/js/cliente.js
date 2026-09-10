"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelefoneCelular = exports.Endereco = exports.Cliente = void 0;
exports.ordenarClientes = ordenarClientes;
// objeto cliente
class Cliente {
    constructor(nome, telefone, email, endereco) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    }
    // get
    getNome() {
        return this.nome;
    }
    getTelefone() {
        return this.telefone;
    }
    getEmail() {
        return this.email;
    }
    getEndereco() {
        return this.endereco;
    }
    // set
    setNome(nome) {
        this.nome = nome;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    setEmail(email) {
        this.email = email;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    // maiusculo
    getNomeMaiusculo() {
        return this.nome.toUpperCase();
    }
    getEmailMaiusculo() {
        return this.email.toUpperCase();
    }
    getEnderecoMaiusculo() {
        return this.endereco.getDescricao().toUpperCase();
    }
    // minusculo
    getNomeMinusculo() {
        return this.nome.toLowerCase();
    }
    getEmailMinusculo() {
        return this.email.toLowerCase();
    }
    getEnderecoMinusculo() {
        return this.endereco.getDescricao().toLowerCase();
    }
    // descricao
    getDescricao() {
        return "----------------\n" +
            "Informações do Cliente:\n" +
            this.nome + "\n" +
            "----------------\n" +
            "Telefone:\n" +
            "DDD: " + this.telefone.getDdd() + "\n" +
            "Número: " + this.telefone.getNumero() + "\n" +
            "----------------\n" +
            "Endereço:\n" +
            "Rua: " + this.endereco.getRua() + "\n" +
            "Número: " + this.endereco.getNumero() + "\n" +
            "Cidade: " + this.endereco.getCidade() + "\n" +
            "Estado: " + this.endereco.getEstado() + "\n" +
            "----------------";
    }
}
exports.Cliente = Cliente;
// objeto endereco
class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    // get
    getEstado() {
        return this.estado;
    }
    getCidade() {
        return this.cidade;
    }
    getRua() {
        return this.rua;
    }
    getNumero() {
        return this.numero;
    }
    // set
    setEstado(estado) {
        this.estado = estado;
    }
    setCidade(cidade) {
        this.cidade = cidade;
    }
    setRua(rua) {
        this.rua = rua;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    // maiusculo
    getEstadoMaiusculo() {
        return this.estado.toUpperCase();
    }
    getCidadeMaiusculo() {
        return this.cidade.toUpperCase();
    }
    getRuaMaiusculo() {
        return this.rua.toUpperCase();
    }
    // minusculo
    getEstadoMinusculo() {
        return this.estado.toLowerCase();
    }
    getCidadeMinusculo() {
        return this.cidade.toLowerCase();
    }
    getRuaMinusculo() {
        return this.rua.toLowerCase();
    }
    // descricao
    getDescricao() {
        return "Rua: " + this.rua + "\n" +
            "Número: " + this.numero + "\n" +
            "Cidade: " + this.cidade + "\n" +
            "Estado: " + this.estado;
    }
}
exports.Endereco = Endereco;
// objeto telefone
class TelefoneCelular {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    // get
    getDdd() {
        return this.ddd;
    }
    getNumero() {
        return this.numero;
    }
    // set
    setDdd(ddd) {
        this.ddd = ddd;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    // descricao
    getDescricao() {
        return "DDD: " + this.ddd + "\n" +
            "Número: " + this.numero;
    }
}
exports.TelefoneCelular = TelefoneCelular;
// ordenar clientes
function ordenarClientes(clientes) {
    return [...clientes].sort((a, b) => {
        return a.getNome().localeCompare(b.getNome());
    });
}
