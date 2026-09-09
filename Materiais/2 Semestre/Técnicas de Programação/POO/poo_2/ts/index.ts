//Conteúdo: modificadores de acesso e encapsulamento
import Endereco from "./endereco";

let end0 = new Endereco(`Av. Andromeda`)
let end1 = new Endereco(`Av. Andromeda`)
let end2 = new Endereco(`Av. Andromeda`)

end0.setRua('') //utilizando set (modifica o nome da rua em 'nome rua')

console.log(end0.getRua()) //utilizando get (verificação)

//Para funcionar  - Terminal CMD:
// tsc
// node js/index.js

//Se não funcionar:
//Apaga pasta 'js' e arquivo 'tsconfig.json'
//Para funcionar  - Terminal CMD:
// tem que ter tsc instalado ----> npm install -g typescript (já tem nesse computador)
// tsc --init
// tsc
// node js/index.js