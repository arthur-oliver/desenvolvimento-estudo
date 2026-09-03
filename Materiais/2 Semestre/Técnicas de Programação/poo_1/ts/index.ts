//Conteúdo: básico - classes e objetos
import Empresa from "./empresa"

let emp = new Empresa('Casas Bahia')

console.log(`Nome da empresa: ${emp.nome}`)

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