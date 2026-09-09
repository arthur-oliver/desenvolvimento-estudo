//Conteúdo: classe interface
import Boleto from "./boleto"
import Cartao from "./cartao"

let boleto = new Boleto()
console.log(`Pagamento à vista boleto: ${boleto.fazerPagamento(1000)}`)

let cartao = new Cartao()
console.log(`Pagamento à vista cartao: ${cartao.fazerPagamento(1000)}`)
console.log(`Pagamento parcelado cartao: ${cartao.fazerPagamentoParcelado(1000, 12)}`)

//Para funcionar  - Terminal CMD:
// tsc
// node dist/index.js

//Se não funcionar:
//Apaga pasta 'dist' e arquivo 'tsconfig.json'
//Para funcionar  - Terminal CMD:
// tem que ter tsc instalado ----> npm install -g typescript (já tem nesse computador)
// tsc --init
// tsc
// node dist/index.js
