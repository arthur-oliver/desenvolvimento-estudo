// BÁSICO JAVA SCRIPT

// console.log('O Paysandu vai subir este ano')

/*
let steveRogers = 'Capitão América'
var tonyStark = "Homem de Ferro"
console.log("Shuper-heróis da Marvel: "+steveRogers+" "+tonyStark)
*/

/*
var nome = "Príncipe T'Challa"
console.log("Meu nome é: "+nome)
nome = "Black Panther"
console.log("Meu nome é: "+nome)
*/

/*
nome = "Príncipe T'Challa"
console.log("Meu nome é: "+nome)
nome = "Black Panther"
console.log("Meu nome é: "+nome)
*/

/*
if(true){
    var hulk = 'Eric Bana' //var é global, funciona fora do bloco que foi declarada
    console.log(hulk)
}
console.log(hulk)
*/

//ERRO COM 'LET'!
/*
if(true){
    let hulk = 'Eric Bana' //let não é global, só funciona no bloco que foi declarada
    console.log(hulk)
}
console.log(hulk)
*/

/*
let objeto = { //let funciona normalmente, pois não está em um bloco como if, while, for...
    nome: 'Arnold'
}
console.log(objeto.nome)
*/

// IMPORTANTE CONCEITO DE OBJETO
/*
let idade = 80 //Number
let nome = "Steve Rogers"
let capitao = {nome: "Steve Rogers", idade: 80} //Object
console.log('Nome do personagem: '+capitao.nome+"idade: "+capitao['idade'])
*/










//FUNÇÕES

/* FUNÇÃO BÁSICA
function calcularPotencia(base, expoente){
    return base**expoente
}

let resultado = calcularPotencia(2,3)
console.log('resultado: '+resultado)
*/

/* FAZ A FUNÇÃO EM UMA LINHA
let calcularPotencia = new Function ("base,expoente","return base**expoente")

let resultado = calcularPotencia(2,3)
console.log('resultado: '+resultado)
*/

// NÃO NOMEIA FUNÇÃO (GUARDA DENTRO DA VARIÁVEL)
/*
let soma = function (valor1, valor2){
    return valor1 + valor2
}
console.log("Valo da soma: "+soma(3,5))
*/

// FUNÇÃO ANÔNIMA (RETIRA FUNCTION E COLOCA =>)
/*
let soma = (valor1, valor2) => {
    return valor1 + valor2
}
console.log("Valo da soma: "+soma(3,5))
*/












// CONCEITO DE REFERÊNCIA

/*
x = 10 ------> guarda o valor em binário na memória ex: 1010
y = x ------> acessa o valor quardado 

const empresa = {} ------> guarda o endereço na memória ex: #114545asd
const empresa2 = {} ------> acessa o endereço na memória ex: #114545asd chamado (pointer/ponteiro ou nessa linguagem: referência)
*/
/*
const empresa = new Object()
empresa.nome = "Banco Nacional"
empresa.cnpj = "123123123"

const empresa2 = empresa
empresa2['nome'] = 'Banco Internacional'
console.log(empresa.nome)
*/


// EXEMPO
/*
let valorPrimitivo = 10

function aumentaMaisDez(valor){
    valor = valor + 10
}
aumentaMaisDez(valorPrimitivo)
console.log('Este é o valor da variável: '+valorPrimitivo)
*/
/*
let valorReferencia = {valor: 10} //Qualquer variável que não é simples é um objeto

function aumentaMaisDez(referencia){
    referencia.valor = referencia.valor + 10
}
aumentaMaisDez(valorReferencia)
console.log('Este é o valor da variável: '+valorReferencia.valor)
*/







//FUNÇÃO CONSTRUTORA (função que cria um "modelo" de função ou seja, outra função)
/*
function Empresa(nome, razaoSocial){
    this.nome = nome
    this.razaoSocial = razaoSocial //this referência Empresa (para não precisar repetir, facilitar)
}
let empresa = new Empresa('Mercado Online','ABC LTDA')
console.log(empresa.nome+' - '+empresa.razaoSocial)
*/

//CLASSE CONSTRUTORA
/*
class Empresa{
    constructor(nome,razaoSocial)
    {
        this.nome = nome
        this.razaoSocial = razaoSocial
    }
}
let empresa = new Empresa("Mercado Online", "ABC LTDA")
console.log(empresa.nome+' - '+empresa.razaoSocial)
*/