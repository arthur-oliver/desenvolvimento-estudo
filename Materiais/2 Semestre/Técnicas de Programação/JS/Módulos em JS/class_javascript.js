//Class - Semelhante a função de um Objeto/Função (ideal para criar uma estrutura)
class Empresa {
    constructor(razaoSocial, nomeFantasia, cnpj){
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.cnpj = cnpj
    }
}
let empresa = new Empresa('ABC', 'Mercado  Online', '9999999999999')
empresa.cnpj = '88888888888'
console.log('Qual o cnpj: ' + empresa.cnpj)